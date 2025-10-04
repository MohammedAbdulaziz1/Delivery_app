import { Home, Hamburger, Car, Settings, Users, LogOut, Package} from "lucide-react"
import { Link } from '@inertiajs/react';
import { SidebarItem } from "@/types";
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
import { log } from "console";

// Menu items.
const items = [
  {
    title: "Home",
    url: route('admin.home'),
    icon: Home,
  },
  {
    title: "Customers",
    url: route('admin.customers.index'),
    icon: Users,
  },
  {
    title: "Restaurants",
    url: route('admin.restaurants.index'),
    icon: Hamburger,
  },
  {
    title: "Driver",
    url: route('admin.drivers.index'),
    icon: Car,
  },
  {
    title: "Orders",
    url: route('admin.orders.index'),
    icon: Package,
  },
  {
    title: "Products",
    url: route('admin.products.index'),
    icon: Package,
  },
]

export function AppSidebar({sidebar}: {sidebar: SidebarItem[]}) {
 console.log(sidebar)
 sidebar.map(item => {console.log(item.title);
 }) 
 
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebar.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={route(item.routeName)}>
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