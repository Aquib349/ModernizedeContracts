import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "../ui/dialog";
import { z } from "zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../ui/form";
import { useState } from "react";
import { IdGenerator } from "@/constants/id-generator";
import { Label } from "../ui/label";
const formSchema = z
    .object({
    event_name: z.string().min(2).max(50),
    description: z.string().min(2).max(200),
    stay_duration: z.string().optional(),
    start_time: z
        .string()
        .regex(/^\d{2}:\d{2}$/, { message: "HH:mm format required" }),
    end_time: z
        .string()
        .regex(/^\d{2}:\d{2}$/, { message: "HH:mm format required" }),
})
    .refine((data) => {
    const [startHour, startMinute] = data.start_time.split(":").map(Number);
    const [endHour, endMinute] = data.end_time.split(":").map(Number);
    return endHour * 60 + endMinute > startHour * 60 + startMinute;
}, {
    message: "End time must be later than start time",
    path: ["end_time"],
});
const calculateDuration = (startTime, endTime) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;
    const diffMinutes = endTotalMinutes - startTotalMinutes;
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    return `${hours}h ${minutes}min`;
};
const AddEvents = ({ triggerButton, onEventClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState("red");
    const [activeColor, setActiveColor] = useState("red");
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            event_name: "",
            description: "",
            stay_duration: "",
            start_time: "",
            end_time: "",
        },
    });
    const onSubmit = (data) => {
        var _a, _b, _c, _d;
        const stayDuration = calculateDuration(data.start_time, data.end_time);
        const newData = {
            id: IdGenerator(),
            color: color,
            event_name: (_a = data.event_name) !== null && _a !== void 0 ? _a : "",
            description: (_b = data.description) !== null && _b !== void 0 ? _b : "",
            start_time: (_c = data.start_time) !== null && _c !== void 0 ? _c : "",
            end_time: (_d = data.end_time) !== null && _d !== void 0 ? _d : "",
            stay_duration: stayDuration,
        };
        onEventClick(newData);
        setIsOpen(false);
    };
    return (_jsx(_Fragment, { children: _jsxs(Dialog, { open: isOpen, onOpenChange: setIsOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsx("div", { onClick: () => setIsOpen(true), children: triggerButton }) }), _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: "Add Events" }) }), _jsx(Form, Object.assign({}, form, { children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [["event_name", "description", "start_time", "end_time"].map((field) => (_jsx(FormField, { control: form.control, name: field, render: ({ field: inputField }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: field.replace("_", " ").toUpperCase() }), _jsx(FormControl, { children: _jsx(Input, Object.assign({ placeholder: `Enter ${field.replace("_", " ")}`, type: field.includes("time") ? "time" : "text" }, inputField)) }), _jsx(FormMessage, {})] })) }, field))), _jsxs("div", { className: "mt-2 flex flex-col", children: [_jsx(Label, { children: "Choose Colour" }), _jsx("div", { className: "flex space-x-4 mt-2", children: ["red", "green", "orange", "indigo"].map((clr) => (_jsx("span", { "aria-label": `Choose ${clr}`, title: `Choose ${clr}`, style: {
                                                        backgroundColor: clr,
                                                    }, className: `w-5 h-5 rounded cursor-pointer m-1 ${activeColor === clr
                                                        ? "ring-2 ring-offset-1 ring-" + clr + "-500"
                                                        : ""}`, onClick: () => {
                                                        setActiveColor(clr);
                                                        setColor(clr);
                                                    } }, clr))) })] }), _jsx(DialogFooter, { children: _jsx(Button, { type: "submit", className: "bg-blue-500 text-xs", children: "Save Event" }) })] }) }))] })] }) }));
};
export default AddEvents;
