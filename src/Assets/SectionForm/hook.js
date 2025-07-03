import { useState } from "react";
import { getEmailBySuggest } from "../../Utils/Api/GET";

export const useEmailSuggestion = (refObj, autocomplete) => {
  const [suggestion, setSuggestion] = useState("");
  const [ghost, setGhost] = useState(false);

  const handleChange = async () => {
    const value = refObj.current?.value?.trim();
    if (!value || value.length < 2) {
      setSuggestion("");
      setGhost(false);
      return;
    }

    const matches = await getEmailBySuggest(value);
    setSuggestion(matches);
    setGhost(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && ghost) {
      e.preventDefault();
      if (refObj.current) {
        refObj.current.value = suggestion;
        setSuggestion("");
        setGhost(false);
        autocomplete(true);
      }
    }
  };

  const handleAutocomplete = () => {
    if (ghost && refObj.current) {
      refObj.current.value = suggestion;
      setGhost(false);
      autocomplete(true);
    }
  };

  return {
    suggestion,
    ghost,
    handleChange,
    handleKeyDown,
    handleAutocomplete,
  };
};
