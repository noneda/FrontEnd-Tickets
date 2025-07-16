import { API } from "@/Shared";

export const getBasicData = async (setSchema) => {
  try {
    const { data, status } = await API("get/basics/");
    if (status === 200) {
      const onlyNamesServices = data.services.map((item) => item.name);
      const onlyNamesSecretariat = data.secretariats.map((item) => item.name);

      setSchema((prev) =>
        prev.map((field) => {
          if (field.id === "service") {
            return { ...field, values: onlyNamesServices };
          } else if (field.id === "department") {
            return { ...field, values: onlyNamesSecretariat };
          }
          return field;
        })
      );
    }
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};

export const getEmailBySuggest = async (suggest) => {
  try {
    const { data, status } = await API.get(`get/suggest/?email=${suggest}`);

    if (status === 200) {
      return data.suggestions || "";
    }
  } catch (err) {
    if (err.response?.status === 404) {
      console.warn("Email not found");
      return "No se encontró el correo";
    }

    console.error("Error during suggestion:", err.message);
    return "";
  }
};

export const getUserByEmail = async (email) => {
  try {
    const { data, status } = await API.get(`get/user/?email=${email}`);
    if (status === 200) return data;
  } catch (err) {
    console.error("Error fetching user by email:", err.message);
  }
  return null;
};

export const getSecretariats = async (setSecretariat) => {
  try {
    const { data, status } = await API("get/basics/");
    if (status === 200) {
      setSecretariat(data.secretariats);
    }
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};
