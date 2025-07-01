import { useRef } from "react";
import { API } from "../../Shared";

const useLogin = () => {
  const user = useRef(null);
  const pass = useRef(null);

  const PostLogin = async () => {
    try {
      const { data, res } = await API.post("/api/auth", {});
      console.log(data, res);
    } catch (err) {
      console.error("Error during Login:", err.message);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    PostLogin();
  };

  return [user, pass, handleSubmitLogin];
};

export default useLogin;
