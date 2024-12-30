import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Calendar from "@/components/calendar/calendar";
import { CalendarContextProvider } from "@/context/calendarContext";
const CalendarView = () => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "calendar-list-view", children: _jsx("div", { className: "main text-sm pt-2 rounded-md", children: _jsx(CalendarContextProvider, { children: _jsx(Calendar, {}) }) }) }) }));
};
export default CalendarView;
