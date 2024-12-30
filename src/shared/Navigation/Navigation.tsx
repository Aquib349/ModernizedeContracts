import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavItems } from "@/constants/CustomData";

const Navigation = () => {
  return (
    <>
      <nav className="navigation relative">
        <div className="fixed bg-white w-full top-0 left-0 flex h-14 justify-between items-center px-10 z-50 border">
          <div className="logo flex items-center gap-x-2">
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
