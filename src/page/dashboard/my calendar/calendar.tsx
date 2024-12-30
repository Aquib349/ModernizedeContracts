import ToggleView from "@/components/ai-toggle-view/toggle-view";
import { useState } from "react";
import CalendarHeader from "./calendar-header";
import { Outlet } from "react-router-dom";

const Calendar: React.FC = () => {
  const [view, setView] = useState<string>("calendar");
  return (
    <>
      <div className="calendar-component">
        <div className="main space-y-2">
          {/* calendar header */}
          <CalendarHeader views={view} setView={setView} />

          {/* content */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Calendar;
