import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select";
const DropdownItem = ({ className, placeholder, icon, selected, DataContent, }) => {
    return (_jsx(_Fragment, { children: _jsxs(Select, { children: [_jsxs(SelectTrigger, { className: className, children: [icon && _jsx("div", { className: "text-gray-500", children: icon }), _jsx(SelectValue, { placeholder: placeholder })] }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: selected }), DataContent.map((val) => (_jsx(SelectItem, { value: val.value, children: val.label })))] }) })] }) }));
};
export default DropdownItem;
