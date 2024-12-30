import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { HardDriveUpload } from "lucide-react";
function WebNavigation() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "web-navigation", children: _jsxs("div", { className: "main-default text-white px-1", children: [_jsxs("div", { className: "text-md font-medium p-1 flex items-center gap-2", children: [_jsx("img", { src: "assets/ai.png", alt: "ai-logo", className: "w-6 h-6" }), _jsx("p", { className: "text-md", children: _jsx("span", { className: "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent", children: "Kozmo AI" }) })] }), _jsxs("div", { className: "flex items-center gap-4 py-2 hover:bg-slate-600 hover:rounded-md my-2 cursor-pointer text-sm mr-4", children: [_jsx("span", { className: "p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md", children: _jsx("div", { className: "bg-black/80 py-1 px-1.5 rounded-md", children: _jsx(HardDriveUpload, { size: 16 }) }) }), _jsx("p", { children: "Upload Document" })] })] }) }) }));
}
export default WebNavigation;
