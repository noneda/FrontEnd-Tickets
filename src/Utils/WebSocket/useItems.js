import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { useDashboard } from "@/Pages/Dashboard/hook";
import useWebSocket, { ReadyState } from "@/Shared/WebSocket";
import { useAuthContext } from "@/Context";

export const useTicketsWebSocket = ({ group }) => {
  const { calendar, refSearch, typeTicket, state } = useDashboard();

  const [ticket, setTickets] = useState([]);
  const [allGroups, setAllGroups] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token, clearToken } = useAuthContext();

  const requestTicketsRef = useRef(null);

  const options = useMemo(
    () => ({
      authToken: token,
      onOpen: () => {
        console.log("WebSocket connection opened!");
        setError(null);
        setLoading(true);

        if (requestTicketsRef.current) {
          requestTicketsRef.current();
        }
      },
      onClose: (event) => {
        console.log("WebSocket connection closed.", event.code);
        if (event.code === 403) {
          setError(
            "Autenticación fallida o token inválido. Por favor, inicie sesión de nuevo."
          );
          clearToken();
        } else {
          setError(`Conexión cerrada: ${event.code}`);
        }
        setLoading(false);
      },
      onError: (event) => {
        console.error("WebSocket error:", event);
        if (event instanceof Error) {
          setError(`WebSocket error: ${event.message}`);
        } else {
          setError("WebSocket error occurred. Check console for details.");
        }
        setLoading(false);
      },
    }),
    [token, clearToken]
  );

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "private/",
    options
  );

  const requestTickets = useCallback(() => {
    if (readyState === ReadyState.OPEN && token) {
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
    } else if (!token) {
      setError("Autenticación requerida para cargar tickets.");
      setLoading(false);
    } else {
      console.warn("WebSocket not open. Cannot send request.");
      setError(
        "WebSocket is not open. Please wait for connection or ensure you are authenticated."
      );
    }
  }, [
    group,
    state,
    typeTicket,
    refSearch,
    calendar,
    readyState,
    sendMessage,
    token,
  ]);

  useEffect(() => {
    requestTicketsRef.current = requestTickets;
  }, [requestTicketsRef]);

  const connectionStatus = useMemo(() => {
    return {
      [ReadyState.CONNECTING]: "Conectando...",
      [ReadyState.OPEN]: "Conectado",
      [ReadyState.CLOSING]: "Cerrando...",
      [ReadyState.CLOSED]: "Desconectado",
      [ReadyState.UNINSTANTIATED]: "Inactivo",
    }[readyState];
  }, [readyState]);

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
      if (requestTicketsRef.current) {
        requestTicketsRef.current();
      }
    } else if (!token) {
      setTickets([]);
      setAllGroups(0);
      setError(
        "No hay token de autenticación. Inicie sesión para ver los tickets."
      );
    }
  }, [group, state, typeTicket, refSearch, calendar, requestTickets, token]);

  return { ticket, allGroups, error, loading, connectionStatus };
};
