import React from "react";
import AddEvents from "./add-events";
import dayjs from "dayjs";
import { Trash2 } from "lucide-react";
import { formattedTime } from "@/constants/time-formatter";

interface weekProps {
  currentDate: dayjs.Dayjs;
  events: {
    id: string;
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
  deleteEvents: (id: string) => void;
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

const WeekView = ({
  currentDate,
  events,
  onEventClick,
  deleteEvents,
}: weekProps) => {
  const daysOfWeek = getWeekDays(currentDate);

  // helper function to check if the time falls between the hour range
  function calculateEventPosition(startTime: string, endTime: string) {
    const pixelsPerHour = 64; // 1 hour = 64px
    const parseTimeToMinutes = (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return hours * 60 + minutes; // Total minutes from midnight
    };

    const startMinutes = parseTimeToMinutes(startTime);
    const endMinutes = parseTimeToMinutes(endTime);
    const durationMinutes = Math.max(endMinutes - startMinutes, 20);

    return {
      top: (startMinutes / 60) * pixelsPerHour,
      height: (durationMinutes / 60) * pixelsPerHour,
    };
  }

  // helper function to match the event dates
  function IsEventDateSame(dateStr1: string, dateStr2: string) {
    const isSameDate = (date1: Date, date2: Date) => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };

    // Usage
    if (isSameDate(new Date(dateStr1), new Date(dateStr2))) {
      return true;
    } else {
      return false;
    }
  }

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

            {daysOfWeek.map((day, dayIndex) => (
              <div key={dayIndex} className="border-t h-16 relative group">
                <AddEvents
                  triggerButton={
                    <div
                      className="absolute inset-0 flex justify-center items-center cursor-pointer 
                    hover:bg-gradient-to-r hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100"
                    >
                      <span className="hidden group-hover:block text-xs text-blue-600">
                        + Add Event
                      </span>
                    </div>
                  }
                  onEventClick={onEventClick}
                />

                {events.map((event) => {
                  const { top, height } = calculateEventPosition(
                    event.start_time,
                    event.end_time
                  );

                  // Compare the current day and formatted start_time
                  const isSameDate = IsEventDateSame(
                    String(day),
                    formattedTime(event.start_time)
                  );
                  console.log(isSameDate);

                  return isSameDate ? (
                    <div
                      key={event.id}
                      style={{
                        position: "absolute",
                        top: `${top}px`,
                        height: `${height}px`,
                      }}
                      className="left-0 cursor-pointer right-0 bg-red-100 border-l-4 border-red-300 rounded-lg
                p-2 flex justify-between items-start text-red-500 shadow-md"
                    >
                      <div>
                        <p className="font-semibold">{event.event_name}</p>
                        <p className="text-xs">{event.description}</p>
                      </div>

                      <button
                        onClick={() => deleteEvents(event.id)}
                        className="absolute top-2 right-2 text-red-600 cursor-pointer"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ) : null;
                })}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WeekView;
