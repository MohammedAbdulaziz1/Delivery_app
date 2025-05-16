<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Restaurant>
 */
class RestaurantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'en_name'=> fake()->name(),
            'ar_name'=> fake()->name(),
            'phone' => fake()->phoneNumber(),
            'dial_cod'=> fake()->numberBetween(961,999),
            'owner_id' => User::factory(),
        ];
    }
}
