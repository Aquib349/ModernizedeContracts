import { Outlet, createBrowserRouter } from "react-router-dom";
import { ToggleMenuContextProvider } from "./context/SideMenuContext";
import Navigation from "./shared/Navigation/Navigation";
import Sidebar from "./shared/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Request from "./pages/Request/Request";
import Contract from "./pages/Contract/Contract";
import Activities from "./pages/Activity/Activities";
import Pipeline from "./pages/Pipeline/Pipeline";
import ContractDetail from "./pages/Contract/contract detail/ContractDetail";

function App() {
  return (
    <>
      <div className="relative bg-gray-50 min-h-screen">
        <ToggleMenuContextProvider>
          <Navigation />
          <Sidebar />
          <Outlet />
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
        element: <Dashboard />,
      },
      {
        path: "requests",
        element: <Request />,
      },
      {
        path: "contracts",
        element: <Contract />,
      },
      {
        path: "contract-detail",
        element: <ContractDetail />,
      },
      {
        path: "activities",
        element: <Activities />,
      },
      {
        path: "pipeline",
        element: <Pipeline />,
      },
    ],
  },
]);

export default Router;
