import classes from "./Carousel.module.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Children, useEffect, useRef, useState } from "react";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";

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
    if (
      nextPosition >= contentRef.current.scrollWidth ||
      contentRef.current.scrollWidth - nextPosition <= 2
    ) {
      setScrollPosition(0);
    } else {
      setScrollPosition(nextPosition);
    }
  };

  const handlePrev = () => {
    const nextPosition = scrollPosition - contentRef.current.clientWidth;
    console.log(
      scrollPosition,
      contentRef.current.clientWidth,
      scrollPosition - contentRef.current.clientWidth
    );
    if (nextPosition < 0) {
      console.log("here");
      setScrollPosition(contentRef.current.scrollWidth);
    } else {
      console.log("there")
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
        style={{ display: isLoading ? "none" : "block" }}
      >
        {child}
      </div>
    );
  });

  return (
    <div className={classes.carousel}>
      <motion.button
        className={classes.arrowIcon}
        onClick={handlePrev}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      >
        <ArrowBackIosNewRoundedIcon
          sx={{
            fontSize: 50,
            cursor: "pointer",
          }}
        />
      </motion.button>
      <div className={classes.content} ref={contentRef}>
        {childrenMapped}
      </div>
      {isLoading && <Loading />}
      <motion.button
        className={classes.arrowIcon}
        onClick={handleNext}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            fontSize: 50,
            cursor: "pointer",
          }}
        />
      </motion.button>
    </div>
  );
};

export default Carousel;
