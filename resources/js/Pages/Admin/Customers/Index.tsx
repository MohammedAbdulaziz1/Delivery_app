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
import { FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input';

//   const breadcrumbs: BreadcrumbItem[] = [
//     { title: 'Dashboard', href: '/dashboard' },
//     { title: 'Customers', href: '/customer' },
// ];  

export default function Index({ customers, search }: { customers: PaginatedResponse<Customer>, search?: string }) {

    const [searchTerm, setSearchTerm] = useState(search || '');

    const deleteCustomer = (id: number) => { 
        console.log(id);
        
        if (confirm('Are you sure?')) {
            router.delete(route('admin.customers.destroy', { id }));
            toast.success('Customer deleted successfully');
        }
    }

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        router.get(route('admin.customers.index'), { search: searchTerm }, {
            preserveState: true,
            replace: true,
        });
    }

    const clearSearch = () => {
        setSearchTerm('');
        router.get(route('admin.customers.index'), {}, {
            preserveState: true,
            replace: true,
        });
    }


    return (
        <AuthenticatedLayout 
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Customers
                </h2>
            }    
        >
            <Head title="Customers" />

                        <div className={'mt-8'}>
                <Link className={buttonVariants({ variant: 'outline' })} href={route('admin.customers.create')}>
                    Create Customer
                </Link>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                        <form onSubmit={handleSearch} className="flex justify-start  mb-4 gap-2">
                                <Input 
                                    type="text" 
                                    placeholder="Search by customer name..." 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="max-w-sm bg-slate-200"
                                />
                                <Button type="submit" variant="outline" className="bg-slate-200">Search</Button>
                                {search && (
                                    <Button type="button" variant="secondary" onClick={clearSearch}>
                                        Clear
                                    </Button>
                                )}
                            </form>
                            
                            {search && (
                                <div className="mb-4 text-sm text-gray-600">
                                    Showing results for "{search}" ({customers.length} found)
                                </div>
                            )}

                            

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

                                    <TableCell className="flex flex-row gap-x-2 text-right">
                                    <Link className={buttonVariants({ variant: 'default' })}
                                        // href={`/admin/customers/${customer.id}/edit`}>
                                        href={route('admin.customers.edit', customer.id)}>
                                        Edit
                                    </Link>

                                            <Button variant="destructive" className={'cursor-pointer'} onClick={() => deleteCustomer(customer.id)}>
                                                Delete
                                            </Button>
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
