import { Calendar, Home, Inbox, Search, Settings, Camera } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: route('dashboard'),
    icon: Home,
  },
  {
    title: "Customers",
    url: route('customer.index'),
    icon: Inbox,
  },
  {
    title: "Restaurants",
    url: route('restaurants.index'),
    icon: Calendar,
  },
  {
    title: "Driver",
    url: route('drivers.index'),
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Galery",
    url: "#",
    icon: Camera,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}