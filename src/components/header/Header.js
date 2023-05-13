import React from 'react';
import logo from '../../images/logoEmpty.png';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className={classes.header}>
      <Link to="/">
        <div className={classes.header_logo}>
          <img className={classes.logo} src={logo} alt="Logo" />
        </div>
      </Link>
      <div className={classes.header_nav}>
        <Link className={classes.header_link} to="/about">
          אודות
        </Link>
        <Link className={classes.header_link} to="/contact">
          צרו קשר
        </Link>
        <Link className={classes.header_link} to="/classes">
          סדנאות
        </Link>
        <Link className={classes.header_link} to="/media">
          מדיה
        </Link>
      </div>
    </nav>
  );
}

export default Header;
