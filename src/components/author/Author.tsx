import classes from "./Author.module.scss";
import ketty from "../../assets/images/ketty.jpeg";
import kids from "../../assets/images/kids.png";

const Author = () => {
    return (
        <div id="author" className={classes.author}>
<div className={classes.aboutBox}>
                <div className={classes.parboxImg}>
                    <img src={ketty} alt="קטי בירמן" />
                </div>
                <div className={classes.par}>
                    <p>
                        קטי ילידת 1961, נשואה לעדי, אם למעין, רעות ונתנאלה וסבתא
                        לשיר, אריאל, אביב ואיתן, היא מאמנת לתקשורת חושית בעזרת
                        הכלי שהיא פיתחה שנקרא "שפת הרגש". <br />
                        <br />
                        בצעירותה חוותה קשיים בלימודים ובתקשורת שהיום היו מסווגים
                        כלקויות למידה. פילסה לעצמה דרך, התחתנה ועבדה כשמנהלת גני
                        ילדים. עם הולדת בתה מעין, צפו ועלו אותם הקשיים שהשאירה
                        מאחור ושלחו אותה לדרך של חקירה ולמידה שממשיכה עד היום
                        בנושא התקשורת החושית. <br />
                        <br />
                        הכלים שקטי נחשפה אליהם, נתנו לה תשובות שחיפשה במסעה והיא
                        משתפת אותם עם קבוצות, יחידים, משפחות, ילדים ומבוגרים כבר
                        25 שנים. הספר "סיפורי חישנים", נותן גישה פשוטה ופותח שער
                        באופן ממצה אל גוף ידע ענק שנצבר במחברתה לאורך מסע חייה
                        האישיים והמקצועיים.
                    </p>
                </div>
                <a className={classes.tellmemore} href="/about-me">
                    ספרו לי עוד
                </a>
                <div className={classes.imageConatiner}>
                    <img
                        className={classes.image}
                        src={kids}
                        alt="image"
                        onClick={() =>
                            window.scrollTo({
                                top:
                                    document.getElementById("community")
                                        ?.offsetTop ?? 0,
                                behavior: "smooth",
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Author;
