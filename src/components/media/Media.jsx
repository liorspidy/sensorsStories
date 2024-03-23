import { useRef } from "react";
import classes from "./Media.module.css";
import IframeResizer from "iframe-resizer-react";
import Carousel from "../../tools/carousel/Carousel";

const Media = ({ isMobile }) => {
  const iframeRef = useRef(null);

  return (
    <div className={classes.media}>
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
    </div>
  );
};

export default Media;
