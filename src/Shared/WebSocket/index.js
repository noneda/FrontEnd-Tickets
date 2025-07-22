import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import config from "@/Env";

export const ReadyState = {
  UNINSTANTIATED: -1,
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
};

const useWebSocket = (extension, options = {}) => {
  const baseUrl = `${config.WEBSOCKET}ws/${extension}`;

  const {
    onOpen,
    onMessage,
    onClose,
    onError,
    shouldReconnect = (event) => event.code !== 1000 && event.code !== 403,
    reconnectInterval = 3000,
    reconnectAttempts = 10,
    authToken = null,
  } = options;

  const fullUrl = useMemo(() => {
    if (!authToken) {
      console.warn(
        "No authentication token provided, WebSocket URL will not include token."
      );
      return null;
    }
    return `${baseUrl}?token=${authToken}`;
  }, [baseUrl, authToken]);

  const wsRef = useRef(null);
  const [readyState, setReadyState] = useState(ReadyState.UNINSTANTIATED);
  const [lastMessage, setLastMessage] = useState(null);
  const reconnectTimeoutRef = useRef(null);
  const connectionAttemptCount = useRef(0);

  const sendMessage = useCallback((message) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(message);
      console.log("Message sent:", message);
    } else {
      console.warn("WebSocket not open. Cannot send message.");
    }
  }, []);

  const connect = useCallback(() => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      console.log("WebSocket already open, skipping connection attempt.");
      return;
    }

    if (!authToken) {
      console.warn(
        "No authentication token provided. WebSocket connection aborted."
      );
      setReadyState(ReadyState.CLOSED);
      onError && onError(new Error("No authentication token provided."));
      return;
    }

    if (
      connectionAttemptCount.current >= reconnectAttempts &&
      reconnectAttempts !== -1
    ) {
      console.warn(`Max reconnect attempts (${reconnectAttempts}) reached.`);
      setReadyState(ReadyState.CLOSED);
      return;
    }

    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }

    setReadyState(ReadyState.CONNECTING);
    console.log(
      `Attempting WebSocket connection to ${fullUrl} (Attempt ${
        connectionAttemptCount.current + 1
      })...`
    );

    try {
      if (!fullUrl) {
        console.error("WebSocket URL is invalid. Aborting connection.");
        return;
      }

      const ws = new WebSocket(fullUrl);

      ws.onopen = (event) => {
        console.log("WebSocket connection opened!");
        setReadyState(ReadyState.OPEN);
        connectionAttemptCount.current = 0;
        onOpen && onOpen(event);
      };

      ws.onmessage = (event) => {
        setLastMessage(event);
        onMessage && onMessage(event);
      };

      ws.onclose = (event) => {
        console.log("WebSocket Disconnected:", event.code, event.reason);
        setReadyState(ReadyState.CLOSED);
        onClose && onClose(event);

        if (authToken && shouldReconnect(event)) {
          connectionAttemptCount.current += 1;
          const delay = Math.min(
            reconnectInterval * 2 ** (connectionAttemptCount.current - 1),
            30000
          );
          console.log(`Reconnecting in ${delay / 1000} seconds...`);
          reconnectTimeoutRef.current = setTimeout(connect, delay);
        } else if (!authToken && event.code !== 1000) {
          console.error(
            "WebSocket closed because no authentication token was available or it was invalid."
          );
        }
      };

      ws.onerror = (event) => {
        console.error("WebSocket Error:", event);
        onError && onError(event);
        ws.close(1006, "Error occurred, forcing close");
      };

      wsRef.current = ws;
    } catch (err) {
      console.error("Failed to create WebSocket instance:", err);
      setReadyState(ReadyState.CLOSED);
      onError && onError(err);
    }
  }, [
    fullUrl,
    onOpen,
    onMessage,
    onClose,
    onError,
    shouldReconnect,
    reconnectInterval,
    reconnectAttempts,
    authToken,
  ]);

  useEffect(() => {
    if (authToken) {
      connect();
    } else {
      console.warn(
        "No authentication token provided. WebSocket connection will not be established."
      );
      setReadyState(ReadyState.UNINSTANTIATED);
      if (wsRef.current) {
        wsRef.current.close(1000, "No token provided");
        wsRef.current = null;
      }
    }

    return () => {
      if (wsRef.current) {
        console.log(
          "Closing WebSocket due to component unmount or token change."
        );
        wsRef.current.close(1000, "Component unmounted");
        wsRef.current = null;
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }
    };
  }, [connect, authToken]);
  return { sendMessage, lastMessage, readyState };
};

export default useWebSocket;
