import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlignJustify, CalendarDays, Plus } from "lucide-react";
import stars from "../../../assets/sparkle.png";
import { Link, useLocation } from "react-router-dom";

interface CdHeaderProps {
  views: string | null;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarHeader: React.FC<CdHeaderProps> = ({ views, setView }) => {
  const location = useLocation();
  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex w-full gap-2">
          <div className="flex items-center w-1/3 px-2 rounded bg-white/60">
            <img src={stars} alt="loading.." className="w-3" />
            <Input
              type="text"
              placeholder="Search Anything..."
              className="text-xs border-0 bg-transparent"
            />
          </div>

          {location.pathname === "/calendar" && <Button className="relative flex items-center gap-2 px-3 text-xs bg-transparent border border-purple-300 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500">
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -z-10"></span>
            <Plus size={14} className="text-indigo-500" />
            Add Events
          </Button>}
        </div>
        <div className="flex items-center gap-x-2">
          <Link
            to="/calendar/calendar-summary"
            className="flex items-center cursor-pointer text-sm"
            onClick={() => setView("list")}
          >
            <span className="p-[2px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
              <div
                className={`p-1.5 rounded-md ${
                  views === "list" ? "text-black" : "bg-white"
                }`}
              >
                <AlignJustify size={16} />
              </div>
            </span>
          </Link>

          <Link
            to="/calendar"
            className="flex items-center cursor-pointer text-sm"
            onClick={() => setView("calendar")}
          >
            <span className="p-[2px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
              <div
                className={`p-1.5 rounded-md ${
                  views === "calendar" ? "text-black" : "bg-white"
                }`}
              >
                <CalendarDays size={16} />
              </div>
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default CalendarHeader;
