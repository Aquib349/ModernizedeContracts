import { Button } from "@/components/ui/button";
import { RandomColor } from "@/constants/random-color-generator";
import { Plus } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import NavIconSelector from "@/constants/nav-icon-selector";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { contractDetailNavigation } from "@/constants/custom data/CustomData";

// Define the Section interface
interface Section {
  id: number;
  name: string;
}

interface ContractSidebarProps {
  sections: Section[];
  setSections: Dispatch<SetStateAction<Section[]>>;
}

function ContractSidebar({ sections, setSections }: ContractSidebarProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  // Handle selection and close popover
  const handleSelection = (val: string) => {
    const newSection: Section = {
      id: Math.floor(Math.random() * 1000),
      name: val,
    };

    setSections((prevSection) => [...prevSection, newSection]);
    setPopoverOpen(false);
  };

  return (
    <div className="contract-sidebar-component">
      <div className="fixed h-screen overflow-y-auto mt-8 no-scrollbar">
        {/* Display existing sections */}
        {sections.map((val) => {
          const randomColorClass = RandomColor();
          return (
            <div
              key={val.id}
              title={val.name}
              className={`flex flex-col justify-center items-center p-2 rounded-md cursor-pointer mx-4 mb-3 ${randomColorClass}`}
            >
              <NavIconSelector icon={val.name} />
            </div>
          );
        })}

        {/* Popover to select from predefined sections or create a new section */}
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              title="Add page"
              className="flex flex-col text-slate-300 justify-center items-center p-2 rounded-md cursor-pointer mx-4 mb-3 bg-white"
            >
              <Plus size={22} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 ml-[50%] bg-black/90 text-white p-2">
            <div className="text-sm">
              {contractDetailNavigation
                .filter(
                  (option) =>
                    !sections.some((section) => section.name === option.name)
                )
                .map((val) => (
                  <p
                    key={val.id}
                    className="hover:rounded-sm px-2 py-2 hover:bg-slate-600 cursor-pointer"
                    onClick={() => handleSelection(val.name)}
                  >
                    {val.name}
                  </p>
                ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default ContractSidebar;
