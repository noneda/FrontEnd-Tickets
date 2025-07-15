import { useEffect, useState } from "react";

export const useHeaderDashboard = () => {
  const [showSecretariat, setShowSecretariat] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleCalendar = () => {
    document.getElementById("date").showPicker();
  };

  const handleShowSecretariat = () => {
    setShowSecretariat(!showSecretariat);
  };
  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return [
    handleCalendar,
    showSecretariat,
    handleShowSecretariat,
    showSearch,
    handleShowSearch,
  ];
};
