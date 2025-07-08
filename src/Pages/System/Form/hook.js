import { useState, useCallback, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SectSystem, colorMap } from "../../../Utils/SystemApp";
import { getBasicData, getUserByEmail } from "../../../Utils/Api/GET";
import { sendTicket, sendDocuments } from "../../../Utils/Api/POST";

const useHelpDesk = () => {
  const refs = useRef({});
  const [schema, setSchema] = useState([]);
  const [isTicket, setTicket] = useState({});

  const [autocomplete, setAutocomplete] = useState(false);
  const [isPopUp, setPopUp] = useState(false);

  const param = useParams();
  const System = SectSystem.find((e) => e.param === param.name);

  const typeTicket = System.name;
  const keysToUpdate = ["name", "phone", "department", "email"];

  const styles = colorMap[System.color];
  const getSchema = async () => {
    try {
      const schemaMap = {
        HelpDesk: () => import("@/Utils/Schemas/HelpDesk.json"),
        WebPage: () => import("@/Utils/Schemas/WebPage.json"),
        EmailsUsers: () => import("@/Utils/Schemas/EmailsUsers.json"),
      };
      const module = await schemaMap[System.param]();
      const Schema = module.Schema || module.default;

      Schema.forEach((field) => {
        if (!refs.current[field.id]) {
          refs.current[field.id] =
            field.type === "TypeChoose" ? { current: [] } : { current: null };
        }
      });
      setSchema([...Schema]);
      getBasicData(setSchema);
    } catch (err) {
      console.error("Error cargando el esquema:", err);
      return null;
    }
  };

  useEffect(() => {
    getSchema();
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

    schema.forEach((field) => {
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
