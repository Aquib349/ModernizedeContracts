import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import dayjs from "dayjs";
import { dayNames } from "@/constants/CustomData";
import AddEvents from "./add-events";
import { Trash2 } from "lucide-react";
import { formattedTime } from "@/constants/time-formatter";
import { ColourSelector } from "@/constants/color-selector";
const getMonthDays = (currentDate) => {
    const daysInMonth = currentDate.daysInMonth();
    return Array.from({ length: daysInMonth }, (_, i) => currentDate.startOf("month").add(i, "day"));
};
const getDayFromDateString = (dateStr) => {
    const date = dayjs(dateStr, "ddd, MMM D, hh:mm A");
    return date.date();
};
const MonthView = ({ currentDate, events, onEventClick, deleteEvents, }) => {
    const monthDays = getMonthDays(currentDate);
    const firstDayOfMonth = currentDate.startOf("month");
    const startDayIndex = firstDayOfMonth.day();
    return (_jsxs("div", { className: "mt-4", children: [_jsx("div", { className: "grid grid-cols-7 font-semibold text-center", children: dayNames.map((day) => (_jsx("div", { className: "py-2", children: day }, day))) }), _jsxs("div", { className: "grid grid-cols-7 gap-2", children: [Array.from({ length: startDayIndex }).map((_, i) => (_jsx("div", { className: "" }, `empty-${i} h-20 border border-transparent`))), monthDays.map((date) => {
                        const isToday = new Date().toDateString() === date.toDate().toDateString();
                        return (_jsxs("div", { className: "h-24 rounded cursor-pointer border border-gray-300 p-2 relative", children: [isToday ? (_jsx("span", { className: "text-indigo-500 font-semibold", children: date.date() })) : (_jsx("span", { children: date.date() })), _jsx(AddEvents, { triggerButton: _jsx("div", { className: "absolute inset-0 flex justify-center items-center cursor-pointer \r\n                  hover:bg-gradient-to-r hover:from-indigo-100 group hover:via-purple-100 hover:to-pink-100 rounded text-white hover:text-blue-600", children: _jsx("span", { className: "text-xs hidden group-hover:block", children: "+ Add Event" }) }), onEventClick: onEventClick }), events
                                    .filter((event) => getDayFromDateString(formattedTime(event.start_time)) ===
                                    date.date())
                                    .map((event) => {
                                    return (_jsxs("div", { className: `z-50 cursor-pointer absolute w-[92%] left-1 bottom-1 rounded p-2 py-1 text-xs flex justify-between items-start ${ColourSelector(event.color)}`, children: [_jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: event.event_name }), _jsx("p", { className: "text-xs", children: event.stay_duration })] }), _jsx("button", { onClick: () => deleteEvents(event.id), className: "absolute top-2 right-2 text-red-600 cursor-pointer", children: _jsx(Trash2, { size: 13 }) })] }, event.id));
                                })] }, date.toString()));
                    })] })] }));
};
export default MonthView;
