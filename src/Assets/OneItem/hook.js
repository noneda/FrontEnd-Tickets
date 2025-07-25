import { SectSystem, colorMap } from "@/Utils/SystemApp";
import { getTicket } from "../../Utils/Api/GET";
import States from "@/Utils/States/States.json";
import { getSchema } from "@/Utils/Schemas";
import { useEffect, useState } from "react";

export const useOneItem = () => {
  const [schema, setSchema] = useState([]);
  const statesColor = States;
  const [styles, setStyles] = useState({});
  const [system, setSystem] = useState();

  const [ticket, setTicket] = useState({});
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [observation, setObservation] = useState([]);

  useEffect(() => {
    const sets = {
      setTicket,
      setUser,
      setData,
      setObservation,
    };

    getTicket({ idTicket: 1, sets: sets });
  }, []);

  useEffect(() => {
    if (ticket && Object.keys(ticket).length > 0) {
      const foundSystem = SectSystem.find((e) => e.name === ticket?.typeTicket);
      setSystem(foundSystem);

      if (foundSystem) {
        setStyles(colorMap[foundSystem.color]);
        getSchema({ system: foundSystem, setSchema });
      }
    }
  }, [ticket, setSchema]);

  return [ticket, user, data, observation, statesColor, styles, system, schema];
};
