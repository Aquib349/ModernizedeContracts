import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { DropdownMenu, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, } from "@/components/ui/sidebar";
export function TeamSwitcher({ teams, }) {
    const { isMobile } = useSidebar();
    const [activeTeam, setActiveTeam] = React.useState(teams[0]);
    return (_jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsx(DropdownMenu, { children: _jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(SidebarMenuButton, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [_jsx("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground", children: _jsx(activeTeam.logo, { className: "size-4" }) }), _jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [_jsx("span", { className: "truncate font-semibold", children: activeTeam.name }), _jsx("span", { className: "truncate text-xs", children: activeTeam.plan })] })] }) }) }) }) }));
}
