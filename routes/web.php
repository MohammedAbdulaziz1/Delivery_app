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
    Route::resource('/customers', CustomerController::class,);
    Route::resource('/restaurants', RestaurantController::class,);
    Route::resource('/drivers', DriverController::class,);
    Route::resource('/orders', OrderController::class,);
    Route::resource('/products', ProductController::class,);
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/menu/{restaurant}', [HomeController::class, 'menu'])->name('menu');

});

require __DIR__.'/auth.php';
