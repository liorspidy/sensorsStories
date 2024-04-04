import { useEffect, useState } from "react";
import classes from "./Community.module.css";
import { motion } from "framer-motion";
import axios from "axios";

const Community = ({ isMobile }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subscriberName, setSubscriberName] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscriberPhone, setSubscriberPhone] = useState("");
  const [subscriberError, setSubscriberError] = useState("");

  const titleClass = isMobile
    ? classes.titleContainerMobile
    : classes.titleContainer;
  const communityClass = isMobile ? classes.communityMobile : classes.community;
  const formClass = isMobile ? classes.formMobile : classes.form;
  const inputContainerClass = isMobile
    ? classes.inputContainerMobile
    : classes.inputContainer;
  const formButtonClass = isMobile
    ? classes.formButtonMobile
    : classes.formButton;
  const aboutBoxVariants = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
  
    // Validation and formatting checks
    let name = subscriberName.trim(); // Trim leading and trailing spaces
    if (name.length < 2) {
      setSubscriberError("שם מלא חייב להכיל לפחות שני תווים");
      return;
    }
  
    let phone = subscriberPhone.replace(/\D/g, ''); 
    if (!/^\d{9,10}$/.test(phone)) {
      setSubscriberError("מספר טלפון לא תקין");
      return;
    }
    
    phone = phone.replace(/^0?(\d{2})(\d{3})(\d{4})$/, '0$1-$2$3');
    
    if (!/^\d{3}-\d{7}$/.test(phone)) {
      setSubscriberError("מספר טלפון לא תקין");
      return;
    }
    
    try {
      const mylistId = process.env.REACT_APP_MAIN_LIST_ID;
      const subscriber = {
        name: name,
        email: subscriberEmail,
        phone: phone,
      };
  
      await axios.post(
        `http://localhost:5000/ravmesser/addSubscriber/${mylistId}`,
        subscriber
      );
      setIsSubmitted(true);
      setSubscriberError("");
      setSubscriberName("");
      setSubscriberEmail("");
      setSubscriberPhone("");
    } catch (err) {
      console.log(err);
      setSubscriberError(
        "קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים"
      );
    }
  };

  useEffect( () => {

    const getLists = async () => {
      try {
        const res = await axios.get("http://localhost:5000/ravmesser/getLists");
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    const getSubscribers = async () => {
      try {
        const mylistId = process.env.REACT_APP_MAIN_LIST_ID;
        const res = await axios.get(
          `http://localhost:5000/ravmesser/getSubscribers/${mylistId}`
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    // getLists();
    // getSubscribers();
  },[])
  
  return (
    <div className={communityClass}>
      <motion.div className={titleClass} variants={aboutBoxVariants}>
        <h3 className={classes.title}>הצטרפו לקהילה</h3>
      </motion.div>
      <form className={formClass} onSubmit={sumbitHandler}>
        {!isSubmitted && (
          <div className={classes.unsubmitted}>
            <div className={inputContainerClass}>
              <label htmlFor="name">
                שם מלא
                <input
                  id="name"
                  type="text"
                  value={subscriberName}
                  onChange={(e) => setSubscriberName(e.target.value)}
                />
              </label>
            </div>
            <div className={inputContainerClass}>
              <label htmlFor="email">
                אימייל
                <input
                  id="email"
                  type="email"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                />
              </label>
            </div>
            <div className={inputContainerClass}>
              <label htmlFor="phone">
                טלפון
                <input
                  id="phone"
                  type="tel"
                  value={subscriberPhone}
                  onChange={(e) => setSubscriberPhone(e.target.value)}
                />
              </label>
            </div>
            {subscriberError.length > 0 && (
              <p className={classes.errorMessage}>{subscriberError}</p>
            )}
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
