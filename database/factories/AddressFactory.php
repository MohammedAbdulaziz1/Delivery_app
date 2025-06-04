<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'city' => fake()->city(),
            'street' => fake()->streetName(),
            'latitude' => fake()->latitude(),
            'longitude' => fake()->longitude(),
            
            'user_id' => User::factory(),
        ];
    }
}
