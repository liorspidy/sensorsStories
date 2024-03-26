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
  return (
    <motion.div className={classes.media}
      id="media"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={titleClass} variants={aboutBoxVarients}>
        <h1>ראיונות בתקשורת</h1>
      </motion.div>
      <Carousel>
        <IframeResizer
          forwardRef={iframeRef}
          heightCalculationMethod="lowestElement"
          inPageLinks
          log
          src="https://drive.google.com/file/d/1eT5Ba5EDPXFSd_s6QN7kqOMori6lMnzg/preview"
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
          src="https://drive.google.com/file/d/1x3a_zU1INJqKk6MNd48VrYa_ebDANF7C/preview"
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
          src="https://drive.google.com/file/d/1Z_SqGpDGkFKm--6u3ed0Hsfv2kTg7Tlq/preview"
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
          src="https://drive.google.com/file/d/1uCOc3NJg6i8xfzs5VLOVMz4ANqQM0AXN/preview"
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
