import React from "react";
import Loading from "../../tools/loading/Loading";
import classes from "./Community.module.scss";
import { motion } from "framer-motion";
import madadon from "../../assets/images/madadon1.png";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useCommunity } from "./useCommunity";


const Community = () => {
  const {
    isSubmitted,
    subscriberName,
    setSubscriberName,
    subscriberEmail,
    setSubscriberEmail,
    subscriberPhone,
    setSubscriberPhone,
    subscriberError,
    isLoading,
    sumbitHandler
  } = useCommunity();

  const aboutBoxVariants = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

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
      className={classes.community}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={classes.communityBox}>
        <motion.div className={classes.titleContainer} variants={aboutBoxVariants}>
          <h2 className={classes.title}>הצטרפו לקהילה</h2>
        </motion.div>

        <div className={classes.contentBox}>
          <motion.div className={classes.joinText} variants={aboutBoxVariants}>
            <h3 className={classes.boldText}>
              <strong>
                ההרשמה לקהילה פתוחה לכולם{" "}
                <span className={classes.freeText}>ובחינם!</span>
              </strong>
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
              className={classes.form}
              onSubmit={sumbitHandler}
              variants={aboutBoxVariants}
            >
              {!isSubmitted && !isLoading && (
                <div className={classes.unsubmitted}>
                  <div className={classes.inputContainer}>
                    <label htmlFor="name">שם מלא</label>
                    <input
                      id="name"
                      type="text"
                      value={subscriberName}
                      onChange={(e) => setSubscriberName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={classes.inputContainer}>
                    <label htmlFor="email">דוא"ל</label>
                    <input
                      id="email"
                      type="email"
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={classes.inputContainer}>
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
                  <div className={classes.formButton}>
                    <button type="submit">הצטרף</button>
                  </div>
                </div>
              )}

              {isLoading && <Loading />}

              {isSubmitted && !isLoading && (
                <div className={classes.submitted}>
                  <p>ההרשמה בוצעה בהצלחה!</p>
                  <div className={classes.checkmarkBox}>
                    <CheckCircleOutlinedIcon className={classes.checkmark} />
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
              className={classes.madadon}
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
