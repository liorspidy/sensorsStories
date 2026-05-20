import { useState, useEffect, useRef } from "react";

const SECTION_KEY = "currentSection";
const SECTION_IDS = ["main", "book", "author", "community", "meet", "contact"];

export const useMain = () => {
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const currentSectionRef = useRef<string>("");

  useEffect(() => {
    history.scrollRestoration = "manual";

    const saved = sessionStorage.getItem(SECTION_KEY);
    if (saved) {
      const el = document.getElementById(saved);
      if (el) el.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      sessionStorage.removeItem(SECTION_KEY);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) currentSectionRef.current = entry.target.id;
        });
      },
      { threshold: 0.5 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleBeforeUnload = () => {
      if (currentSectionRef.current)
        sessionStorage.setItem(SECTION_KEY, currentSectionRef.current);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      observer.disconnect();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
