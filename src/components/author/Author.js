import classes from "./Author.module.css";
import ketty from "../../images/ketty.jpeg";
import ortzeva2 from "../../images/ortzeva2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Community from "../community/Community";

const Author = ({ isMobile }) => {
  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const parboxVarients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } },
  };

  const ortzeva2Varients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, delay: 2, duration: 0.8 },
    },
  };

  const authorClass = isMobile ? classes.authorMobile : classes.author;
  const aboutBoxClass = isMobile ? classes.aboutBoxMobile : classes.aboutBox;
  const titleClass = isMobile
    ? classes.titleContainerMobile
    : classes.titleContainer;
  const parboxClass = isMobile ? classes.parboxMobile : classes.parbox;
  const parboxImgClass = isMobile ? classes.parboxImgMobile : classes.parboxImg;
  const tellmemoreClass = isMobile
    ? classes.tellmemoreMobile
    : classes.tellmemore;
  const parClass = isMobile ? classes.parMobile : classes.par;
  const bottomClass = isMobile ? classes.bottomMobile : classes.bottom;
  const ortzeva2Class = isMobile ? classes.ortzeva2Mobile : classes.ortzeva2;

  return (
    <motion.div
      id="author"
      className={authorClass}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={aboutBoxClass}>
        <motion.div className={titleClass} variants={aboutBoxVarients}>
          <h2 className={classes.title}>אודות קטי</h2>
        </motion.div>
        <motion.div className={parboxClass} variants={parboxVarients}>
          <p className={parClass}>
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
        <motion.div className={bottomClass} variants={parboxVarients}>
          <motion.div
            variants={ortzeva2Varients}
            whileHover={{
              rotate: [0, -1, 1, -1, 1, 0],
              transition: { duration: 0.4 },
            }}
            className={ortzeva2Class}
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
          <div className={parboxImgClass}>
            <img src={ketty} alt="קטי בירמן" />
            <div className={tellmemoreClass}>
              <Link to={"/about-me"}>ספרו לי עוד</Link>
            </div>
          </div>
          <Community isMobile={isMobile} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Author;
