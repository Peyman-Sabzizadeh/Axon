import { LayoutDashboard, LogOut, Settings, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Users",
    url: "/users",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "/login",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  return (
    <Sidebar variant="floating" collapsible="icon" className="w-[10%]">
      <SidebarContent
        className="rounded-lg bg-indigo-100"
        onMouseEnter={() => !open && setOpen(true)}
        onMouseLeave={() => open && setOpen(false)}
      >
        <SidebarGroup>
          <SidebarGroupLabel>Axon menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={
                      item.title === "Logout"
                        ? "text-red-500 hover:bg-red-400 hover:text-amber-50"
                        : ""
                    }
                    asChild
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
