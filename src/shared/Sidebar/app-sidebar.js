var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BookPlus, CalendarRange, FileCog, Frame, GalleryVerticalEnd, ListOrdered, Map, PieChart, ShieldQuestion, Star, } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, } from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switches";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "eContracts",
            logo: GalleryVerticalEnd,
            plan: "Kozmo AI",
        },
    ],
    navMain: [
        {
            lableName: "Dashboard",
            children: [
                {
                    title: "My Priority",
                    url: "/",
                    icon: BookPlus,
                    isActive: true,
                },
                {
                    title: "My Calendar",
                    url: "/calendar",
                    icon: CalendarRange,
                },
                {
                    title: "My Bookmarks",
                    url: "#",
                    icon: Star,
                    items: [
                        {
                            title: "My Contracts",
                            url: "/contracts",
                        },
                        {
                            title: "My Documents",
                            url: "/documents",
                        },
                    ],
                },
            ],
        },
        {
            lableName: "Business Area Dashboard",
            children: [
                {
                    title: "My Priority",
                    url: "/business-area",
                    icon: BookPlus,
                    isActive: true,
                },
                {
                    title: "Pipeline",
                    url: "#",
                    icon: ListOrdered,
                    items: [
                        {
                            title: "Document",
                            url: "/pipeline/document",
                        },
                        {
                            title: "Renewal",
                            url: "#",
                        },
                    ],
                },
            ],
        },
        {
            lableName: "Settings",
            children: [
                {
                    title: "Document",
                    url: "/",
                    icon: FileCog,
                    isActive: true,
                },
                {
                    title: "Renewal",
                    url: "/",
                    icon: ShieldQuestion,
                    isActive: true,
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};
export function AppSidebar(_a) {
    var props = __rest(_a, []);
    return (_jsxs(Sidebar, Object.assign({ collapsible: "icon" }, props, { children: [_jsx(SidebarHeader, { children: _jsx(TeamSwitcher, { teams: data.teams }) }), _jsx(SidebarContent, { children: _jsx(NavMain, { items: data.navMain }) }), _jsx(SidebarFooter, { children: _jsx(NavUser, { user: data.user }) }), _jsx(SidebarRail, {})] })));
}
_jsx(TeamSwitcher, { teams: data.teams });
