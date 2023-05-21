import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./BasicMenu.module.css";
import { useNavigate } from "react-router-dom";

const BasicMenu = () => {
  const navigate = useNavigate();
  const [menuClicked, setMenuClicked] = useState(false);

  function scrollToElement(elementId) {
    return () => {
      const element = document.getElementById(elementId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
      setMenuClicked(false);
    };
  }

  const menuClickedHandler = () => {
    setMenuClicked((prev) => (prev = !prev));
  };

  return (
    <div className={classes.basicMenu}>
      <div className={classes.menuIcon}>
        <MenuIcon
          sx={{ fontSize: "6rem", color: "#53524d" }}
          onClick={menuClickedHandler}
        />
      </div>
      {menuClicked && (
        <div className={classes.backdrop}>
          <ul className={classes.menuList}>
            <li
              className={classes.menuListItem}
              onClick={() => {
                navigate("/");
                setTimeout(scrollToElement("book"), 100);
              }}
            >
              הספר
            </li>
            <li
              className={classes.menuListItem}
              onClick={() => {
                navigate("/");
                setTimeout(scrollToElement("author"), 100);
              }}
            >
              הסופרת
            </li>
            <li
              className={classes.menuListItem}
              onClick={() => {
                navigate("/");
                setTimeout(scrollToElement("meet"), 100);
              }}
            >
              החישנים
            </li>
            <li
              className={classes.menuListItem}
              onClick={() => {
                navigate("/");
                setTimeout(scrollToElement("buy"), 100);
              }}
            >
              לרכישה
            </li>
            <li
              className={classes.menuListItem}
              onClick={() => {
                navigate("/");
                setTimeout(scrollToElement("contact"), 100);
              }}
            >
              צרו קשר
            </li>
            <li className={classes.menuListItem}>סדנאות</li>
            <li className={classes.menuListItem}>מדיה</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BasicMenu;
