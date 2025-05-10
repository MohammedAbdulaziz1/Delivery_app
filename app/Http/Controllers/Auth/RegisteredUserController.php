<?php

namespace App\Http\Controllers\Auth;

use App\Enums\UserRoles;
use App\Enums\UserStatus;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'en_name' => 'required|string|max:255',
            'ar_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'dial_cod' => 'required|string|max:255',
            'phone'=> 'required|integer',

        ]);

        $user = User::create([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'dial_cod' => $request->dial_cod,
            'phone' => $request->phone,
            'role' => UserRoles::CUSTOMER->value,
            'status' => UserStatus::ACTIVE->value,

        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
