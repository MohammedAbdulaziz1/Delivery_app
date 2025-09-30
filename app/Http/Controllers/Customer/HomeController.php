<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Restaurant;
class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Customers/Home', [
        ]);
    }
    
    public function menu(Restaurant $restaurant)
    {
        $restaurant->load(['media','products']);
        return Inertia::render('Customers/Restaurants/Menu', [
            'restaurants' => $restaurant
        ]);
    }
}
