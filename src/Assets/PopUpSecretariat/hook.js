import { useEffect, useState } from "react";
import { getSecretariats } from "@/Utils/Api/GET";

export const handlePopUpSecretariat = () => {
  const [secretariat, setSecretariat] = useState([]);

  useEffect(() => {
    getSecretariats(setSecretariat);
  }, []);

  return [secretariat];
};
