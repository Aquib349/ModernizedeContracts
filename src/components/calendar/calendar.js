import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MonthView from "./month-view";
import WeekView from "./week-view";
import DayView from "./day-view";
import { useCalendar } from "@/context/calendarContext";
import { viewOptions } from "@/constants/CustomData";
const Calendar = () => {
    const { currentDate, view, events, onEventClick, goToNext, goToPrevious, changeView, deleteEvents, } = useCalendar();
    const renderViewButton = ({ key, icon, label }) => (_jsxs(Button, { onClick: () => changeView(key), className: `h-9 text-xs px-4 space-x-1 ${view === key ? "bg-blue-600 text-white" : ""}`, variant: "outline", children: [icon, _jsx("span", { children: label })] }, key));
    return (_jsxs("div", { className: "calendar", children: [_jsxs("div", { className: "controls flex justify-between items-center", children: [_jsx("div", { className: "view-options space-x-2", children: viewOptions.map((option) => renderViewButton(option)) }), _jsx("h2", { className: "font-medium text-base", children: currentDate.format(view === "day"
                            ? "DD MMM YYYY"
                            : view === "week"
                                ? "MMM DD - YYYY"
                                : "MMMM YYYY") }), _jsxs("div", { className: "space-x-2 flex items-center", children: [_jsxs(Button, { onClick: goToPrevious, className: "h-9 text-xs space-x-1 px-3", variant: "outline", children: [_jsx(ArrowLeft, { size: 12 }), _jsx("span", { children: "Prev" })] }), _jsxs(Button, { onClick: goToNext, className: "h-9 text-xs space-x-1 px-3", variant: "outline", children: [_jsx("span", { children: "Next" }), _jsx(ArrowRight, { size: 12 })] })] })] }), _jsxs("div", { className: "calendar-grid", children: [view === "month" && (_jsx(MonthView, { currentDate: currentDate, events: events, onEventClick: onEventClick, deleteEvents: deleteEvents })), view === "week" && (_jsx(WeekView, { currentDate: currentDate, events: events, onEventClick: onEventClick, deleteEvents: deleteEvents })), view === "day" && (_jsx(DayView, { currentDate: currentDate, events: events, onEventClick: onEventClick, deleteEvents: deleteEvents }))] })] }));
};
export default Calendar;
