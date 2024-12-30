import { Outlet, createBrowserRouter } from "react-router-dom";
import { ToggleMenuContextProvider } from "./context/SideMenuContext";
import Navigation from "./shared/Navigation/Navigation";
import Sidebar from "./shared/Sidebar/Sidebar";
import { ViewContextProvider } from "./context/viewContext";
import { ActiveContextProvider } from "./context/activeContext";
import Dashboard from "./page/dashboard/Dashboard";
import Page from "./page/dashboard/my priority/ai response/page";
import Contract from "./page/dashboard/my favorite/my contracts/Contract";
import DocumentTable from "./page/dashboard/my favorite/my documents/Document-table";
import ContractSummary from "./page/dashboard/my favorite/my contracts/contract summary/contract-summary";
import Calendar from "./page/dashboard/my calendar/calendar";
import CalendarList from "./page/dashboard/my calendar/list view/my-calendar-list";
import CalendarView from "./page/dashboard/my calendar/calendar view/my-calendar-calendar";
import DocumentUpload from "./page/dashboard/my favorite/my documents/document-upload";
import BusinessAreaDashboard from "./page/business area/ba dashboard/ba-dashboard";
import SettingDashboard from "./page/business area/Dashboard";
import BADashboard from "./page/business area/Dashboard";

import Setting from "./page/setting/Setting";
import DocumentPipeline from "./page/business area/pipeline/document pipeline/document-pipeline";
import Pipeline from "./page/business area/pipeline/pipeline";
import { LoadingContextProvider } from "./context/loading";

function App() {
  return (
    <>
      <ToggleMenuContextProvider>
        <ActiveContextProvider>
          <LoadingContextProvider>
            <Navigation />
            <Sidebar />
            <Outlet />
          </LoadingContextProvider>
        </ActiveContextProvider>
      </ToggleMenuContextProvider>
    </>
  );
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ViewContextProvider>
            <Dashboard />
          </ViewContextProvider>
        ),
        children: [
          {
            path: "/",
            element: <Page />,
          },
          {
            path: "calendar",
            element: <Calendar />,
            children: [
              {
                path: "/calendar/calendar-summary",
                element: <CalendarList />,
              },
              {
                path: "/calendar",
                element: <CalendarView />,
              },
            ],
          },
          {
            path: "contracts",
            element: <Contract />,
          },
          {
            path: "documents",
            element: <DocumentTable />,
          },
          {
            path: "document-upload",
            element: <DocumentUpload />,
          },
          {
            path: "contractSummary",
            element: <ContractSummary />,
          },
        ],
      },
      {
        path: "business-area",
        element: (
          <ViewContextProvider>
            <BADashboard />,
          </ViewContextProvider>
        ),
        children: [
          {
            path: "/business-area",
            element: <BusinessAreaDashboard />,
          },
          {
            path: "/business-area/pipeline",
            element: <Pipeline />,
            children: [
              {
                path: "/business-area/pipeline/document",
                element: <DocumentPipeline />,
              },
            ],
          },
        ],
      },
      {
        path: "settings",
        element: (
          <ViewContextProvider>
            <SettingDashboard />,
          </ViewContextProvider>
        ),
        children: [
          {
            path: "/settings/",
            element: <Setting />,
          },
        ],
      },
    ],
  },
]);

export default Router;
