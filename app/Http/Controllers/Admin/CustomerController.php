<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Enums\UserRoles;
use App\Enums\UserStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        
        $customers = User::select('id','en_name','email', 'phone', 'status')->where('role', UserRoles::CUSTOMER)->with('media')
            ->when($search, function ($query, $search) {
                return $query->where('en_name', 'like', "%{$search}%");
            })
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Admin/Customers/Index', [
            'customers' => $customers,
            'search' => $search,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Customers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request)
    {
        $customer = User::create([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'dial_cod' => $request->dial_cod,
            'phone' => $request->phone,
            'role' => UserRoles::CUSTOMER,
            'status' => UserStatus::ACTIVE,

        ]);
        
        if ($request->hasFile('media')) { 
            $customer->addMedia($request->file('media'))->toMediaCollection('profileImage');
        } 
 
        return redirect()->route('admin.customers.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $customer)
    {
        $customer->load(['media']);
        $customer->append('mediaFile');
       
        return Inertia::render('Admin/Customers/Edit', [
            'customer' => $customer,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, User $customer)
    {
        $customer->update($request->validated());

        if ($request->hasFile('media')) { 
            $customer->getFirstMedia()?->delete();
            $customer->addMedia($request->file('media'))->toMediaCollection();
        } 
 
        return redirect()->route('admin.customers.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $customer)
    {
        $customer->delete();
 
        return redirect()->route('admin.customers.index');

    }
}
