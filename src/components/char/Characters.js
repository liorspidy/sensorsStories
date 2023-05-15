import classes from "./Characters.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import CharactersJson from "./Characters.json";
import Character from "./Character";

const Characters = () => {
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

  return (
    <motion.div
      id="meet"
      className={classes.Characters}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={classes.title} variants={aboutBoxVarients}>
        <h1>הכירו את החישנים</h1>
      </motion.div>
      <motion.div className={classes.chars}>
        {CharactersJson.map((sensor, index) => {
          let sensorBoxClass =
            chooseSensor === sensor
              ? `${classes.sensorsBox}`
              : `${classes.sensorsBox} ${classes.blured} `;

          let parClass =
            chooseSensor === sensor
              ? `${classes.charDesc}`
              : `${classes.charDesc} ${classes.hidden} `;

          if (chooseSensor === null) {
            sensorBoxClass = `${classes.sensorsBox}`;
            parClass = `${classes.charDesc} ${classes.hidden}`;
          }
          return (
            <Character
              key={index}
              sensorBoxClass={sensorBoxClass}
              parClass={parClass}
              hoverSelectHandler={hoverSelectHandler.bind(this, sensor)}
              hoverExitHandler={hoverExitHandler}
              name={sensor.name}
              p1={sensor.p1}
              p2={sensor.p2}
              img={sensor.img}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Characters;
