<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'status',
        'customer_id',
        'driver_id',
        'restaurant_id',
    ];

    public function customer(){
        return $this->belongsTo(User::class , 'customer_id');
    }
    
    public function driver(){
        return $this->belongsTo(User::class, 'driver_id');
    }

    public function restaurant(){
        return $this->belongsTo(Restaurant::class, 'restaurant_id');
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
