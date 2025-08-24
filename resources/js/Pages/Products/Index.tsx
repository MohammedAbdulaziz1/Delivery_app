import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link , router } from '@inertiajs/react';
import { BreadcrumbItem , Product } from '@/types';
import { Button , buttonVariants  } from '@/Components/ui/button';
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

    const deleteProduct = (id: number) => { 
        console.log(id);
        
        if (confirm('Are you sure?')) {
            router.delete(route('products.destroy', { id }));
            toast.success('Product deleted successfully'); 
        }
    }

    return (
        <AuthenticatedLayout 
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Product
                </h2>
            }    
        >
            <Head title="Product" />

            <div className={'mt-8'}>
                <Link className={buttonVariants({ variant: 'outline' })} href={route('products.create')}>
                    Create Product
                </Link>


            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            

                     <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>

                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => 
                                    <TableRow key={product.id}>
                                    <TableCell className="font-medium">{product.en_name}</TableCell>
                                    <TableCell className="font-medium">{product.description}</TableCell>
                                    <TableCell className="font-medium">{product.price}</TableCell>
                                    <TableCell className="font-medium">{product.status}</TableCell>

                                    <TableCell className="flex flex-row gap-x-2 text-right">
                                    <Link className={buttonVariants({ variant: 'default' })}
                                        href={`/products/${product.id}/edit`}>
                                        Edit
                                    </Link>

                                            <Button variant="destructive" className={'cursor-pointer'} onClick={() => deleteProduct(product.id)}>
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
