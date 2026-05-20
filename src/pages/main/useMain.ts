import { useState, useEffect } from "react";

export const useMain = () => {
  const [showArrow, setShowArrow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const contactElement = document.getElementById("book");
      if (contactElement) {
        const contactRect = contactElement.getBoundingClientRect();
        setShowArrow(contactRect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    showArrow,
    scrollToTop,
  };
};
