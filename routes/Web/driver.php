<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Driver\OrderController;
use App\Http\Controllers\Driver\HomeController;

Route::middleware('auth', 'auth.type:driver')->prefix('driver')->name('driver.')->group(function () {
    Route::get('/order/accept/{order}', [OrderController::class, 'acceptOrder'])->name('order.accept');
    Route::get('/order/receive/{order}', [OrderController::class, 'receiveOrder'])->name('order.receive');
    Route::get('/reached/{order}', [OrderController::class, 'reachedDriver'])->name('reached');
    Route::get('/customer/accept/{order}', [OrderController::class, 'acceptCustomer'])->name('customer.accept');
    Route::resource('/orders', OrderController::class,);
    Route::get('/home', [HomeController::class, 'index'])->name('home');


});