import { useRef } from "react";
import { API } from "../../Shared";
import { useGlobalContext } from "../../Context";

const useLogin = () => {
  const user = useRef(null);
  const pass = useRef(null);
  const { setToken } = useGlobalContext();

  const PostLogin = async () => {
    try {
      const { data, status } = await API.post("/api/token/auth/", {
        username: user.current.value,
        password: pass.current.value,
      });

      if (status === 200) {
        console.log("Token recibido:", data);
        setToken(data.token);
      }
    } catch (err) {
      if (err.response) {
        const status = err.response.status;

        if (status === 403) {
          alert("No tienes Privilegios de Administrador");
        } else if (status === 401) {
          alert("Error con los Datos Insertados");
        } else {
          alert(`Error desconocido (${status})`);
        }
      } else {
        console.error("Error during Login:", err.message);
      }
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    PostLogin();
  };

  return [user, pass, handleSubmitLogin];
};

export default useLogin;
