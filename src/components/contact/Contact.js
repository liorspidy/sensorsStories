import React, { useState } from "react";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";
import hearts from "../../images/hearts1.png";
import momandgirl from "../../images/momandgirl.png";
import emailjs from "emailjs-com";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Contact = ({ isMobile }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSenderEmailChange = (event) => {
    setSenderEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("title", title);
    formData.append("message", message);
    formData.append("senderEmail", senderEmail);

    const form = document.createElement("form");
    formData.forEach((value, key) => {
      const field = document.createElement("input");
      field.setAttribute("type", "hidden");
      field.setAttribute("name", key);
      field.setAttribute("value", value);
      form.appendChild(field);
    });

    console.log(process.env.REACT_APP_SERVICE_ID);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        setIsMessageSent(true),
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );

    setTitle("");
    setMessage("");
    setSenderEmail("");
  };

  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const momVarients = {
    offscreen: { x: -30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const heartsVarients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 2 } },
  };

  const ContactCompClass = isMobile
    ? classes.contactCompMobile
    : classes.contactComp;
  const titleClass = isMobile ? classes.titleMobile : classes.title;
  const contactBoxClass = isMobile
    ? classes.contactBoxMobile
    : classes.contactBox;
  const contactPhotosClass = isMobile
    ? classes.contactPhotosMobile
    : classes.contactPhotos;
  const heartsClass = isMobile ? classes.heartsMobile : classes.hearts;
  const momandgirlClass = isMobile
    ? classes.momandgirlMobile
    : classes.momandgirl;
  const contactDetailsClass = isMobile
    ? classes.contactDetailsMobile
    : classes.contactDetails;
  const formClass = isMobile ? classes.formMobile : classes.form;
  const contactDivClass = isMobile
    ? classes.contactDivMobile
    : classes.contactDiv;
  const contactButtonIconClass = isMobile
    ? classes.formButtonMobile
    : classes.formButton;

  return (
    <motion.div
      className={ContactCompClass}
      id="contact"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={titleClass} variants={aboutBoxVarients}>
        <h1>שלחו הודעה</h1>
      </motion.div>
      <div className={contactBoxClass}>
        <div className={contactPhotosClass}>
          <motion.img
            variants={momVarients}
            whileHover={{
              rotate: [0, -1, 1, -1, 1, 0],
              transition: { duration: 0.4 },
            }}
            className={heartsClass}
            src={hearts}
            alt="רגשות"
          />
          <motion.img
            variants={heartsVarients}
            whileHover={{
              rotate: [0, -1, 1, -1, 1, 0],
              transition: { duration: 0.4 },
            }}
            className={momandgirlClass}
            src={momandgirl}
            alt="אמא ובת"
          />
        </div>
        <motion.div className={contactDetailsClass} variants={aboutBoxVarients}>
          {!isMessageSent && (
            <form onSubmit={handleSubmit} className={formClass}>
              <div className={contactDivClass}>
                <label htmlFor="title">מה הנושא?</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>
              <div className={contactDivClass}>
                <label htmlFor="message">מה ההודעה?</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
              </div>
              <div className={contactDivClass}>
                <label htmlFor="senderEmail">מה המייל שלך?</label>
                <input
                  type="email"
                  id="senderEmail"
                  value={senderEmail}
                  onChange={handleSenderEmailChange}
                  required
                />
              </div>
              <div className={contactButtonIconClass}>
                <button type="submit">לשליחה</button>
              </div>
            </form>
          )}
          {isMessageSent && (
            <div className={classes.sent}>
              <p>תודה רבה על פנייתך!</p>
              <div className={classes.checkmarkBox}>
                <CheckCircleOutlineIcon className={classes.checkmark} />
              </div>
              <h5>המייל נשלח בהצלחה נחזור אליך בהקדם</h5>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
