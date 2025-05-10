<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    public function products(){
        return $this->hasMany(Product::class);
    }

    public function owner(){
        return $this->belongsTo(User::class)->where('role', UserRoles::RESTAURANT);
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }
}
