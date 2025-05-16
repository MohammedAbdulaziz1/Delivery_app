<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
   use HasFactory;
   
    public function products(){
        return $this->hasMany(Product::class);
    }

    public function owner(){
        return $this->belongsTo(User::class)->where('role', UserRoles::RESTAURANT);
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

    protected $fillable = [
        'en_name',
        'ar_name',
        'phone',
        'dial_cod',
        'owner_id',
    ];
}
