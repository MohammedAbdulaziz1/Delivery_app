<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function customer(){
        return $this->belongsTo(User::class)->where('role', UserRoles::CUSTOMER);
    }
    
    public function driver(){
        return $this->belongsTo(User::class)->where('role', UserRoles::DRIVER);
    }

    public function restaurant(){
        return $this->belongsTo(Restaurant::class);
    }

    public function invoices(){
        return $this->hasOne(Invoice::class);
    }

    public function products(){
        return $this->belongsToMany(Product::class, 'order_product','order_id', 'product_id')
        ->withPivot('quantity')
        ->withTimestamps();
    }
}
