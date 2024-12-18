import React from "react";
import dayjs from "dayjs";
import { dayNames } from "@/constants/CustomData";
import AddEvents from "./add-events";

interface CalendarProps {
  currentDate: dayjs.Dayjs;
  events: {
    event_name: string;
    description: string;
    stay_duration: string;
    start_time: string;
    end_time: string;
  }[];
  onEventClick: (event: {
    event_name: string;
    description: string;
    stay_duration: string;
    start_time: string;
    end_time: string;
  }) => void;
}

const getMonthDays = (currentDate: dayjs.Dayjs): dayjs.Dayjs[] => {
  const daysInMonth = currentDate.daysInMonth();

  return Array.from({ length: daysInMonth }, (_, i) =>
    currentDate.startOf("month").add(i, "day")
  );
};

const MonthView: React.FC<CalendarProps> = ({
  currentDate,
  events,
  onEventClick,
}) => {
  const monthDays = getMonthDays(currentDate);

  return (
    <div className="mt-4">
      {/* Render Day Names */}
      <div className="grid grid-cols-7 font-semibold text-center">
        {dayNames.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Render Month Days */}
      <div className="grid grid-cols-7 gap-2">
        {monthDays.map((date) => {
          const isToday =
            new Date().toDateString() === date.toDate().toDateString();
          // Filter events that match the current date
          const dayEvents = events?.filter(
            (event) =>
              dayjs(event.start_time).isSame(date, "day") ||
              dayjs(event.end_time).isSame(date, "day")
          );

          return (
            <div
              key={date.toString()}
              className="h-20 rounded cursor-pointer border border-gray-300 p-2 relative"
            >
              {isToday ? (
                <span className="text-indigo-500 font-semibold">{date.date()}</span>
              ) : (
                <span>{date.date()}</span>
              )}

              {/* Render Events */}
              {dayEvents?.length > 0 && (
                <div className="mt-1">
                  {dayEvents.map((event, idx) => (
                    <button
                      key={idx}
                      onClick={() => onEventClick(event)}
                      className="block mt-1 bg-blue-300 rounded p-1 text-xs"
                    >
                      {event.event_name}
                    </button>
                  ))}
                </div>
              )}

              {/* Add Events Button */}
              <AddEvents
                triggerButton={
                  <div
                    className="absolute inset-0 flex justify-center items-center cursor-pointer 
                  hover:bg-gradient-to-r hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100 rounded text-white hover:text-blue-600"
                  >
                    <span className="text-xs">+ Add Event</span>
                  </div>
                }
                onEventClick={onEventClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
