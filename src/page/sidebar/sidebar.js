import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useActiveContext } from "@/context/activeContext";
import { CalendarRange, ChevronRight, FileText, Folder, Minus, LayoutDashboard, ListEnd, } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
function GenerativeSidebar() {
    const { active, setActive } = useActiveContext();
    const [favoriteOpen, setFavoriteOpen] = useState(false);
    const [recentlyOpen, setRecentlyOpen] = useState(false);
    const location = useLocation();
    return (_jsx("div", { className: "generative-sidebar p-2 fixed top-[3.5rem] bg-white h-full", children: _jsx("div", { className: "main", children: _jsx("div", { className: "text-sm", children: location.pathname === "/business-setting" ? (_jsxs("div", { className: "relative w-full", children: [_jsxs("div", { className: `flex items-center justify-between font-medium cursor-pointer w-full border ${active === "/settings" || active === "/settings/pipeline"
                                ? "text-black"
                                : "text-gray-500"}`, onClick: () => {
                                setFavoriteOpen(!favoriteOpen);
                                setRecentlyOpen(false);
                                setActive("/pipeline");
                            }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(ListEnd, { className: "w-4 h-4" }), "Pipeline"] }), _jsx(ChevronRight, { className: `w-4 h-4 transform transition-transform duration-300 ${favoriteOpen ? "rotate-90" : ""}` })] }), _jsx("div", { className: `w-[1.5px] bg-slate-100 absolute left-[0.4rem] transition-all duration-300`, style: {
                                height: favoriteOpen ? "65px" : "0",
                            } }), _jsx("div", { className: `transition-all duration-300 overflow-hidden text-slate-500 ${favoriteOpen ? "max-h-screen" : "max-h-0"}`, children: _jsxs("div", { className: "pl-1 mt-4 space-y-3", children: [_jsx("div", { className: "relative w-full", children: _jsxs(Link, { to: "", className: `flex items-center gap-1 font-medium ${active === "/favorite/contracts" ? "text-black" : ""}`, children: [_jsx(Minus, { className: "text-slate-200" }), "Document"] }) }), _jsx("div", { className: "relative w-full", children: _jsx("div", { className: "flex items-center justify-between cursor-pointer w-full", onClick: () => setActive("/favorite/documents"), children: _jsxs(Link, { to: "/documents", className: `flex items-center gap-1 font-medium ${active === "/favorite/documents" ? "text-black" : ""}`, children: [_jsx(Minus, { className: "text-slate-200" }), "Renewal"] }) }) })] }) })] })) : location.pathname === "/business-area" ||
                    location.pathname === "/business-area/pipeline/document" ? (_jsxs("div", { children: [_jsxs(Link, { to: "/business-area", className: `font-medium flex items-center gap-2 cursor-pointer ${active === "business-area" ||
                                location.pathname === "/business-area"
                                ? "text-black"
                                : "text-gray-500"}`, onClick: () => {
                                setActive("business-area");
                            }, children: [_jsx(LayoutDashboard, { className: "w-4 h-4" }), "BA Dashboard"] }), _jsxs("div", { className: "relative w-full mt-2", children: [_jsxs("div", { className: `flex items-center justify-between font-medium cursor-pointer w-full ${active === "/business-area/pipeline" ||
                                        active === "/business-area/pipeline/document"
                                        ? "text-black"
                                        : "text-gray-500"}`, onClick: () => {
                                        setFavoriteOpen(!favoriteOpen);
                                        setRecentlyOpen(false);
                                        setActive("/business-area/pipeline");
                                    }, children: [_jsxs("div", { className: `flex items-center gap-2`, onClick: () => setActive("/business-area/pipeline"), children: [_jsx(ListEnd, { className: "w-4 h-4" }), "Pipeline"] }), _jsx(ChevronRight, { className: `w-4 h-4 transform transition-transform duration-300 ${favoriteOpen ? "rotate-90" : ""}` })] }), _jsx("div", { className: `w-[1.5px] bg-slate-100 absolute left-[0.4rem] transition-all duration-300`, style: {
                                        height: favoriteOpen ? "65px" : "0",
                                    } }), _jsx("div", { className: `transition-all duration-300 overflow-hidden text-slate-500 ${favoriteOpen ? "max-h-screen" : "max-h-0"}`, children: _jsxs("div", { className: "pl-1 mt-4 space-y-3", children: [_jsx("div", { className: "relative w-full", children: _jsx("div", { className: "flex items-center justify-between cursor-pointer w-full", children: _jsxs(Link, { to: "/business-area/pipeline/document", className: `flex items-center gap-1 font-medium ${active === "/business-area/pipeline/document"
                                                            ? "text-black"
                                                            : ""}`, onClick: () => {
                                                            setRecentlyOpen(!recentlyOpen);
                                                            setActive("/business-area/pipeline/document");
                                                        }, children: [_jsx(Minus, { className: "text-slate-200" }), "Document"] }) }) }), _jsx("div", { className: "relative w-full", children: _jsx("div", { className: "flex items-center justify-between cursor-pointer w-full", onClick: () => {
                                                        setRecentlyOpen(!recentlyOpen);
                                                        setActive("/favorite/recently-accessed");
                                                    }, children: _jsxs("div", { className: `flex items-center gap-1 font-medium ${active === "/favorite/recently-accessed"
                                                            ? "text-black"
                                                            : ""}`, children: [_jsx(Minus, { className: "text-slate-200" }), "Renewal"] }) }) })] }) })] })] })) : (_jsxs("div", { className: `space-y-3 ${location.pathname.includes("/business-area")
                        ? "hidden"
                        : "block"}`, children: [_jsx("div", { className: "font-medium", children: _jsxs(Link, { to: "/", className: `flex items-center gap-2 ${active === "/" ? "text-black" : "text-gray-500"}`, onClick: () => setActive("/"), children: [_jsx(FileText, { className: "w-4 h-4" }), "My Priority"] }) }), _jsx("div", { className: "font-medium", children: _jsxs(Link, { to: "/calendar", className: `flex items-center gap-2 ${active === "/calendar" ? "text-black" : "text-gray-500"}`, onClick: () => setActive("/calendar"), children: [_jsx(CalendarRange, { className: "w-4 h-4" }), "My Calendar"] }) }), _jsxs("div", { className: "relative w-full", children: [_jsxs("div", { className: `flex items-center justify-between font-medium cursor-pointer w-full ${active === "/favorite" ||
                                        active === "/favorite/contracts" ||
                                        active === "/favorite/documents" ||
                                        active === "/favorite/recently-accessed"
                                        ? "text-black"
                                        : "text-gray-500"}`, onClick: () => {
                                        setFavoriteOpen(!favoriteOpen);
                                        setRecentlyOpen(false);
                                        setActive("/favorite");
                                    }, children: [_jsxs("div", { className: `flex items-center gap-2`, children: [_jsx(Folder, { className: "w-4 h-4" }), "My Favorite"] }), _jsx(ChevronRight, { className: `w-4 h-4 transform transition-transform duration-300 ${favoriteOpen ? "rotate-90" : ""}` })] }), _jsx("div", { className: `w-[1.5px] bg-slate-100 absolute left-[0.4rem] transition-all duration-300`, style: {
                                        height: favoriteOpen ? "100px" : "0",
                                    } }), _jsx("div", { className: `transition-all duration-300 overflow-hidden text-slate-500 ${favoriteOpen ? "max-h-screen" : "max-h-0"}`, children: _jsxs("div", { className: "pl-1 mt-4 space-y-3", children: [_jsx("div", { className: "relative w-full", children: _jsx("div", { className: "flex items-center justify-between cursor-pointer w-full", onClick: () => setActive("/favorite/contracts"), children: _jsxs(Link, { to: "/contracts", className: `flex items-center gap-1 font-medium ${active === "/favorite/contracts" ? "text-black" : ""}`, children: [_jsx(Minus, { className: "text-slate-200" }), "My Contracts"] }) }) }), _jsx("div", { className: "relative w-full", children: _jsx("div", { className: "flex items-center justify-between cursor-pointer w-full", onClick: () => setActive("/favorite/documents"), children: _jsxs(Link, { to: "/documents", className: `flex items-center gap-1 font-medium ${active === "/favorite/documents" ? "text-black" : ""}`, children: [_jsx(Minus, { className: "text-slate-200" }), "My Documents"] }) }) }), _jsx("div", { className: "relative w-full", children: _jsx("div", { className: "flex items-center justify-between cursor-pointer w-full", onClick: () => {
                                                        setRecentlyOpen(!recentlyOpen);
                                                        setActive("/favorite/recently-accessed");
                                                    }, children: _jsxs("div", { className: `flex items-center gap-1 font-medium ${active === "/favorite/recently-accessed"
                                                            ? "text-black"
                                                            : ""}`, children: [_jsx(Minus, { className: "text-slate-200" }), "Recently Accessed"] }) }) })] }) })] })] })) }) }) }));
}
export default GenerativeSidebar;
