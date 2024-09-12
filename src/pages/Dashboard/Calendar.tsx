import { FC, useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import format from "date-fns/format";
import parse from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import { addHours } from "date-fns/addHours";
import { startOfHour } from "date-fns/startOfHour";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const IntelligentCalendar: FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Some Contract events",
      start,
      end,
    },
  ]);

  const onEventResize: withDragAndDropProps["onEventResize"] = (data) => {
    const { start, end } = data;

    setEvents((currentEvents) => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      };
      return [...currentEvents, firstEvent];
    });
  };

  // function to set the event on drap and drop
  const onEventDrop: withDragAndDropProps["onEventDrop"] = (data) => {
    const { start, end, event } = data;

    // Create a new event with the updated start and end time based on the drop
    const updatedEvent = {
      ...event,
      start: new Date(start),
      end: new Date(end),
    };

    // Update the events state by replacing the moved event with the updated one
    setEvents((currentEvents) =>
      currentEvents.map((ev) => (ev.title === event.title ? updatedEvent : ev))
    );
  };

  // function to set the event on specific date
  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("Enter the event title:");
    if (title) {
      const newEvent = {
        title,
        start: new Date(start),
        end: new Date(end),
      };

      // Update the events state to add the new event
      setEvents((currentEvents) => [...currentEvents, newEvent]);
    }
  };

  return (
    <>
      <div className="calendar-component">
        <div className="main bg-white p-3 rounded-md shadow mt-3">
          <h1 className="font-bold text-xl border-b pb-2">My Calendar</h1>
          <DnDCalendar
            className="pt-2"
            defaultView="month"
            events={events}
            localizer={localizer}
            onEventDrop={onEventDrop}
            onEventResize={onEventResize}
            onSelectSlot={handleSelectSlot}
            selectable
            resizable
            style={{ height: "100vh" }}
          />
        </div>
      </div>
    </>
  );
};

const locales = {
  "en-US": enUS,
};
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
const now = new Date();
const start = endOfHour(now);
const end = addHours(start, 2);
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const DnDCalendar = withDragAndDrop(Calendar);

export default IntelligentCalendar;
