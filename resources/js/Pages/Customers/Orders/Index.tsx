import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link , router } from '@inertiajs/react';
import { BreadcrumbItem , Order, PaginatedResponse } from '@/types';
import { Button , buttonVariants  } from '@/components/ui/button';
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

export default function Index({ orders }: { orders: PaginatedResponse<Order> }) {


    return (
        <AuthenticatedLayout 
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Order
                </h2>
            }    
        >
            <Head title="Order" />   

                                        {/* Restuarant, Driver and customer  name , tot_price */}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            

                     <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Status</TableHead>

                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.data.map((order) => 
                                    <TableRow key={order.id}>
                                    <TableCell className="font-medium">{order.id}</TableCell>
                                    <TableCell className="font-medium">{order.status}</TableCell>

                                    </TableRow>
                                )}
                            </TableBody>
                     </Table>
                            <TablePagination resource={orders} />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
