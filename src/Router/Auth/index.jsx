import { getAuthentication } from "@/Utils/Api/AUTH";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const authenticate = async () => {
    const haveToken = localStorage.getItem("token");
    if (!haveToken) navigate("/");
    const isAuthenticate = await getAuthentication();
    if (!isAuthenticate) {
      localStorage.setItem("token", "");
      navigate("/");
    }
  };

  useEffect(() => {
    authenticate();
    const interval = setInterval(() => {
      authenticate();
    }, 10000);
    return () => clearInterval(interval);
  }, [navigate]);

  return <Outlet />;
};

export default Auth;
