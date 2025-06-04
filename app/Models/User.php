<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Enums\UserRoles;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use SoftDeletes , HasFactory, Notifiable;

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
        'status'
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

    public function addresses(){
        return $this->hasMany(Address::class);
    }
    
    public function restaurants(){
        return $this->hasOne(Restaurant::class , 'owner_id'); //->where('role', UserRoles::RESTAURANT);
        
    }

    public function customerOrder(){
        return $this->hasMany(Order::class)->where('role', UserRoles::CUSTOMER);
    }
    
    public function driverOrder(){
        return $this->hasMany(Order::class)->where('role', UserRoles::DRIVER);
    }

}
