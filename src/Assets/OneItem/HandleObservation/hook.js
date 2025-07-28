import { useEffect, useRef, useCallback } from "react";

export const useHandleObservation = ({ data, set }) => {
  const handleChange = (event, index) => {
    set((prev) => {
      const newData = [...prev];
      newData[index] = event.target.value;
      return newData;
    });
  };

  const addObservation = useCallback(() => {
    set((prev) => [...prev, ""]);
  }, [set]);

  return [handleChange, addObservation];
};
