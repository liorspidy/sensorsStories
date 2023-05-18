import classes from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";

const Footer = () => {
  const emailClickHandler = () => {
    window.location.href = "mailto:ketybirman@gmail.com";
  };

  const phoneClickHandler = () => {
    window.location.href = "tel:0547877837";
  };

  const facebookClickHandler = () => {
    window.open("https://www.facebook.com/ketybirman");
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.details}>
        <div className={classes.detail}>
          <EmailIcon className={classes.icon} onClick={emailClickHandler} />
          <h5>ketybirman@gmail.com</h5>
        </div>
        <div className={classes.detail}>
          <LocalPhoneIcon
            className={classes.icon}
            title="0547877837"
            onClick={phoneClickHandler}
          />
          <h5>054-7877837</h5>
        </div>
        <Link to="https://www.facebook.com/sfatharegesh">
          <div className={classes.detail}>
            <FacebookIcon
              className={classes.icon}
              onClick={facebookClickHandler}
              style={{ fontSize: "2.4rem" }}
            />
            <InstagramIcon
              className={classes.icon}
              onClick={facebookClickHandler}
              style={{ fontSize: "2.4rem" }}
            />
          </div>
        </Link>
      </div>
      <div className={classes.footerCol}>
        <h5>Lior Fridman 2023 ©</h5>
      </div>
    </footer>
  );
};

export default Footer;
