import { useEffect, useState, useRef, useCallback } from "react";
import { getTicket, getDocuments } from "@/Utils/Api/GET";
import { SectSystem, colorMap } from "@/Utils/SystemApp";
import colorStates from "@/Utils/States/Colors.json";
import { useSearchParams } from "react-router-dom";
import { patchTickets } from "@/Utils/Api/PATCH";
import states from "@/Utils/States/States.json";
import { sendUpdate } from "@/Utils/Api/POST";
import { getSchema } from "@/Utils/Schemas";

export const useOneItem = () => {
  const refAbsolute = useRef(null);
  const hiddenAbsolute = () => {
    if (refAbsolute.current) {
      refAbsolute.current.checked = !refAbsolute.current.checked;
    }
  };

  const [schema, setSchema] = useState([]);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [isState, setState] = useState(true);

  const statesColor = colorStates;
  const stateList = states;
  const [styles, setStyles] = useState({});
  const [system, setSystem] = useState();

  const [documents, setDocuments] = useState([]);
  const [ticket, setTicket] = useState({});
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [observation, setObservation] = useState([]);
  const [newObservation, setNewObservation] = useState([]);
  const [isObservation, setIsObservation] = useState(false);

  useEffect(() => {
    const sets = {
      setTicket,
      setUser,
      setData,
      setObservation,
      setNewObservation,
    };
    getTicket({ idTicket: id, sets: sets });
    getDocuments({ id: id, setDocuments: setDocuments });
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

  const handleTicketStateChange = (newState) => {
    setTicket((prevTicket) => ({
      ...prevTicket,
      state: newState,
    }));
    setState(!isState);
  };

  const SeeObservation = () => setIsObservation(!isObservation);

  const handleSubmit = async (e) => {
    e.preventDefault();

    patchTickets({
      id: ticket?.id,
      observation: newObservation,
      state: ticket?.state,
    }).then((update) => {
      if (!update) {
        alert("Error a la hora de Actualizar los Datos");
        return;
      }
      sendUpdate({ ticket: ticket, mail: user }).then((ok) => {
        if (!ok) {
          alert("Error a la hora de enviar el Mail");
          return;
        }
        alert(`Ticket Actualizado!!`);
        window.location.reload();
      });
    });
  };

  return [
    refAbsolute,
    hiddenAbsolute,
    ticket,
    handleTicketStateChange,
    isState,
    setState,
    user,
    data,
    observation,
    newObservation,
    setNewObservation,
    isObservation,
    SeeObservation,
    documents,
    statesColor,
    stateList,
    styles,
    schema,
    handleSubmit,
  ];
};
