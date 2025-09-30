<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Restaurant;
class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Restaurants/Home', [
        ]);
    }
    
}
