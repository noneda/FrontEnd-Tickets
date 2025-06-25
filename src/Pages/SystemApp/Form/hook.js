import { useState, useCallback } from "react";

const FormState = () => {
  const [isPopUp, setPopUp] = useState(false);

  const handlePopUp = useCallback(() => {
    setPopUp(!isPopUp);
  }, [isPopUp]);

  const handleForm = (e) => {
    e.preventDefault();
    handlePopUp();
  };

  return [isPopUp, handlePopUp, handleForm];
};

export default FormState;
