import { useState, useCallback, useRef, useEffect } from "react";
import { getUserByEmail, getBasicData } from "@/Utils/Api/GET";
import { useParams, useNavigate } from "react-router-dom";
import { SectSystem, colorMap } from "@/Utils/SystemApp";
import { getSchema } from "@/Utils/Schemas";
import {
  sendTicket,
  sendDocuments,
  getOrCreateUser,
  sendMail,
} from "@/Utils/Api/POST";

const useForm = () => {
  const navigate = useNavigate();
  const refs = useRef({});
  const [schema, setSchema] = useState([]);
  const [isTicket, setTicket] = useState({});

  const [autocomplete, setAutocomplete] = useState(false);
  const [isPopUp, setPopUp] = useState(false);

  const param = useParams();
  const system = SectSystem.find((e) => e.param === param.name);

  const typeTicket = system.name;
  const keysToUpdate = ["name", "phone", "department", "email"];

  const styles = colorMap[system.color];

  useEffect(() => {
    getSchema({ refs, system, setSchema });
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

  const sendData = async () => {
    const dataTicket = {};
    const documentsData = new FormData();
    let documentCount = 0;

    schema.forEach((field) => {
      const ref = refs.current[field.id];
      if (keysToUpdate.includes(field.id)) return;
      if (field.type === "TypeArchive") {
        [...ref.current.files].forEach((file) => {
          documentsData.append("documents", file);
          documentCount++;
        });
      } else if (field.type === "TypeChoose") {
        dataTicket[field.id] = ref.current
          .filter((el) => el?.checked)
          .map((el) => el.value);
      } else {
        dataTicket[field.id] = ref.current?.value || "";
      }
    });

    const user = {
      email: refs.current?.email?.current?.value,
      name: refs.current?.name?.current?.value,
      phone: refs.current?.phone?.current?.value,
      department: refs.current.department.current.value,
    };

    try {
      const userCreatedOrFound = await getOrCreateUser({ user: user });
      if (!userCreatedOrFound) {
        alert("Error: No se pudo crear o verificar el usuario.");
        return;
      }

      const ticketData = await sendTicket(
        dataTicket,
        typeTicket,
        user.email,
        setTicket
      );
      if (!ticketData) {
        alert("Error: No se generó el ticket correctamente.");
        return;
      }

      if (documentCount > 0) {
        documentsData.append("secretariat", user.department);
        documentsData.append("ticket", isTicket?.id);
        const documentsSent = await sendDocuments(documentsData);
        if (!documentsSent) {
          alert("Error: No se pudieron adjuntar los documentos al ticket.");
          return;
        }
      } else {
        console.log(
          "No hay documentos para adjuntar. Se omite la llamada a la API de documentos."
        );
      }

      const mailSent = await sendMail({ ticket: isTicket.id, mail: user });
      if (!mailSent) {
        alert("Error: No se pudo enviar la notificación por correo.");
        return;
      }

      handlePopUp();
      alert("¡Ticket generado y procesado exitosamente!");
    } catch (error) {
      console.error(
        "Un error inesperado ocurrió durante el proceso del ticket:",
        error
      );
      alert("Ocurrió un error inesperado. Por favor, inténtelo de nuevo.");
    }
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
    system,
    styles,
    schema,
    refs,
    setAutocomplete,
    isTicket,
    navigate,
  ];
};

export default useForm;
