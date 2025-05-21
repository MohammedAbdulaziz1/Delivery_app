<?php

namespace App\Enums;

enum UserStatus : string
{
    case ACTIVE = "active";
    case INACTIVE = "inactive";

    public function label(){
        return match($this) {
            self::ACTIVE => "Active",
            self::INACTIVE => "Inactive",
        };
    }

   
}
