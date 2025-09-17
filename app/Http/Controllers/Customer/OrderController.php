<?php

namespace App\Http\Controllers\Customer;

use Inertia\Inertia;
use App\Models\Order;
use App\Enums\UserRoles;
use App\Enums\UserStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    public function index()
    {
        return Inertia::render('Customer/Orders/Index', [
            'orders' => Order::select('id','status','customer_id','restaurant_id','driver_id')->get(),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Customer/Orders/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Order::create([
            'status' => UserStatus::ACTIVE,
        ]);
        
 
        return redirect()->route('customer.orders.index');

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
        return Inertia::render('Customer/Orders/Edit', [
            'order' => $order,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $order->update($request->validated());
 
        return redirect()->route('customer.orders.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();
 
        return redirect()->route('customer.orders.index');

    }

}
