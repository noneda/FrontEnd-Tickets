import { useEffect, useState } from "react";

export const useGlobalToken = () => {
  const [change, setChange] = useState(true);
  const [token, setToken] = useState("");

  const clearToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const tk = localStorage.getItem("token");
    setToken(tk);
  }, []);

  useEffect(() => {
    setChange(!change);
  }, [token]);

  return [change, token, clearToken];
};
