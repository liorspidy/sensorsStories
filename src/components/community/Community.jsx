import { useEffect, useState } from "react";
import Loading from "../../tools/loading/Loading";
import classes from "./Community.module.css";
import { motion } from "framer-motion";
import axios from "axios";
import madadon from "../../images/madadon1.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Community = ({ isMobile }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subscriberName, setSubscriberName] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscriberPhone, setSubscriberPhone] = useState("");
  const [subscriberError, setSubscriberError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
  const madadonClass = isMobile ? classes.madadonMobile : classes.madadon;

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

    let phone = subscriberPhone.replace(/\D/g, "");
    if (!/^\d{9,10}$/.test(phone)) {
      setSubscriberError("מספר טלפון לא תקין");
      return;
    }

    phone = phone.replace(/^0?(\d{2})(\d{3})(\d{4})$/, "0$1-$2$3");

    if (!/^\d{3}-\d{7}$/.test(phone)) {
      setSubscriberError("מספר טלפון לא תקין");
      return;
    }

    try {
      setIsLoading(true);
      const mylistId = process.env.REACT_APP_MAIN_LIST_ID;
      const subscriber = {
        name: name,
        email: subscriberEmail,
        phone: phone,
      };

      // await axios.post(
      //   `https://sensorsstoriesbackend.glitch.me/ravmesser/addSubscriber/${mylistId}`,
      //   subscriber
      // );

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
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 200000);
    }
  };

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          "https://sensorsstoriesbackend.glitch.me/ravmesser/getLists"
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getSubscribers = async () => {
      try {
        const mylistId = process.env.REACT_APP_MAIN_LIST_ID;
        const res = await axios.get(
          `https://sensorsstoriesbackend.glitch.me/ravmesser/getSubscribers/${mylistId}`
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    // getLists();
    // getSubscribers();
  }, []);

  const madadon2Varients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, delay: 1, duration: 0.5 },
    },
  };

  return (
    <motion.div
      id="community"
      className={communityClass}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={classes.communityBox}>
        <motion.div className={titleClass} variants={aboutBoxVariants}>
          <h2 className={classes.title}>הצטרפו לקהילה</h2>
        </motion.div>

        <div className={classes.contentBox}>
          <motion.div className={classes.joinText} variants={aboutBoxVariants}>
            <h3 className={classes.boldText}>
              <strong>ההרשמה לקהילה פתוחה לכולם!</strong>
            </h3>
            <p>
              <br />
              רוצים לקבל עדכונים שוטפים על סדנאות, הרצאות, ספרים חדשים ועוד?
              הצטרפו לקהילה של קטי בירמן ותהיו הראשונים לדעת!
              <br />
              <br />
              בקהילה תוכלו למצוא:
              <br />
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                טיפים ועצות לתקשורת טובה יותר עם ילדים ומבוגרים
              </li>
              <li className={classes.listItem}>
                הבנה מעמיקה של עולם החושים והשפעתו על התנהגות
              </li>
              <li className={classes.listItem}>
                כלים פרקטיים ליישום בבית ובכיתה
              </li>
              <li className={classes.listItem}>
                הזמדנות להשתתף בסדנאות והרצאות מיוחדות
              </li>
              <li className={classes.listItem}>קהילה תומכת ומכילה</li>
            </ul>
            <br />
            {/* <h3 className={classes.boldText}>
            <strong>
              הרשמו עוד היום והתחילו את המסע שלכם לתקשורת טובה יותר!
            </strong>
          </h3> */}
          </motion.div>

          <div className={classes.content}>
            <motion.form
              className={formClass}
              onSubmit={sumbitHandler}
              variants={aboutBoxVariants}
            >
              {!isSubmitted && !isLoading && (
                <div className={classes.unsubmitted}>
                  <div className={inputContainerClass}>
                    <label htmlFor="name">שם מלא</label>
                    <input
                      id="name"
                      type="text"
                      value={subscriberName}
                      onChange={(e) => setSubscriberName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={inputContainerClass}>
                    <label htmlFor="email">אימייל</label>
                    <input
                      id="email"
                      type="email"
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={inputContainerClass}>
                    <label htmlFor="phone">טלפון</label>
                    <input
                      id="phone"
                      type="tel"
                      value={subscriberPhone}
                      onChange={(e) => setSubscriberPhone(e.target.value)}
                    />
                  </div>
                  {subscriberError.length > 0 && (
                    <p className={classes.errorMessage}>{subscriberError}</p>
                  )}
                  <div className={formButtonClass}>
                    <button type="submit">הצטרף</button>
                  </div>
                </div>
              )}

              {isLoading && <Loading />}

              {isSubmitted && !isLoading && (
                <div className={classes.submitted}>
                  <p>ההרשמה בוצעה בהצלחה!</p>
                  <div className={classes.checkmarkBox}>
                    <CheckCircleOutlineIcon className={classes.checkmark} />
                  </div>
                  <p>כלים נוספים בדרך..</p>
                </div>
              )}
            </motion.form>
            <motion.div
              variants={madadon2Varients}
              whileHover={{
                rotate: [0, -1, 1, -1, 1, 0],
                transition: { duration: 0.4 },
              }}
              className={madadonClass}
            >
              <img
                src={madadon}
                alt="madadon"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("meet").offsetTop,
                    behavior: "smooth",
                  })
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Community;
