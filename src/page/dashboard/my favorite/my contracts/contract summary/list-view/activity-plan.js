import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BellRing } from "lucide-react";
const AcitivityPlan = () => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "acitivty-plan-component", children: _jsx("div", { className: "main", children: _jsxs("div", { className: "mt-2 space-y-2", children: [_jsxs("div", { className: "flex items-center text-sm text-gray-600", children: [_jsx("span", { className: "text-red-500 mr-2", children: "\uD83D\uDD34" }), "Urgent: Business Review Feedback (2 days behind schedule)"] }), _jsxs("div", { className: "flex items-center text-sm text-gray-600", children: [_jsx("span", { className: "text-yellow-500 mr-3", children: _jsx(BellRing, { size: 16 }) }), "Legal Compliance Check: 5 Days Remaining"] })] }) }) }) }));
};
export default AcitivityPlan;
