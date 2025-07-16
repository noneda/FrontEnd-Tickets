import { getAuthentication } from "@/Utils/Api/AUTH";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navigate = useNavigate();

  const authenticate = async () => {
    const haveToken = localStorage.getItem("token");
    if (!haveToken) navigate("/");
    const isAuthenticate = await getAuthentication();
    if (!isAuthenticate) navigate("/");
  };

  useEffect(() => {
    authenticate();
    const interval = setInterval(() => {
      authenticate();
    }, 900000);
    return () => clearInterval(interval);
  }, [navigate]);

  return <>{children}</>;
};

export default Auth;
