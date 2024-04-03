import React, { useState, useEffect } from "react";
import logo from "../../images/logoEmpty.png";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import BasicMobileMenu from "./menu/BasicMobileMenu";

function Header({ isMobile }) {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  function scrollToElement(elementId) {
    return () => {
      const element = document.getElementById(elementId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    };
  }

  const headerClass = isMobile ? classes.headerMobile : classes.header;
  const headerLogoClass = isMobile
    ? classes.headerLogoMobile
    : classes.headerLogo;
  const logoClass = isMobile ? classes.logoMobile : classes.logo;
  const headerNavClass = isMobile
    ? classes.header_navMobile
    : classes.header_nav;
  const headerLinkClass = isMobile
    ? classes.header_linkMobile
    : classes.header_link;

  return (
    <nav className={`${headerClass} ${visible ? "" : classes.hidden}`} id="main">
      <a className={headerLogoClass} href="/">
        <img className={logoClass} src={logo} alt="Logo" />
      </a>
      {isMobile && <BasicMobileMenu />}
      {!isMobile && (
        <nav className={headerNavClass}>
          <Link
            className={headerLinkClass}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("book"), 100);
            }}
          >
            הספר
          </Link>
          <Link
            className={headerLinkClass}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("author"), 100);
            }}
          >
            אודות
          </Link>
          <Link
            className={headerLinkClass}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("meet"), 100);
            }}
          >
            החישנים
          </Link>
          <Link
            className={headerLinkClass}
            to="/"
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("contact"), 100);
            }}
          >
            צרו קשר
          </Link>
          <Link
            className={headerLinkClass}
            to="/courses"
            onClick={() => {
              navigate("/courses");
            }}
          >
            קורסים והרצאות
          </Link>
        </nav>
      )}
    </nav>
  );
}

export default Header;
