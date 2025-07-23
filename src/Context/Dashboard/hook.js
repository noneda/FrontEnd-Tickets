import { useRef, useState, useEffect } from "react";

export const hookDashboardContext = () => {
  const refSecretariat = useRef([]);

  // * Calendar Manager
  const [calendar, setCalendar] = useState("");
  const [calendarChanges, setCalendarChanges] = useState(false);

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  useEffect(() => {
    setCalendar(formattedDate);
  }, []);

  //TODO: Make Debouncing on search to don`t generate overload to Backend
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const [typeTicket, setTypeTicket] = useState("");
  const [state, setState] = useState(undefined);

  const handleTypeTicket = (name) => {
    setTypeTicket(name);
  };

  const handleDateEvent = (e) => {
    setCalendar(e.target.value);
    setCalendarChanges(true);
  };

  const handleState = (state) => {
    setState(state);
  };

  const handleClearALl = () => {
    setCalendar(formattedDate);
    setTypeTicket("");
    setState(undefined);
    setSearch("");
    setDebouncedSearch("");
    // refSecretariat.current.forEach((el) => {
    //   if (el?.checked) {
    //     el.checked = false;
    //   }
    // });
  };

  return {
    calendar,
    calendarChanges,
    handleDateEvent,
    refSecretariat,
    search,
    handleSearch,
    typeTicket,
    handleTypeTicket,
    state,
    handleState,
    handleClearALl,
    debouncedSearch,
  };
};
