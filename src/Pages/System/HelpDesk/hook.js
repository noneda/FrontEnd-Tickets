import { useState, useCallback, useRef, useEffect, createRef } from "react";
import { SectSystem, colorMap } from "../../../Utils/SystemApp";
import { Schema } from "./Scheme.json";

const useHelpDesk = () => {
  const [isPopUp, setPopUp] = useState(false);

  const refs = useRef({});

  const System = SectSystem.find((e) => e.name === "Mesa de Ayuda");
  const styles = colorMap[System.color];

  // ? For rendering reasons it is better to use it directly in Doom instead of a useEffect
  Schema.forEach((field) => {
    if (!refs.current[field.id]) {
      refs.current[field.id] =
        field.type === "TypeChoose" ? { current: [] } : { current: null };
    }
  });

  const handlePopUp = useCallback(() => {
    setPopUp(!isPopUp);
  }, [isPopUp]);

  const handleForm = (e) => {
    e.preventDefault();
    const formData = {};

    Schema.forEach((field) => {
      const ref = refs.current[field.id];

      if (field.type === "TypeChoose") {
        formData[field.id] = ref.current
          .filter((el) => el?.checked)
          .map((el) => el.value);
      } else {
        formData[field.id] = ref.current?.value || "";
      }
    });

    console.log("Formulario enviado:", formData);
  };

  return [isPopUp, handlePopUp, handleForm, System, styles, Schema, refs];
};

export default useHelpDesk;
