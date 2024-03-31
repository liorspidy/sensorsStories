import { useState } from "react";
import classes from "./Community.module.css";
import { motion } from "framer-motion";

const Community = ({ isMobile }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const titleClass = isMobile ? classes.titleContainerMobile : classes.titleContainer;
  const communityClass = isMobile ? classes.communityMobile : classes.community;
  const formClass = isMobile ? classes.formMobile : classes.form;
  const inputContainerClass = isMobile
    ? classes.inputContainerMobile
    : classes.inputContainer;
  const formButtonClass = isMobile
    ? classes.formButtonMobile
    : classes.formButton;
  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={communityClass}>
      <motion.div className={titleClass} variants={aboutBoxVarients}>
        <h3 className={classes.title}>הצטרפו לקהילה</h3>
      </motion.div>
      <form className={formClass} onSubmit={sumbitHandler}>
        {!isSubmitted && (
          <div className={classes.unsubmitted}>
            <div className={inputContainerClass}>
              <label htmlFor="name">
                שם
                <input type="text" />
              </label>
            </div>
            <div className={inputContainerClass}>
              <label htmlFor="email">
                אימייל
                <input type="email" />
              </label>
            </div>
            <div className={inputContainerClass}>
              <label htmlFor="phone">
                טלפון
                <input type="tel" />
              </label>
            </div>
            <div className={formButtonClass}>
              <button type="submit">הצטרף</button>
            </div>
          </div>
        )}

        {isSubmitted && (
          <div className={classes.submitted}>
            <p>הבקשה נשלחה!</p>
            <p>נהיה בקשר :)</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Community;
