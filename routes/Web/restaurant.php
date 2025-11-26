<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Restaurant\CustomerController;
use App\Http\Controllers\Restaurant\OrderController;
use App\Http\Controllers\Restaurant\ProductController;
use App\Http\Controllers\Restaurant\HomeController;

Route::middleware('auth', 'auth.type:restaurant')->prefix('restaurant')->name('restaurant.')->group(function () {
    Route::resource('/orders', OrderController::class,);
    Route::resource('/products', ProductController::class,);
    Route::get('/home', [HomeController::class, 'index'])->name('home');
});
