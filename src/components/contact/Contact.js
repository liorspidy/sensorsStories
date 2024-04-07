import { useState } from "react";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";
import hearts from "../../images/hearts1.png";
import momandgirl from "../../images/momandgirl.png";
import emailjs from "emailjs-com";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Loading from "../../tools/loading/Loading";
import axios from "axios";

const Contact = ({ isMobile }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [allowGettingEmail, setAllowGettingEmail] = useState(true);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSenderNameChange = (event) => {
    setSenderName(event.target.value);
  };

  const handleSenderEmailChange = (event) => {
    setSenderEmail(event.target.value);
  };

  const handleSenderPhoneChange = (event) => {
    setSenderPhone(event.target.value);
  };

  const handleallowGettingEmailChange = (event) => {
    setAllowGettingEmail(event.target.checked);
  };

  const addToSubscribers = async (e) => {
    // Validation and formatting checks
    let name = senderName.trim(); // Trim leading and trailing spaces
    if (name.length < 2) {
      setError("שם מלא חייב להכיל לפחות שני תווים");
      return;
    }

    let phone = senderPhone ? senderPhone.replace(/\D/g, "") : "";
    if (phone && !/^\d{9,10}$/.test(phone)) {
      setError("מספר טלפון לא תקין");
      return;
    }

    if (phone && !/^\d{3}-\d{7}$/.test(phone)) {
      setError("מספר טלפון לא תקין");
      return;
    }

    try {
      setIsLoading(true);
      const mylistId = process.env.REACT_APP_MAIN_LIST_ID;
      const subscriber = {
        name: name,
        email: senderEmail,
        phone: phone,
      };

      await axios.post(
        `https://sensorsstoriesbackend.glitch.me/ravmesser/addSubscriber/${mylistId}`,
        subscriber
      );
      setIsMessageSent(true);
      setError("");
    } catch (err) {
      console.log(err);
      setError("קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation checks
    if (!title || !message || !senderName || !senderEmail) {
      setError("יש למלא את כל השדות המסומנים בכוכבית");
      return;
    }
    if (!senderEmail.includes("@")) {
      setError("כתובת המייל אינה חוקית");
      return;
    }

    // If all validations pass, proceed with form submission
    setIsLoading(true);
    setError("");

    let formData = new FormData();
    formData.append("title", title);
    formData.append("message", message);
    formData.append("senderName", senderName);
    formData.append("senderEmail", senderEmail);
    formData.append("senderPhone", senderPhone);

    const form = document.createElement("form");
    formData.forEach((value, key) => {
      const field = document.createElement("input");
      field.setAttribute("type", "hidden");
      field.setAttribute("name", key);
      field.setAttribute("value", value);
      form.appendChild(field);
    });

    try {
      // If user agrees to receive emails, add them to the mailing list
      if (allowGettingEmail) {
        await addToSubscribers();

        // Proceed with sending the email
        await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form,
          process.env.REACT_APP_PUBLIC_KEY
        );
      } else {
        // Send email without adding to subscribers
        await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form,
          process.env.REACT_APP_PUBLIC_KEY
        );
      }

      setIsMessageSent(true);
    } catch (err) {
      console.error(err);
      setError("קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים");
    } finally {
      setIsLoading(false);
      setTitle("");
      setMessage("");
      setSenderEmail("");
    }
  };

  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const momVarients = {
    offscreen: { x: -30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const heartsVarients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 0.8 } },
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
  const checkboxContainerClass = isMobile
    ? classes.checkboxContainerMobile
    : classes.checkboxContainer;

  return (
    <motion.div
      className={ContactCompClass}
      id="contact"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.4 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={titleClass} variants={aboutBoxVarients}>
        <h2>צרו קשר </h2>
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
          {!isMessageSent && !isLoading && (
            <form onSubmit={handleSubmit} className={formClass}>
              <div className={contactDivClass}>
                <label htmlFor="senderName">שמך המלא</label>
                <input
                  type="text"
                  id="senderName"
                  value={senderName}
                  onChange={handleSenderNameChange}
                  required
                ></input>
              </div>
              <div className={contactDivClass}>
                <label htmlFor="senderEmail">דוא"ל</label>
                <input
                  type="email"
                  id="senderEmail"
                  value={senderEmail}
                  onChange={handleSenderEmailChange}
                  required
                />
              </div>
              <div className={contactDivClass}>
                <label htmlFor="senderPhone">טלפון</label>
                <input
                  type="tel"
                  id="senderPhone"
                  value={senderPhone}
                  onChange={handleSenderPhoneChange}
                />
              </div>
              <div className={contactDivClass}>
                <label htmlFor="title">הנושא</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>
              <div className={contactDivClass}>
                <label htmlFor="message">ההודעה</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
              </div>
              <label className={checkboxContainerClass}>
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
              <div className={contactButtonIconClass}>
                <button type="submit">לשליחה</button>
              </div>
            </form>
          )}
          {isLoading && <Loading />}
          {isMessageSent && !isLoading && (
            <div className={classes.sent}>
              <p>תודה רבה על פנייתך!</p>
              <div className={classes.checkmarkBox}>
                <CheckCircleOutlineIcon className={classes.checkmark} />
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
