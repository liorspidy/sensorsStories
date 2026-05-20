import { useState, useEffect } from "react";
import ketty from "../../assets/images/withbook.jpeg";
import ketty2 from "../../assets/images/withbookglasses.jpeg";

export const useAbout = () => {
  const [currentImg, setCurrentImg] = useState<string>(ketty);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setCurrentImg((prev) => {
        return prev === ketty ? ketty2 : ketty;
      });
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { currentImg };
};
