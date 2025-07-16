import { API } from "@/Shared";

export const sendTicket = async (send, type, email, setTicket) => {
  try {
    const { data, status } = await API.post("ticket/public/", {
      ticket: send,
      typeTicket: type,
      user: email,
    });

    if (status === 200) {
      setTicket(data);
      return data;
    }
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};

export const sendDocuments = async (documentsData, handlePopUp) => {
  try {
    const { status } = await API.post("documents/send/", documentsData);
    if (status === 200) {
      handlePopUp();
    }
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};
