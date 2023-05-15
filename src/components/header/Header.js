import React from "react";
import logo from "../../images/logoEmpty.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <nav className={classes.header}>
      <Link to="/">
        <div className={classes.header_logo}>
          <img className={classes.logo} src={logo} alt="Logo" />
        </div>
      </Link>
      <div className={classes.header_nav}>
        <motion.a
          className={classes.header_link}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("book").offsetTop,
              behavior: "smooth",
            })
          }
        >
          הספר
        </motion.a>
        <motion.a
          className={classes.header_link}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("author").offsetTop,
              behavior: "smooth",
            })
          }
        >
          הסופרת
        </motion.a>
        <motion.a
          className={classes.header_link}
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("meet").offsetTop,
              behavior: "smooth",
            })
          }
        >
          החישנים
        </motion.a>
        <motion.a
          className={classes.header_link}
          // onClick={() =>
          //   window.scrollTo({
          //     top: document.getElementById("contact").offsetTop,
          //     behavior: "smooth",
          //   })
          // }
        >
          צרו קשר
        </motion.a>
        <motion.a
          className={classes.header_link}
          // onClick={() =>
          //   window.scrollTo({
          //     top: document.getElementById("classes").offsetTop,
          //     behavior: "smooth",
          //   })
          // }
        >
          סדנאות
        </motion.a>
        <motion.a
          className={classes.header_link}
          // onClick={() =>
          //   window.scrollTo({
          //     top: document.getElementById("media").offsetTop,
          //     behavior: "smooth",
          //   })
          // }
        >
          מדיה
        </motion.a>
      </div>
    </nav>
  );
}

export default Header;
