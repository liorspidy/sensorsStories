import { motion } from "framer-motion";
import book from "../../images/book.jpg";
import classes from "./Book.module.css";
import Clouds from "./clouds/Clouds";
import arrow from "../../images/down-arrow-download-svgrepo-com.svg";
import ortzeva from "../../images/ortzeva.png";

const Book = () => {
  const bookVarients = {
    offscreen: { x: -1000, rotate: -40 },
    onscreen: {
      x: 30,
      rotate: -7,
      transition: { duration: 1 },
    },
  };

  const ortzevaVarients = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1 },
    },
  };

  const descVarients = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  return (
    <motion.div
      id="book"
      className={classes.bookPage}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.01 }}
    >
      {/* <motion.div className={classes.title} variants={ortzevaVarients}>
        <h1>סיפורי חישנים</h1>
      </motion.div> */}
      <div className={classes.bookmain}>
        <motion.div className={classes.book} variants={bookVarients}>
          <img src={book} alt="bookImage" />
        </motion.div>

        <div className={classes.descBox}>
          <motion.img
            className={classes.ortzeva}
            src={ortzeva}
            alt="ortzeva"
            transition={{ duration: 1 }}
            whileHover={{
              rotate: [0, -3, 3, -3, 3, 0],
              transition: { duration: 0.4 },
            }}
            variants={ortzevaVarients}
          />

          <motion.div
            className={classes.bookDescBox}
            transition={{ duration: 2 }}
            variants={descVarients}
          >
            <p className={classes.bookDesc1}>
              "אמא של מעין מנסה למצוא פתרון לחוסר שביעות רצונה של מעין מדברים
              יום-יומיים כגון לבוש, אוכל ופעולות שגרתיות. היא יוצאת לחקור את
              הנושא ומגלה שבכולנו קיימים חיישנים שונים הקובעים מה אנו אוהבים ומה
              לא נעים לנו. אמא של מעיין מספרת לה בכל ערב סיפור על חיישן אחר,
              ובסוף הסיפורים מעיין לומדת להתחבר לתחושותיה, להבין מה היא אוהבת
              ומה לא, ובעיקר – היא לומדת להביע זאת במילים כדי למנוע בכי ותסכול."
            </p>
            <p className={classes.bookDesc2}>
              הספר "סיפורי חישנים" הינו ספר לילדים ומבוגרים בנושא מודעות לתקשורת
              חושית מאת קטי בירמן. הספר מבוסס על עבודת חייה כמאמנת לתקשורת חושית
              ומפתחת "שפת הרגש", המתמקדת בהבדלים בקלט החושי שהם המפתח להבנת
              הקונפליקטים הבסיסיים בין בני אדם. הספר כתוב כשיחה בין אם לבת,
              וכולל חמישה סיפורים על ילדים שחווים קשיים בתקשורת החושית, כל אחד
              מהם מתאר קושי אחר בחוש אחר, שנפתרים בעזרת יצורים קסומים הנקראים
              "חיישנים". קטי בירמן מלמדת אותנו להסתכל על השונות בינינו במשקפיים
              חדשים וללמוד כיצד לתקשר טוב יותר מתוך ההכרה בשונות הפרופיל הסנסורי
              של כל אחד מאיתנו.
            </p>
          </motion.div>
          <motion.div
            className={classes.arrow}
            variants={descVarients}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("author").offsetTop,
                behavior: "smooth",
              })
            }
          >
            <img src={arrow} alt="arrow" />
          </motion.div>
        </div>
      </div>

      <Clouds />
    </motion.div>
  );
};

export default Book;
