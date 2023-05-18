import classes from "./Author.module.css";
import ketty from "../../images/ketty.jpeg";
import madadon from "../../images/madadon1.png";
import ortzeva2 from "../../images/ortzeva2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Author = () => {
  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const parboxVarients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  const madadonVarients = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, delay: 2.5, duration: 1 },
    },
  };

  const ortzeva2Varients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, delay: 2, duration: 1 },
    },
  };

  return (
    <motion.div
      id="author"
      className={classes.author}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={classes.aboutBox}>
        <motion.div className={classes.title} variants={aboutBoxVarients}>
          <h1>אודות הסופרת</h1>
        </motion.div>
        <motion.div className={classes.parbox} variants={parboxVarients}>
          <div className={classes.parboxImg}>
            <img src={ketty} alt="קטי בירמן" />
            <Link to={"/about-me"}>
              <div className={classes.tellmemore}>
                <h3>ספרו לי עוד..</h3>
              </div>
            </Link>
          </div>
          <p className={classes.par}>
            קטי ילידת 1961, נשואה לעדי, אם למעין, רעות ונתנאלה וסבתא לשיר,
            אריאל, אביב ואיתן, היא מאמנת לתקשורת חושית בעזרת הכלי שהיא פיתחה
            שנקרא "שפת הרגש". <br />
            <br />
            בצעירותה חוותה קשיים בלימודים ובתקשורת שהיום היו מסווגים כלקויות
            למידה. פילסה לעצמה דרך, התחתנה ועבדה כשמנהלת גני ילדים. עם הולדת בתה
            מעין, צפו ועלו אותם הקשיים שהשאירה מאחור ושלחו אותה לדרך של חקירה
            ולמידה שממשיכה עד היום בנושא התקשורת החושית. <br />
            <br />
            הכלים שקטי נחשפה אליהם, נתנו לה תשובות שחיפשה במסעה והיא משתפת אותם
            עם קבוצות, יחידים, משפחות, ילדים ומבוגרים כבר 25 שנים. הספר "סיפורי
            חישנים", נותן גישה פשוטה ופותח שער באופן ממצה אל גוף ידע ענק שנצבר
            במחברתה לאורך מסע חייה האישיים והמקצועיים.
          </p>
        </motion.div>
      </div>
      <div className={classes.photos}>
        <motion.div
          variants={ortzeva2Varients}
          whileHover={{
            rotate: [0, -1, 1, -1, 1, 0],
            transition: { duration: 0.4 },
          }}
          className={classes.ortzeva2}
        >
          <img
            src={ortzeva2}
            alt="אור וצבע"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("meet").offsetTop,
                behavior: "smooth",
              })
            }
          />
        </motion.div>
        <motion.div
          variants={madadonVarients}
          whileHover={{
            rotate: [0, -1, 1, -1, 1, 0],
            transition: { duration: 0.4 },
          }}
          className={classes.madadon}
        >
          <img
            src={madadon}
            alt="מדדון"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("meet").offsetTop,
                behavior: "smooth",
              })
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Author;
