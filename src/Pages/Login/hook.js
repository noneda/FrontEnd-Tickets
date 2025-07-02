import { useRef } from "react";
import { useGlobalContext } from "../../Context";
import { PostLogin } from "../../Utils/Api/POST";

const useLogin = () => {
  const user = useRef(null);
  const pass = useRef(null);
  const { setToken } = useGlobalContext();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    PostLogin(setToken);
  };

  return [user, pass, handleSubmitLogin];
};

export default useLogin;  
