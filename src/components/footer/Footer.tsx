import React from "react";
import classes from "./Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";


const Footer = () => {
  const emailClickHandler = (): void => {
    window.location.href = "mailto:ketybirman@gmail.com";
  };

  const phoneClickHandler = (): void => {
    window.location.href = "tel:0547877837";
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
        <div className={classes.links}>
          <a
            href="https://www.facebook.com/sfatharegesh"
            target="_blank"
            className={classes.detail} rel="noreferrer"
          >
            <FacebookIcon
              className={classes.icon}
              style={{ fontSize: "2.4rem" }}
            />
          </a>
          <a
            href="https://www.instagram.com/ketybirman/"
            target="_blank"
            className={classes.detail} rel="noreferrer"
          >
            <InstagramIcon
              className={classes.icon}
              style={{ fontSize: "2.4rem" }}
            />
          </a>
        </div>
      </div>
      <div className={classes.footerCol}>
        <h5>כל הזכויות לספר ולאיורים שמורות לקטי בירמן בלבד ©</h5>
      </div>
    </footer>
  );
};

export default Footer;
