<?php

namespace App\Services;

class SideBarService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getSideBar()
    {
        $user = auth()->user();
        if(!$user){
            return [];
        }
        // dd($user->role->value);
        // dd((config('sidebar'))->get($user->role->value));
        $sidebar = collect(config('sidebar'))->get($user->role->value) ?? [];
        // $sidebar = $sidebar->map(function ($item) use ($user) {
        //     if (isset($item['permission']) && ! $user->can($item['permission'])) {
        //         return null;
        //     }
        //     return $item;
        // });
        return $sidebar;
    }
}
