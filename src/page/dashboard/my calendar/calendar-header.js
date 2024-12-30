import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Input } from "@/components/ui/input";
import { AlignJustify, CalendarDays } from "lucide-react";
import stars from "../../../assets/sparkle.png";
import { Link } from "react-router-dom";
const CalendarHeader = ({ views, setView }) => {
    return (_jsx(_Fragment, { children: _jsxs("header", { className: "flex items-center justify-between", children: [_jsx("div", { className: "flex w-full gap-2", children: _jsxs("div", { className: "flex items-center w-1/2 px-2 rounded bg-[#fafafa]", children: [_jsx("img", { src: stars, alt: "loading..", className: "w-3" }), _jsx(Input, { type: "text", placeholder: "Search Events...", className: "text-xs border-0 bg-transparent" })] }) }), _jsxs("div", { className: "flex items-center gap-x-2", children: [_jsx(Link, { to: "/calendar/calendar-summary", className: "flex items-center cursor-pointer text-sm", onClick: () => setView("list"), children: _jsx("span", { className: "p-[2px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded", children: _jsx("div", { className: `p-1.5 rounded-md ${views === "list" ? "text-black" : "bg-white"}`, children: _jsx(AlignJustify, { size: 16 }) }) }) }), _jsx(Link, { to: "/calendar", className: "flex items-center cursor-pointer text-sm", onClick: () => setView("calendar"), children: _jsx("span", { className: "p-[2px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded", children: _jsx("div", { className: `p-1.5 rounded-md ${views === "calendar" ? "text-black" : "bg-white"}`, children: _jsx(CalendarDays, { size: 16 }) }) }) })] })] }) }));
};
export default CalendarHeader;
