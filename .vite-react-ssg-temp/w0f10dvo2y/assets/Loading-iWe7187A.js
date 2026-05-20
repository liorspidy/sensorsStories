import { jsx, jsxs } from "react/jsx-runtime";
var Loading_module_default = {
	loaderContainer: "_loaderContainer_gyi7d_1",
	loader: "_loader_gyi7d_1",
	l7: "_l7_gyi7d_1",
	wrapper: "_wrapper_gyi7d_26",
	circle: "_circle_gyi7d_33",
	circle7124: "_circle7124_gyi7d_1",
	first: "_first_gyi7d_43",
	second: "_second_gyi7d_46",
	third: "_third_gyi7d_49",
	shadow: "_shadow_gyi7d_80",
	shadow046: "_shadow046_gyi7d_1"
};
//#endregion
//#region src/tools/loading/Loading.tsx
var Loading = () => {
	const loading2 = /* @__PURE__ */ jsxs("div", {
		className: Loading_module_default.wrapper,
		children: [
			/* @__PURE__ */ jsx("div", { className: `${Loading_module_default.circle} ${Loading_module_default.first}` }),
			/* @__PURE__ */ jsx("div", { className: `${Loading_module_default.circle} ${Loading_module_default.second}` }),
			/* @__PURE__ */ jsx("div", { className: `${Loading_module_default.circle} ${Loading_module_default.third}` }),
			/* @__PURE__ */ jsx("div", { className: Loading_module_default.shadow }),
			/* @__PURE__ */ jsx("div", { className: Loading_module_default.shadow }),
			/* @__PURE__ */ jsx("div", { className: Loading_module_default.shadow })
		]
	});
	return /* @__PURE__ */ jsx("div", {
		className: Loading_module_default.loaderContainer,
		children: loading2
	});
};
//#endregion
export { Loading as t };
