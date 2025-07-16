import { useState } from "react";
import { AuthenticateUser } from "@/Utils/Api/AUTH";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const [isUser, setUser] = useState("");
  const [isPass, setPass] = useState("");
  const navigate = useNavigate();

  const handlePass = (e) => setPass(e.target.value);
  const handleUser = (e) => setUser(e.target.value);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const send = {
      username: isUser,
      password: isPass,
    };

    AuthenticateUser(send, navigate);
  };

  return [isUser, isPass, handlePass, handleUser, handleSubmitLogin];
};

export default useLogin;
