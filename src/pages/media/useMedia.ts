import { useEffect } from "react";

export const useMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
