import React, { Children } from "react";
import classes from "./Carousel.module.scss";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Loading from "../loading/Loading";
import { useCarousel } from "./useCarousel";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const {
    contentRef,
    isLoading,
    handleNext,
    handlePrev,
    childLoadedHandler,
  } = useCarousel(children);

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
      <button
        className={classes.arrowIcon}
        onClick={handlePrev}
      >
        <ArrowBackIosNewRoundedIcon
          sx={{
            fontSize: 50,
            cursor: "pointer",
          }}
        />
      </button>
      <div className={classes.content} ref={contentRef}>
        {childrenMapped}
      </div>
      {isLoading && <Loading />}
      <button
        className={classes.arrowIcon}
        onClick={handleNext}
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            fontSize: 50,
            cursor: "pointer",
          }}
        />
      </button>
    </div>
  );
};

export default Carousel;
