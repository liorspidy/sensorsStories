import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeader = () => {
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const prevScrollPos = useRef(0);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mouseStopTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMouseMoving = useRef(false);
  const isMouseOverHeader = useRef(false);

  const shouldNotHide = location.pathname === '/about-me' || location.pathname === '/courses';

  useEffect(() => {
    if (shouldNotHide) {
      setVisible(true);
    }
  }, [shouldNotHide]);

  const cancelHide = useCallback(() => {
    if (hideTimeout.current) { clearTimeout(hideTimeout.current); hideTimeout.current = null; }
  }, []);

  const scheduleHide = useCallback(() => {
    cancelHide();
    if (shouldNotHide) return;
    if (window.scrollY < 10) return;
    if (!isMouseOverHeader.current && !isMouseMoving.current) {
      hideTimeout.current = setTimeout(() => {
        setVisible(false);
        hideTimeout.current = null;
      }, 1000);
    }
  }, [cancelHide, shouldNotHide]);

  const forceHide = useCallback(() => {
    cancelHide();
    if (shouldNotHide) return;
    setVisible(false);
  }, [cancelHide, shouldNotHide]);

  useEffect(() => {
    const handleMouseMove = () => {
      if (shouldNotHide) return;
      if (window.scrollY < 10) {
        cancelHide();
        setVisible(true);
        return;
      }
      isMouseMoving.current = true;
      if (mouseStopTimeout.current) clearTimeout(mouseStopTimeout.current);
      mouseStopTimeout.current = setTimeout(() => {
        isMouseMoving.current = false;
        scheduleHide();
      }, 2000);
    };

    const handleScroll = (): void => {
      const current = window.scrollY;
      const delta = current - prevScrollPos.current;
      prevScrollPos.current = current;
      setScrolled(current > 10);

      if (shouldNotHide) {
        cancelHide();
        setVisible(true);
        return;
      }

      if (current < 10) {
        cancelHide();
        setVisible(true);
        return;
      }

      if (delta > 0) {
        forceHide();
      } else {
        setVisible(true);
        scheduleHide();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      if (mouseStopTimeout.current) clearTimeout(mouseStopTimeout.current);
    };
  }, [cancelHide, scheduleHide, forceHide, shouldNotHide]);

  function scrollToElement(elementId: string): () => void {
    return () => {
      const element = document.getElementById(elementId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
      setVisible(false);
    };
  }

  const handleMouseEnter = () => {
    isMouseOverHeader.current = true;
    cancelHide();
  };

  const handleMouseLeave = () => {
    isMouseOverHeader.current = false;
    scheduleHide();
  };

  return {
    visible,
    scrolled,
    menuOpen,
    setMenuOpen,
    scrollToElement,
    handleMouseEnter,
    handleMouseLeave
  };
};
