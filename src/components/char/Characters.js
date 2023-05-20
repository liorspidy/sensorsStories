import classes from "./Characters.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import CharactersJson from "./Characters.json";
import Character from "./Character";

const Characters = ({ isMobile }) => {
  const [chooseSensor, setChooseSensor] = useState(null);
  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const hoverSelectHandler = (sensor) => {
    setChooseSensor(sensor);
  };

  const hoverExitHandler = () => {
    setChooseSensor(null);
  };

  const CharactersClass = isMobile
    ? classes.CharactersMobile
    : classes.Characters;
  const titleClass = isMobile ? classes.titleMobile : classes.title;
  const charsClass = isMobile ? classes.charsMobile : classes.chars;
  const sensorsBoxClass = isMobile
    ? classes.sensorsBoxMobile
    : classes.sensorsBox;
  const charDescClass = isMobile ? classes.charDescMobile : classes.charDesc;
  return (
    <motion.div
      id="meet"
      className={CharactersClass}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={titleClass} variants={aboutBoxVarients}>
        <h1>הכירו את החישנים</h1>
      </motion.div>
      <motion.div className={charsClass}>
        {CharactersJson.map((sensor, index) => {
          let sensorsBoxClassClass =
            chooseSensor === sensor
              ? `${sensorsBoxClass}`
              : `${sensorsBoxClass} ${classes.blured} `;

          let parClass =
            chooseSensor === sensor
              ? `${charDescClass}`
              : `${charDescClass} ${classes.hidden} `;

          if (chooseSensor === null) {
            sensorsBoxClassClass = `${sensorsBoxClass}`;
            parClass = `${charDescClass} ${classes.hidden}`;
          }
          return (
            <Character
              key={index}
              sensorBoxClass={sensorsBoxClassClass}
              parClass={parClass}
              hoverSelectHandler={hoverSelectHandler.bind(this, sensor)}
              hoverExitHandler={hoverExitHandler}
              name={sensor.name}
              p1={sensor.p1}
              p2={sensor.p2}
              img={sensor.img}
              isMobile={isMobile}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Characters;
