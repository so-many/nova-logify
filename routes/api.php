<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use SoMany\NovaLogify\Http\Controllers\LogifyController;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/

// Route::get('/', function (Request $request) {
//     //
// });
Route::group(['controller' => LogifyController::class], function () {
    Route::get('/', 'index');
});
