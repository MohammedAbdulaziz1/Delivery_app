<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Enums\UserRoles;
use App\Enums\UserStatus;
use App\Models\Restaurant;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreRestaurantRequest;
use App\Http\Requests\UpdateRestaurantRequest;

class RestaurantController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return Inertia::render('Restaurants/Index', [
        'restaurants' => Restaurant::orderBy('created_at','desc')->get(),
    ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return Inertia::render('Restaurants/Create'); 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRestaurantRequest $request)
    {
      
      $user = User::create([
        'en_name' => $request->en_name,
        'ar_name' => $request->ar_name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'dial_cod' => $request->dial_cod,
        'phone' => $request->phone,
        'role' => UserRoles::CUSTOMER,
        'status' => UserStatus::ACTIVE,

    ]);
      
      $user->restaurants()->create([
        'en_name' => $request->en_name,
        'ar_name' => $request->ar_name,
        'dial_cod' => $request->dial_cod,
        'phone' => $request->phone,
         
    ]);


      // $restaurant->user()->create(['owner_id'=>1]);
 
      return redirect()->route('restaurants.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Restaurant $restaurant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Restaurant $restaurant)
    {
          return Inertia::render('Restaurants/Edit', [
            'restaurant' => $restaurant,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRestaurantRequest $request, Restaurant $restaurant)
    {
      $restaurant->update($request->validated());
 
      return redirect()->route('restaurants.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Restaurant $restaurant)
    {
      // $restaurant->create(['product_id'=>1]);

      $restaurant->delete();
 
      return redirect()->route('restaurants.index');

    }

}
