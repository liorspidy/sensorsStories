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

  const sensorImgClass = props.isMobile
    ? classes.sensorImgMobile
    : classes.sensorImg;
  const charDescClass = props.isMobile
    ? classes.charDescMobile
    : classes.charDesc;
  const charDescQuoteClass = props.isMobile
    ? classes.charDescQuoteMobile
    : classes.charDescQuote;
  const charDescInviteClass = props.isMobile
    ? classes.charDescInviteMobile
    : classes.charDescInvite;
  return (
    <motion.div
      className={props.sensorBoxClass}
      onMouseEnter={props.hoverSelectHandler}
      onMouseLeave={props.hoverExitHandler}
      variants={charVarients}
    >
      <div className={sensorImgClass}>
        <motion.img
          src={props.img}
          alt={props.name}
          whileHover={{
            rotate: [0, -1, 1, -1, 1, 0],
            transition: { duration: 0.4 },
          }}
        />
      </div>
      <div className={charDescClass}>
        <p
          className={charDescQuoteClass}
          dangerouslySetInnerHTML={{ __html: formattedString }}
        />
        <p className={charDescInviteClass}>{props.p2}</p>
      </div>
    </motion.div>
  );
};

export default Character;
