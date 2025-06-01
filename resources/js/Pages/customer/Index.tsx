import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link , router } from '@inertiajs/react';
import { Customer, BreadcrumbItem } from '@/types';
import { Button , buttonVariants  } from '@/components/ui/button';
import { toast } from 'sonner'; 

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/ui/table";

//   const breadcrumbs: BreadcrumbItem[] = [
//     { title: 'Dashboard', href: '/dashboard' },
//     { title: 'Customers', href: '/customer' },
// ];  

export default function Index({ users }: { users: Customer[] }) {

    const deleteCustomer = (id: number) => { 
        console.log(id);
        
        if (confirm('Are you sure?')) {
            router.delete(route('customer.destroy', { id }));
            toast.success('Customer deleted successfully'); 
        }
    }

    return (
        <AuthenticatedLayout 
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Customer
                </h2>
            }    
        >
            <Head title="Customer" />

                        <div className={'mt-8'}>
                <Link className={buttonVariants({ variant: 'outline' })} href="/customer/create">
                    Create Customer
                </Link>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            

                     <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>

                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => 
                                    <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.en_name}</TableCell>
                                    <TableCell className="font-medium">{user.email}</TableCell>
                                    <TableCell className="font-medium">{user.status}</TableCell>

                                    <TableCell className="flex flex-row gap-x-2 text-right">
                                    <Link className={buttonVariants({ variant: 'default' })}
                                        href={`/customer/${user.id}/edit`}>
                                        Edit
                                    </Link>

                                            <Button variant="destructive" className={'cursor-pointer'} onClick={() => deleteCustomer(user.id)}>
                                                Delete
                                            </Button>
                                    </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                     </Table>
                            

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </AuthenticatedLayout>
    );
}
