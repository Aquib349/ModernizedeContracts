import { TbGridDots } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavItems } from "@/constants/CustomData";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import WebNavigation from "./web-navigation";
import AppNavigation from "./app-navigation";
import { AlignJustify, ChartPie } from "lucide-react";

const Navigation = () => {
  return (
    <>
      <nav className="navigation relative">
        <div className="fixed bg-white w-full top-0 flex h-14 justify-between items-center p-1.5 shadow-sm shadow-black/10 z-50">
          <div className="logo flex items-center gap-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="border-none bg-transparent text-2xl px-0 pl-2 hover:bg-transparent"
                >
                  <TbGridDots />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[35rem] ml-2 bg-black rounded-xl">
                {/* navigations */}
                <div className="grid grid-cols-5">
                  <div className="col-span-3 border-r mr-4">
                    <WebNavigation />
                  </div>
                  <div className="col-span-2">
                    <AppNavigation />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
