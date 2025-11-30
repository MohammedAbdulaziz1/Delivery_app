<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\UserRoles;
use Spatie\MediaLibrary\HasMedia; 
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\InteractsWithMedia; 
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable  implements HasMedia 
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use SoftDeletes , HasFactory, Notifiable,InteractsWithMedia,HasRoles, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'en_name',
        'ar_name',
        'dial_cod',
        'phone',
        'email',
        'password',
        'role',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'role' => UserRoles::class,
        ];
    }

    protected $appends = [
        'mediaFile'
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('profileImage')
            ->useDisk('public')
            ->singleFile();
    }
 
    public function getMediaFileAttribute()
    {
        if ($this->relationLoaded('media')) {
            return $this->getFirstMedia('profileImage');
        }
 
        return null;
    }


    public function addresses(){
        return $this->hasMany(Address::class);
    }
    
    public function restaurants(){
        return $this->hasOne(Restaurant::class , 'owner_id');
        
    }

    public function customerOrder(){
        return $this->hasMany(Order::class , 'customer_id');
    }
    
    public function driverOrder(){
        return $this->hasMany(Order::class, 'driver_id');
    }

    // public function restaurant(){
    //     return $this->hasOne(Restaurant::class); //->where('role', UserRoles::RESTAURANT);
    // }

}
