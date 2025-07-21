import { useContext, createContext } from "react";
import { useGlobalToken } from "./hook";

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

const ViewAuthContext = ({ children }) => {
  const [change, token] = useGlobalToken();

  return (
    <AuthContext.Provider value={[change, token]}>
      {children}
    </AuthContext.Provider>
  );
};

export default ViewAuthContext;
