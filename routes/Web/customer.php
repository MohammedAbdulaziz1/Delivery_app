<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Customer\RestaurantController;
use App\Http\Controllers\Customer\OrderController;
use App\Http\Controllers\Customer\HomeController;

Route::middleware('auth', 'auth.type:customer')->prefix('customer')->name('customer.')->group(function () {
    Route::resource('/restaurants', RestaurantController::class,);
    Route::resource('/orders', OrderController::class,);
    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::get('/menu/{restaurant}', [HomeController::class, 'menu'])->name('menu');

});