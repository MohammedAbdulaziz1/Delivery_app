<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Restaurant;
class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Home', [
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
