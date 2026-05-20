import { t as Loading } from "./Loading-iWe7187A.js";
import { Children, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
var Media_module_default = {
	media: "_media_1vhz6_1",
	title: "_title_1vhz6_16"
};
var Carousel_module_default = {
	carousel: "_carousel_n1j9d_1",
	fadein: "_fadein_n1j9d_1",
	arrowIcon: "_arrowIcon_n1j9d_26",
	content: "_content_n1j9d_47",
	carouselChild: "_carouselChild_n1j9d_61"
};
//#endregion
//#region src/tools/carousel/useCarousel.ts
var useCarousel = (children) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [childrenLoaded, setChildrenLoaded] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const contentRef = useRef(null);
	const childrenLength = Children.count(children);
	useEffect(() => {
		if (contentRef.current) contentRef.current.scrollTo({
			left: scrollPosition,
			behavior: "smooth"
		});
	}, [scrollPosition]);
	const handleNext = () => {
		if (!contentRef.current) return;
		const nextPosition = scrollPosition + contentRef.current.clientWidth;
		if (nextPosition >= contentRef.current.scrollWidth || contentRef.current.scrollWidth - nextPosition <= 2) setScrollPosition(0);
		else setScrollPosition(nextPosition);
	};
	const handlePrev = () => {
		if (!contentRef.current) return;
		const nextPosition = scrollPosition - contentRef.current.clientWidth;
		if (nextPosition < 0) setScrollPosition(contentRef.current.scrollWidth);
		else setScrollPosition(nextPosition);
	};
	const childLoadedHandler = () => {
		setChildrenLoaded((prev) => prev + 1);
		if (childrenLoaded === childrenLength - 1) setIsLoading(false);
	};
	return {
		contentRef,
		isLoading,
		handleNext,
		handlePrev,
		childLoadedHandler
	};
};
//#endregion
//#region src/tools/carousel/Carousel.tsx
var Carousel = ({ children }) => {
	const { contentRef, isLoading, handleNext, handlePrev, childLoadedHandler } = useCarousel(children);
	const childrenMapped = Children.map(children, (child, index) => {
		return /* @__PURE__ */ jsx("div", {
			className: Carousel_module_default.carouselChild,
			onLoad: childLoadedHandler,
			style: { display: isLoading ? "none" : "block" },
			children: child
		}, index);
	});
	return /* @__PURE__ */ jsxs("div", {
		className: Carousel_module_default.carousel,
		children: [
			/* @__PURE__ */ jsx("button", {
				className: Carousel_module_default.arrowIcon,
				onClick: handlePrev,
				children: /* @__PURE__ */ jsx(ArrowBackIosNewRoundedIcon, { sx: {
					fontSize: 50,
					cursor: "pointer"
				} })
			}),
			/* @__PURE__ */ jsx("div", {
				className: Carousel_module_default.content,
				ref: contentRef,
				children: childrenMapped
			}),
			isLoading && /* @__PURE__ */ jsx(Loading, {}),
			/* @__PURE__ */ jsx("button", {
				className: Carousel_module_default.arrowIcon,
				onClick: handleNext,
				children: /* @__PURE__ */ jsx(ArrowForwardIosRoundedIcon, { sx: {
					fontSize: 50,
					cursor: "pointer"
				} })
			})
		]
	});
};
//#endregion
//#region src/pages/media/useMedia.ts
var useMedia = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
};
//#endregion
//#region src/pages/media/Media.tsx
var Media = () => {
	useMedia();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: "ראיונות וקורסים - סיפורי חישנים" }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "צפו בראיונות עם קטי בירמן על תקשורת חושית ורגשית. הרצאות וסדנאות על שפת הרגש וההבדלים בין בני אדם."
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "ראיונות וקורסים - סיפורי חישנים"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: "ראיונות, הרצאות וסדנאות על תקשורת חושית עם קטי בירמן."
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: "https://www.sensorsstories.co.il/courses"
		})
	] }), /* @__PURE__ */ jsxs(motion.div, {
		className: Media_module_default.media,
		id: "media",
		initial: "offscreen",
		whileInView: "onscreen",
		transition: { staggerChildren: .8 },
		viewport: {
			once: true,
			amount: .1
		},
		children: [/* @__PURE__ */ jsx(motion.div, {
			className: Media_module_default.title,
			variants: {
				offscreen: {
					x: 30,
					opacity: 0
				},
				onscreen: {
					x: 0,
					opacity: 1,
					transition: { duration: .8 }
				}
			},
			children: /* @__PURE__ */ jsx("h2", { children: "ראיונות בתקשורת" })
		}), /* @__PURE__ */ jsxs(Carousel, { children: [/* @__PURE__ */ jsx("iframe", {
			src: "https://www.youtube.com/embed/3OhJ62f36kI?si=UCsTNTBZ8OLGgOcc",
			title: "YouTube video player",
			allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
			allowFullScreen: true,
			style: {
				width: "100%",
				aspectRatio: "16 / 9",
				overflow: "hidden",
				border: "none"
			}
		}), /* @__PURE__ */ jsx("iframe", {
			src: "https://www.youtube.com/embed/kKTOGu8azZI?si=gaTOTKR6AC6MiIl_",
			title: "YouTube video player",
			allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
			allowFullScreen: true,
			style: {
				width: "100%",
				aspectRatio: "16 / 9",
				overflow: "hidden",
				border: "none"
			}
		})] })]
	})] });
};
//#endregion
export { Media as default };
