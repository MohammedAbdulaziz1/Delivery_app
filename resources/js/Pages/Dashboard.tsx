import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link , router} from '@inertiajs/react';
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import { AppSidebar } from "@/Components/SideBar"
import { Input } from "@/components/ui/input"
import { Button , buttonVariants  } from '@/components/ui/button';


export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                            <Link className={buttonVariants({ variant: 'default' })} href="/customer">
                                 Customer
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

