import { HTTP } from "@/Shared";

export const patchTickets = async ({ id, observations, state }) => {
  try {
    const payload = {
      ticket: id,
      observations: observations,
      state: state,
    };

    const { status } = await HTTP.patch("ticket/private/", payload);
    return status === 202 ? true : false;
  } catch (err) {
    const status = err.response?.status;
    alert(`Error desconocido${status ? ` (${status})` : ""}`);
    console.error("Error with", err.message);
  }
};
