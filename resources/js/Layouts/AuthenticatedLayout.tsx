import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { Head } from '@inertiajs/react';
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import { AppSidebar } from "@/Components/SideBar"
import { Toaster } from '@/Components/ui/sonner'; 

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (  
        <SidebarProvider>
        <AppSidebar />
            <SidebarTrigger />
        <main className=' flex-1'>
            <div className="min-h-screen bg-gray-100">
                    {children}
                    
            <Toaster position={'top-right'} />
            
            </div>
        </main>
        </SidebarProvider>
    );
}
