import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './BasicMenu.module.css';

const BasicMenu = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const menuClickedHandler = () => {
    setMenuClicked((prev) => (prev = !prev));
  };

  return (
    <div className={classes.basicMenu}>
      <div className={classes.menuIcon}>
        <MenuIcon
          sx={{ fontSize: '2.5rem', color: '#53524d' }}
          onClick={menuClickedHandler}
        />
      </div>
      {menuClicked && (
        <div className={classes.backdrop}>
          <ul className={classes.menuList}>
            <li
              className={classes.menuListItem}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('book').offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              הספר
            </li>
            <li
              className={classes.menuListItem}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('author').offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              הסופרת
            </li>
            <li
              className={classes.menuListItem}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('meet').offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              החישנים
            </li>
            <li
              className={classes.menuListItem}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('buy').offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              לרכישה
            </li>
            <li
              className={classes.menuListItem}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('contact').offsetTop,
                  behavior: 'smooth',
                })
              }
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
