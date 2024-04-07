/* eslint-disable jsx-a11y/img-redundant-alt */
import classes from "./Author.module.css";
import ketty from "../../images/ketty.jpeg";
import { motion } from "framer-motion";
import kids from "../../images/kids.png";

const Author = ({ isMobile }) => {
  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const parboxVarients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { delay: 0.75, duration: 0.5 } },
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

  const imageVarients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, delay: 1.5, duration: 0.8 },
    },
  };

  return (
    <motion.div
      id="author"
      className={authorClass}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={aboutBoxClass}>
        <motion.div
          id="title"
          className={titleClass}
          variants={aboutBoxVarients}
        >
          <h2 className={classes.title}>אודות קטי</h2>
        </motion.div>
        <div className={classes.content}>
          <motion.div variants={imageVarients} className={parboxImgClass}>
            <img src={ketty} alt="קטי בירמן" />
          </motion.div>
          <motion.div className={parboxClass} variants={parboxVarients}>
            <div className={classes.text}>
              <p className={parClass}>
                קטי ילידת 1961, נשואה לעדי, אם למעין, רעות ונתנאלה וסבתא לשיר,
                אריאל, אביב ואיתן, היא מאמנת לתקשורת חושית בעזרת הכלי שהיא פיתחה
                שנקרא "שפת הרגש". <br />
                <br />
                בצעירותה חוותה קשיים בלימודים ובתקשורת שהיום היו מסווגים כלקויות
                למידה. פילסה לעצמה דרך, התחתנה ועבדה כשמנהלת גני ילדים. עם הולדת
                בתה מעין, צפו ועלו אותם הקשיים שהשאירה מאחור ושלחו אותה לדרך של
                חקירה ולמידה שממשיכה עד היום בנושא התקשורת החושית. <br />
                <br />
                הכלים שקטי נחשפה אליהם, נתנו לה תשובות שחיפשה במסעה והיא משתפת
                אותם עם קבוצות, יחידים, משפחות, ילדים ומבוגרים כבר 25 שנים. הספר
                "סיפורי חישנים", נותן גישה פשוטה ופותח שער באופן ממצה אל גוף ידע
                ענק שנצבר במחברתה לאורך מסע חייה האישיים והמקצועיים.
              </p>
              <a className={tellmemoreClass} href="/about-me">
                ספרו לי עוד
              </a>
            </div>
            <motion.div
              variants={imageVarients}
              whileHover={{
                rotate: [0, -1, 1, -1, 1, 0],
                transition: { duration: 0.4 },
              }}
              className={classes.imageConatiner}
            >
              <img
                className={classes.image}
                src={kids}
                alt="image"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("community").offsetTop,
                    behavior: "smooth",
                  })
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Author;
