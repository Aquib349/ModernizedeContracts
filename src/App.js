import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "./shared/Sidebar/side-bar";
import Page from "./page/dashboard/my priority/ai response/page";
import Calendar from "./page/dashboard/my calendar/calendar";
import CalendarList from "./page/dashboard/my calendar/list view/my-calendar-list";
import CalendarView from "./page/dashboard/my calendar/calendar view/my-calendar-calendar";
import Contract from "./page/dashboard/my favorite/my contracts/Contract";
import DocumentTable from "./page/dashboard/my favorite/my documents/Document-table";
import ContractSummary from "./page/dashboard/my favorite/my contracts/contract summary/contract-summary";
import DocumentUpload from "./page/dashboard/my favorite/my documents/document-upload";
import { ViewContextProvider } from "./context/viewContext";
import BusinessAreaDashboard from "./page/business area/ba dashboard/ba-dashboard";
import Pipeline from "./page/business area/pipeline/pipeline";
import DocumentPipeline from "./page/business area/pipeline/document pipeline/document-pipeline";
import { LoadingContextProvider } from "./context/loading";
function App() {
    return (_jsx(_Fragment, { children: _jsx(Sidebar, { children: _jsx(LoadingContextProvider, { children: _jsx(Outlet, {}) }) }) }));
}
const Router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: "/",
                element: _jsx(Page, {}),
            },
            {
                path: "calendar",
                element: _jsx(Calendar, {}),
                children: [
                    {
                        path: "/calendar/calendar-summary",
                        element: _jsx(CalendarList, {}),
                    },
                    {
                        path: "/calendar",
                        element: _jsx(CalendarView, {}),
                    },
                ],
            },
            {
                path: "contracts",
                element: _jsx(Contract, {}),
            },
            {
                path: "/contracts/contractSummary",
                element: (_jsxs(ViewContextProvider, { children: [_jsx(ContractSummary, {}), ","] })),
            },
            {
                path: "documents",
                element: _jsx(DocumentTable, {}),
                children: [
                    {
                        path: "/documents/document-upload",
                        element: _jsx(DocumentUpload, {}),
                    },
                ],
            },
            {
                path: "/business-area",
                element: (_jsx(ViewContextProvider, { children: _jsx(BusinessAreaDashboard, {}) })),
            },
            {
                path: "/pipeline",
                element: _jsx(Pipeline, {}),
                children: [
                    {
                        path: "/pipeline/document",
                        element: _jsx(DocumentPipeline, {}),
                    },
                ],
            },
        ],
    },
]);
export default Router;
