import { API } from "../../Shared";

export const GetSecretariatForm = async (setSchema) => {
  try {
    const { data, status } = await API("/api/get/secretariat/");
    if (status === 200) {
      const onlyNames = data.map((item) => item.name);
      setSchema((prev) =>
        prev.map((field) =>
          field.id === "department" ? { ...field, values: onlyNames } : field
        )
      );
    }
  } catch (err) {
    if (err.response) {
      const status = err.response.status;
      alert(`Error desconocido (${status})`);
    } else {
      console.error("Error with", err.message);
    }
  }
};

export const GetServicesForm = async (setSchema) => {
  try {
    const { data, status } = await API("/api/get/services/");
    if (status === 200) {
      const onlyNames = data.map((item) => item.name);
      setSchema((prev) =>
        prev.map((field) =>
          field.id === "service" ? { ...field, values: onlyNames } : field
        )
      );
    }
  } catch (err) {
    if (err.response) {
      const status = err.response.status;
      alert(`Error desconocido (${status})`);
    } else {
      console.error("Error with", err.message);
    }
  }
};
