import { useTicketsWebSocket } from "@/Utils/WebSocket/useItems";
import { SectSystem } from "@/Utils/SystemApp";
import { useState, useCallback } from "react";

export const useSomeItems = () => {
  const [group, setGroup] = useState(0);
  const [codeSelect, setCodeSelect] = useState(null);

  const handleNext = useCallback(() => {
    setGroup(group + 1);
  }, [group]);

  const handleAfter = useCallback(() => {
    setGroup(group - 1);
  }, [group]);

  const handleCodeSelection = (code) => {
    setCodeSelect(code);
    //TODO: Here are logic for Go to the next section...
  };

  const { ticket, allGroups, error, loading, connectionStatus } =
    useTicketsWebSocket({ group });

  const grouped = ticket.map((items) => ({
    ...items,
    color: SectSystem.find((e) => e.name === items?.typeTicket)?.color || null,
  }));

  return [grouped, group, allGroups, handleNext, handleAfter];
};
