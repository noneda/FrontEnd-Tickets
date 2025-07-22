import { useContext, createContext } from "react";
import { useGlobalToken } from "./hook";

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

const ViewAuthContext = ({ children }) => {
  const [change, token, clearToken] = useGlobalToken();

  return (
    <AuthContext.Provider value={{ change, token, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ViewAuthContext;
