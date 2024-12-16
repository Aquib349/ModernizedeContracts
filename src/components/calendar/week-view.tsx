import React from "react";
import AddEvents from "./add-events";
import dayjs from "dayjs";

interface weekProps {
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

const getWeekDays = (currentDate: any) => {
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(day.getDate() + i);
    return day;
  });
};

const WeekView = ({ currentDate, events, onEventClick }: weekProps) => {
  const daysOfWeek = getWeekDays(currentDate);

  return (
    <div className="mt-8">
      <div className="grid grid-cols-8 border rounded-md">
        <div className="border-r p-2 text-center font-bold">Time</div>
        {daysOfWeek.map((day, index) => {
          const isToday = new Date().toDateString() === day.toDateString();

          return (
            <div
              key={index}
              className={`border-r p-2 text-center font-medium ${
                isToday ? "text-indigo-500" : ""
              }`}
            >
              {day.toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
              })}
            </div>
          );
        })}

        {/* Time Slots */}
        {[...Array(24)].map((_, hour) => (
          <React.Fragment key={hour}>
            <div className="border-t p-2 text-center text-sm font-medium relative">
              {hour}:00
            </div>

            {daysOfWeek.map((_, dayIndex) => (
              <div
                key={dayIndex}
                className="border-t h-16 relative group hover:bg-blue-50"
              >
                <AddEvents
                  triggerButton={
                    <div className="absolute inset-0 flex justify-center items-center cursor-pointer hover:bg-blue-200">
                      <span className="hidden group-hover:block text-xs text-blue-600">
                        + Add Event
                      </span>
                    </div>
                  }
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WeekView;
