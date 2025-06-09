<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Enums\UserStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Products/Index', [
            
            'products' => Product::select('id','en_name','description','price','status')->get(),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Products/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Product $request)
    {
        
 
        return redirect()->route('products.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $order)
    {
        return Inertia::render('Products/Edit', [
            'order' => $order,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Product $request, Product $order)
    {
        $order->update($request->validated());
 
        return redirect()->route('products.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $order)
    {
        $order->delete();
 
        return redirect()->route('products.index');

    }

}
