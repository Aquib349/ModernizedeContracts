import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ContractUpdates from "./contract-updates";
import MyWorkflows from "./my-workflows";
import MyTask from "./my-task";
import CalendarList from "../../my calendar/list view/my-calendar-list";
function Page() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "ai-response-compoent", children: _jsx("div", { className: "main text-sm", children: _jsxs("div", { className: "space-y-4 w-[70%] mx-auto", children: [_jsx(ContractUpdates, {}), _jsx(MyWorkflows, {}), _jsx(MyTask, {}), _jsx(CalendarList, {})] }) }) }) }));
}
export default Page;
