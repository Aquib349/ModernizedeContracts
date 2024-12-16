import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import GenerativeSidebar from "../sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useActiveContext } from "@/context/activeContext";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

function Dashboard() {
  const { isOpen } = useContext(ToggleMenuContext);
  const { sideNav, setSideNav } = useActiveContext();
  const location = useLocation();

  const isHidden =
    location.pathname === "/contracts" ||
    location.pathname === "/documents" ||
    location.pathname === "/document-upload";

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isOpen ? "pt-[3.5rem] pl-[3.5rem]" : "pt-14 p-2"
      }`}
    >
      <div
        className={`main grid ${
          isHidden ? "grid-cols-6 gap-2" : "grid-cols-5"
        } bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-100`}
      >
        {/* Sidebar */}

        <div
          className={`h-full bg-white ${
            isHidden ? "col-span-1" : "w-3/4"
          } relative`}
        >
          <SidebarProvider>
            <GenerativeSidebar />
          </SidebarProvider>
        </div>

        {/* Generative AI response or main content */}
        <div
          className={`${isHidden ? "col-span-5" : "col-span-3"} h-full pb-6`}
        >
          <Outlet />
        </div>

        {/* Quick-actions */}
        {!isHidden && (
          <div className="h-full block">{/* Quick-actions content */}</div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
