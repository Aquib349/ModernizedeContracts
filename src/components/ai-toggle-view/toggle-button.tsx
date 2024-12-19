import { ViewContext } from "@/context/viewContext";
import { AlignJustify, ChartPie, TableCellsMerge, FolderKanban, FileWarning, Contact, UserRoundPen } from "lucide-react";
import { useContext } from "react";

interface toggleButtonProps {
  title: string;
  componentKey: string;
  Allviews: string[]; // Array of view types like ["list", "graph", "tabular"]
}

function ToggleButton({ title, componentKey, Allviews }: toggleButtonProps) {
  const { setView, getView } = useContext(ViewContext)!;

  const titleIcons: { [key: string]: JSX.Element } = {
    "Contract Repository Overview": <FolderKanban size={18} />,
    "Key Activities & Alerts": <UserRoundPen size={18} />,
    "Contract Value OverView": <FileWarning size={18} />,
    // Add more title-to-icon mappings as needed
  };

  // Define icons for each view type
  const viewIcons: { [key: string]: JSX.Element } = {
    list: <AlignJustify size={12} />,
    graph: <ChartPie size={12} />,
    tabular: <TableCellsMerge size={12} />,
  };


  // Fallback icon if title doesn't exist in titleIcons
  const icon = titleIcons[title] || <Contact size={16} />; // Default icon (Contact) for undefined title

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="text-4xl text-blue-500 mr-2">{icon}</span> {/* Render the icon only once */}
          <h2 className="font-semibold text-base text-gray-700">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          {Allviews?.map((view) => {
            return (
              <div
                key={view}
                className="flex items-center cursor-pointer text-sm"
                onClick={() => setView(componentKey, view)}
              >
                <span className="p-[1px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
                  <div
                    className={`p-1 rounded-md ${getView(componentKey) === view ? "text-black" : "bg-white"}`}
                  >
                    {viewIcons[view] || <span>{view}</span>} {/* Fallback for unknown view */}
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ToggleButton;
