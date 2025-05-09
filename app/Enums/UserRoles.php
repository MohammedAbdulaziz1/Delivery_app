<?php

namespace App\Enums;

enum UserRoles : string
{
    case ADMIN = "admin";
    case RESTAURANT = "restaurant";
    case CUSTOMER = "customer";
    case DRIVER = "driver";

    public function label(){
        return match($this) {
            self::ADMIN => "müdür",
            self::RESTAURANT => "lokanta",
            self::CUSTOMER => "müşteri",
            self::DRIVER => "şöför",
        };
    }
}




