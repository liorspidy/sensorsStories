import { t as ketty_default } from "./ketty-BYi68K_X.js";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { jsx, jsxs } from "react/jsx-runtime";
import AwesomeSliderModule from "react-awesome-slider";
import withAutoplayModule from "react-awesome-slider/dist/autoplay.js";
import { motion } from "framer-motion";
var About_module_default = {
	about: "_about_17gtd_1",
	aboutBox: "_aboutBox_17gtd_22",
	aboutPhotos: "_aboutPhotos_17gtd_36",
	title: "_title_17gtd_48",
	aboutImage: "_aboutImage_17gtd_74",
	aboutDesc: "_aboutDesc_17gtd_85",
	photoSlider: "_photoSlider_17gtd_108",
	aboutImg: "_aboutImg_17gtd_113",
	showImg: "_showImg_17gtd_1"
};
//#endregion
//#region src/assets/images/withbook.jpeg
var withbook_default = "/assets/withbook-Bxs7-ukZ.jpeg";
//#endregion
//#region src/assets/images/withbookglasses.jpeg
var withbookglasses_default = "/assets/withbookglasses-BhO58dur.jpeg";
//#endregion
//#region src/assets/images/books.jpeg
var books_default = "/assets/books-CwanAqjn.jpeg";
//#endregion
//#region src/pages/about/About.tsx
var AwesomeSlider = typeof AwesomeSliderModule === "function" || typeof AwesomeSliderModule === "object" && "default" in AwesomeSliderModule === false ? AwesomeSliderModule : AwesomeSliderModule.default || AwesomeSliderModule;
var withAutoplay = typeof withAutoplayModule === "function" ? withAutoplayModule : withAutoplayModule.default || withAutoplayModule;
var About = () => {
	const AutoplaySlider = withAutoplay(AwesomeSlider);
	const [currentImg, setCurrentImg] = useState(withbook_default);
	const Slider = /* @__PURE__ */ jsxs(AutoplaySlider, {
		play: true,
		cancelOnInteraction: false,
		interval: 1e3,
		className: About_module_default.photoSlider,
		animation: "foldOutAnimation",
		children: [
			/* @__PURE__ */ jsx("div", { "data-src": withbook_default }),
			/* @__PURE__ */ jsx("div", { "data-src": withbookglasses_default }),
			/* @__PURE__ */ jsx("div", { "data-src": books_default }),
			/* @__PURE__ */ jsx("div", { "data-src": ketty_default })
		]
	});
	const aboutBoxVarients = {
		offscreen: {
			x: 30,
			opacity: 0
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: { duration: 2 }
		}
	};
	const aboutBoxClassVarients = {
		offscreen: {
			y: 30,
			opacity: 0
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: { duration: 2 }
		}
	};
	useEffect(() => {
		window.scrollTo(0, 0);
		const interval = setInterval(() => {
			setCurrentImg((prev) => {
				return prev === "/assets/withbook-Bxs7-ukZ.jpeg" ? withbookglasses_default : withbook_default;
			});
		}, 6e3);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return /* @__PURE__ */ jsxs(motion.div, {
		className: About_module_default.about,
		initial: "offscreen",
		whileInView: "onscreen",
		transition: { staggerChildren: .4 },
		viewport: {
			once: true,
			amount: .1
		},
		children: [
			/* @__PURE__ */ jsxs(Helmet, { children: [
				/* @__PURE__ */ jsx("title", { children: "אודות קטי בירמן - סיפורי חישנים" }),
				/* @__PURE__ */ jsx("meta", {
					name: "description",
					content: "קטי בירמן, מאמנת לתקשורת חושית ומפתחת שפת הרגש. למדו על מסעה האישי וניסיונה של 25 שנה בעבודה עם ילדים ומשפחות."
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:title",
					content: "אודות קטי בירמן - סיפורי חישנים"
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:description",
					content: "מאמנת לתקשורת חושית ומפתחת שפת הרגש."
				}),
				/* @__PURE__ */ jsx("link", {
					rel: "canonical",
					href: "https://www.sensorsstories.co.il/about-me"
				})
			] }),
			/* @__PURE__ */ jsx(motion.div, {
				className: About_module_default.title,
				variants: aboutBoxVarients,
				children: /* @__PURE__ */ jsx("h2", { children: "הסיפור של קטי" })
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				className: About_module_default.aboutBox,
				variants: aboutBoxClassVarients,
				children: [/* @__PURE__ */ jsx("div", {
					className: About_module_default.aboutPhotos,
					children: Slider
				}), /* @__PURE__ */ jsxs("div", {
					className: About_module_default.aboutDesc,
					children: [
						/* @__PURE__ */ jsx("p", { children: "אני ובעלי עדי נשואים 41 שנה, מגדלים 3 בנות מדהימות ואנחנו סבא וסבתא ל 4 נכדים. הסיפור שלי מתחיל בכיתה א', במפגש הראשון עם חווית הלמידה. מהר מאוד הבנתי שקשה לי ושאני לא מצליחה להביא תוצאות כפי שנדרש. חווית הכישלון גדלה והתעצמה בבית הספר, בבית ובמפגשים משפחתיים." }),
						/* @__PURE__ */ jsx("p", { children: "הקושי היה בכתיבה ובתקשורת. היה לי קשה להסביר את עצמי, דיברתי באופן אסוציאטיבי והיה קשה להבין אותי. המודעות שלי לקושי הייתה גבוהה מאוד. רגשות של תסכול, עצב , אכזבה מעצמי, היו יום יומיים. אני זוכרת שלחברה שלי קנו את הכרכים הראשונים של האנציקלופדיה העברית וכל כך רציתי לקרוא הכל ולדעת הכל." }),
						/* @__PURE__ */ jsx("p", { children: "זה היה הרגע שבו אני מחליטה למרות הקשיים למצוא דרך וזה לא היה פשוט. באותם זמנים לא היתה מודעות, לא היו אבחונים ולא כלים לעזור לי. השנים עברו, סיימתי צבא, התחתנתי, גרנו בקומה רביעית ללא מעלית דבר שאפשר לי להיפגש עם לא מעט עם ילדי השכנים. תמיד התחברתי לילדים, היום אני מבינה שהיה לי קל יותר בסביבתם. באחד הימים נקישה בדלת, השכנה מהקומה השנייה מופיעה ומציעה לי לנהל גן שבו היא עובדת- יד הבורא. אני מקבלת את ההצעה, מאותו הרגע אני מפתחת רעיונות שיעזרו לילדים, מה שדורש ממני המון למידה עצמית." }),
						/* @__PURE__ */ jsx("p", { children: "אני מגלה שאני מסוגלת ללמוד בדרך שלי ומצליחה ללמוד את מה שאני אוהבת. היום אנחנו מכירים את המושג אוטודידקטית. כשנולדה בתי הראשונה מעיין, נתקלתי בקושי חדש מעיין לא מפסיקה לבכות והרי יש לי כבר לא מעט ידע וזה לא עוזר, שוב חווית התסכול חוזרת ופוגשת את התסכול של מעיין, את העצב ואת הקושי להסביר. כל פעילות שהיינו צריכות לעשות הייתה מלווה בבכי בהתנגדות מהקימה בבוקר מהמיטה, לשטיפת הפנים, לבחירת הבגדים, להתלבשות ,לסרוק, לבחירת השתייה ועוד...הכל היה לא פשוט." }),
						/* @__PURE__ */ jsx("p", { children: "הקושי של מעיין שלח אותי לחקירה, תוך כדי חקירה ובדיקה אני מגיעה לנושא החושים, סביב נושא החושים אני מתחילה לכתוב תכנים, ערכות לגנים,מעבירה את התכנים גם בקרן קרב, בקרן רש\"י (שמובילה מיזמים חברתיים) עובדת עם ילדים עם סיפי (שיתוק מוחין) בהוסטל בגרייה חושית דרך אקי\"ם. מתחברת למפקחת באזור הדרום מקבלת מרכזיה פדגוגית (מרכז הדרכה לגננות) וגם שם אני מעבירה את נושא החושים, הנושא הולך ומתגבש, אני מבינה את תפקיד החושים בעולמנו פיזיולוגית, פיזית, מנטלית, רגשית ורוחנית." }),
						/* @__PURE__ */ jsx("p", { children: "אני מלווה את מעיין בכל צעד וצעד, האתגרים היו לא מעטים. התמודדנו עם כל אתגר לאט לאט בהקשבה עמוקה, בסבלנות, בהבנה ובבניית תוכניות. ציירתי, כתבתי מילים, מספרים, יצרתי תוכניות עבודה ויזואליות למדנו לדבר להבין מה מעיין רוצה, תקשורת פנימית שלמדנו לבטא בתקשורת חיצונית. גאה לספר כי מעיין שלנו מסיימת תיכון בהצלחה, צבא ולומדת לתואר ראשון. מעיין לא מוותרת גם כשקשה, חוזרת על כל מבחן פעמיים, מצליחה לסיים את התואר וממשיכה ללמוד NLP." }),
						/* @__PURE__ */ jsx("p", { children: "היום מעייני נשואה ואם לשתי בנות מדהימות ובדרך להיות מטפלת. ביום הולדתי לפני כעשור אנחנו נוסעים לסופ\"ש, תוך כדי שיח עם בעלי עולה רעיון הספר, בו אנחנו מחליטים לשתף את ההורים דרך סיפור-איך הילדים יכולים לחוות את אותה המציאות של ההורים בדרך אחרת. את הסיפור מלווים איורים מדהימים שמירב שדה לביא איירה בחמישה פרקים על חמישה חושים, זה הספר הראשון שמסביר על הדומה והשונה ופותח את הדרך לתקשורת חדשה - שפה חדשה, שפת הרגש." })
					]
				})]
			}),
			/* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				className: About_module_default.aboutImg,
				children: /* @__PURE__ */ jsx(motion.img, {
					src: currentImg,
					alt: "ketty"
				})
			}, currentImg)
		]
	});
};
//#endregion
export { About as default };
