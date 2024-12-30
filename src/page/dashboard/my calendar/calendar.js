import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import CalendarHeader from "./calendar-header";
import { Outlet } from "react-router-dom";
const Calendar = () => {
    const [view, setView] = useState("calendar");
    return (_jsx(_Fragment, { children: _jsx("div", { className: "calendar-component", children: _jsxs("div", { className: "main space-y-2", children: [_jsx(CalendarHeader, { views: view, setView: setView }), _jsx(Outlet, {})] }) }) }));
};
export default Calendar;
