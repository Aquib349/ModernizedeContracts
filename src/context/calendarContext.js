var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from "react";
import dayjs from "dayjs";
import { AddEvents, deleteEvent, GetEvents } from "@/services/calendar.service";
const CalendarContext = createContext(undefined);
export const CalendarContextProvider = ({ children, }) => {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [view, setView] = useState("month");
    const [events, setEvents] = useState([]);
    const onEventClick = (event) => __awaiter(void 0, void 0, void 0, function* () {
        yield AddEvents(event);
        GetAllEvents();
    });
    function GetAllEvents() {
        const data = GetEvents();
        setEvents(data);
    }
    const deleteEvents = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const leftEvents = deleteEvent(id);
        setEvents(leftEvents);
    });
    const goToNext = () => {
        setCurrentDate((prev) => view === "day"
            ? prev.add(1, "day")
            : view === "week"
                ? prev.add(1, "week")
                : prev.add(1, "month"));
    };
    const goToPrevious = () => {
        setCurrentDate((prev) => view === "day"
            ? prev.subtract(1, "day")
            : view === "week"
                ? prev.subtract(1, "week")
                : prev.subtract(1, "month"));
    };
    const changeView = (newView) => {
        setView(newView);
    };
    useEffect(() => {
        GetAllEvents();
    }, []);
    return (_jsx(CalendarContext.Provider, { value: {
            currentDate,
            view,
            events,
            onEventClick,
            goToNext,
            goToPrevious,
            changeView,
            deleteEvents,
        }, children: children }));
};
// custom hook for the calendar context
export const useCalendar = () => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error("Calendar-Context must be within the Calendar Context-Provider");
    }
    return context;
};
