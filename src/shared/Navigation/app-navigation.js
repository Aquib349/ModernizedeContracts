import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SiAdobexd } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoAngular } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
function AppNavigation() {
    const Apps = [
        { id: 1, name: "Adobe XD", icons: _jsx(SiAdobexd, {}), color: "text-purple-600" },
        { id: 1, name: "React", icons: _jsx(RiReactjsLine, {}), color: "text-blue-600" },
        { id: 1, name: "Figma", icons: _jsx(IoLogoFigma, {}), color: "text-orange-600" },
        { id: 1, name: "Angular", icons: _jsx(IoLogoAngular, {}), color: "text-red-500" },
        { id: 1, name: "HTML", icons: _jsx(SiHtml5, {}), color: "text-red-600" },
        { id: 1, name: "CSS", icons: _jsx(FaCss3Alt, {}), color: "text-blue-600" },
    ];
    return (_jsx(_Fragment, { children: _jsx("div", { className: "app-manager-component", children: _jsxs("div", { className: "main-app", children: [_jsx("h1", { className: "font-medium text-md pb-4 px-2 text-white", children: "Browse by apps" }), Apps.map((val) => (_jsxs("div", { className: "flex items-center gap-4 py-2 cursor-pointer px-2 hover:bg-gray-100 hover:rounded-md text-slate-300 hover:text-black", children: [_jsx("span", { className: `text-lg ${val.color}`, children: val.icons }), _jsx("span", { className: "text-sm", children: val.name })] }, val.id)))] }) }) }));
}
export default AppNavigation;
