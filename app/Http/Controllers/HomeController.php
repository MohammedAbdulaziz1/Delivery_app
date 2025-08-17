<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Restaurant;
class HomeController extends Controller
{
    public function index()
    {
        $restaurants = Restaurant::select('id', 'en_name as name')->with('media')->get();
        return Inertia::render('Homee/Index', [
            'restaurants' => $restaurants
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
