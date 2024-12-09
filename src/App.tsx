import { Outlet, createBrowserRouter } from "react-router-dom";
import { ToggleMenuContextProvider } from "./context/SideMenuContext";
import Navigation from "./shared/Navigation/Navigation";
import Sidebar from "./shared/Sidebar/Sidebar";
// import Dashboard from "./pages/Dashboard/Dashboard";
import Request from "./pages/Request/Request";
import Activities from "./pages/Activity/Activities";
import Pipeline from "./pages/Pipeline/Pipeline";
import ContractDetail from "./pages/Contract/contract detail/ContractDetail";
import Dashboard from "./page/dashboard/Dashboard";
import { ActiveContextProvider } from "./context/activeContext";
import ContractSummary from "./page/dashboard/my favorite/my contracts/contract summary/contract-summary";
import Page from "./page/dashboard/my work/ai response/page";
import DocumentTable from "./page/dashboard/my favorite/my documents/Document-table";
import Contract from "./page/dashboard/my favorite/my contracts/Contract";
import { ViewContextProvider } from "./context/viewContext";

function App() {
  return (
    <>
      <div className="relative bg-gray-50 min-h-screen">
        <ToggleMenuContextProvider>
          <ActiveContextProvider>
            <Navigation />
            <Sidebar />
            <Outlet />
          </ActiveContextProvider>
        </ToggleMenuContextProvider>
      </div>
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
            path: "contracts",
            element: <Contract />,
          },
          {
            path: "documents",
            element: <DocumentTable />,
          },
          {
            path: "contractSummary",
            element: <ContractSummary />,
          },
        ],
      },
    ],
  },
]);

export default Router;
