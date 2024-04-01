import classes from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = ({ isMobile }) => {
  const emailClickHandler = () => {
    window.location.href = "mailto:ketybirman@gmail.com";
  };

  const phoneClickHandler = () => {
    window.location.href = "tel:0547877837";
  };

  const footerMobile = isMobile ? classes.footerMobile : classes.footer;
  const detailsMobile = isMobile ? classes.detailsMobile : classes.details;
  const detailMobile = isMobile ? classes.detailMobile : classes.detail;
  const iconMobile = isMobile ? classes.iconMobile : classes.icon;
  const footerCol = isMobile ? classes.footerColMobile : classes.footerCol;

  return (
    <footer className={footerMobile}>
      <div className={detailsMobile}>
        <div className={detailMobile}>
          <EmailIcon className={iconMobile} onClick={emailClickHandler} />
          <h5>ketybirman@gmail.com</h5>
        </div>
        <div className={classes.detail}>
          <LocalPhoneIcon
            className={iconMobile}
            title="0547877837"
            onClick={phoneClickHandler}
          />
          <h5>054-7877837</h5>
        </div>
        <div className={classes.links}>
          <a
            href="https://www.facebook.com/sfatharegesh"
            target="_blank"
            className={detailMobile} rel="noreferrer"
          >
            <FacebookIcon
              className={iconMobile}
              style={{ fontSize: "2.4rem" }}
            />
          </a>
          <a
            href="https://www.instagram.com/ketybirman/"
            target="_blank"
            className={detailMobile} rel="noreferrer"
          >
            <InstagramIcon
              className={iconMobile}
              style={{ fontSize: "2.4rem" }}
            />
          </a>
        </div>
      </div>
      <div className={footerCol}>
        <h5>כל הזכויות לספר ולאיורים שמורות לקטי בירמן בלבד ©</h5>
      </div>
    </footer>
  );
};

export default Footer;
