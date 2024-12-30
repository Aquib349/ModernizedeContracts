import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import dayjs from "dayjs";
import AddEvents from "./add-events";
import CalendarEvents from "./calendar-events";
import isBetween from "dayjs/plugin/isBetween";
import { Trash2 } from "lucide-react";
import { ColourSelector } from "@/constants/color-selector";
dayjs.extend(isBetween);
const DayView = ({ currentDate, events, onEventClick, deleteEvents, }) => {
    // helper function to check if the time falls between the hour range
    function calculateEventPosition(startTime, endTime) {
        const pixelsPerHour = 64;
        const parseTimeToMinutes = (timeStr) => {
            const [hours, minutes] = timeStr.split(":").map(Number);
            return hours * 60 + minutes;
        };
        const startMinutes = parseTimeToMinutes(startTime);
        const endMinutes = parseTimeToMinutes(endTime);
        const durationMinutes = Math.max(endMinutes - startMinutes, 20);
        return {
            top: (startMinutes / 60) * pixelsPerHour,
            height: (durationMinutes / 60) * pixelsPerHour,
        };
    }
    return (_jsxs(_Fragment, { children: [_jsx(CalendarEvents, { EventData: events, deleteEvents: deleteEvents }), _jsxs("div", { className: "mt-4 p-4 border rounded relative h-auto", children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: currentDate.format("dddd, MMMM D, YYYY") }), _jsxs("div", { className: "relative h-full w-full", children: [_jsx("div", { className: "relative h-[1536px]", children: [...Array(24)].map((_, hour) => (_jsxs("div", { className: "border-t border-gray-200 h-16 relative flex items-center", children: [_jsxs("span", { className: "text-xs font-medium w-16 text-center", children: [hour, ":00"] }), _jsx("div", { className: "flex-1 h-full relative group hover:bg-blue-50", children: _jsx(AddEvents, { triggerButton: _jsx("div", { className: "absolute inset-0 flex justify-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100", children: _jsx("span", { className: "hidden group-hover:block text-xs text-blue-600", children: "+ Add Event" }) }), onEventClick: onEventClick }) })] }, hour))) }), events.map((event) => {
                                const { top, height } = calculateEventPosition(event.start_time, event.end_time);
                                return (_jsxs("div", { style: {
                                        position: "absolute",
                                        top: `${top}px`,
                                        height: `${height}px`,
                                    }, className: `left-16 cursor-pointer right-0 rounded-lg
                p-2 flex justify-between items-start ${ColourSelector(event.color)}`, children: [_jsxs("div", { className: "flex space-x-4 items-center", children: [_jsx("p", { className: "font-semibold", children: event.event_name }), _jsx("p", { className: "text-xs", children: event.description })] }), _jsx("button", { onClick: () => deleteEvents(event.id), className: "absolute top-2 right-2 text-red-600 cursor-pointer", children: _jsx(Trash2, { size: 13 }) })] }, event.id));
                            })] })] })] }));
};
export default DayView;
