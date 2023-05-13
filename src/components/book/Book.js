import { motion } from 'framer-motion';
import book from '../../images/book.jpg';
import classes from './Book.module.css';
import Clouds from './clouds/Clouds';
import arrow from '../../images/down-arrow-download-svgrepo-com.svg';
import ortzeva from '../../images/ortzeva.png';

const Book = () => {
  return (
    <div className={classes.bookPage}>
      <motion.div
        className={classes.book}
        initial={{ x: -1000, rotate: -40 }}
        animate={{ x: 10, rotate: -8 }}
        transition={{ duration: 3 }}
      >
        <img src={book} alt="bookImage" />
      </motion.div>

      <div className={classes.descBox}>
        <motion.img
          className={classes.ortzeva}
          src={ortzeva}
          alt="ortzeva"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        />

        <motion.div
          className={classes.bookDescBox}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className={classes.bookDesc1}>
            "אמא של מעין מנסה למצוא פתרון לחוסר שביעות רצונה של מעין מדברים
            יום-יומיים כגון לבוש, אוכל ופעולות שגרתיות. היא יוצאת לחקור את הנושא
            ומגלה שבכולנו קיימים חיישנים שונים הקובעים מה אנו אוהבים ומה לא נעים
            לנו. אמא של מעיין מספרת לה בכל ערב סיפור על חיישן אחר, ובסוף
            הסיפורים מעיין לומדת להתחבר לתחושותיה, להבין מה היא אוהבת ומה לא,
            ובעיקר – היא לומדת להביע זאת במילים כדי למנוע בכי ותסכול."
          </p>
          <p className={classes.bookDesc2}>
            הספר "סיפורי חיישנים" הינו ספר לילדים ומבוגרים בנושא מודעות לתקשורת
            חושית מאת קטי בירמן. הספר מבוסס על עבודת חייה כמאמנת לתקשורת חושית
            ומפתחת "שפת הרגש", המתמקדת בהבדלים בקלט החושי שהם המפתח להבנת
            הקונפליקטים הבסיסיים בין בני אדם. הספר כתוב כשיחה בין אם לבת, וכולל
            חמישה סיפורים על ילדים שחווים קשיים בתקשורת החושית, כל אחד מהם מתאר
            קושי אחר בחוש אחר, שנפתרים בעזרת יצורים קסומים הנקראים "חיישנים".
            קטי בירמן מלמדת אותנו להסתכל על השונות בינינו במשקפיים חדשים וללמוד
            כיצד לתקשר טוב יותר מתוך ההכרה בשונות הפרופיל הסנסורי של כל אחד
            מאיתנו.
          </p>
        </motion.div>
      </div>

      <motion.div
        className={classes.arrow}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={arrow} alt="arrow" />
      </motion.div>

      <Clouds />
    </div>
  );
};

export default Book;
