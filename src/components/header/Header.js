import React from "react";
import logo from "../../images/logo.jpeg";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </a>
      </div>
      <div className={styles.header__nav}>
        <a className={`${styles.header__nav}-link`} href="/">
          אודות
        </a>
        <a className={`${styles.header__nav}-link`} href="/about">
          סדנאות
        </a>
        <a className={`${styles.header__nav}-link`} href="/contact">
          ראיונות
        </a>
      </div>
    </nav>
  );
}

export default Header;
