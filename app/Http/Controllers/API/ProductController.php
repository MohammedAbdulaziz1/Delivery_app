<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProductResource;
use App\Http\Requests\API\ApiStoreProductRequest;
use App\Http\Requests\API\ApiUpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Auth::user()->restaurants->products()->select('id','en_name','ar_name','description','price','status')->get();
        
        return ProductResource::collection($products);
        //  return ProductResource::collection(Product::all());


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ApiStoreProductRequest $request)
    {
        $product = Auth::user()->restaurants->products()->create($request->validated());
 
        return new ProductResource($product); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ApiUpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());
 
        return new ProductResource($product); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
 
        return response()->noContent();
    }
}
