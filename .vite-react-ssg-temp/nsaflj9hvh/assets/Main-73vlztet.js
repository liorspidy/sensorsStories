import { t as ketty_default } from "./ketty-BYi68K_X.js";
import { t as Loading } from "./Loading-iWe7187A.js";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import emailjs from "emailjs-com";
import axios from "axios";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
//#region src/assets/images/book.jpg
var book_default = "/assets/book-BJxHaI-W.jpg";
var Book_module_default = {
	bookPage: "_bookPage_1t4w0_1",
	title: "_title_1t4w0_22",
	book: "_book_1t4w0_1",
	bookMobile: "_bookMobile_1t4w0_46",
	reccomendation: "_reccomendation_1t4w0_56",
	reccomendation2: "_reccomendation2_1t4w0_57",
	reccomendation3: "_reccomendation3_1t4w0_58",
	reccomendor: "_reccomendor_1t4w0_105",
	buyNow: "_buyNow_1t4w0_146",
	buyNowMobile: "_buyNowMobile_1t4w0_172",
	bookmain: "_bookmain_1t4w0_219",
	descBox: "_descBox_1t4w0_231",
	bookDescBox: "_bookDescBox_1t4w0_236",
	bookDesc1: "_bookDesc1_1t4w0_264",
	bookDesc2: "_bookDesc2_1t4w0_275",
	bookDesc: "_bookDesc_1t4w0_236",
	arrow: "_arrow_1t4w0_286",
	arrowmove: "_arrowmove_1t4w0_1",
	ortzeva: "_ortzeva_1t4w0_310",
	bottomRec: "_bottomRec_1t4w0_326"
};
//#endregion
//#region src/assets/images/down-arrow-download-svgrepo-com.svg
var down_arrow_download_svgrepo_com_default = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%3e%3cpath%20style='fill:%23E8E8E8;'%20d='M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256%20C512,114.608,397.392,0,256,0z'/%3e%3cg%20style='opacity:0.2;'%3e%3cpolygon%20points='376.464,220.784%20305.216,293.808%20305.216,117.568%20238.768,117.568%20238.768,293.808%20167.536,220.784%20120.112,267.296%20272,423.008%20423.888,267.296%20'/%3e%3c/g%3e%3cpolygon%20style='fill:%23FFFFFF;'%20points='360.464,204.784%20289.216,277.808%20289.216,101.568%20222.768,101.568%20222.768,277.808%20151.536,204.784%20104.112,251.296%20256,407.008%20407.888,251.296%20'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/images/ortzeva.png
var ortzeva_default = "/assets/ortzeva-RemH7pAx.png";
//#endregion
//#region src/components/book/Book.tsx
var Book = () => {
	const bookVarients = {
		offscreen: {
			y: 20,
			x: -1e3,
			rotate: -40
		},
		onscreen: {
			y: 20,
			x: 30,
			rotate: -7,
			transition: { duration: .8 }
		}
	};
	const mobileBookVarients = {
		offscreen: {
			x: -200,
			opacity: 0
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: { duration: .8 }
		}
	};
	const mobileBuyNowVarients = {
		offscreen: { opacity: 0 },
		onscreen: {
			opacity: 1,
			transition: { duration: 2 }
		},
		clicked: {
			scale: .9,
			transition: { duration: .8 }
		}
	};
	const ortzevaVarients = {
		offscreen: { opacity: 0 },
		onscreen: {
			opacity: 1,
			transition: {
				delay: 1.5,
				duration: .8
			}
		}
	};
	const descVarients = {
		offscreen: {
			y: 50,
			opacity: 0
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 1,
				duration: .8
			}
		}
	};
	const reccVarients = {
		offscreen: {
			x: 50,
			opacity: 0
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 1,
				duration: .8
			}
		}
	};
	const scrollTo = (elId) => {
		const element = document.getElementById(elId);
		if (element) window.scrollTo({
			top: element.offsetTop,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ jsxs(motion.div, {
		id: "book",
		className: Book_module_default.bookPage,
		initial: "offscreen",
		whileInView: "onscreen",
		viewport: {
			once: true,
			amount: .01
		},
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				className: Book_module_default.reccomendation,
				variants: reccVarients,
				children: [/* @__PURE__ */ jsx("p", { children: "\"הספר עוזר לילדים להתמודד עם תסכולים ועם היכולת להביע את עצמם באמצעות ההבנה פנימה ולמצוא מילים לתחושות ולרגשות. הילדים וההורים חווים דרך הסיפורים וההקשבה לקיחת אחריות ובניית תקשורת נכונה ואיכותית. ממליצה באהבה לקרוא אותו\"" }), /* @__PURE__ */ jsx("p", {
					className: Book_module_default.reccomendor,
					children: "ליאורה רנרט"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: Book_module_default.bookmain,
				children: [
					/* @__PURE__ */ jsxs(motion.div, {
						className: Book_module_default.book,
						variants: bookVarients,
						children: [/* @__PURE__ */ jsx("img", {
							src: book_default,
							alt: "ספר סיפורי חיישנים",
							onClick: scrollTo.bind(void 0, "contact")
						}), /* @__PURE__ */ jsx(motion.button, {
							className: Book_module_default.buyNow,
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: 2 },
							onClick: scrollTo.bind(void 0, "contact"),
							"aria-label": "לרכישה",
							children: "לרכישה"
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						className: Book_module_default.bookMobile,
						variants: mobileBookVarients,
						children: [/* @__PURE__ */ jsx("img", {
							src: book_default,
							alt: "ספר סיפורי חיישנים",
							onClick: scrollTo.bind(void 0, "contact")
						}), /* @__PURE__ */ jsx(motion.button, {
							className: Book_module_default.buyNowMobile,
							variants: mobileBuyNowVarients,
							whileTap: "clicked",
							onClick: scrollTo.bind(void 0, "contact"),
							"aria-label": "לרכישה",
							children: "לרכישה"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: Book_module_default.descBox,
						children: [
							/* @__PURE__ */ jsx(motion.img, {
								className: Book_module_default.ortzeva,
								src: ortzeva_default,
								alt: "אור וצבע",
								transition: { duration: 1 },
								whileHover: {
									rotate: [
										0,
										-1,
										1,
										-1,
										1,
										0
									],
									transition: { duration: .4 }
								},
								variants: ortzevaVarients,
								onClick: scrollTo.bind(void 0, "contact")
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								className: Book_module_default.bookDescBox,
								transition: { duration: 2 },
								variants: descVarients,
								children: [
									/* @__PURE__ */ jsx("p", {
										className: Book_module_default.bookDesc1,
										children: "\"אמא של מעין מנסה למצוא פתרון לחוסר שביעות רצונה של מעין מדברים יום-יומיים כגון לבוש, אוכל ופעולות שגרתיות. היא יוצאת לחקור את הנושא ומגלה שבכולנו קיימים חישנים שונים הקובעים מה אנו אוהבים ומה לא נעים לנו. אמא של מעיין מספרת לה בכל ערב סיפור על חישן אחר, ובסוף הסיפורים מעיין לומדת להתחבר לתחושותיה, להבין מה היא אוהבת ומה לא, ובעיקר – היא לומדת להביע זאת במילים כדי למנוע בכי ותסכול.\""
									}),
									/* @__PURE__ */ jsx("p", {
										className: Book_module_default.bookDesc2,
										children: "הספר \"סיפורי חישנים\" הינו ספר לילדים ומבוגרים בנושא מודעות לתקשורת חושית מאת קטי בירמן. הספר מבוסס על עבודת חייה כמאמנת לתקשורת חושית ומפתחת \"שפת הרגש\", המתמקדת בהבדלים בקלט החושי שהם המפתח להבנת הקונפליקטים הבסיסיים בין בני אדם. הספר כתוב כשיחה בין אם לבת, וכולל חמישה סיפורים על ילדים שחווים קשיים בתקשורת החושית, כל אחד מהם מתאר קושי אחר בחוש אחר, שנפתרים בעזרת יצורים קסומים הנקראים \"חישנים\"."
									}),
									/* @__PURE__ */ jsx("p", {
										className: Book_module_default.bookDesc2,
										children: "קטי בירמן מלמדת אותנו להסתכל על השונות בינינו במשקפיים חדשים וללמוד כיצד לתקשר טוב יותר מתוך ההכרה בשונות הפרופיל הסנסורי של כל אחד מאיתנו."
									})
								]
							}),
							/* @__PURE__ */ jsx(motion.button, {
								className: Book_module_default.arrow,
								variants: descVarients,
								onClick: scrollTo.bind(void 0, "author"),
								children: /* @__PURE__ */ jsx("img", {
									src: down_arrow_download_svgrepo_com_default,
									alt: "arrow"
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: Book_module_default.bottomRec,
				children: [/* @__PURE__ */ jsxs(motion.div, {
					className: Book_module_default.reccomendation2,
					variants: reccVarients,
					children: [/* @__PURE__ */ jsx("p", { children: "\"ספר זה פותח צוהר ליצירת שיח חשוב מאוד עם ילדים על רגשות ורצונות פנימיים, שאולי אף הם בעצמם לא מודעים אליהם.\"" }), /* @__PURE__ */ jsx("p", {
						className: Book_module_default.reccomendor,
						children: "ספרי צמרת"
					})]
				}), /* @__PURE__ */ jsxs(motion.div, {
					className: Book_module_default.reccomendation3,
					variants: reccVarients,
					children: [/* @__PURE__ */ jsx("p", { children: "\"סיפרתי את הסיפור לשני אחים בגילאים 6 ו8 ששמחו לשמוע שהבעיה שלהם לא רק שלהם. זהו ספר שמביא לתקשורת מיטיבה, להקשבה לגוף ולקיחת אחריות של הצדדים השונים..\"" }), /* @__PURE__ */ jsx("p", {
						className: Book_module_default.reccomendor,
						children: "נאוה וינגרטן – \"מה למה\""
					})]
				})]
			})
		]
	});
};
var Main_module_default = {
	main: "_main_czc81_1",
	arrowUp: "_arrowUp_czc81_13",
	arrowmove: "_arrowmove_czc81_1",
	arrowUpIcon: "_arrowUpIcon_czc81_30"
};
var Author_module_default = {
	author: "_author_182tg_1",
	aboutBox: "_aboutBox_182tg_16",
	titleContainer: "_titleContainer_182tg_25",
	title: "_title_182tg_25",
	content: "_content_182tg_39",
	text: "_text_182tg_43",
	parbox: "_parbox_182tg_51",
	parboxImg: "_parboxImg_182tg_60",
	par: "_par_182tg_51",
	tellmemore: "_tellmemore_182tg_85",
	imageConatiner: "_imageConatiner_182tg_111",
	image: "_image_182tg_111",
	ortzeva2: "_ortzeva2_182tg_229",
	bottom: "_bottom_182tg_237"
};
//#endregion
//#region src/assets/images/kids.png
var kids_default = "/assets/kids-eTh-8wyF.png";
//#endregion
//#region src/components/author/Author.tsx
var Author = () => {
	const aboutBoxVarients = {
		offscreen: {
			x: 30,
			opacity: 0
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: { duration: .8 }
		}
	};
	const parboxVarients = {
		offscreen: {
			y: 50,
			opacity: 0
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				delay: .75,
				duration: .5
			}
		}
	};
	const imageVarients = {
		offscreen: {
			y: 50,
			opacity: 0
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: .3,
				delay: 1.5,
				duration: .8
			}
		}
	};
	return /* @__PURE__ */ jsx(motion.div, {
		id: "author",
		className: Author_module_default.author,
		initial: "offscreen",
		whileInView: "onscreen",
		viewport: {
			once: true,
			amount: .1
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: Author_module_default.aboutBox,
			children: [/* @__PURE__ */ jsx(motion.div, {
				id: "title",
				className: Author_module_default.titleContainer,
				variants: aboutBoxVarients,
				children: /* @__PURE__ */ jsx("h2", {
					className: Author_module_default.title,
					children: "אודות קטי"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: Author_module_default.content,
				children: [/* @__PURE__ */ jsx(motion.div, {
					variants: imageVarients,
					className: Author_module_default.parboxImg,
					children: /* @__PURE__ */ jsx("img", {
						src: ketty_default,
						alt: "קטי בירמן"
					})
				}), /* @__PURE__ */ jsxs(motion.div, {
					className: Author_module_default.parbox,
					variants: parboxVarients,
					children: [/* @__PURE__ */ jsxs("div", {
						className: Author_module_default.text,
						children: [/* @__PURE__ */ jsxs("p", {
							className: Author_module_default.par,
							children: [
								"קטי ילידת 1961, נשואה לעדי, אם למעין, רעות ונתנאלה וסבתא לשיר, אריאל, אביב ואיתן, היא מאמנת לתקשורת חושית בעזרת הכלי שהיא פיתחה שנקרא \"שפת הרגש\". ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								"בצעירותה חוותה קשיים בלימודים ובתקשורת שהיום היו מסווגים כלקויות למידה. פילסה לעצמה דרך, התחתנה ועבדה כשמנהלת גני ילדים. עם הולדת בתה מעין, צפו ועלו אותם הקשיים שהשאירה מאחור ושלחו אותה לדרך של חקירה ולמידה שממשיכה עד היום בנושא התקשורת החושית. ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								"הכלים שקטי נחשפה אליהם, נתנו לה תשובות שחיפשה במסעה והיא משתפת אותם עם קבוצות, יחידים, משפחות, ילדים ומבוגרים כבר 25 שנים. הספר \"סיפורי חישנים\", נותן גישה פשוטה ופותח שער באופן ממצה אל גוף ידע ענק שנצבר במחברתה לאורך מסע חייה האישיים והמקצועיים."
							]
						}), /* @__PURE__ */ jsx("a", {
							className: Author_module_default.tellmemore,
							href: "/about-me",
							children: "ספרו לי עוד"
						})]
					}), /* @__PURE__ */ jsx(motion.div, {
						variants: imageVarients,
						whileHover: {
							rotate: [
								0,
								-1,
								1,
								-1,
								1,
								0
							],
							transition: { duration: .4 }
						},
						className: Author_module_default.imageConatiner,
						children: /* @__PURE__ */ jsx("img", {
							className: Author_module_default.image,
							src: kids_default,
							alt: "image",
							onClick: () => window.scrollTo({
								top: document.getElementById("community").offsetTop,
								behavior: "smooth"
							})
						})
					})]
				})]
			})]
		})
	});
};
//#endregion
//#region src/assets/images/title.png
var title_default = "/assets/title-DvLWhY32.png";
var Clouds_module_default = {
	clouds: "_clouds_7l5aa_1",
	cloud1: "_cloud1_7l5aa_7",
	cloud2: "_cloud2_7l5aa_14",
	cloud3: "_cloud3_7l5aa_21",
	cloud4: "_cloud4_7l5aa_28",
	cloud5: "_cloud5_7l5aa_35",
	cloud6: "_cloud6_7l5aa_42"
};
//#endregion
//#region src/components/clouds/Clouds.tsx
var Clouds = ({ children }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: Clouds_module_default.clouds,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud1,
				style: {
					right: "10dvw",
					top: "10%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud2,
				style: {
					right: "12dvw",
					top: "25%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud3,
				style: {
					right: "28dvw",
					top: "10%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud4,
				style: {
					right: "20dvw",
					top: "75%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud5,
				style: {
					right: "32dvw",
					top: "75%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud6,
				style: {
					right: "56dvw",
					top: "62%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud2,
				style: {
					right: "64dvw",
					top: "15%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud1,
				style: {
					right: "80dvw",
					top: "55%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud5,
				style: {
					right: "84dvw",
					top: "8%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud5,
				style: {
					right: "3dvw",
					top: "60%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: Clouds_module_default.cloud3,
				style: {
					right: "85dvw",
					top: "55%"
				},
				children: /* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 16",
					children: /* @__PURE__ */ jsx("path", {
						d: "m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925",
						fill: "#fff",
						transform: "matrix(.77976 0 0 .78395-299.99-418.63)"
					})
				})
			}),
			children
		]
	});
};
var Title_module_default = {
	titleBox: "_titleBox_17wmv_1",
	title: "_title_17wmv_1",
	floatUpDown: "_floatUpDown_17wmv_1",
	slideUpAndFadeIn: "_slideUpAndFadeIn_17wmv_1",
	scrollDown: "_scrollDown_17wmv_40",
	scrollDownCircle: "_scrollDownCircle_17wmv_59",
	scrollIcon: "_scrollIcon_17wmv_1"
};
//#endregion
//#region src/components/title/useTitle.ts
var useTitle = () => {
	const scrollToElement = () => {
		const element = document.getElementById("book");
		if (element) return window.scrollTo({
			top: element.offsetTop,
			behavior: "smooth"
		});
		else return;
	};
	return { scrollToElement };
};
//#endregion
//#region src/components/title/Title.tsx
var Title = () => {
	const { scrollToElement } = useTitle();
	return /* @__PURE__ */ jsxs("div", {
		className: Title_module_default.titleBox,
		children: [/* @__PURE__ */ jsxs("div", {
			className: Title_module_default.title,
			children: [/* @__PURE__ */ jsx("img", {
				src: title_default,
				alt: "סיפורי חיישנים",
				"aria-label": "כותרת סיפורי חיישנים"
			}), /* @__PURE__ */ jsx("div", {
				className: Title_module_default.scrollDown,
				onClick: scrollToElement,
				children: /* @__PURE__ */ jsx("div", { className: Title_module_default.scrollDownCircle })
			})]
		}), /* @__PURE__ */ jsx(Clouds, {})]
	});
};
var Characters_module_default = {
	Characters: "_Characters_18bxm_1",
	chars: "_chars_18bxm_13",
	title: "_title_18bxm_21",
	sensorsBox: "_sensorsBox_18bxm_36",
	sensorImg: "_sensorImg_18bxm_59",
	charDesc: "_charDesc_18bxm_89",
	charDescQuote: "_charDescQuote_18bxm_99",
	charDescInvite: "_charDescInvite_18bxm_108",
	blured: "_blured_18bxm_214"
};
//#endregion
//#region src/components/char/Characters.json
var Characters_default = [
	{
		"id": 1,
		"name": "אור וצבע",
		"p1": "\"לחישנים אור וצבע\nשתמיד הולכים יחדיו\nיש עיניים גדולות וסקרניות\nהמגיבות לכל מה שהן רואות..\"",
		"p2": "הצטרפו לאור וצבע בספר \"סיפורי חישנים\" וחוו יחד איתם\nאת הדרך של רון ורוני להכיר את עצמם.",
		"img": "ortzevaChar.png"
	},
	{
		"id": 2,
		"name": "צליל",
		"p1": "\"לחישן צליל יש אוזניים גדולות \n המגיבות לכל מה שהן שומעות לצחוק מתגלגל של ילדים, ולפצפוץ פסיעות על עלים יבשים..\"",
		"p2": "הצטרפו לצליל בספר \"סיפורי חישנים\" וחוו יחד איתו את הדרך של אבא ושיר להכיר את עצמם.",
		"img": "tzlilChar.png"
	},
	{
		"id": 3,
		"name": "ריחנית",
		"p1": "\"לחיישנית ריחנית יש אף ארוך ושובב\nשרוצה להריח הכל:\nריח שדה רטוב אחרי הגשם,\nריח הסבון באמבטיית הקצף..\"",
		"p2": "הצטרפו לריחנית בספר \"סיפורי חישנים\" וחוו יחד איתה את הדרך של איתן ואביב להכיר את עצמם.",
		"img": "smellyChar.png"
	},
	{
		"id": 4,
		"name": "חיבוקית",
		"p1": "\"לחיבוקית יש לב גדול\nמלא בחום ואהבה\nוהיא מגיבה למגע חול הים הנצמד לרגליים\nלשפריץ של מים שניתז על העיניים..\"",
		"p2": "הצטרפו לחיבוקית בספר \"סיפורי חישנים\" וחוו יחד איתה את הדרך של גיל וגילה להכיר את עצמם.",
		"img": "hibukitChar.png"
	},
	{
		"id": 5,
		"name": "יאמי טאמי",
		"p1": "\"לחישן יאמי טאמי יש לשון \nשרוצה לחוש ולטעום הכל – \nמרירות של עלי חסה קטנטנים\nומתיקות של המון המון קינוחים..\"",
		"p2": "הצטרפו ליאמי טאמי בספר \"סיפורי חישנים\" וחוו יחד איתו את הדרך של אבא ואריאל להכיר את עצמם.",
		"img": "yummyChar.png"
	}
];
//#endregion
//#region src/components/char/Character.tsx
var Character = (props) => {
	const formattedString = props.p1.replace(/\n/g, "<br>");
	return /* @__PURE__ */ jsxs(motion.div, {
		className: props.sensorBoxClass,
		variants: {
			offscreen: {
				x: -100,
				opacity: 0
			},
			onscreen: {
				x: 0,
				opacity: 1,
				transition: { duration: 1 }
			}
		},
		children: [/* @__PURE__ */ jsx("div", {
			className: Characters_module_default.sensorImg,
			children: /* @__PURE__ */ jsx(motion.img, {
				src: props.img,
				alt: props.name,
				whileHover: {
					rotate: [
						0,
						-1,
						1,
						-1,
						1,
						0
					],
					transition: { duration: .4 }
				}
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: Characters_module_default.charDesc,
			children: [/* @__PURE__ */ jsx("p", {
				className: Characters_module_default.charDescQuote,
				dangerouslySetInnerHTML: { __html: formattedString }
			}), /* @__PURE__ */ jsx("p", {
				className: Characters_module_default.charDescInvite,
				children: props.p2
			})]
		})]
	});
};
//#endregion
//#region src/components/char/Characters.tsx
var Characters = () => {
	return /* @__PURE__ */ jsxs(motion.div, {
		id: "meet",
		className: Characters_module_default.Characters,
		initial: "offscreen",
		whileInView: "onscreen",
		transition: { staggerChildren: .4 },
		viewport: {
			once: true,
			amount: .1
		},
		children: [/* @__PURE__ */ jsx(motion.div, {
			className: Characters_module_default.title,
			variants: {
				offscreen: {
					x: 30,
					opacity: 0
				},
				onscreen: {
					x: 0,
					opacity: 1,
					transition: { duration: 2 }
				}
			},
			children: /* @__PURE__ */ jsx("h2", { children: "הכירו את החישנים" })
		}), /* @__PURE__ */ jsx(motion.div, {
			className: Characters_module_default.chars,
			children: Characters_default.map((sensor, index) => /* @__PURE__ */ jsx(Character, {
				sensorBoxClass: Characters_module_default.sensorsBox,
				name: sensor.name,
				p1: sensor.p1,
				p2: sensor.p2,
				img: sensor.img
			}, index))
		})]
	});
};
var Contact_module_default = {
	contactComp: "_contactComp_1aw1o_1",
	contactBox: "_contactBox_1aw1o_13",
	contactDetails: "_contactDetails_1aw1o_22",
	title: "_title_1aw1o_33",
	form: "_form_1aw1o_47",
	formButton: "_formButton_1aw1o_70",
	contactDiv: "_contactDiv_1aw1o_96",
	checkboxContainer: "_checkboxContainer_1aw1o_128",
	contactPhotos: "_contactPhotos_1aw1o_153",
	momandgirl: "_momandgirl_1aw1o_159",
	hearts: "_hearts_1aw1o_164",
	sent: "_sent_1aw1o_169",
	checkmarkBox: "_checkmarkBox_1aw1o_195",
	checkmark: "_checkmark_1aw1o_195",
	errorMessage: "_errorMessage_1aw1o_207",
	checkboxCheckmark: "_checkboxCheckmark_1aw1o_273"
};
//#endregion
//#region src/assets/images/hearts1.png
var hearts1_default = "/assets/hearts1-Y_7WctyW.png";
//#endregion
//#region src/assets/images/momandgirl.png
var momandgirl_default = "/assets/momandgirl-WOZ6ElNp.png";
//#endregion
//#region src/components/contact/useContact.ts
var useContact = () => {
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const [senderName, setSenderName] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [senderPhone, setSenderPhone] = useState("");
	const [allowGettingEmail, setAllowGettingEmail] = useState(true);
	const [isMessageSent, setIsMessageSent] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};
	const handleSenderNameChange = (event) => {
		setSenderName(event.target.value);
	};
	const handleSenderEmailChange = (event) => {
		setSenderEmail(event.target.value);
	};
	const handleSenderPhoneChange = (event) => {
		setSenderPhone(event.target.value);
	};
	const handleallowGettingEmailChange = (event) => {
		setAllowGettingEmail(event.target.checked);
	};
	const addToSubscribers = async () => {
		let name = senderName.trim();
		if (name.length < 2) {
			setError("שם מלא חייב להכיל לפחות שני תווים");
			return;
		}
		let phone = senderPhone ? senderPhone.replace(/\D/g, "") : "";
		if (phone && !/^\d{9,10}$/.test(phone)) {
			setError("מספר טלפון לא תקין");
			return;
		}
		if (phone && !/^\d{3}-\d{7}$/.test(phone)) {
			setError("מספר טלפון לא תקין");
			return;
		}
		try {
			setIsLoading(true);
			const mylistId = "1290311";
			const subscriber = {
				name,
				email: senderEmail,
				phone
			};
			await axios.post(`https://sensorsstoriesbackend.glitch.me/ravmesser/addSubscriber/${mylistId}`, subscriber);
			setIsMessageSent(true);
			setError("");
		} catch (err) {
			console.log(err);
			setError("קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים");
		} finally {
			setIsLoading(false);
		}
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!title || !message || !senderName || !senderEmail) {
			setError("יש למלא את כל השדות המסומנים בכוכבית");
			return;
		}
		if (!senderEmail.includes("@")) {
			setError("כתובת המייל אינה חוקית");
			return;
		}
		setIsLoading(true);
		setError("");
		let formData = new FormData();
		formData.append("title", title);
		formData.append("message", message);
		formData.append("senderName", senderName);
		formData.append("senderEmail", senderEmail);
		formData.append("senderPhone", senderPhone);
		const form = document.createElement("form");
		formData.forEach((value, key) => {
			const field = document.createElement("input");
			field.setAttribute("type", "hidden");
			field.setAttribute("name", key);
			field.setAttribute("value", value.toString());
			form.appendChild(field);
		});
		try {
			if (allowGettingEmail) {
				await addToSubscribers();
				await emailjs.sendForm("service_qkv1s6o", "template_s7ikuqi", form, "49qC0L8yz5TPu9xDg");
			} else await emailjs.sendForm("service_qkv1s6o", "template_s7ikuqi", form, "49qC0L8yz5TPu9xDg");
			setIsMessageSent(true);
		} catch (err) {
			console.error(err);
			setError("קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים");
		} finally {
			setIsLoading(false);
			setTitle("");
			setMessage("");
			setSenderEmail("");
		}
	};
	return {
		title,
		message,
		senderName,
		senderEmail,
		senderPhone,
		allowGettingEmail,
		isMessageSent,
		isLoading,
		error,
		handleTitleChange,
		handleMessageChange,
		handleSenderNameChange,
		handleSenderEmailChange,
		handleSenderPhoneChange,
		handleallowGettingEmailChange,
		handleSubmit
	};
};
//#endregion
//#region src/components/contact/Contact.tsx
var Contact = () => {
	const { title, message, senderName, senderEmail, senderPhone, allowGettingEmail, isMessageSent, isLoading, error, handleTitleChange, handleMessageChange, handleSenderNameChange, handleSenderEmailChange, handleSenderPhoneChange, handleallowGettingEmailChange, handleSubmit } = useContact();
	const aboutBoxVarients = {
		offscreen: {
			x: 30,
			opacity: 0
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: { duration: .8 }
		}
	};
	return /* @__PURE__ */ jsxs(motion.div, {
		className: Contact_module_default.contactComp,
		id: "contact",
		initial: "offscreen",
		whileInView: "onscreen",
		transition: { staggerChildren: .4 },
		viewport: {
			once: true,
			amount: .1
		},
		children: [/* @__PURE__ */ jsx(motion.div, {
			className: Contact_module_default.title,
			variants: aboutBoxVarients,
			children: /* @__PURE__ */ jsx("h2", { children: "צרו קשר " })
		}), /* @__PURE__ */ jsxs("div", {
			className: Contact_module_default.contactBox,
			children: [/* @__PURE__ */ jsxs("div", {
				className: Contact_module_default.contactPhotos,
				children: [/* @__PURE__ */ jsx(motion.img, {
					variants: {
						offscreen: {
							x: -30,
							opacity: 0
						},
						onscreen: {
							x: 0,
							opacity: 1,
							transition: { duration: .8 }
						}
					},
					whileHover: {
						rotate: [
							0,
							-1,
							1,
							-1,
							1,
							0
						],
						transition: { duration: .4 }
					},
					className: Contact_module_default.hearts,
					src: hearts1_default,
					alt: "רגשות"
				}), /* @__PURE__ */ jsx(motion.img, {
					variants: {
						offscreen: {
							y: 50,
							opacity: 0
						},
						onscreen: {
							y: 0,
							opacity: 1,
							transition: { duration: .8 }
						}
					},
					whileHover: {
						rotate: [
							0,
							-1,
							1,
							-1,
							1,
							0
						],
						transition: { duration: .4 }
					},
					className: Contact_module_default.momandgirl,
					src: momandgirl_default,
					alt: "אמא ובת"
				})]
			}), /* @__PURE__ */ jsxs(motion.div, {
				className: Contact_module_default.contactDetails,
				variants: aboutBoxVarients,
				children: [
					!isMessageSent && !isLoading && /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: Contact_module_default.form,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: Contact_module_default.contactDiv,
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "senderName",
									children: "שמך המלא"
								}), /* @__PURE__ */ jsx("input", {
									type: "text",
									id: "senderName",
									value: senderName,
									onChange: handleSenderNameChange,
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: Contact_module_default.contactDiv,
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "senderEmail",
									children: "דוא\"ל"
								}), /* @__PURE__ */ jsx("input", {
									type: "email",
									id: "senderEmail",
									value: senderEmail,
									onChange: handleSenderEmailChange,
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: Contact_module_default.contactDiv,
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "senderPhone",
									children: "טלפון"
								}), /* @__PURE__ */ jsx("input", {
									type: "tel",
									id: "senderPhone",
									value: senderPhone,
									onChange: handleSenderPhoneChange
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: Contact_module_default.contactDiv,
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "title",
									children: "הנושא"
								}), /* @__PURE__ */ jsx("input", {
									type: "text",
									id: "title",
									value: title,
									onChange: handleTitleChange,
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: Contact_module_default.contactDiv,
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "message",
									children: "ההודעה"
								}), /* @__PURE__ */ jsx("textarea", {
									id: "message",
									value: message,
									onChange: handleMessageChange,
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: Contact_module_default.checkboxContainer,
								children: [
									/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										id: "allowGettingEmail",
										checked: allowGettingEmail,
										onChange: handleallowGettingEmailChange
									}),
									/* @__PURE__ */ jsx("span", { className: Contact_module_default.checkboxCheckmark }),
									/* @__PURE__ */ jsx("span", { children: "אני מסכים/ה להצטרף לקהילה של קטי בירמן ולקבל עדכונים על סדנאות, הרצאות, ספרים חדשים ועוד בדוא\"ל ובסלולר." })
								]
							}),
							error.length > 0 && /* @__PURE__ */ jsx("p", {
								className: Contact_module_default.errorMessage,
								children: error
							}),
							/* @__PURE__ */ jsx("div", {
								className: Contact_module_default.formButton,
								children: /* @__PURE__ */ jsx("button", {
									type: "submit",
									children: "לשליחה"
								})
							})
						]
					}),
					isLoading && /* @__PURE__ */ jsx(Loading, {}),
					isMessageSent && !isLoading && /* @__PURE__ */ jsxs("div", {
						className: Contact_module_default.sent,
						children: [
							/* @__PURE__ */ jsx("p", { children: "תודה רבה על פנייתך!" }),
							/* @__PURE__ */ jsx("div", {
								className: Contact_module_default.checkmarkBox,
								children: /* @__PURE__ */ jsx(CheckCircleOutlinedIcon, { className: Contact_module_default.checkmark })
							}),
							/* @__PURE__ */ jsx("p", { children: "המייל נשלח בהצלחה נחזור אליך בהקדם" })
						]
					})
				]
			})]
		})]
	});
};
var Community_module_default = {
	community: "_community_1y78x_2",
	communityBox: "_communityBox_1y78x_15",
	titleContainer: "_titleContainer_1y78x_20",
	title: "_title_1y78x_20",
	boldText: "_boldText_1y78x_34",
	joinText: "_joinText_1y78x_43",
	freeText: "_freeText_1y78x_43",
	contentBox: "_contentBox_1y78x_49",
	listItem: "_listItem_1y78x_76",
	list: "_list_1y78x_76",
	content: "_content_1y78x_49",
	unsubmitted: "_unsubmitted_1y78x_106",
	inputContainer: "_inputContainer_1y78x_110",
	form: "_form_1y78x_117",
	submitted: "_submitted_1y78x_165",
	imageContainer: "_imageContainer_1y78x_178",
	image: "_image_1y78x_178",
	formButton: "_formButton_1y78x_191",
	madadon: "_madadon_1y78x_233",
	bottom: "_bottom_1y78x_260",
	talkbaloonContainer: "_talkbaloonContainer_1y78x_268",
	talkbaloon: "_talkbaloon_1y78x_268",
	checkmarkBox: "_checkmarkBox_1y78x_281",
	checkmark: "_checkmark_1y78x_281",
	errorMessage: "_errorMessage_1y78x_411"
};
//#endregion
//#region src/assets/images/madadon1.png
var madadon1_default = "/assets/madadon1-Ccqlq5XM.png";
//#endregion
//#region src/components/community/useCommunity.ts
var useCommunity = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [subscriberName, setSubscriberName] = useState("");
	const [subscriberEmail, setSubscriberEmail] = useState("");
	const [subscriberPhone, setSubscriberPhone] = useState("");
	const [subscriberError, setSubscriberError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const sumbitHandler = async (e) => {
		e.preventDefault();
		let name = subscriberName.trim();
		if (name.length < 2) {
			setSubscriberError("שם מלא חייב להכיל לפחות שני תווים");
			return;
		}
		let phone = subscriberPhone.replace(/\D/g, "");
		if (!/^\d{9,10}$/.test(phone)) {
			setSubscriberError("מספר טלפון לא תקין");
			return;
		}
		phone = phone.replace(/^0?(\d{2})(\d{3})(\d{4})$/, "0$1-$2$3");
		if (!/^\d{3}-\d{7}$/.test(phone)) {
			setSubscriberError("מספר טלפון לא תקין");
			return;
		}
		try {
			setIsLoading(true);
			const mylistId = "1290311";
			const subscriber = {
				name,
				email: subscriberEmail,
				phone
			};
			await axios.post(`https://sensorsstoriesbackend.glitch.me/ravmesser/addSubscriber/${mylistId}`, subscriber);
			setIsSubmitted(true);
			setSubscriberError("");
			setSubscriberName("");
			setSubscriberEmail("");
			setSubscriberPhone("");
		} catch (err) {
			console.log(err);
			setSubscriberError("קרתה שגיאה בשליחת הטופס, אנא נסו בשנית בעוד כמה רגעים");
		} finally {
			setTimeout(() => {
				setIsLoading(false);
			}, 2e5);
		}
	};
	useEffect(() => {}, []);
	return {
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
	};
};
//#endregion
//#region src/components/community/Community.tsx
var Community = () => {
	const { isSubmitted, subscriberName, setSubscriberName, subscriberEmail, setSubscriberEmail, subscriberPhone, setSubscriberPhone, subscriberError, isLoading, sumbitHandler } = useCommunity();
	const aboutBoxVariants = {
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
	return /* @__PURE__ */ jsx(motion.div, {
		id: "community",
		className: Community_module_default.community,
		initial: "offscreen",
		whileInView: "onscreen",
		viewport: {
			once: true,
			amount: .1
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: Community_module_default.communityBox,
			children: [/* @__PURE__ */ jsx(motion.div, {
				className: Community_module_default.titleContainer,
				variants: aboutBoxVariants,
				children: /* @__PURE__ */ jsx("h2", {
					className: Community_module_default.title,
					children: "הצטרפו לקהילה"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: Community_module_default.contentBox,
				children: [/* @__PURE__ */ jsxs(motion.div, {
					className: Community_module_default.joinText,
					variants: aboutBoxVariants,
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: Community_module_default.boldText,
							children: /* @__PURE__ */ jsxs("strong", { children: [
								"ההרשמה לקהילה פתוחה לכולם",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: Community_module_default.freeText,
									children: "ובחינם!"
								})
							] })
						}),
						/* @__PURE__ */ jsxs("p", { children: [
							/* @__PURE__ */ jsx("br", {}),
							"רוצים לקבל עדכונים שוטפים על סדנאות, הרצאות, ספרים חדשים ועוד? הצטרפו לקהילה של קטי בירמן ותהיו הראשונים לדעת!",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("br", {}),
							"בקהילה תוכלו למצוא:",
							/* @__PURE__ */ jsx("br", {})
						] }),
						/* @__PURE__ */ jsxs("ul", {
							className: Community_module_default.list,
							children: [
								/* @__PURE__ */ jsx("li", {
									className: Community_module_default.listItem,
									children: "טיפים ועצות לתקשורת טובה יותר עם ילדים ומבוגרים"
								}),
								/* @__PURE__ */ jsx("li", {
									className: Community_module_default.listItem,
									children: "הבנה מעמיקה של עולם החושים והשפעתו על התנהגות"
								}),
								/* @__PURE__ */ jsx("li", {
									className: Community_module_default.listItem,
									children: "כלים פרקטיים ליישום בבית ובכיתה"
								}),
								/* @__PURE__ */ jsx("li", {
									className: Community_module_default.listItem,
									children: "הזמדנות להשתתף בסדנאות והרצאות מיוחדות"
								}),
								/* @__PURE__ */ jsx("li", {
									className: Community_module_default.listItem,
									children: "קהילה תומכת ומכילה"
								})
							]
						}),
						/* @__PURE__ */ jsx("br", {})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: Community_module_default.content,
					children: [/* @__PURE__ */ jsxs(motion.form, {
						className: Community_module_default.form,
						onSubmit: sumbitHandler,
						variants: aboutBoxVariants,
						children: [
							!isSubmitted && !isLoading && /* @__PURE__ */ jsxs("div", {
								className: Community_module_default.unsubmitted,
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: Community_module_default.inputContainer,
										children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "name",
											children: "שם מלא"
										}), /* @__PURE__ */ jsx("input", {
											id: "name",
											type: "text",
											value: subscriberName,
											onChange: (e) => setSubscriberName(e.target.value),
											required: true
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: Community_module_default.inputContainer,
										children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "email",
											children: "דוא\"ל"
										}), /* @__PURE__ */ jsx("input", {
											id: "email",
											type: "email",
											value: subscriberEmail,
											onChange: (e) => setSubscriberEmail(e.target.value),
											required: true
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: Community_module_default.inputContainer,
										children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "phone",
											children: "טלפון"
										}), /* @__PURE__ */ jsx("input", {
											id: "phone",
											type: "tel",
											value: subscriberPhone,
											onChange: (e) => setSubscriberPhone(e.target.value)
										})]
									}),
									subscriberError.length > 0 && /* @__PURE__ */ jsx("p", {
										className: Community_module_default.errorMessage,
										children: subscriberError
									}),
									/* @__PURE__ */ jsx("div", {
										className: Community_module_default.formButton,
										children: /* @__PURE__ */ jsx("button", {
											type: "submit",
											children: "הצטרף"
										})
									})
								]
							}),
							isLoading && /* @__PURE__ */ jsx(Loading, {}),
							isSubmitted && !isLoading && /* @__PURE__ */ jsxs("div", {
								className: Community_module_default.submitted,
								children: [
									/* @__PURE__ */ jsx("p", { children: "ההרשמה בוצעה בהצלחה!" }),
									/* @__PURE__ */ jsx("div", {
										className: Community_module_default.checkmarkBox,
										children: /* @__PURE__ */ jsx(CheckCircleOutlinedIcon, { className: Community_module_default.checkmark })
									}),
									/* @__PURE__ */ jsx("p", { children: "כלים נוספים בדרך.." })
								]
							})
						]
					}), /* @__PURE__ */ jsx(motion.div, {
						variants: {
							offscreen: {
								y: 50,
								opacity: 0
							},
							onscreen: {
								y: 0,
								opacity: 1,
								transition: {
									type: "spring",
									bounce: .3,
									delay: 1,
									duration: .5
								}
							}
						},
						whileHover: {
							rotate: [
								0,
								-1,
								1,
								-1,
								1,
								0
							],
							transition: { duration: .4 }
						},
						className: Community_module_default.madadon,
						children: /* @__PURE__ */ jsx("img", {
							src: madadon1_default,
							alt: "madadon",
							onClick: () => window.scrollTo({
								top: document.getElementById("meet").offsetTop,
								behavior: "smooth"
							})
						})
					})]
				})]
			})]
		})
	});
};
//#endregion
//#region src/pages/main/useMain.ts
var useMain = () => {
	const [showArrow, setShowArrow] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const contactElement = document.getElementById("book");
			if (contactElement) setShowArrow(contactElement.getBoundingClientRect().top < window.innerHeight);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return {
		showArrow,
		scrollToTop
	};
};
//#endregion
//#region src/pages/main/Main.tsx
var Main = () => {
	const { showArrow, scrollToTop } = useMain();
	return /* @__PURE__ */ jsxs("div", {
		className: Main_module_default.main,
		id: "main",
		children: [
			/* @__PURE__ */ jsxs(Helmet, { children: [
				/* @__PURE__ */ jsx("title", { children: "קטי בירמן - סיפורי חישנים" }),
				/* @__PURE__ */ jsx("meta", {
					name: "description",
					content: "ספר לילדים ומבוגרים על תקשורת חושית מאת קטי בירמן. גלו כיצד חישנים שונים משפיעים על התנהגות, רגשות ותקשורת."
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:title",
					content: "קטי בירמן - סיפורי חישנים"
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:description",
					content: "ספר לילדים ומבוגרים על תקשורת חושית מאת קטי בירמן."
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:type",
					content: "website"
				}),
				/* @__PURE__ */ jsx("link", {
					rel: "canonical",
					href: "https://www.sensorsstories.co.il/"
				})
			] }),
			showArrow && /* @__PURE__ */ jsxs("button", {
				className: Main_module_default.arrowUp,
				onClick: scrollToTop,
				children: [/* @__PURE__ */ jsx(ArrowCircleUpIcon, { className: Main_module_default.arrowUpIcon }), /* @__PURE__ */ jsx("h4", { children: "חזרה למעלה" })]
			}),
			/* @__PURE__ */ jsx(Title, {}),
			/* @__PURE__ */ jsx(Book, {}),
			/* @__PURE__ */ jsx(Author, {}),
			/* @__PURE__ */ jsx(Community, {}),
			/* @__PURE__ */ jsx(Characters, {}),
			/* @__PURE__ */ jsx(Contact, {})
		]
	});
};
//#endregion
export { Main as default };
