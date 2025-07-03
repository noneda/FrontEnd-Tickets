import { useState } from "react";
import { getEmailBySuggest } from "../../Utils/Api/GET";

export const useEmailSuggestion = (refObj) => {
  const [suggestions, setSuggestions] = useState("");
  const [ghost, setGhost] = useState("");

  const handleChange = async () => {
    const value = refObj.current?.value?.trim();
    if (!value || value.length < 2) {
      setSuggestions("");
      setGhost("");
      return;
    }

    const matches = await getEmailBySuggest(value);
    setSuggestions(matches);
    setGhost(matches || "");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && ghost) {
      e.preventDefault();
      if (refObj.current) {
        refObj.current.value = ghost;
        setSuggestions([]);
        setGhost("");
      }
    }
  };

  const handleAutocomplete = () => {
    if (ghost && refObj.current) {
      refObj.current.value = ghost;
    }
  };

  return {
    suggestions,
    ghost,
    handleChange,
    handleKeyDown,
    handleAutocomplete,
  };
};
