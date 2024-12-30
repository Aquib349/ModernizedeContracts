import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useActiveContext } from "@/context/activeContext";
function Dashboard() {
    const { isOpen } = useContext(ToggleMenuContext);
    const { sideNav, setSideNav } = useActiveContext();
    const location = useLocation();
    const isHidden = location.pathname === "/contracts" ||
        location.pathname === "/documents" ||
        location.pathname === "/document-upload";
    return (_jsx("div", { className: `transition-all duration-500 ease-in-out ${isOpen ? "pl-[3.5rem]" : "pt-14 p-2"}`, children: _jsxs("div", { className: `main grid ${isHidden ? "grid-cols-6 gap-2" : "grid-cols-5"} body-gradient`, children: [_jsx("div", { className: `${isHidden ? "col-span-5" : "col-span-3"} h-full pb-6`, children: _jsx(Outlet, {}) }), !isHidden && (_jsx("div", { className: "h-full block" }))] }) }));
}
export default Dashboard;
