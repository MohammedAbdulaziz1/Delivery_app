<?php

namespace App\Models;

use App\Enums\UserStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'en_name',
        'ar_name',
        'description',
        'price',
        'status',
        'restaurant_id',
   ];

   public function casts(){
        return [
            'price' => 'decimal',
            'status' => UserStatus::class,
    ];
   }
    
    public function restaurant(){
        return $this->belongsTo(Restaurant::class);
    }

    public function orders(){
        return $this->belongsToMany(Order::class, 'order_product', 'product_id', 'order_id')
        ->withPivot('quantity')
        ->withTimestamps();
    }

}
