import React, { useState, useEffect } from "react";
import Book from "../book/Book";
import classes from "./Main.module.css";
import Author from "../author/Author";
import Title from "../title/Title";
import Characters from "../char/Characters";
import Contact from "../contact/Contact";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { motion } from "framer-motion";
// import Buy from "../buy/Buy";
import Clouds from "../book/clouds/Clouds";

const Main = (props) => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactElement = document.getElementById("book");
      if (contactElement) {
        const contactRect = contactElement.getBoundingClientRect();
        setShowArrow(contactRect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: document.getElementById("main").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Clouds>
      <div className={classes.main}>
        {!props.isMobile && showArrow && (
          <motion.div className={classes.arrowUp} onClick={scrollToTop}>
            <ArrowCircleUpIcon className={classes.arrowUpIcon} />
            <h4>חזרה למעלה</h4>
          </motion.div>
        )}
        <Title isMobile={props.isMobile} />
        <Book isMobile={props.isMobile} />
        <Author isMobile={props.isMobile} />
        <Characters isMobile={props.isMobile} />
        {/* <Buy isMobile={props.isMobile} /> */}
        <Contact id="contact" isMobile={props.isMobile} />
      </div>
    </Clouds>
  );
};

export default Main;
