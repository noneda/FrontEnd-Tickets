import { HTTP } from "@/Shared/Api";

export const getAuthentication = async () => {
  try {
    const { status } = await HTTP("token/confirm/");
    if (status === 202) {
      return true;
    }
  } catch (error) {
    alert("Sesión expirada o inválida");
    return false;
  }
};

export const AuthenticateUser = async (send, navigate) => {
  try {
    const { data, status } = await HTTP.post("token/auth/", send);
    if (status === 200) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      alert(data.message);
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
