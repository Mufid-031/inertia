<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Wallpaper;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Mufidd',
            'email' => 'mufidd@gmail.com',
            'password' => '123.321A'
        ]);

        Wallpaper::factory(50)->create();
    }
}
