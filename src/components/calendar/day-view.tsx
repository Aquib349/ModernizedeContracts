import React from "react";
import dayjs from "dayjs";
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

const DayView = ({ currentDate, events, onEventClick }: CalendarProps) => {
  return (
    <div className="p-4 border rounded mt-8">
      <h2 className="text-lg font-bold mb-4">
        {currentDate.format("dddd, MMMM D, YYYY")}
      </h2>
      {[...Array(24)].map((_, hour) => (
        <div key={hour} className="border-t flex items-center">
          <span className="text-sm font-medium w-16 text-center">
            {hour}:00
          </span>

          <div className="flex-1 h-16 relative group hover:bg-blue-50">
            <AddEvents
              triggerButton={
                <div className="absolute inset-0 flex justify-center items-center cursor-pointer hover:bg-blue-100">
                  <span className="hidden group-hover:block text-xs text-blue-600">
                    + Add Event
                  </span>
                </div>
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayView;
