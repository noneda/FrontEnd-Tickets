import { useState, useCallback, useRef, useEffect } from "react";
import { SectSystem, colorMap } from "../../../Utils/SystemApp";
import { Schema } from "./Scheme.json";
import { getBasicData, getUserByEmail } from "../../../Utils/Api/GET";
import { sendTicket, sendDocuments } from "../../../Utils/Api/POST";

const useHelpDesk = () => {
  const [isPopUp, setPopUp] = useState(false);
  const [schema, setSchema] = useState([...Schema]);
  const [autocomplete, setAutocomplete] = useState(false);

  const [isTicket, setTicket] = useState({});

  const refs = useRef({});
  const typeTicket = "Mesa de Ayuda";
  const keysToUpdate = ["name", "phone", "department", "email"];

  const System = SectSystem.find((e) => e.name === "Mesa de Ayuda");
  const styles = colorMap[System.color];

  // ? For rendering reasons it is better to use it directly in Doom instead of a useEffect
  Schema.forEach((field) => {
    if (!refs.current[field.id]) {
      refs.current[field.id] =
        field.type === "TypeChoose" ? { current: [] } : { current: null };
    }
  });

  useEffect(() => {
    getBasicData(setSchema);
  }, []);

  const handleAutocomplete = async () => {
    if (!autocomplete) return;

    const email = refs.current?.email?.current?.value;

    const userData = await getUserByEmail(email);

    if (!userData) return;
    keysToUpdate.forEach((key) => {
      if (userData[key] !== undefined && refs.current[key]) {
        refs.current[key].current.value = userData[key];
      }
    });

    setAutocomplete(false);
  };

  useEffect(() => {
    handleAutocomplete();
  }, [autocomplete]);

  const handlePopUp = useCallback(() => {
    setPopUp(!isPopUp);
  }, [isPopUp]);

  const sendData = () => {
    const dataTicket = {};
    const documentsData = new FormData();

    Schema.forEach((field) => {
      const ref = refs.current[field.id];
      if (keysToUpdate.includes(field.id)) return;
      if (field.type === "TypeArchive") {
        [...ref.current.files].forEach((file) => {
          documentsData.append("documents", file);
        });
      } else if (field.type === "TypeChoose") {
        dataTicket[field.id] = ref.current
          .filter((el) => el?.checked)
          .map((el) => el.value);
      } else {
        dataTicket[field.id] = ref.current?.value || "";
      }
    });

    const email = refs.current?.email?.current?.value;
    const secretariat = refs.current.department.current.value;
    sendTicket(dataTicket, typeTicket, email, setTicket).then((ticket) => {
      if (!ticket?.id) return alert("No se generó el ticket correctamente");
      documentsData.append("secretariat", secretariat);
      documentsData.append("ticket", ticket.id);
      sendDocuments(documentsData, handlePopUp);
    });
  };

  const handleForm = (e) => {
    setTicket({});
    e.preventDefault();
    sendData();
  };

  return [
    isPopUp,
    handlePopUp,
    handleForm,
    System,
    styles,
    schema,
    refs,
    setAutocomplete,
    isTicket,
  ];
};

export default useHelpDesk;
