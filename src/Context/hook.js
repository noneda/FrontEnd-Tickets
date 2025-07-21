import { useEffect, useState } from "react";

export const useGlobalToken = () => {
  const [change, setChange] = useState(true);
  const [token, setToken] = useState("");

  useEffect(() => {
    const tk = localStorage.getItem("token");
    setToken(tk);
  }, []);

  useEffect(() => {
    setChange(!change);
  }, [token]);

  return [change, token];
};
