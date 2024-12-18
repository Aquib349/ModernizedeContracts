import { ViewContext } from "@/context/viewContext";
import { AlignJustify, ChartPie, TableCellsMerge } from "lucide-react";
import { useContext } from "react";

interface toggleButtonProps {
  title: string;
  componentKey: string;
  Allviews: boolean; // Determines if all views (list, graph, tabular) should be shown
}

function ToggleButton({ title, componentKey, Allviews }: toggleButtonProps) {
  
  const { setView, getView } = useContext(ViewContext)!;

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base text-gray-700">{title}</h2>
        <div className="flex items-center gap-2">
          {/* List View */}
          <div
            className="flex items-center cursor-pointer text-sm"
            onClick={() => setView(componentKey, "list")}
          >
            <span className="p-[1px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
              <div
                className={`p-1 rounded-md ${
                  getView(componentKey) === "list" ? "text-black" : "bg-white"
                }`}
              >
                <AlignJustify size={12} />
              </div>
            </span>
          </div>

          {/* Graph/Chart View */}
          <div
            className="flex items-center cursor-pointer text-sm"
            onClick={() => setView(componentKey, "graph")}
          >
            <span className="p-[1px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
              <div
                className={`p-1 rounded-md ${
                  getView(componentKey) === "graph" ? "text-black" : "bg-white"
                }`}
              >
                <ChartPie size={12} />
              </div>
            </span>
          </div>

          {/* Tabular View (Only render if Allviews is true) */}
          {Allviews && (
            <div
              className="flex items-center cursor-pointer text-sm"
              onClick={() => setView(componentKey, "tabular")}
            >
              <span className="p-[1px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
                <div
                  className={`p-1 rounded-md ${
                    getView(componentKey) === "tabular"
                      ? "text-black"
                      : "bg-white"
                  }`}
                >
                  <TableCellsMerge size={12} />
                </div>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ToggleButton;
