import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link , router } from '@inertiajs/react';
import { Customer, BreadcrumbItem, Restaurant, Product } from '@/types';
import { Button , buttonVariants  } from '@/Components/ui/button';
import { toast } from 'sonner'; 
import { useState, FormEvent } from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/Components/ui/table";
import { Input } from '@/components/ui/input';
import { MenuCard } from '@/Components/MenuCard';
import { RestaurantCard as RestaurantCardComponent } from '@/Components/RestaurantCard';

//   const breadcrumbs: BreadcrumbItem[] = [
//     { title: 'Dashboard', href: '/dashboard' },
//     { title: 'Customers', href: '/customer' },
// ];  



export default function Index({ restaurants, search }: { restaurants: Restaurant[], search?: string }) {
    const [searchTerm, setSearchTerm] = useState(search || '');

    const deleteRestaurant = (id: number) => { 
        console.log(id);
        
        if (confirm('Are you sure?')) {
            router.delete(route('customer.restaurants.destroy', { id }));
            toast.success('Restaurant deleted successfully'); 
        }
    }

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        router.get(route('customer.restaurants.index'), { search: searchTerm }, {
            preserveState: true,
            replace: true,
        });
    }

    const clearSearch = () => {
        setSearchTerm('');
        router.get(route('customer.restaurants.index'), {}, {
            preserveState: true,
            replace: true,
        });
    }
  

    return (
        <AuthenticatedLayout 
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Restaurant
                </h2>
            }    
        >
            <Head title="Restaurant" />


            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            {/* search */}
                            <form onSubmit={handleSearch} className="flex justify-start  mb-4 gap-2">
                                <Input 
                                    type="text" 
                                    placeholder="Search by restaurant name..." 
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
                                    Showing results for "{search}" ({restaurants.length} found)
                                </div>
                            )}

                            {/* {restaurants.map((restaurant) => (
                                <MenuCard MenuCard={restaurant} />
                            ))} */}

                            {restaurants.map((restaurant) => (
                                <RestaurantCardComponent RestaurantCard={restaurant} />
                            ))}



                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
