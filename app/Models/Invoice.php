<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    public function products(){
        return $this->belongsToMany(Product::class);
    }

    public function orders(){
        return $this->belongsTo(Order::class);
    }
}
