<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function dashboard(){
        return view('dashboard');
    }

    public function vm(){
        return view('vm');
    }

    public function febreamaerela(){
        return view('febreamarela');
    }

    public function dengue(){
        return view('dengue');
    }

    public function zika(){
        return view('zika');
    }

    public function hiv(){
        return view('hiv');
    }

}
