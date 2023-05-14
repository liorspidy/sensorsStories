import title from "../../images/title.png";
import Clouds2 from "../book/clouds/Clouds2";
import classes from "./Title.module.css";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      className={classes.title}
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <img src={title} alt="title" />
      <Clouds2 />
    </motion.div>
  );
};

export default Title;
