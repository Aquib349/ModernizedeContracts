import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface QuickViewProps {
  triggerButton: any;
  Data: Array<any>;
  required: boolean;
}

const MenuDropdown = ({ triggerButton, Data, required }: QuickViewProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="p-0">
          <div>{triggerButton}</div>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 z-60">
          <Command>
            {required && (
              <Button variant="outline" className="h-8 m-2">
                <Plus size={16} />
                Add
              </Button>
            )}
            <CommandList>
              <CommandEmpty>Not found</CommandEmpty>
              <CommandGroup>
                {Data.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default MenuDropdown;
