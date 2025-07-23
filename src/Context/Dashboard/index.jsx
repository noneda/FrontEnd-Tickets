import { useContext, createContext } from "react";
import { hookDashboardContext } from "./hook";

const DashboardContext = createContext(null);

export const useDashboardContext = () => useContext(DashboardContext);

const ViewDashBoard = ({ children }) => {
  const {
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
  } = hookDashboardContext();
  return (
    <DashboardContext.Provider
      value={{
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
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default ViewDashBoard;
