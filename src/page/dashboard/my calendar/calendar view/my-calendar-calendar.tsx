import Calendar from "@/components/calendar/calendar";
import { CalendarContextProvider } from "@/context/calendarContext";

const CalendarView: React.FC = () => {
  return (
    <>
      <div className="calendar-list-view">
        <div className="main bg-white p-4 text-sm rounded-md">
          <CalendarContextProvider>
            <Calendar />
          </CalendarContextProvider>
        </div>
      </div>
    </>
  );
};

export default CalendarView;
