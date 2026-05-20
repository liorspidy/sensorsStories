import React from "react";
import logo from "../../assets/images/logoEmpty.png";
import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "../mobileMenu/MobileMenu";
import { useHeader } from "./useHeader";

const Header = () => {
  const navigate = useNavigate();
  const {
    visible,
    scrolled,
    menuOpen,
    setMenuOpen,
    scrollToElement,
    handleMouseEnter,
    handleMouseLeave
  } = useHeader();

  return (
    <>
      <nav
        className={`${classes.header} ${visible ? "" : classes.hidden} ${scrolled ? classes.scrolled : ""}`}
        id="main"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a className={classes.headerLogo} href="/">
          <img className={classes.logo} src={logo} alt="Logo" />
        </a>

        {/* Hamburger button — hidden on desktop via CSS */}
        <button
          className={`hamburger${menuOpen ? " open" : ""} ${classes.hamburgerWrapper}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line line-1" />
          <span className="hamburger-line line-2" />
          <span className="hamburger-line line-3" />
        </button>

        {/* Desktop nav — hidden on mobile via CSS */}
        <nav className={classes.headerNav}>
          <Link
            className={classes.headerLink}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("book"), 100);
            }}
          >
            הספר
          </Link>
          <Link
            className={classes.headerLink}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("author"), 100);
            }}
          >
            אודות
          </Link>
          <Link
            className={classes.headerLink}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("community"), 100);
            }}
          >
            הקהילה
          </Link>
          <Link
            className={classes.headerLink}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("meet"), 100);
            }}
          >
            החישנים
          </Link>
          <Link
            className={classes.headerLink}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("contact"), 100);
            }}
          >
            צרו קשר
          </Link>
          <Link
            className={classes.headerLink}
            to="/courses"
            onClick={() => {
              navigate("/courses");
            }}
          >
            קורסים והרצאות
          </Link>
        </nav>
      </nav>

      {/* Mobile menu — rendered outside nav to avoid z-index issues, hidden on desktop via CSS */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

export default Header;
