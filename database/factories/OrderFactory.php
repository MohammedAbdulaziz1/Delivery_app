<?php

namespace Database\Factories;

use App\Enums\UserStatus;
use App\Models\Product;
use App\Models\Restaurant;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'status' => Arr::random(UserStatus::cases())->value,
            'customer_id' => User::factory(),
            'driver_id' => User::factory(),
            'restaurant_id' => Restaurant::factory(),
        ];
    }
}
