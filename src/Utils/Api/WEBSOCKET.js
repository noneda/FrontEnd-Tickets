import { useEffect, useMemo } from "react";
import useWebSocket from "react-use-websocket";
import { useDashboard } from "@/Pages/Dashboard/hook";

const WS_URL = `ws://localhost:8000/ws/private/?token=${localStorage.getItem(
  "token"
)}`;

export const useTicketSocket = () => {
  const { calendar, refSecretariat, refSearch, typeTicket, state } =
    useDashboard();

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      shouldReconnect: () => true,
      reconnectAttempts: 10,
      reconnectInterval: 3000,
    }
  );

  useEffect(() => {
    const filters = {
      date: calendar,
      code: refSearch?.current?.value ?? "",
      typeTicket: typeTicket || undefined,
      active: state,
      secretariats: refSecretariat.current
        ?.filter((el) => el?.checked)
        .map((el) => el.value),
    };

    const cleaned = Object.fromEntries(
      Object.entries(filters).filter(
        ([_, v]) =>
          v !== undefined && v !== "" && !(Array.isArray(v) && v.length === 0)
      )
    );

    if (readyState === WebSocket.OPEN) {
      sendJsonMessage(cleaned);
    }
  }, [calendar, typeTicket, state]);

  return {
    data: lastJsonMessage,
    readyState,
  };
};
2;
