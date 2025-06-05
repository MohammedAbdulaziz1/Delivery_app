<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Enums\UserRoles;
use App\Enums\UserStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreDriverRequest;
use App\Http\Requests\UpdateDriverRequest;

class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Drivers/Index', [
            'drivers' => User::select('id','en_name','email', 'phone', 'status')->where('role', UserRoles::DRIVER)->get(),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Drivers/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDriverRequest $request)
    {
        User::create([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'dial_cod' => $request->dial_cod,
            'phone' => $request->phone,
            'role' => UserRoles::DRIVER,
            'status' => UserStatus::ACTIVE,

        ]);
        
 
        return redirect()->route('drivers.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $driver)
    {
        return Inertia::render('Drivers/Edit', [
            'driver' => $driver,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDriverRequest $request, User $driver)
    {
        $driver->update($request->validated());
 
        return redirect()->route('drivers.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $driver)
    {
        $driver->delete();
 
        return redirect()->route('drivers.index');

    }
}
