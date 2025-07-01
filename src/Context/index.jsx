import { createContext, useContext } from "react";

import { useState } from "react";

const GlobalContext = createContext(null);

export const useGlobalContext = () => useContext(GlobalContext);

const ViewGlobalContext = ({ children }) => {
  const [isToken, setToken] = useState();

  return (
    <GlobalContext.Provider
      value={{
        isToken,
        setToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ViewGlobalContext;
