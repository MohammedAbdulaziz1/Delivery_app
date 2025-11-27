import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { HomeIcon } from 'lucide-react';
import { Order } from '@/types';
import {  Hamburger, Car, Settings, Users, LogOut, Package} from "lucide-react"


interface HomeProps {
    totalCustomers: number;
    totalRestaurant: number;
    totalOrders: number;
    totalSales: number;
    monthlySales: { month: string; sales: number }[];
    orders: Order[];
}

export default function Home({ 
    totalCustomers, 
    totalRestaurant,
    totalOrders, 
    totalSales,
    monthlySales,
    orders,
}: HomeProps) {
    // Format total sales as currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const stats = [
        { label: 'Total Orders', value: totalOrders},
        { label: 'Total Customers', value: totalCustomers,},
        { label: 'Total Restaurant', value: totalRestaurant  },
        { label: 'Total Sales', value: formatCurrency(totalSales)},
    ];

    const maxSales = monthlySales.length > 0 ? Math.max(...monthlySales.map(m => m.sales)) : 1;


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl space-y-8 sm:px-6 lg:px-8">
                    {/* Top stats cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            {item.label}
                                        </p>
                                        <p className="mt-2 text-2xl font-semibold text-gray-900">
                                            {item.value}
                                        </p>
                                    </div>
                                    {/* <span className="text-3xl">{item.icon}</span> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Monthly Sales Chart */}
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                        <div className="border-b border-gray-100 px-6 py-4">
                            <div>
                                <h3 className="text-base font-semibold text-gray-900">
                                    Monthly Sales
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Sales performance over the last 12 months
                                </p>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-end justify-between gap-2">
                                {monthlySales.map((item, index) => (
                                    <div key={index} className="flex flex-1 flex-col items-center">
                                        <div className="relative w-full">
                                            <div
                                                className="w-full rounded-t bg-gradient-to-t from-blue-500 to-blue-400 transition-all hover:from-blue-600 hover:to-blue-500"
                                                style={{
                                                    height: `${(item.sales / maxSales) * 200}px`,
                                                    minHeight: '8px',
                                                }}
                                                title={`${item.month}: $${item.sales.toLocaleString()}`}
                                            />
                                        </div>
                                        <p className="mt-2 text-xs font-medium text-gray-600">
                                            {item.month}
                                        </p>
                                        <p className="mt-1 text-[10px] text-gray-500">
                                            ${(item.sales / 1000).toFixed(1)}k
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent orders table */}
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                            <div>
                                <h3 className="text-base font-semibold text-gray-900">
                                    Recent Orders
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Latest activity in your delivery system
                                </p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-100 text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Order ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Customer
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 bg-white">
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-gray-900">
                                                {order.id}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-xs text-gray-700">
                                                {order.customer.en_name}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-xs">
                                                <span className="inline-flex rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

