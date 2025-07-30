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
      return true;
    } else {
      false;
    }
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};

export const sendDocuments = async (documentsData) => {
  try {
    const { status } = await HTTP.post("documents/send/", documentsData);
    return status === 200 ? true : false;
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};

export const getOrCreateUser = async ({ user }) => {
  try {
    const { status } = await HTTP.post("helper/user/", { user: user });
    return status === 200 ? true : false;
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido ${status ? `(${status})` : ""}`);
    console.error("Error with", err.message);
  }
};

export const sendMail = async ({ ticket, mail }) => {
  try {
    const { status } = await HTTP.post("helper/mail/", {
      ticket: ticket,
      mail: mail,
    });
    return status === 200 ? true : false;
  } catch (err) {
    const status = err.response?.status;
    alert(`Error descocido ${status ? `${status}` : ""}`);
    console.error("Error with", err.message);
    return false;
  }
};

export const sendUpdate = async ({ ticket, mail }) => {
  try {
    const { status } = await HTTP.post("helper/privateMail/", {
      ticket: ticket,
      mail: mail,
    });
    return status === 200 ? true : false;
  } catch (err) {
    const status = err.response?.status;
    alert(`Error descocido ${status ? `${status}` : ""}`);
    console.error("Error with", err.message);
    return false;
  }
};
