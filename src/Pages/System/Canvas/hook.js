import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { colorMap, SectSystem } from "../../../Utils/SystemApp";

const FormState = () => {
  const [isPopUp, setPopUp] = useState(false);
  const { name } = useParams();
  const System = SectSystem.find((e) => e.name === name);
  const styles = colorMap[System.color] || colorMap.white;

  const handlePopUp = useCallback(() => {
    setPopUp(!isPopUp);
  }, [isPopUp]);

  const handleForm = (e) => {
    e.preventDefault();
    handlePopUp();
  };

  return [isPopUp, handlePopUp, handleForm, styles, System];
};

export default FormState;
