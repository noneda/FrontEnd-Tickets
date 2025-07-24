import { SectSystem, colorMap } from "@/Utils/SystemApp";
import States from "@/Utils/States/States.json";
import { getSchema } from "@/Utils/Schemas";
import { useEffect, useState } from "react";


export const useOneItem = () => {
  const [schema, setSchema] = useState([]);
  const dataTicket = [
    {
      choose: ["Uno", "Dos"],
    },
    {
      observation: "Sapa...",
    },
  ];
  const statesColor = States;
  const styles = colorMap["purple"];
  const System = SectSystem.find((e) => e.name === "Mesa de Ayuda");
  useEffect(() => {
    getSchema({ System, setSchema });
  }, []);

  return [dataTicket, statesColor, styles, System, schema];
};
