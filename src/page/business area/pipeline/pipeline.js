import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { PipelineContextProvider } from "@/context/document-pipeline";
import { Outlet } from "react-router-dom";
const Pipeline = () => {
    return (_jsx(_Fragment, { children: _jsx(PipelineContextProvider, { children: _jsx("div", { className: "pipeline-component", children: _jsx("div", { className: "main", children: _jsx(Outlet, {}) }) }) }) }));
};
export default Pipeline;
