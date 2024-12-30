import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CircleArrowRight } from "lucide-react";
import ai_logo from "../../assets/image.png";
const ToggleView = ({ heading }) => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "bg-white rounded my-2", children: _jsxs("div", { className: "flex items-center justify-between p-2", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: ai_logo, alt: "loading..", className: "w-8" }), _jsx("h1", { className: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium", children: heading })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("p", { className: "text-blue-500 text-sm", children: "Switch to classic View" }), _jsx(CircleArrowRight, { size: 16, className: "text-blue-500 cursor-pointer" })] })] }) }) }));
};
export default ToggleView;
