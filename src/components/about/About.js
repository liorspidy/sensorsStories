import classes from "./About.module.css";
import ketty from "../../images/withbook.jpeg";
import ketty2 from "../../images/withbookglasses.jpeg";
import ketty3 from "../../images/books.jpeg";
import ketty4 from "../../images/ketty.jpeg";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./AwesomeSliderStyles.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = ({ isMobile }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [currentImg, setCurrentImg] = useState(ketty);

  const photoSliderClass = isMobile
    ? classes.photoSliderMobile
    : classes.photoSlider;

  const Slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={2000}
      className={photoSliderClass}
      animation="foldOutAnimation"
    >
      <div data-src={ketty} />
      <div data-src={ketty2} />
      <div data-src={ketty3} />
      <div data-src={ketty4} />
    </AutoplaySlider>
  );

  const aboutBoxVarients = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const aboutBoxClassVarients = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 2 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setCurrentImg((prev) => {
          return prev === ketty ? ketty2 : ketty;
        });
      }
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [isMobile]);

  const aboutClass = isMobile ? classes.aboutMobile : classes.about;
  const titleClass = isMobile ? classes.titleMobile : classes.title;
  const aboutBoxClass = isMobile ? classes.aboutBoxMobile : classes.aboutBox;
  const aboutPhotosClass = isMobile
    ? classes.aboutPhotosMobile
    : classes.aboutPhotos;
  const aboutDescClass = isMobile ? classes.aboutDescMobile : classes.aboutDesc;
  const aboutParClass = isMobile ? classes.aboutParMobile : classes.aboutPar;

  return (
    <motion.div
      className={aboutClass}
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className={titleClass} variants={aboutBoxVarients}>
        <h1>הסיפור של קטי</h1>
      </motion.div>
      <motion.div className={aboutBoxClass} variants={aboutBoxClassVarients}>
        {!isMobile && <div className={aboutPhotosClass}>{Slider}</div>}
        <div className={aboutDescClass}>
          <p className={aboutParClass}>
            אני ובעלי עדי נשואים 41 שנה, מגדלים 3 בנות מדהימות ואנחנו סבא וסבתא
            ל 4 נכדים. הסיפור שלי מתחיל בכיתה א', במפגש הראשון עם חווית הלמידה.
            מהר מאוד הבנתי שקשה לי ושאני לא מצליחה להביא תוצאות כפי שנדרש. חווית
            הכישלון גדלה והתעצמה בבית הספר, בבית ובמפגשים משפחתיים. הקושי היה
            בכתיבה ובתקשורת. היה לי קשה להסביר את עצמי, דיברתי באופן אסוציאטיבי
            והיה קשה להבין אותי. המודעות שלי לקושי הייתה גבוהה מאוד. רגשות של
            תסכול, עצב , אכזבה מעצמי, היו יום יומיים. אני זוכרת שלחברה שלי קנו
            את הכרכים הראשונים של האנציקלופדיה העברית וכל כך רציתי לקרוא הכל
            ולדעת הכל.
          </p>
          <p className={aboutParClass}>
            זה היה הרגע שבו אני מחליטה למרות הקשיים למצוא דרך וזה לא היה פשוט.
            באותם זמנים לא היתה מודעות, לא היו אבחונים ולא כלים לעזור לי. השנים
            עברו, סיימתי צבא, התחתנתי, גרנו בקומה רביעית ללא מעלית דבר שאפשר לי
            להיפגש עם לא מעט עם ילדי השכנים. תמיד התחברתי לילדים, היום אני מבינה
            שהיה לי קל יותר בסביבתם. באחד הימים נקישה בדלת, השכנה מהקומה השנייה
            מופיעה ומציעה לי לנהל גן שבו היא עובדת- יד הבורא. אני מקבלת את
            ההצעה, מאותו הרגע אני מפתחת רעיונות שיעזרו לילדים, מה שדורש ממני
            המון למידה עצמית. אני מגלה שאני מסוגלת ללמוד בדרך שלי ומצליחה ללמוד
            את מה שאני אוהבת. היום אנחנו מכירים את המושג אוטודידקטית. כשנולדה
            בתי הראשונה מעיין, נתקלתי בקושי חדש מעיין לא מפסיקה לבכות והרי יש לי
            כבר לא מעט ידע וזה לא עוזר, שוב חווית התסכול חוזרת ופוגשת את התסכול
            של מעיין, את העצב ואת הקושי להסביר. כל פעילות שהיינו צריכות לעשות
            הייתה מלווה בבכי בהתנגדות מהקימה בבוקר מהמיטה, לשטיפת הפנים, לבחירת
            הבגדים, להתלבשות ,לסרוק, לבחירת השתייה ועוד...הכל היה לא פשוט.
          </p>
          <p className={aboutParClass}>
            הקושי של מעיין שלח אותי לחקירה, תוך כדי חקירה ובדיקה אני מגיעה לנושא
            החושים, סביב נושא החושים אני מתחילה לכתוב תכנים, ערכות לגנים,מעבירה
            את התכנים גם בקרן קרב, בקרן רש"י (שמובילה מיזמים חברתיים) עובדת עם
            ילדים עם סיפי (שיתוק מוחין) בהוסטל בגרייה חושית דרך אקי"ם. מתחברת
            למפקחת באזור הדרום מקבלת מרכזיה פדגוגית (מרכז הדרכה לגננות) וגם שם
            אני מעבירה את נושא החושים, הנושא הולך ומתגבש, אני מבינה את תפקיד
            החושים בעולמנו פיזיולוגית, פיזית, מנטלית, רגשית ורוחנית. אני מלווה
            את מעיין בכל צעד וצעד, האתגרים היו לא מעטים. התמודדנו עם כל אתגר לאט
            לאט בהקשבה עמוקה, בסבלנות, בהבנה ובבניית תוכניות. ציירתי, כתבתי
            מילים, מספרים, יצרתי תוכניות עבודה ויזואליות למדנו לדבר להבין מה
            מעיין רוצה, תקשורת פנימית שלמדנו לבטא בתקשורת חיצונית. גאה לספר כי
            מעיין שלנו מסיימת תיכון בהצלחה, צבא ולומדת לתואר ראשון. מעיין לא
            מוותרת גם כשקשה, חוזרת על כל מבחן פעמיים, מצליחה לסיים את התואר
            וממשיכה ללמוד NLP.
          </p>
          <p>
            היום מעייני נשואה ואם לשתי בנות מדהימות ובדרך להיות מטפלת. ביום
            הולדתי לפני כעשור אנחנו נוסעים לסופ"ש, תוך כדי שיח עם בעלי עולה
            רעיון הספר, בו אנחנו מחליטים לשתף את ההורים דרך סיפור-איך הילדים
            יכולים לחוות את אותה המציאות של ההורים בדרך אחרת. את הסיפור מלווים
            איורים מדהימים שמירב שדה לביא איירה בחמישה פרקים על חמישה חושים, זה
            הספר הראשון שמסביר על הדומה והשונה ופותח את הדרך לתקשורת חדשה - שפה
            חדשה, שפת הרגש.
          </p>
        </div>
      </motion.div>
      {isMobile && (
        <motion.div
          key={currentImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={classes.aboutImg}
        >
          <motion.img src={currentImg} alt="ketty"></motion.img>
        </motion.div>
      )}
    </motion.div>
  );
};

export default About;
