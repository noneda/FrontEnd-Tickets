import { useCallback } from "react";

export const useHandleObservation = ({ set }) => {
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
