<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $categories = Category::all();
        $brands = Brand::all();
        $contacts = Contact::all();

        $stats = [
            'totalProducts' => $products->count(),
            'totalCategories' => $categories->count(),
            'totalBrands' => $brands->count(),
            'totalContacts' => $contacts->count(),
        ];

        return Inertia::render('dashboard', [
            'stats' => $stats,
        ]);
    }
}
