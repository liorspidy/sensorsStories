import title from "../../images/title.png";
import Clouds2 from "../book/clouds/Clouds2";
import classes from "./Title.module.css";
import { motion } from "framer-motion";

const Title = ({ isMobile }) => {
  const titleBoxClass = isMobile ? classes.titleBoxMobile : classes.titleBox;
  const scrollDownClass = isMobile
    ? classes.scrollDownMobile
    : classes.scrollDown;
  const scrollDownCircleClass = isMobile
    ? classes.scrollDownCircleMobile
    : classes.scrollDownCircle;

  return (
    <motion.div className={titleBoxClass}>
      <motion.div
        className={classes.title}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={title} alt="title" />
        <motion.div
          className={scrollDownClass}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("book").offsetTop,
              behavior: "smooth",
            })
          }
        >
          <div className={scrollDownCircleClass}></div>
        </motion.div>
      </motion.div>
      <Clouds2 />
    </motion.div>
  );
};

export default Title;
