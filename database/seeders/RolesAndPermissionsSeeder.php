<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Define product permissions
        Permission::create(['name' => 'view products']);
        Permission::create(['name' => 'create products']);
        Permission::create(['name' => 'edit products']);
        Permission::create(['name' => 'delete products']);

        // Define order permissions
        Permission::create(['name' => 'view orders']);
        Permission::create(['name' => 'create orders']);
        Permission::create(['name' => 'update orders']);
        Permission::create(['name' => 'cancel orders']);

        // Define user permissions
        Permission::create(['name' => 'view users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'delete users']);
        Permission::create(['name' => 'create users']);

        // Define restaurant permissions
        Permission::create(['name' => 'view restaurants']);
        Permission::create(['name' => 'edit restaurants']);
        Permission::create(['name' => 'delete restaurants']);
        Permission::create(['name' => 'create restaurants']);

        // Define customer permissions
        Permission::create(['name' => 'view customers']);
        Permission::create(['name' => 'edit customers']);
        Permission::create(['name' => 'delete customers']);
        Permission::create(['name' => 'create customers']);

        // Define driver permissions
        Permission::create(['name' => 'view drivers']);
        Permission::create(['name' => 'edit drivers']);
        Permission::create(['name' => 'delete drivers']);
        Permission::create(['name' => 'create drivers']);

        // Create Admin role and assign all permissions
        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo([
            'view products',
            'create products',
            'edit products',
            'delete products',
            'view orders',
            'update orders',
            'cancel orders',
            'view users',
            'edit users',
            'delete users',
            'create users',
        ]);

        // Create Restaurant role with limited permissions
        $restaurantRole = Role::create(['name' => 'restaurant']);
        $restaurantRole->givePermissionTo([
            'view customers',
            'edit customers',
            'delete customers',
            'create customers',
            'view orders',
            'view products',
            'create products',
            'edit products',
            'delete products',
        ]);

        // Create Customer role with limited permissions
        $customerRole = Role::create(['name' => 'customer']);
        $customerRole->givePermissionTo([
            'view orders',
            'create orders',
            'cancel orders',
            'view restaurants',
        ]);

        // Create driver role
        $driverRole = Role::create(['name' => 'driver']);
        $driverRole->givePermissionTo([
            'view orders',
        ]);
    }
}
