import title from "../../images/title.png";
import Clouds2 from "../book/clouds/Clouds2";
import classes from "./Title.module.css";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div>
      <motion.div
        className={classes.title}
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={title} alt="title" />
        <motion.div
          className={classes.scrollDown}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("book").offsetTop,
              behavior: "smooth",
            })
          }
        >
          <div className={classes.scrollDownCircle}></div>
        </motion.div>
      </motion.div>

      <Clouds2 />
    </motion.div>
  );
};

export default Title;
