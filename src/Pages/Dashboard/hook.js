import { useRef, useState, useEffect, useCallback } from "react";

export const useDashboard = () => {
  const [calendar, setCalendar] = useState("");
  const refSecretariat = useRef([]);
  // refSecretariat.current.filter((el) => el?.checked).map((el) => el.value)

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  useEffect(() => {
    setCalendar(formattedDate);
  }, []);

  const refSearch = useRef(null);
  const [typeTicket, setTypeTicket] = useState("");
  const [state, setState] = useState(undefined);

  const handleTypeTicket = (name) => {
    setTypeTicket(name);
  };

  const handleDateEvent = (e) => {
    setCalendar(e.target.value);
  };

  const handleState = (state) => {
    setState(state);
  };

  const handleClearALl = () => {
    setCalendar(formattedDate);
    setTypeTicket("");
    setState(undefined);
    refSearch.current.value = "";
    refSecretariat.current.forEach((el) => {
      if (el?.checked) {
        el.checked = false;
      }
    });
  };

  return {
    calendar,
    handleDateEvent,
    refSecretariat,
    refSearch,
    typeTicket,
    handleTypeTicket,
    state,
    handleState,
    handleClearALl,
  };
};
