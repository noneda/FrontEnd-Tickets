import { useEffect, useMemo, useState, useCallback } from "react";
import { useDashboard } from "@/Pages/Dashboard/hook";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useAuthContext } from "@/Context";

export const useTicketsWebSocket = ({ group }) => {
  const { calendar, refSearch, typeTicket, state } = useDashboard();

  const [ticket, setTickets] = useState([]);
  const [allGroups, setAllGroups] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token, clearToken } = useAuthContext();

  const socketUrl = "ws://localhost:8000/ws/private/";
  const options = useMemo(
    () => ({
      shouldReconnect: (closeEvent) => {
        if (closeEvent.code === 403) {
          console.warn("WebSocket closed with 403. Not reconnecting.");
          return false;
        }
        console.log("WebSocket closed, attempting reconnect...");
        return true;
      },
      reconnectInterval: 3000,
      reconnectAttempts: 10,

      queryParams: {
        token: token,
      },
      onOpen: (event) => {
        console.log("WebSocket connection opened!");
        setError(null);
        setLoading(true);
      },
      onClose: (event) => {
        console.log("WebSocket connection closed.", event.code, event.reason);
        if (event.code === 403) {
          setError(
            "Autenticación fallida o token inválido. Por favor, inicie sesión de nuevo."
          );
          clearToken();
        } else {
          setError(
            `Conexión cerrada: ${event.code} - ${
              event.reason || "Unknown reason"
            }`
          );
        }
        setLoading(false);
      },
      onError: (event) => {
        console.error("WebSocket error:", event);
        setError("WebSocket error occurred. Check console for details.");
        setLoading(false);
      },
    }),
    [token, clearToken] // Dependencias: Si el
  );

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    token ? socketUrl : null,
    options
  );

  const connectionStatus = useMemo(() => {
    return {
      [ReadyState.CONNECTING]: "Conectando...",
      [ReadyState.OPEN]: "Conectado",
      [ReadyState.CLOSING]: "Cerrando...",
      [ReadyState.CLOSED]: "Desconectado",
      [ReadyState.UNINSTANTIATED]: "Inactivo",
    }[readyState];
  }, [readyState]);

  const requestTickets = useCallback(() => {
    if (readyState === ReadyState.OPEN) {
      setLoading(true);
      const message = {
        group: group,
        active: state,
        typeTicket: typeTicket,
        code: refSearch,
        date: calendar,
      };
      console.log("Sending request message:", message);
      sendMessage(JSON.stringify(message));
    } else {
      console.warn("WebSocket not open. Cannot send request.");
    }
  }, [group, state, typeTicket, refSearch, calendar, readyState, sendMessage]);

  useEffect(() => {
    if (lastMessage !== null) {
      setLoading(false);
      try {
        const data = JSON.parse(lastMessage.data);
        console.log("Received data:", data);

        if (data.error) {
          setError(data.error);
          setTickets([]);
          setAllGroups(0);
        } else {
          setTickets(data.tickets || []);
          setAllGroups(data.allGroups || 0);
          setError(null);
        }
      } catch (err) {
        console.error(
          "Failed to parse WebSocket message:",
          err,
          lastMessage.data
        );
        setError("Error processing data from server.");
      }
    }
  }, [lastMessage]);

  useEffect(() => {
    if (token && readyState === ReadyState.OPEN) {
      requestTickets();
    } else if (!token) {
      setTickets([]);
      setAllGroups(0);
      setError("No authentication token. Please log in to view tickets.");
    }
  }, [
    group,
    state,
    typeTicket,
    refSearch,
    calendar,
    token,
    readyState,
    requestTickets,
  ]);

  return { ticket, allGroups, error, loading, connectionStatus };
};
