<?php

namespace App\Http\Controllers;

use App\Models\Wallpaper;
use App\Http\Requests\StoreWallpaperRequest;
use App\Http\Requests\UpdateWallpaperRequest;
use App\Http\Resources\WallpaperResource;
use Inertia\Inertia;

class WallpaperController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Wallpaper::query();

        $wallpapers = $query->paginate()->onEachSide(1);

        return Inertia::render('Wallpaper/Index', [
            'wallpapers' => WallpaperResource::collection($wallpapers),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWallpaperRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Wallpaper $wallpaper)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wallpaper $wallpaper)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWallpaperRequest $request, Wallpaper $wallpaper)
    {
        $validated = $request->validate([
            'image' => ['required', 'string', 'max:255'],
            'title' => ['required', 'string', 'max:255'],
            'category' => ['required', 'string', 'max:255'],
        ]);

        $wallpaper->update($validated);

        return redirect()->route('wallpaper.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wallpaper $wallpaper)
    {
        //
    }
}
