<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\RestaurantController;
use App\Http\Controllers\Admin\DriverController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\HomeController;

Route::middleware('auth', 'auth.type:admin')->prefix('admin')->name('admin.')->group(function () {
    Route::resource('/customers', CustomerController::class,);
    Route::resource('/restaurants', RestaurantController::class,);
    Route::resource('/drivers', DriverController::class,);
    Route::resource('/orders', OrderController::class,);
    Route::resource('/products', ProductController::class,);
    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::get('/menu/{restaurant}', [HomeController::class, 'menu'])->name('menu');

});