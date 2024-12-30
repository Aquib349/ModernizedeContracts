import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { sideItem } from "@/constants/CustomData";
import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const { isOpen } = useContext(ToggleMenuContext);
    const navigate = useNavigate();
    const [sideNavactive, setSideNavActive] = useState("/");
    return (_jsx(_Fragment, { children: _jsx("div", { className: "relative", children: _jsx("div", { className: `fixed pt-10 mt-3 transition-all duration-500 ease-in-out border-r-2 border-slate-200 ${isOpen ? "h-[100vh] overflow-hidden" : "h-0"} overflow-hidden`, children: sideItem.map((val, index) => {
                    const isActive = sideNavactive === val.links ||
                        (sideNavactive.includes("contract-detail") &&
                            val.links === "/contracts")
                        ? "contracts"
                        : "";
                    return (_jsx("div", { title: val.name, className: `flex flex-col my-3 text-slate-500 hover:text-blue-600 cursor-pointer
              transition-all duration-500 ease-in-out transform mx-2
              ${isOpen
                            ? `translate-y-0 opacity-100 delay-${index * 100}`
                            : "-translate-y-10 opacity-0"}`, style: { transitionDelay: `${index * 100}ms` }, onClick: () => {
                            navigate(val.links);
                            setSideNavActive(val.links);
                        }, children: _jsx("div", { className: `${isActive
                                ? "border-2 border-blue-800 p-0.5 rounded-md"
                                : "border-2 border-white/10 rounded-md p-0.5"}`, children: _jsx("span", { className: `text-xl rounded-md ${isActive
                                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                                    : "bg-blue-500"} p-1.5 text-white shadow flex justify-center items-center ${isActive ? "text-white font-bold" : ""}`, children: val.icon }) }) }, val.id));
                }) }) }) }));
};
export default Sidebar;
