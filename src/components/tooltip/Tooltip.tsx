import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltiProps {
  className: string;
  hoverItem: any;
  textContent: string;
}

const ToolTip = ({ className, hoverItem, textContent }: TooltiProps) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="default" className={className}>
              {hoverItem}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-gray-700 text-white text-xs">
            <p>{textContent}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default ToolTip;
