<?php

namespace App\Models;

use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Restaurant extends Model implements HasMedia
{
   use HasFactory,SoftDeletes,InteractsWithMedia;

   protected $fillable = [
    'en_name',
    'ar_name',
    'phone',
    'dial_cod',
    'owner_id',
];

protected $appends = [
    'mediaFile'
];

public function registerMediaCollections(): void
{
    $this->addMediaCollection('restaurantLogo')
        ->useDisk('public')
        ->singleFile();
}

public function getMediaFileAttribute()
{
    if ($this->relationLoaded('media')) {
        return $this->getFirstMedia('restaurantLogo');
    }

    return null;
}

   
    public function products(){
        return $this->hasMany(Product::class);
    }

    public function owner(){
        return $this->belongsTo(User::class , 'owner_id');
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

    // public function customers(){
    //     return $this->hasMany(User::class);
    // }


}
