import { useState, useCallback, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SectSystem, colorMap } from "@/Utils/SystemApp";
import { getUserByEmail, getBasicData } from "@/Utils/Api/GET";
import { sendTicket, sendDocuments } from "@/Utils/Api/POST";
import { getSchema } from "@/Utils/Schemas";

const useHelpDesk = () => {
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
    // navigate("/");
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

    const user = {
      email: refs.current?.email?.current?.value,
      name: refs.current?.name?.current?.value,
      phone: refs.current?.phone?.current?.value,
      department: refs.current.department.current.value,
    };

    console.log(user);

    sendTicket(dataTicket, typeTicket, user, setTicket).then((ticket) => {
      if (!ticket?.id) return alert("No se generó el ticket correctamente");
      documentsData.append("secretariat", user.department);
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
    system,
    styles,
    schema,
    refs,
    setAutocomplete,
    isTicket,
    navigate,
  ];
};

export default useHelpDesk;
