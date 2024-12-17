import { AlignJustify, ChartPie, CircleArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ai_logo from "../../assets/image.png";
import { useContext } from "react";
import { ViewContext } from "@/context/viewContext";

interface ToggleViewProps {
  heading: string;
  businessArea: string
}

const ToggleView: React.FC<ToggleViewProps> = ({ heading, businessArea }) => {
  const { view, setView } = useContext(ViewContext);
  return (
    <>
      <div className="bg-white rounded my-2">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <img src={ai_logo} alt="loading.." className="w-8" />
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
              {heading}
            </h1>
            {businessArea &&
              <Button variant="outline" className="h-8 m-2 text-sky-500 border border-sky-500 hover:bg-sky-100">
                Configure
              </Button>
            }
          </div>
          {/* <div className="flex items-center gap-2">
            <div
              className="flex items-center py-2 cursor-pointer text-sm"
              onClick={() => setView("list")}
            >
              <span className="p-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-md">
                <div
                  className={`p-1 rounded-md ${view === "list" ? "text-white" : "bg-white"
                    }`}
                >
                  <AlignJustify size={18} />
                </div>
              </span>
            </div>
            <div
              className="flex items-center py-2 cursor-pointer text-sm"
              onClick={() => setView("graph")}
            >
              <span className="p-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-md">
                <div
                  className={`p-1 rounded-md ${view === "graph" ? "text-white" : "bg-white"
                    }`}
                >
                  <ChartPie size={18} />
                </div>
              </span>
            </div>
          </div> */}
          <div className="flex items-center space-x-2">
            <p className="text-blue-500 text-sm">Switch to classic View</p>
            <CircleArrowRight
              size={16}
              className="text-blue-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleView;
