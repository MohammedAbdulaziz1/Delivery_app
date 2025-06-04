<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\User;
use App\Models\Order;
use App\Models\Address;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Invoice;
use App\Models\Product;
use App\Models\Restaurant;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Log::info('user seeder is runing');
        User::factory(3)->has(Address::factory()->count(3))->create();

        // Product::factory(5)->create();
        Restaurant::factory(5)->create();

        Product::factory(3)->hasAttached(Order::factory()->count(3))->create();

        // Order::factory(5)->create();
        Invoice::factory(5)->create();
        // Address::factory(5)->create();

        // Product::factory(3)->hasAttached(Order::factory()->count(5))->create();
        // Task::factory()->count(10)->create();

        
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


    }
}
