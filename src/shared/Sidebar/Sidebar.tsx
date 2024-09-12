import { sideItem } from "@/constants/custom data/CustomData";
import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  const { isOpen } = useContext(ToggleMenuContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="relative">
        <div
          className={`fixed pt-10 transition-all duration-500 ease-in-out ${
            isOpen ? "h-[100vh] overflow-hidden" : "h-0"
          } overflow-hidden`}
        >
          {sideItem.map((val, index) => {
            const isActive = location.pathname === val.links;

            return (
              <div
                key={val.id}
                className={`flex flex-col my-6 text-slate-500 hover:text-blue-600 cursor-pointer
              transition-all duration-500 ease-in-out transform 
              ${
                isOpen
                  ? `translate-y-0 opacity-100 delay-${index * 100}`
                  : "-translate-y-10 opacity-0"
              }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => {
                  navigate(val.links);
                }}
              >
                <TooltipProvider key={val.id}>
                  <Tooltip>
                    <TooltipTrigger
                      className={`text-2xl rounded-md shadow bg-white w-10 flex justify-center items-center mx-2 p-2 mb-2 ${
                        isActive ? "text-blue-600 font-bold bg-blue-50" : ""
                      }`}
                    >
                      {val.icon}
                    </TooltipTrigger>
                    <TooltipContent className="absolute top-2 left-6 bg-gray-700 text-white">
                      <p className="text-xs">{val.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
