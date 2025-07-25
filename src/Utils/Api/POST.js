import { HTTP } from "@/Shared";

export const sendTicket = async (send, type, user, setTicket) => {
  try {
    const { data, status } = await HTTP.post("ticket/public/", {
      ticket: send,
      typeTicket: type,
      user: user,
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
    const { status } = await HTTP.post("documents/send/", documentsData);
    if (status === 200) {
      handlePopUp();
    }
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};
