import { API } from "../../Shared";

export const PostLogin = async (setToken) => {
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

export const sendTicket = async (send, type, idUser, secretariat) => {
  try {
    const { data, status } = await API.post("/api/ticket/public/", {
      ticket: send,
      typeTicket: type,
      user: idUser,
    });
    console.log(data, status);
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};
