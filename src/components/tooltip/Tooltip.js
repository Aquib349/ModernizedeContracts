import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";
const ToolTip = ({ className, hoverItem, textContent }) => {
    return (_jsx(_Fragment, { children: _jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Button, { size: "icon", variant: "default", className: className, children: hoverItem }) }), _jsx(TooltipContent, { className: "bg-gray-700 text-white text-xs", children: _jsx("p", { children: textContent }) })] }) }) }));
};
export default ToolTip;
