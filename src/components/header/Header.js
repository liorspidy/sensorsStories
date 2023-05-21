import logo from "../../images/logoEmpty.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BasicMenu from "./menu/BasicMenu";
import { useNavigate } from "react-router-dom";

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

function Header({ isMobile }) {
  const navigate = useNavigate();

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
    <nav className={headerClass} id="main">
      <Link to="/">
        <div className={headerLogoClass}>
          <img className={logoClass} src={logo} alt="Logo" />
        </div>
      </Link>
      {isMobile && <BasicMenu />}
      {!isMobile && (
        <div className={headerNavClass}>
          <motion.a
            className={headerLinkClass}
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("book"), 100);
            }}
          >
            הספר
          </motion.a>
          <motion.a
            className={headerLinkClass}
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("author"), 100);
            }}
          >
            הסופרת
          </motion.a>
          <motion.a
            className={headerLinkClass}
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("meet"), 100);
            }}
          >
            החישנים
          </motion.a>
          <motion.a
            className={headerLinkClass}
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("buy"), 100);
            }}
          >
            לרכישה
          </motion.a>
          <motion.a
            className={headerLinkClass}
            onClick={() => {
              navigate("/");
              setTimeout(scrollToElement("contact"), 100);
            }}
          >
            צרו קשר
          </motion.a>
          <motion.a className={headerLinkClass}>סדנאות</motion.a>
          <motion.a className={headerLinkClass}>מדיה</motion.a>
        </div>
      )}
    </nav>
  );
}

export default Header;
