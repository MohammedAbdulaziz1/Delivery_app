<?php

namespace App\Http\Controllers\Restaurant;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Product;
use App\Enums\UserRoles;
use App\Enums\UserStatus;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Restaurant/Products/Index', [
            
            'products' =>Auth::user()->restaurants->products()->select('id','en_name','description','price','status')->get(),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Restaurant/Products/Create');
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
    
       $product = Auth::user()->restaurants->products()->create([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name,
            'description' => $request->description,
            'price' => $request->price,
            'status' => UserStatus::ACTIVE,
        ]);
     
        if ($request->hasFile('media')) { 
            $product->addMedia($request->file('media'))->toMediaCollection('profileImage');
        } 
 
        return redirect()->route('restaurant.products.index');

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
    public function edit(Product $product)
    {
        return Inertia::render('Restaurant/Products/Edit', [
            'product' => $product,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());
 
        return redirect()->route('restaurant.products.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
 
        return redirect()->route('restaurant.products.index');

    }

}
