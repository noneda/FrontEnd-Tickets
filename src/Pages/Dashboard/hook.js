import { useRef, useEffect, useCallback } from "react";

export const useDashboard = () => {
  const refCalendar = useRef(null);

  return [refCalendar];
};
