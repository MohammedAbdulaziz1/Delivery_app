<?php

namespace App\Http\Controllers\Driver;

use Inertia\Inertia;
use App\Models\Order;
use App\Enums\UserRoles;
use App\Enums\UserStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    public function index()
    {
        // Show orders with status "prepare" that need a driver, or orders assigned to this driver
        $orders = Order::where(function($query) {
            $query->where(function($q) {
                $q->where('status', 'prepare')
                  ->whereNull('driver_id');
            })->orWhere('driver_id', Auth::id());
        })
        ->with(['driver:id,en_name','restaurant:id,en_name','customer:id,en_name'])
        ->orderBy('created_at', 'desc')
        ->paginate(10);

        return Inertia::render('Drivers/Orders/Index', [
            'orders' => $orders,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(Order $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {

    }

    public function acceptOrder(Order $order){
        $order->update(['status' => 'driver_accept']);
        return redirect()->route('driver.orders.index');
    }

    public function receiveOrder(Order $order){
        $order->update(['status' => 'driver_receive']);
        return redirect()->route('driver.orders.index');
    }
    
    public function reachedDriver(Order $order){
        $order->update(['status' => 'driver_reached']);
        return redirect()->route('driver.orders.index');
    }

    public function acceptCustomer(Order $order){
        $order->update(['status' => 'customer_accept']);
        return redirect()->route('driver.orders.index');
    }

}
