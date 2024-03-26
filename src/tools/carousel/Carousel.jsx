import { Visibility } from "@mui/icons-material";
import classes from "./Carousel.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Children, useEffect, useRef, useState } from "react";
import Loading from "../loading/Loading";

const Carousel = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [childrenLoaded, setChildrenLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);
  const childrenLength = children ? children.length : 0;

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

  const childLoadedHandler = () => {
    setChildrenLoaded((prev) => prev + 1);
    if (childrenLoaded === childrenLength - 1) {
      setIsLoading(false);
    }
  };

  const childrenMapped = Children.map(children, (child, index) => {
    return (
      <div
        key={index}
        className={classes.carouselChild}
        onLoad={childLoadedHandler}
        style={{display: isLoading ? "none" : "block"}}
      >
        {child}
      </div>
    );
  });

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
        {childrenMapped}
      </div>
      {isLoading && <Loading />}
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
