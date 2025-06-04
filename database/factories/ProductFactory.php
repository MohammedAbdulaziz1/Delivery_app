<?php

namespace Database\Factories;

use App\Enums\UserStatus;
use App\Models\Order;
use App\Models\Restaurant;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'en_name' => fake()->name(),
            'ar_name' => fake()->name(),
            'description' => fake()->paragraph(),
            'price' => fake()->randomFloat(2, 9.99, 99.99),
            // 'status' => UserStatus::all()[array_rand(UserStatus::all())],
            // 'status' => Arr::random(UserStatus::all()),
            'status' => Arr::random(UserStatus::cases())->value,
            'restaurant_id'=> Restaurant::factory(),
        ];
    }
}
