import classes from "./Carousel.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
  const contentRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  const handleNext = () => {
    const nextPosition = scrollPosition + contentRef.current.clientWidth;
    if (nextPosition >= contentRef.current.scrollWidth) {
      setScrollPosition(0);
    } else {
      setScrollPosition(nextPosition);
    }
  };

  const handlePrev = () => {
    const nextPosition = scrollPosition - contentRef.current.clientWidth;
    if (nextPosition < 0) {
      setScrollPosition(contentRef.current.scrollWidth);
    } else {
      setScrollPosition(nextPosition);
    }
  };

  return (
    <div className={classes.carousel}>
      <div className={classes.arrowIcon} onClick={handlePrev}>
        <ArrowBackIosNewRoundedIcon
          sx={{
            fontSize: 50,
            cursor: "pointer",
          }}
        />
      </div>
      <div className={classes.content} ref={contentRef}>
        {children}
      </div>
      <div className={classes.arrowIcon} onClick={handleNext}>
        <ArrowForwardIosRoundedIcon
          sx={{
            fontSize: 50,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
