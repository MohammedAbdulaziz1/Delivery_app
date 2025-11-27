<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\User;
use App\Models\Invoice;
use App\Models\Restaurant;
use App\Enums\UserRoles;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index()
    {
        // Get total customers
        $totalCustomers = User::where('role', UserRoles::CUSTOMER)->count();

        $totalRestaurant = Restaurant::count();

        $orders = Order::select('id','status','customer_id','restaurant_id')->with(['customer:id,en_name','restaurant:id,en_name'])->orderByDesc('id')->limit(10)->get();

        
        // Get total orders
        $totalOrders = Order::count();
                
        // Get total sales from invoices
        $totalSales = Invoice::sum('Price') ?? 0;
        
        // Get monthly sales for the last 12 months
        $monthlySales = Invoice::select(
                DB::raw('MONTH(created_at) as month'),
                DB::raw('YEAR(created_at) as year'),
                DB::raw('SUM(Price) as total')
            )
            ->where('created_at', '>=', now()->subMonths(12))
            ->groupBy('year', 'month')
            ->orderBy('year', 'asc')
            ->orderBy('month', 'asc')
            ->get();
        
        // Format monthly sales data
        $monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        $monthlySalesFormatted = [];
        
        // Create array for last 12 months
        for ($i = 11; $i >= 0; $i--) {
            $date = now()->subMonths($i);
            $month = $date->month;
            $year = $date->year;
            
            $salesData = $monthlySales->first(function ($item) use ($month, $year) {
                return $item->month == $month && $item->year == $year;
            });
            
            $monthlySalesFormatted[] = [
                'month' => $monthNames[$month - 1],
                'sales' => $salesData ? (float) $salesData->total : 0,
            ];
        }
        
        return Inertia::render('Admin/Home', [
            'totalCustomers' => $totalCustomers,
            'totalOrders' => $totalOrders,
            'totalSales' => $totalSales,
            'monthlySales' => $monthlySalesFormatted,
            'totalRestaurant' => $totalRestaurant,
            'orders' => $orders,
        ]);
    }
    
    public function menu(Restaurant $restaurant)
    {
        $restaurant->load(['media','products']);
        return Inertia::render('Homee/Menu', [
            'restaurant' => $restaurant
        ]);
    }
}
