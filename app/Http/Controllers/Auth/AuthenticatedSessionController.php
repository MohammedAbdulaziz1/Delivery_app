<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Inertia\Response;
use App\Enums\UserRoles;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        // return redirect()->intended(route('dashboard', absolute: false));
                switch ($request->user()) {
            case $request->user()->role == UserRoles::ADMIN:
                return redirect(route('admin.home'));
                break;
            case $request->user()->role == UserRoles::CUSTOMER:
                return redirect(route('customer.home'));
                break;
            case $request->user()->role == UserRoles::RESTAURANT:
                return redirect(route('restaurant.home'));
                break;
            case $request->user()->role == UserRoles::DRIVER:
                return redirect(route('driver.home'));
                break;
            default:
                return redirect(route('welcome'));
                break;
        }

    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
