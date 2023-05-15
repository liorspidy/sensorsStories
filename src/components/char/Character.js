import classes from "./Characters.module.css";
import { motion } from "framer-motion";

const Character = (props) => {
  const formattedString = props.p1.replace(/\n/g, "<br>");

  const charVarients = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      className={props.sensorBoxClass}
      onMouseEnter={props.hoverSelectHandler}
      onMouseLeave={props.hoverExitHandler}
      variants={charVarients}
    >
      <div className={classes.sensorImg}>
        <motion.img
          src={props.img}
          alt={props.name}
          whileHover={{
            rotate: [0, -1, 1, -1, 1, 0],
            transition: { duration: 0.4 },
          }}
        />
      </div>
      <div className={props.parClass}>
        <p
          className={classes.charDescQuote}
          dangerouslySetInnerHTML={{ __html: formattedString }}
        />
        <p className={classes.charDescInvite}>{props.p2}</p>
      </div>
    </motion.div>
  );
};

export default Character;
