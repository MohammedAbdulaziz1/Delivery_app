<?php

namespace App\Http\Controllers\Restaurant;

use Inertia\Inertia;
use App\Models\Order;
use App\Enums\UserRoles;
use App\Enums\UserStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index()
    {
        return Inertia::render('Restaurants/Orders/Index', [
            'orders' => Auth::user()->restaurants->orders()->with(['customer:id,en_name','driver:id,en_name'])->paginate(10),
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
        $order->update(['status' => 're_accept']);
        return redirect()->route('restaurant.orders.index');
    }

    public function prepareOrder(Order $order){
        $order->update(['status' => 're_prepare']);
        return redirect()->route('restaurant.orders.index');
    }

    public function finishedOrder(Order $order){
        $order->update(['status' => 're_finished']);
        return redirect()->route('restaurant.orders.index');
    }
}
