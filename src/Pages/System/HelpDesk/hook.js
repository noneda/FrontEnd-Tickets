import { useState, useCallback, useRef, useEffect, createRef } from "react";
import { SectSystem, colorMap } from "../../../Utils/SystemApp";
import { Schema } from "./Scheme.json";
import { getBasicData, getUserByEmail } from "../../../Utils/Api/GET";
import { sendTicket } from "../../../Utils/Api/POST";

const useHelpDesk = () => {
  const [isPopUp, setPopUp] = useState(false);
  const [schema, setSchema] = useState([...Schema]);
  const [autocomplete, setAutocomplete] = useState(false);
  const [isUserId, setUserId] = useState(0);
  const refs = useRef({});
  const typeTicket = "Mesa de Ayuda";
  const keysToUpdate = ["name", "phone", "department"];

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

    setUserId(userData.id);

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

  const handleForm = (e) => {
    e.preventDefault();
    const formData = {};

    Schema.forEach((field) => {
      const ref = refs.current[field.id];
      if (keysToUpdate.includes(field.id)) return;
      if (field.type === "TypeChoose") {
        formData[field.id] = ref.current
          .filter((el) => el?.checked)
          .map((el) => el.value);
      } else {
        formData[field.id] = ref.current?.value || "";
      }
    });
    // TODO: More later
    // refs.current?.service?.current?.value
    const secretariat = refs.current.department.current.value;
    sendTicket(formData, typeTicket, isUserId, secretariat);
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
  ];
};

export default useHelpDesk;
