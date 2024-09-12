import { TbGridDots } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavItems } from "@/constants/custom data/CustomData";
import { useContext } from "react";
import { ToggleMenuContext } from "@/context/SideMenuContext";

const Navigation = () => {
  const { toggleSideMenu } = useContext(ToggleMenuContext);
  return (
    <>
      <nav className="navigation relative">
        <div className="fixed bg-gray-50 w-full top-0 flex justify-between items-center p-1.5 shadow-sm shadow-black/10 z-50">
          <div className="logo flex items-center gap-x-2">
            <div
              className="text-2xl font-bold cursor-pointer pl-2"
              onClick={toggleSideMenu}
            >
              <TbGridDots />
            </div>
            <img
              src="https://econtracts2412.blob.core.windows.net/companylogo/companylogo_egPTzQev.gif"
              className="h-10"
              alt="eContract Logo"
            />
          </div>
          <div className="nav-list flex items-center">
            {NavItems.map((val) => (
              <TooltipProvider key={val.id}>
                <Tooltip>
                  <TooltipTrigger className="px-4 text-xl">
                    {val.icon}
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-700 text-white">
                    <p className="text-xs">{val.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
