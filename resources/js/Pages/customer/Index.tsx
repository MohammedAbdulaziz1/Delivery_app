import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head  } from '@inertiajs/react';
import { Customer } from '@/types';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/ui/table";

  

export default function Index({ users }: { users: Customer[] }) {


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Customer
                </h2>
            }
        >
            <Head title="Customer" />


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

                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => 
                                    <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.en_name}</TableCell>
                                    <TableCell className="font-medium">{user.email}</TableCell>
                                    <TableCell className="font-medium">{user.status}</TableCell>

                
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
