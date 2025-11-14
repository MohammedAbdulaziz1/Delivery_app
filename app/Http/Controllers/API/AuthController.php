<?php

namespace App\Http\Controllers\Api;

use App\Enums\UserRoles;
use App\Enums\UserStatus;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'en_name' => 'required|string|max:255',
            'ar_name' => 'nullable|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Password::defaults()],
            'device_name' => 'required|string',
            'dial_cod' => 'nullable|integer',
            'phone' => 'nullable|string|max:255',
        ]);

        $user = User::create([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'dial_cod' => $request->dial_cod,
            'phone' => $request->phone,
            'role' => $request->role,
            'status' => UserStatus::ACTIVE,
        ]);

        return $user->createToken($request->device_name)->plainTextToken;
    }    

        public function login(Request $request): string
        {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required',
                'device_name' => 'required',
            ]);
        
            $user = User::where('email', $request->email)->first();
        
            if (!$user || !Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }
        
            return $user->createToken($request->device_name)->plainTextToken;
        }
        
        public function logout(Request $request)
        {
            $user = User::where('email', $request->email)->first();
        
            if ($user) {
                $user->tokens()->delete();
            }
        
            return response()->noContent();
        }
}

