import logo from "../../images/logoEmpty.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BasicMenu from "./menu/BasicMenu";

function Header({ isMobile }) {
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
            className={headerLinkClass}
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
            className={headerLinkClass}
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
            className={headerLinkClass}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("buy").offsetTop,
                behavior: "smooth",
              })
            }
          >
            לרכישה
          </motion.a>
          <motion.a
            className={headerLinkClass}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("contact").offsetTop,
                behavior: "smooth",
              })
            }
          >
            צרו קשר
          </motion.a>
          <motion.a
            className={headerLinkClass}
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
            className={headerLinkClass}
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
      )}
    </nav>
  );
}

export default Header;
