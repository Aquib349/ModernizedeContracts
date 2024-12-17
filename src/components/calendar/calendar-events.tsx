import { formattedTime } from "@/constants/time-formatter";
import { Trash2 } from "lucide-react";

interface EventProps {
  EventData: any[];
}

const CalendarEvents = ({ EventData }: EventProps) => {
  return (
    <>
      {EventData?.map((event) => (
        <div
          key={event.id}
          className="mt-2 all-events rounded p-2 bg-red-100 text-xs text-red-500 relative cursor-pointer"
        >
          <p className="font-semibold">{event.event_name}</p>
          <p>{event.description}</p>
          <div className="flex items-center gap-x-8">
            <p>
              <span className="font-semibold">Start: </span>
              {formattedTime(event.start_time)}
            </p>
            <p>
              <span className="font-semibold">End: </span>
              {formattedTime(event.end_time)}
            </p>
            <p>
              <span className="font-semibold">Duration: </span>
              {event.stay_duration}
            </p>
          </div>

          {/* delete events */}
          <div className="absolute top-2 right-2 text-red-600 cursor-pointer">
            <Trash2 size={13} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CalendarEvents;
