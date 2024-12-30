import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { useState } from "react";
const MenuDropdown = ({ triggerButton, Data, required }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    return (_jsx(_Fragment, { children: _jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, className: "p-0", children: _jsx("div", { children: triggerButton }) }), _jsx(PopoverContent, { className: "w-[200px] p-0 z-60", children: _jsxs(Command, { children: [required && (_jsxs(Button, { variant: "outline", className: "h-8 m-2", children: [_jsx(Plus, { size: 16 }), "Add"] })), _jsxs(CommandList, { children: [_jsx(CommandEmpty, { children: "Not found" }), _jsx(CommandGroup, { children: Data.map((framework) => (_jsxs(CommandItem, { value: framework.value, onSelect: (currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue);
                                                setOpen(false);
                                            }, children: [_jsx(Check, { className: cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") }), framework.label] }, framework.value))) })] })] }) })] }) }));
};
export default MenuDropdown;
