import { useState, useEffect, useRef, Children } from "react";

export const useCarousel = (children: React.ReactNode) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [childrenLoaded, setChildrenLoaded] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const childrenLength = Children.count(children);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  const handleNext = (): void => {
    if (!contentRef.current) return;
    const nextPosition = scrollPosition + contentRef.current.clientWidth;
    if (
      nextPosition >= contentRef.current.scrollWidth ||
      contentRef.current.scrollWidth - nextPosition <= 2
    ) {
      setScrollPosition(0);
    } else {
      setScrollPosition(nextPosition);
    }
  };

  const handlePrev = (): void => {
    if (!contentRef.current) return;
    const nextPosition = scrollPosition - contentRef.current.clientWidth;
    if (nextPosition < 0) {
      setScrollPosition(contentRef.current.scrollWidth);
    } else {
      setScrollPosition(nextPosition);
    }
  };

  const childLoadedHandler = (): void => {
    setChildrenLoaded((prev) => prev + 1);
    if (childrenLoaded === childrenLength - 1) {
      setIsLoading(false);
    }
  };

  return {
    contentRef,
    isLoading,
    handleNext,
    handlePrev,
    childLoadedHandler,
  };
};
