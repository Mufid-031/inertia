<?php

namespace Database\Factories;

use App\Models\Tag;
use App\Models\Wallpaper;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Wallpaper_Tag>
 */
class WallpaperTagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'wallpaper_id' => Wallpaper::factory(),
            'tag_id' => Tag::factory()
        ];
    }
}
