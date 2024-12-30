import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import AddEvents from "./add-events";
import { Trash2 } from "lucide-react";
import { extractDatePart, formattedTime } from "@/constants/time-formatter";
import { ColourSelector } from "@/constants/color-selector";
const getWeekDays = (currentDate) => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    return Array.from({ length: 7 }, (_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(day.getDate() + i);
        return day;
    });
};
const WeekView = ({ currentDate, events, onEventClick, deleteEvents, }) => {
    const daysOfWeek = getWeekDays(currentDate);
    // helper function to check if the time falls between the hour range
    function calculateEventPosition(startTime, endTime) {
        const pixelsPerHour = 64; // Adjust as per your CSS layout
        const parseTimeToMinutes = (timeStr) => {
            const [hours, minutes] = timeStr.split(":").map(Number);
            return hours * 60 + minutes;
        };
        const startMinutes = parseTimeToMinutes(startTime);
        const endMinutes = parseTimeToMinutes(endTime);
        const durationMinutes = Math.max(endMinutes - startMinutes, 20);
        return {
            top: ((startMinutes % 60) / 60) * pixelsPerHour,
            height: (durationMinutes / 60) * pixelsPerHour,
        };
    }
    return (_jsx("div", { className: "mt-4", children: _jsxs("div", { className: "grid grid-cols-8 border rounded-md", children: [_jsx("div", { className: "border-r p-2 text-center font-bold", children: "Time" }), daysOfWeek.map((day, index) => {
                    const isToday = new Date().toDateString() === day.toDateString();
                    return (_jsx("div", { className: `border-r p-2 text-center font-medium ${isToday ? "text-indigo-500" : ""}`, children: day.toLocaleDateString("en-US", {
                            weekday: "short",
                            day: "numeric",
                        }) }, index));
                }), [...Array(24)].map((_, hour) => (_jsxs(React.Fragment, { children: [_jsxs("div", { className: "border-t p-2 text-center text-sm font-medium", children: [hour, ":00"] }), daysOfWeek.map((day, dayIndex) => (_jsxs("div", { className: "border-t h-16 relative group", children: [_jsx(AddEvents, { triggerButton: _jsx("div", { className: "absolute inset-0 flex justify-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100", children: _jsx("span", { className: "hidden group-hover:block text-xs text-blue-600", children: "+ Add Event" }) }), onEventClick: onEventClick }), events
                                    .filter((event) => {
                                    const eventDate = extractDatePart(formattedTime(event.start_time));
                                    const dayDate = extractDatePart(String(day));
                                    const eventHour = parseInt(event.start_time.split(":")[0], 10);
                                    return eventDate === dayDate && eventHour === hour;
                                })
                                    .map((event) => {
                                    const { top, height } = calculateEventPosition(event.start_time, event.end_time);
                                    return (_jsxs("div", { style: {
                                            position: "absolute",
                                            top: `${top}px`,
                                            height: `${height}px`,
                                        }, className: `left-0 z-50 cursor-pointer right-0 rounded-lg px-2 py-1 flex justify-between items-start ${ColourSelector(event.color)}`, children: [_jsxs("div", { className: "text-xs", children: [_jsx("p", { className: "font-semibold", children: event.event_name }), _jsx("p", { className: "text-xs", children: event.stay_duration })] }), _jsx("button", { onClick: () => deleteEvents(event.id), className: "absolute top-2 right-2 text-red-600 cursor-pointer", children: _jsx(Trash2, { size: 13 }) })] }, event.id));
                                })] }, dayIndex)))] }, hour)))] }) }));
};
export default WeekView;
