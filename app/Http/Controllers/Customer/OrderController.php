<?php

namespace App\Http\Controllers\Customer;

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
        return Inertia::render('Customers/Orders/Index', [
            'orders' =>Auth::user()->customerOrder()->with(['customer:id,en_name','restaurant:id,en_name','driver:id,en_name'])->paginate(5),
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
        $request->validate([
            'restaurant_id' => 'required|exists:restaurants,id',
            'product_id' => 'required|exists:products,id',
        ]);

        // $driver = User::select->where();

        $order = Order::create([
            'customer_id' => Auth::id(),
            'restaurant_id' => $request->restaurant_id,
            'driver_id' => null,
            'status' => 'pending',
        ]);

        // Attach product to order
        $order->products()->attach($request->product_id, [
            'quantity' => 1
        ]);

        return redirect()->route('customer.orders.index')
            ->with('success', 'Order created successfully');
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

}
