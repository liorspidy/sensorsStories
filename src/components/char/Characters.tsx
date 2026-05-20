import React from "react";
import classes from "./Characters.module.scss";
import { motion } from "framer-motion";
import CharactersJson from "./Characters.json";
import Character from "./Character";

interface SensorData {
  id: number;
  name: string;
  p1: string;
  p2: string;
  img: string;
}

const Characters = () => {
  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  return (
    <motion.div
      id="meet"
      className={classes.Characters}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.4 }}
      viewport={{ once: true, amount: 0.1 }}
    >
<motion.div className={classes.chars}>
        {(CharactersJson as SensorData[]).map((sensor, index) => (
          <Character
            key={index}
            sensorBoxClass={classes.sensorsBox}
            name={sensor.name}
            p1={sensor.p1}
            p2={sensor.p2}
            img={sensor.img}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Characters;
