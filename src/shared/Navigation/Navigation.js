import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";
import { NavItems } from "@/constants/CustomData";
const Navigation = () => {
    return (_jsx(_Fragment, { children: _jsx("nav", { className: "navigation relative", children: _jsxs("div", { className: "fixed bg-white w-full top-0 left-0 flex h-14 justify-between items-center px-10 z-50 border", children: [_jsx("div", { className: "logo flex items-center gap-x-2", children: _jsx("img", { src: "https://econtracts2412.blob.core.windows.net/companylogo/companylogo_egPTzQev.gif", className: "h-10", alt: "eContract Logo" }) }), _jsx("div", { className: "nav-list flex items-center", children: NavItems.map((val) => (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { className: "px-4 text-xl", children: val.icon }), _jsx(TooltipContent, { className: "bg-gray-700 text-white", children: _jsx("p", { className: "text-xs", children: val.name }) })] }) }, val.id))) })] }) }) }));
};
export default Navigation;
