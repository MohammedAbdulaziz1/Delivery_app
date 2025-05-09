<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function restaurants(){
        return $this->belongsTo(Restaurant::class);
    }

    public function invoices(){
        return $this->belongsToMany(Invoice::class);
    }
}
