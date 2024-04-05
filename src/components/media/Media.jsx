import { useRef } from "react";
import classes from "./Media.module.css";
import IframeResizer from "iframe-resizer-react";
import Carousel from "../../tools/carousel/Carousel";
import {motion} from "framer-motion";

const Media = ({ isMobile }) => {
  const iframeRef = useRef(null);
  const titleClass = isMobile ? classes.titleMobile : classes.title;
  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const mediaClass = isMobile ? classes.mediaMobile : classes.media;

  return (
    <motion.div className={mediaClass}
      id="media"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={titleClass} variants={aboutBoxVarients}>
        <h2>ראיונות בתקשורת</h2>
      </motion.div>
      <Carousel>
        <IframeResizer
          forwardRef={iframeRef}
          heightCalculationMethod="lowestElement"
          inPageLinks
          log
          src="https://www.youtube.com/embed/3OhJ62f36kI?si=JUVWLUZafcHxkePA"
          style={{
            height: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            border: "none",
          }}
        />

        <IframeResizer
          forwardRef={iframeRef}
          heightCalculationMethod="lowestElement"
          inPageLinks
          log
          src="https://www.youtube.com/embed/kKTOGu8azZI?si=gaTOTKR6AC6MiIl_"
          style={{
            height: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            border: "none",
          }}
        />
      </Carousel>
    </motion.div>
  );
};

export default Media;
