import { Home, Hamburger, Car, Settings, Users, LogOut, Package} from "lucide-react"
import { Link } from '@inertiajs/react';

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
    url: route('home'),
    icon: Home,
  },
  {
    title: "Customers",
    url: route('customers.index'),
    icon: Users,
  },
  {
    title: "Restaurants",
    url: route('restaurants.index'),
    icon: Hamburger,
  },
  {
    title: "Driver",
    url: route('drivers.index'),
    icon: Car,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Products",
    url: route('products.index'),
    icon: Package,
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
        
        {/* Logout Button at the bottom */}
        <div style={{ marginTop: 'auto', padding: '1rem' }}>
          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="flex items-center w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 rounded"
          >
            <span style={{ marginRight: '0.5rem' }}><LogOut /></span>
            Log Out
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}