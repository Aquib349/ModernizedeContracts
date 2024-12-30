import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ColourSelector } from "@/constants/color-selector";
import { formattedTime } from "@/constants/time-formatter";
import { Trash2 } from "lucide-react";
const CalendarEvents = ({ EventData, deleteEvents }) => {
    return (_jsx(_Fragment, { children: EventData === null || EventData === void 0 ? void 0 : EventData.map((event) => (_jsxs("div", { className: `mt-2 all-events rounded p-2 text-xs ${ColourSelector(event.color)} relative cursor-pointer`, children: [_jsx("p", { className: "font-semibold", children: event.event_name }), _jsx("p", { children: event.description }), _jsxs("div", { className: "flex items-center gap-x-8", children: [_jsxs("p", { children: [_jsx("span", { className: "font-semibold", children: "Start: " }), formattedTime(event.start_time)] }), _jsxs("p", { children: [_jsx("span", { className: "font-semibold", children: "End: " }), formattedTime(event.end_time)] }), _jsxs("p", { children: [_jsx("span", { className: "font-semibold", children: "Duration: " }), event.stay_duration] })] }), _jsx("div", { className: "absolute top-2 right-2 text-red-600 cursor-pointer", children: _jsx(Trash2, { size: 13, onClick: () => deleteEvents(event.id) }) })] }, event.id))) }));
};
export default CalendarEvents;
