import title from "../../images/title.png";
import classes from "./Title.module.css";
import { motion } from "framer-motion";

const Title = ({ isMobile }) => {
  const titleBoxClass = isMobile ? classes.titleBoxMobile : classes.titleBox;
  const titleClass = isMobile ? classes.titleMobile : classes.title;
  const scrollDownClass = isMobile
    ? classes.scrollDownMobile
    : classes.scrollDown;
  const scrollDownCircleClass = isMobile
    ? classes.scrollDownCircleMobile
    : classes.scrollDownCircle;

  const scrollToElement = () => {
    const element = document.getElementById("book");
    if (element) {
      return window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    } else {
      return;
    }
  };

  return (
    <div className={titleBoxClass}>
      <motion.div
        className={titleClass}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={title} alt="סיפורי חיישנים" aria-label="כותרת סיפורי חיישנים" />
        {!isMobile && (
          <motion.div className={scrollDownClass} onClick={scrollToElement}>
            <div className={scrollDownCircleClass}></div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Title;
