<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/biodata', function () {
    return view('welcome');
});
Route::get('/', function () {
    return view('welcome');
});
Route::view('/{any}', 'app')->where('any', '.*');

Route::prefix('app')->middleware([AdminCheck::class])->group(function(){  
    //Route Tahun Akademik
    Route::post('/create_tahun_akademik', 'AdminController@addTahun_akademik');
    Route::get('/get_tahun_akademik', 'AdminController@getTahun_akademik');
    Route::post('/edit_tahun_akademik', 'AdminController@editTahun_akademik');
    Route::post('/delete_tahun_akademik', 'AdminController@deleteTahun_akademik');
});