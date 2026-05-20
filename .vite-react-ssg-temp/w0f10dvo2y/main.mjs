import { ViteReactSSG } from "vite-react-ssg";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
//#region src/assets/images/logoEmpty.png
var logoEmpty_default = "/assets/logoEmpty-FhWtArQI.png";
var Header_module_default = {
	header: "_header_1f17p_2",
	slideDown: "_slideDown_1f17p_1",
	hidden: "_hidden_1f17p_23",
	slideUp: "_slideUp_1f17p_1",
	scrolled: "_scrolled_1f17p_27",
	sticky: "_sticky_1f17p_47",
	headerLogo: "_headerLogo_1f17p_52",
	logo: "_logo_1f17p_59",
	headerNav: "_headerNav_1f17p_65",
	headerLink: "_headerLink_1f17p_76",
	hamburgerWrapper: "_hamburgerWrapper_1f17p_97",
	header_logo: "_header_logo_1f17p_141"
};
//#endregion
//#region src/components/mobileMenu/MobileMenu.tsx
var navLinks = [
	{
		label: "הספר",
		path: "/",
		scrollTo: "book"
	},
	{
		label: "אודות",
		path: "/",
		scrollTo: "author"
	},
	{
		label: "הקהילה",
		path: "/",
		scrollTo: "community"
	},
	{
		label: "החישנים",
		path: "/",
		scrollTo: "meet"
	},
	{
		label: "צרו קשר",
		path: "/",
		scrollTo: "contact"
	},
	{
		label: "קורסים והרצאות",
		path: "/courses",
		scrollTo: null
	}
];
function MobileMenu({ isOpen, onClose }) {
	const navigate = useNavigate();
	const panelRef = useRef(null);
	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && isOpen) onClose();
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);
	const handleLinkClick = (path, scrollTo) => {
		onClose();
		navigate(path);
		if (scrollTo) setTimeout(() => {
			const element = document.getElementById(scrollTo);
			if (element) window.scrollTo({
				top: element.offsetTop,
				behavior: "smooth"
			});
		}, 100);
	};
	return /* @__PURE__ */ jsx("div", {
		className: `mobile-menu-overlay${isOpen ? " open" : ""}`,
		onClick: onClose,
		"aria-hidden": !isOpen,
		children: /* @__PURE__ */ jsx("div", {
			className: `mobile-menu-panel${isOpen ? " open" : ""}`,
			ref: panelRef,
			onClick: (e) => e.stopPropagation(),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "תפריט ניווט",
			children: /* @__PURE__ */ jsx("nav", {
				className: "mobile-menu-nav",
				children: navLinks.map((link, index) => /* @__PURE__ */ jsx("div", {
					className: "mobile-menu-item",
					children: /* @__PURE__ */ jsx("button", {
						className: "mobile-menu-link",
						onClick: () => handleLinkClick(link.path, link.scrollTo),
						children: link.label
					})
				}, index))
			})
		})
	});
}
//#endregion
//#region src/components/header/useHeader.ts
var useHeader = () => {
	const location = useLocation();
	const [visible, setVisible] = useState(true);
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const prevScrollPos = useRef(0);
	const hideTimeout = useRef(null);
	const mouseStopTimeout = useRef(null);
	const isMouseMoving = useRef(false);
	const isMouseOverHeader = useRef(false);
	const shouldNotHide = location.pathname === "/about-me" || location.pathname === "/courses";
	useEffect(() => {
		if (shouldNotHide) setVisible(true);
	}, [shouldNotHide]);
	const cancelHide = useCallback(() => {
		if (hideTimeout.current) {
			clearTimeout(hideTimeout.current);
			hideTimeout.current = null;
		}
	}, []);
	const scheduleHide = useCallback(() => {
		cancelHide();
		if (shouldNotHide) return;
		if (window.scrollY < 10) return;
		if (!isMouseOverHeader.current && !isMouseMoving.current) hideTimeout.current = setTimeout(() => {
			setVisible(false);
			hideTimeout.current = null;
		}, 1e3);
	}, [cancelHide, shouldNotHide]);
	const forceHide = useCallback(() => {
		cancelHide();
		if (shouldNotHide) return;
		setVisible(false);
	}, [cancelHide, shouldNotHide]);
	useEffect(() => {
		const handleMouseMove = () => {
			if (shouldNotHide) return;
			if (window.scrollY < 10) {
				cancelHide();
				setVisible(true);
				return;
			}
			isMouseMoving.current = true;
			if (mouseStopTimeout.current) clearTimeout(mouseStopTimeout.current);
			mouseStopTimeout.current = setTimeout(() => {
				isMouseMoving.current = false;
				scheduleHide();
			}, 2e3);
		};
		const handleScroll = () => {
			const current = window.scrollY;
			const delta = current - prevScrollPos.current;
			prevScrollPos.current = current;
			setScrolled(current > 10);
			if (shouldNotHide) {
				cancelHide();
				setVisible(true);
				return;
			}
			if (current < 10) {
				cancelHide();
				setVisible(true);
				return;
			}
			if (delta > 0) forceHide();
			else {
				setVisible(true);
				scheduleHide();
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("mousemove", handleMouseMove);
			if (hideTimeout.current) clearTimeout(hideTimeout.current);
			if (mouseStopTimeout.current) clearTimeout(mouseStopTimeout.current);
		};
	}, [
		cancelHide,
		scheduleHide,
		forceHide,
		shouldNotHide
	]);
	function scrollToElement(elementId) {
		return () => {
			const element = document.getElementById(elementId);
			if (element) window.scrollTo({
				top: element.offsetTop,
				behavior: "smooth"
			});
			setVisible(false);
		};
	}
	const handleMouseEnter = () => {
		isMouseOverHeader.current = true;
		cancelHide();
	};
	const handleMouseLeave = () => {
		isMouseOverHeader.current = false;
		scheduleHide();
	};
	return {
		visible,
		scrolled,
		menuOpen,
		setMenuOpen,
		scrollToElement,
		handleMouseEnter,
		handleMouseLeave
	};
};
//#endregion
//#region src/components/header/Header.tsx
var Header = () => {
	const navigate = useNavigate();
	const { visible, scrolled, menuOpen, setMenuOpen, scrollToElement, handleMouseEnter, handleMouseLeave } = useHeader();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("nav", {
		className: `${Header_module_default.header} ${visible ? "" : Header_module_default.hidden} ${scrolled ? Header_module_default.scrolled : ""}`,
		id: "main",
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		children: [
			/* @__PURE__ */ jsx("a", {
				className: Header_module_default.headerLogo,
				href: "/",
				children: /* @__PURE__ */ jsx("img", {
					className: Header_module_default.logo,
					src: logoEmpty_default,
					alt: "Logo"
				})
			}),
			/* @__PURE__ */ jsxs("button", {
				className: `hamburger${menuOpen ? " open" : ""} ${Header_module_default.hamburgerWrapper}`,
				onClick: () => setMenuOpen((prev) => !prev),
				"aria-label": menuOpen ? "סגור תפריט" : "פתח תפריט",
				"aria-expanded": menuOpen,
				children: [
					/* @__PURE__ */ jsx("span", { className: "hamburger-line line-1" }),
					/* @__PURE__ */ jsx("span", { className: "hamburger-line line-2" }),
					/* @__PURE__ */ jsx("span", { className: "hamburger-line line-3" })
				]
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: Header_module_default.headerNav,
				children: [
					/* @__PURE__ */ jsx(Link, {
						className: Header_module_default.headerLink,
						to: "/",
						onClick: () => {
							navigate("/");
							setTimeout(scrollToElement("book"), 100);
						},
						children: "הספר"
					}),
					/* @__PURE__ */ jsx(Link, {
						className: Header_module_default.headerLink,
						to: "/",
						onClick: () => {
							navigate("/");
							setTimeout(scrollToElement("author"), 100);
						},
						children: "אודות"
					}),
					/* @__PURE__ */ jsx(Link, {
						className: Header_module_default.headerLink,
						to: "/",
						onClick: () => {
							navigate("/");
							setTimeout(scrollToElement("community"), 100);
						},
						children: "הקהילה"
					}),
					/* @__PURE__ */ jsx(Link, {
						className: Header_module_default.headerLink,
						to: "/",
						onClick: () => {
							navigate("/");
							setTimeout(scrollToElement("meet"), 100);
						},
						children: "החישנים"
					}),
					/* @__PURE__ */ jsx(Link, {
						className: Header_module_default.headerLink,
						to: "/",
						onClick: () => {
							navigate("/");
							setTimeout(scrollToElement("contact"), 100);
						},
						children: "צרו קשר"
					}),
					/* @__PURE__ */ jsx(Link, {
						className: Header_module_default.headerLink,
						to: "/courses",
						onClick: () => {
							navigate("/courses");
						},
						children: "קורסים והרצאות"
					})
				]
			})
		]
	}), /* @__PURE__ */ jsx(MobileMenu, {
		isOpen: menuOpen,
		onClose: () => setMenuOpen(false)
	})] });
};
var Footer_module_default = {
	footer: "_footer_14vxx_1",
	details: "_details_14vxx_12",
	footerCol: "_footerCol_14vxx_24",
	detail: "_detail_14vxx_12",
	icon: "_icon_14vxx_38",
	links: "_links_14vxx_43"
};
//#endregion
//#region src/components/footer/Footer.tsx
var Footer = () => {
	const emailClickHandler = () => {
		window.location.href = "mailto:ketybirman@gmail.com";
	};
	const phoneClickHandler = () => {
		window.location.href = "tel:0547877837";
	};
	return /* @__PURE__ */ jsxs("footer", {
		className: Footer_module_default.footer,
		children: [/* @__PURE__ */ jsxs("div", {
			className: Footer_module_default.details,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: Footer_module_default.detail,
					children: [/* @__PURE__ */ jsx(EmailIcon, {
						className: Footer_module_default.icon,
						onClick: emailClickHandler
					}), /* @__PURE__ */ jsx("h5", { children: "ketybirman@gmail.com" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: Footer_module_default.detail,
					children: [/* @__PURE__ */ jsx(LocalPhoneIcon, {
						className: Footer_module_default.icon,
						title: "0547877837",
						onClick: phoneClickHandler
					}), /* @__PURE__ */ jsx("h5", { children: "054-7877837" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: Footer_module_default.links,
					children: [/* @__PURE__ */ jsx("a", {
						href: "https://www.facebook.com/sfatharegesh",
						target: "_blank",
						className: Footer_module_default.detail,
						rel: "noreferrer",
						children: /* @__PURE__ */ jsx(FacebookIcon, {
							className: Footer_module_default.icon,
							style: { fontSize: "2.4rem" }
						})
					}), /* @__PURE__ */ jsx("a", {
						href: "https://www.instagram.com/ketybirman/",
						target: "_blank",
						className: Footer_module_default.detail,
						rel: "noreferrer",
						children: /* @__PURE__ */ jsx(InstagramIcon, {
							className: Footer_module_default.icon,
							style: { fontSize: "2.4rem" }
						})
					})]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: Footer_module_default.footerCol,
			children: /* @__PURE__ */ jsx("h5", { children: "כל הזכויות לספר ולאיורים שמורות לקטי בירמן בלבד ©" })
		})]
	});
};
//#endregion
//#region src/hooks/useApp.ts
function useApp() {
	const location = useLocation();
	useEffect(() => {
		if (window.fbq) window.fbq("track", "PageView");
		if (window.gtag) window.gtag("event", "page_view", { page_path: location.pathname });
	}, [location]);
}
//#endregion
//#region src/App.tsx
var App = () => {
	useApp();
	return /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsxs("div", {
		className: "App",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(Outlet, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	}) });
};
var PageLoader_module_default = { pageLoader: "_pageLoader_1lww0_1" };
//#endregion
//#region src/tools/loading/PageLoader.tsx
var PageLoader = () => /* @__PURE__ */ jsx("div", {
	className: PageLoader_module_default.pageLoader,
	children: "טוען..."
});
//#endregion
//#region src/routes.tsx
var Main = lazy(() => import("./assets/Main-Bt-O06qj.js"));
var About = lazy(() => import("./assets/About-DtdW8RkA.js"));
var Media = lazy(() => import("./assets/Media-CrZvWK2O.js"));
var wrap = (Component) => /* @__PURE__ */ jsx(Suspense, {
	fallback: /* @__PURE__ */ jsx(PageLoader, {}),
	children: /* @__PURE__ */ jsx(Component, {})
});
//#endregion
//#region src/main.tsx
var createRoot = ViteReactSSG({ routes: [{
	path: "/",
	element: /* @__PURE__ */ jsx(App, {}),
	children: [
		{
			index: true,
			element: wrap(Main)
		},
		{
			path: "about-me",
			element: wrap(About)
		},
		{
			path: "courses",
			element: wrap(Media)
		},
		{
			path: "*",
			element: /* @__PURE__ */ jsx("h1", { children: "Not Found" })
		}
	]
}] });
//#endregion
export { createRoot };
