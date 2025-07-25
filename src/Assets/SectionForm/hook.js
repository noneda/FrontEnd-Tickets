import { useState } from "react";
import { getEmailBySuggest } from "@/Utils/Api/GET";

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

export const useTypeArchive = (refObj) => {
  const [filesInfo, setFilesInfo] = useState([]);

  const MAX_FILE_SIZE_MB = 5;
  const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleFileChange = () => {
    const files = Array.from(refObj.current.files);

    const validFiles = files.filter((file) => file.size <= MAX_FILE_SIZE);

    if (validFiles.length !== files.length) {
      alert(`Solo se permiten archivos de hasta ${MAX_FILE_SIZE_MB} MB`);
    }

    setFilesInfo(
      validFiles.map(
        (file) => `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`
      )
    );
  };

  return [filesInfo, handleFileChange];
};
