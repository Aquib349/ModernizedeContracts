import * as React from "react";
import {
  BookPlus,
  CalendarRange,
  FileCog,
  Frame,
  GalleryVerticalEnd,
  ListOrdered,
  Map,
  PieChart,
  ShieldQuestion,
  Star,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

<TeamSwitcher teams={data.teams} />;
