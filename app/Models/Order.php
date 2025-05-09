<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function customer(){
        return $this->belongsTo(User::class)->where('role', UserRoles::CUSTOMER->value);
    }
    
    public function driver(){
        return $this->belongsTo(User::class)->where('role', UserRoles::DRIVER->value);
    }

    public function restaurant(){
        return $this->belongsTo(Restaurant::class);
    }

    public function invoices(){
        return $this->hasOne(Invoice::class);
    }
}
