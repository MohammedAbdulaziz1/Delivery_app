<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Driver\OrderController;
use App\Http\Controllers\Driver\HomeController;

Route::middleware('auth')->prefix('driver')->name('driver.')->group(function () {
    Route::resource('/orders', OrderController::class,);
    Route::get('/home', [HomeController::class, 'index'])->name('home');


});