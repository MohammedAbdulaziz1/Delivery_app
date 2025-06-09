import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link , router } from '@inertiajs/react';
import { BreadcrumbItem , Product } from '@/types';
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

export default function Index({ products }: { products: Product[] }) {


    return (
        <AuthenticatedLayout 
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Product
                </h2>
            }    
        >
            <Head title="Product" />


            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            

                     <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                <TableHead>English Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Status</TableHead>

                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => 
                                    <TableRow key={product.id}>
                                    <TableCell className="font-medium">{product.en_name}</TableCell>
                                    <TableCell className="font-medium">{product.description}</TableCell>
                                    <TableCell className="font-medium">{product.price}</TableCell>
                                    <TableCell className="font-medium">{product.status}</TableCell>

                                    </TableRow>
                                )}
                            </TableBody>
                     </Table>
                            

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
