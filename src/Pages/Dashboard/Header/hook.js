import { useEffect, useState } from "react";

export const useHeaderDashboard = ({ refCalendar }) => {
  const [dateDisplay, setDateDisplay] = useState("");
  const [showSecretariat, setShowSecretariat] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    refCalendar.current.value = formattedDate;
    setDateDisplay(refCalendar.current.value);
  }, []);

  const handleCalendar = () => {
    refCalendar.current.showPicker();
  };

  const onChangeHandleCalendar = () => {
    setDateDisplay(refCalendar.current.value);
  };

  const handleShowSecretariat = () => {
    setShowSecretariat(!showSecretariat);
  };
  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return [
    dateDisplay,
    handleCalendar,
    onChangeHandleCalendar,
    showSecretariat,
    handleShowSecretariat,
    showSearch,
    handleShowSearch,
  ];
};
