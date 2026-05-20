import book from "../../assets/images/book.jpg";
import classes from "./Book.module.scss";
import arrow from "../../assets/images/down-arrow-download-svgrepo-com.svg";
import ortzeva from "../../assets/images/ortzeva.png";

const Book = () => {
    const scrollTo = (elId: string) => {
        const element = document.getElementById(elId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div id="book" className={classes.bookPage}>
            <div className={classes.reccomendation}>
                <p>
                    "הספר עוזר לילדים להתמודד עם תסכולים ועם היכולת להביע את
                    עצמם באמצעות ההבנה פנימה ולמצוא מילים לתחושות ולרגשות.
                    הילדים וההורים חווים דרך הסיפורים וההקשבה לקיחת אחריות
                    ובניית תקשורת נכונה ואיכותית. ממליצה באהבה לקרוא אותו"
                </p>
                <p className={classes.reccomendor}>ליאורה רנרט</p>
            </div>
            <div className={classes.bookmain}>
                <div className={classes.book}>
                    <img
                        src={book}
                        alt="ספר סיפורי חיישנים"
                        onClick={scrollTo.bind(this, "contact")}
                    />
                    <button
                        className={classes.buyNow}
                        onClick={scrollTo.bind(this, "contact")}
                        aria-label="לרכישה"
                    >
                        לרכישה
                    </button>
                </div>

                <div className={classes.bookMobile}>
                    <img
                        src={book}
                        alt="ספר סיפורי חיישנים"
                        onClick={scrollTo.bind(this, "contact")}
                    />
                    <button
                        className={classes.buyNowMobile}
                        onClick={scrollTo.bind(this, "contact")}
                        aria-label="לרכישה"
                    >
                        לרכישה
                    </button>
                </div>

                <div className={classes.descBox}>
                    <img
                        className={classes.ortzeva}
                        src={ortzeva}
                        alt="אור וצבע"
                        onClick={scrollTo.bind(this, "contact")}
                    />

                    <div className={classes.bookDescBox}>
                        <p className={classes.bookDesc1}>
                            "אמא של מעין מנסה למצוא פתרון לחוסר שביעות רצונה של
                            מעין מדברים יום-יומיים כגון לבוש, אוכל ופעולות
                            שגרתיות. היא יוצאת לחקור את הנושא ומגלה שבכולנו
                            קיימים חישנים שונים הקובעים מה אנו אוהבים ומה לא
                            נעים לנו. אמא של מעיין מספרת לה בכל ערב סיפור על
                            חישן אחר, ובסוף הסיפורים מעיין לומדת להתחבר
                            לתחושותיה, להבין מה היא אוהבת ומה לא, ובעיקר – היא
                            לומדת להביע זאת במילים כדי למנוע בכי ותסכול."
                        </p>
                        <p className={classes.bookDesc2}>
                            הספר "סיפורי חישנים" הינו ספר לילדים ומבוגרים בנושא
                            מודעות לתקשורת חושית מאת קטי בירמן. הספר מבוסס על
                            עבודת חייה כמאמנת לתקשורת חושית ומפתחת "שפת הרגש",
                            המתמקדת בהבדלים בקלט החושי שהם המפתח להבנת
                            הקונפליקטים הבסיסיים בין בני אדם. הספר כתוב כשיחה
                            בין אם לבת, וכולל חמישה סיפורים על ילדים שחווים
                            קשיים בתקשורת החושית, כל אחד מהם מתאר קושי אחר בחוש
                            אחר, שנפתרים בעזרת יצורים קסומים הנקראים "חישנים".
                        </p>
                        <p className={classes.bookDesc2}>
                            קטי בירמן מלמדת אותנו להסתכל על השונות בינינו
                            במשקפיים חדשים וללמוד כיצד לתקשר טוב יותר מתוך ההכרה
                            בשונות הפרופיל הסנסורי של כל אחד מאיתנו.
                        </p>
                    </div>

                    <button
                        className={classes.arrow}
                        onClick={scrollTo.bind(this, "author")}
                    >
                        <img src={arrow} alt="arrow" />
                    </button>
                </div>
            </div>
            <div className={classes.bottomRec}>
                <div className={classes.reccomendation2}>
                    <p>
                        "ספר זה פותח צוהר ליצירת שיח חשוב מאוד עם ילדים על רגשות
                        ורצונות פנימיים, שאולי אף הם בעצמם לא מודעים אליהם."
                    </p>
                    <p className={classes.reccomendor}>ספרי צמרת</p>
                </div>
                <div className={classes.reccomendation3}>
                    <p>
                        "סיפרתי את הסיפור לשני אחים בגילאים 6 ו8 ששמחו לשמוע
                        שהבעיה שלהם לא רק שלהם. זהו ספר שמביא לתקשורת מיטיבה,
                        להקשבה לגוף ולקיחת אחריות של הצדדים השונים.."
                    </p>
                    <p className={classes.reccomendor}>
                        נאוה וינגרטן – "מה למה"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Book;
