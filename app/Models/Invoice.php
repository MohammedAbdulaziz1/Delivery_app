<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_number',
        'Price',
        'order_id',
    ];

    public function orders(){
        return $this->belongsTo(Order::class);
    }
}
