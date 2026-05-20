import React from "react";
import classes from "./Contact.module.scss";
import { motion } from "framer-motion";
import hearts from "../../assets/images/hearts1.png";
import momandgirl from "../../assets/images/momandgirl.png";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Loading from "../../tools/loading/Loading";
import { useContact } from "./useContact";

const Contact = () => {
  const {
    title,
    message,
    senderName,
    senderEmail,
    senderPhone,
    allowGettingEmail,
    isMessageSent,
    isLoading,
    error,
    handleTitleChange,
    handleMessageChange,
    handleSenderNameChange,
    handleSenderEmailChange,
    handleSenderPhoneChange,
    handleallowGettingEmailChange,
    handleSubmit
  } = useContact();

  const duration = 0.4;


  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration } },
  };

  const momVarients = {
    offscreen: { x: -30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration } },
  };

  const heartsVarients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration } },
  };

  return (
    <motion.div
      className={classes.contactComp}
      id="contact"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.4 }}
      viewport={{ once: true, amount: 0.1 }}
    >
<div className={classes.contactBox}>
        <div className={classes.contactPhotos}>
          <motion.img
            variants={momVarients}
            whileHover={{
              rotate: [0, -1, 1, -1, 1, 0],
              transition: { duration: 0.4 },
            }}
            className={classes.hearts}
            src={hearts}
            alt="רגשות"
          />
          <motion.img
            variants={heartsVarients}
            whileHover={{
              rotate: [0, -1, 1, -1, 1, 0],
              transition: { duration: 0.4 },
            }}
            className={classes.momandgirl}
            src={momandgirl}
            alt="אמא ובת"
          />
        </div>
        <motion.div className={classes.contactDetails} variants={aboutBoxVarients}>
          {!isMessageSent && !isLoading && (
            <form onSubmit={handleSubmit} className={classes.form}>
              <div className={classes.contactDiv}>
                <label htmlFor="senderName">שמך המלא</label>
                <input
                  type="text"
                  id="senderName"
                  value={senderName}
                  onChange={handleSenderNameChange}
                  required
                ></input>
              </div>
              <div className={classes.contactDiv}>
                <label htmlFor="senderEmail">דוא"ל</label>
                <input
                  type="email"
                  id="senderEmail"
                  value={senderEmail}
                  onChange={handleSenderEmailChange}
                  required
                />
              </div>
              <div className={classes.contactDiv}>
                <label htmlFor="senderPhone">טלפון</label>
                <input
                  type="tel"
                  id="senderPhone"
                  value={senderPhone}
                  onChange={handleSenderPhoneChange}
                />
              </div>
              <div className={classes.contactDiv}>
                <label htmlFor="title">הנושא</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>
              <div className={classes.contactDiv}>
                <label htmlFor="message">ההודעה</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
              </div>
              <label className={classes.checkboxContainer}>
                <input
                  type="checkbox"
                  id="allowGettingEmail"
                  checked={allowGettingEmail}
                  onChange={handleallowGettingEmailChange}
                />
                <span className={classes.checkboxCheckmark}></span>
                <span>
                  אני מסכים/ה להצטרף לקהילה של קטי בירמן ולקבל עדכונים על
                  סדנאות, הרצאות, ספרים חדשים ועוד בדוא"ל ובסלולר.
                </span>
              </label>

              {error.length > 0 && (
                <p className={classes.errorMessage}>{error}</p>
              )}
              <div className={classes.formButton}>
                <button type="submit">לשליחה</button>
              </div>
            </form>
          )}
          {isLoading && <Loading />}
          {isMessageSent && !isLoading && (
            <div className={classes.sent}>
              <p>תודה רבה על פנייתך!</p>
              <div className={classes.checkmarkBox}>
                <CheckCircleOutlinedIcon className={classes.checkmark} />
              </div>
              <p>המייל נשלח בהצלחה נחזור אליך בהקדם</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
