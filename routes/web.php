<?php

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'canRestaurantRegister' => Route::has('restaurant.register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// Route::get('/customer/dashboard', function () {
//     return Inertia::render('customer.Dashboard');
// })->middleware(['auth', 'verified'])->name('customer.dashboard');


// Route::get('/driver/dashboard', function () {
//     return Inertia::render('driver.Dashboard');
// })->middleware(['auth', 'verified'])->name('driver.dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});

require __DIR__.'/web/auth.php';
require __DIR__.'/web/admin.php';
require __DIR__.'/web/customer.php';
require __DIR__.'/web/driver.php';
require __DIR__.'/web/restaurant.php';
