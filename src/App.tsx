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
  return (
    <>
      <Sidebar>
        <LoadingContextProvider>
          <Outlet />
        </LoadingContextProvider>
      </Sidebar>
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
        path: "/contracts/contractSummary",
        element: (
          <ViewContextProvider>
            <ContractSummary />,
          </ViewContextProvider>
        ),
      },
      {
        path: "documents",
        element: <DocumentTable />,
        children: [
          {
            path: "/documents/document-upload",
            element: <DocumentUpload />,
          },
        ],
      },
      {
        path: "/business-area",
        element: (
          <ViewContextProvider>
            <BusinessAreaDashboard />
          </ViewContextProvider>
        ),
      },
      {
        path: "/pipeline",
        element: <Pipeline />,
        children: [
          {
            path: "/pipeline/document",
            element: <DocumentPipeline />,
          },
        ],
      },
    ],
  },
]);

export default Router;
