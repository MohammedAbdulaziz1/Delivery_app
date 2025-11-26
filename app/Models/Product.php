<?php

namespace App\Models;

use App\Enums\UserStatus;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model implements HasMedia
{
    use SoftDeletes, HasFactory, InteractsWithMedia;
    
    protected $fillable = [
        'en_name',
        'ar_name',
        'description',
        'price',
        'status',
        'restaurant_id',
        'order_id',
   ];

   protected $appends = [
       'mediaFile'
   ];

   public function getMediaFileAttribute()
   {
       if ($this->relationLoaded('media')) {
           return $this->getFirstMedia();
       }

       return null;
   }

   public function casts(){
        return [
            'price' => 'decimal:2',
            'status' => UserStatus::class,
    ];
   }

//    protected static function booted(): void
//    {
//        if (Auth::check()) {
//            static::addGlobalScope('by_user', function (Builder $builder) {
//                $builder->where('restaurant_id', Auth::user()->restaurants->id);
//            });
//        }
//    }
    
    public function restaurant(){
        return $this->belongsTo(Restaurant::class);
    }

    public function orders(){
        return $this->belongsToMany(Order::class, 'order_product', 'product_id', 'order_id')
        ->withPivot('quantity')
        ->withTimestamps();
    }

}
