import { useRef, useState, useEffect, useCallback } from "react";

export const useDashboard = () => {
  const refCalendar = useRef(null);
  const refSecretariat = useRef([]);
  // refSecretariat.current.filter((el) => el?.checked).map((el) => el.value)

  const refSearch = useRef(null);
  const [typeTicket, setTypeTicket] = useState("");
  const [state, setState] = useState(undefined);

  const handleTypeTicket = (name) => {
    setTypeTicket(name);
  };

  const handleState = (state) => {
    setState(state);
  };

  const handleClearALl = () => {};

  return [
    refCalendar,
    refSecretariat,
    refSearch,
    typeTicket,
    handleTypeTicket,
    state,
    handleState,
  ];
};
