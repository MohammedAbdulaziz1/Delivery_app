import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link , router } from '@inertiajs/react';
import { Customer, BreadcrumbItem, PaginatedResponse } from '@/types';
import { Button , buttonVariants  } from '@/Components/ui/button';
import { toast } from 'sonner'; 
import { TablePagination } from '@/Components/TablePagination';
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

export default function Index({ customers }: { customers: PaginatedResponse<Customer> }) {


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
                                <TableHead>File</TableHead> 
                                <TableHead>Action</TableHead>

                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {customers.data.map((customer) => 
                                    <TableRow key={customer.id}>
                                    <TableCell className="font-medium">{customer.en_name}</TableCell>
                                    <TableCell className="font-medium">{customer.email}</TableCell>
                                    <TableCell className="font-medium">{customer.status}</TableCell>

                                    <TableCell>{ 
                                        !customer.mediaFile
                                            ? ''
                                            : (
                                                <a href={customer.mediaFile.original_url} target="_blank">
                                                    <img src={customer.mediaFile.original_url} className={'w-8 h-8'} />
                                                </a>
                                            )
                                    }
                                    </TableCell> 

                                    </TableRow>
                                )}
                            </TableBody>
                     </Table>
                            <TablePagination resource={customers} />

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </AuthenticatedLayout>
    );
}
