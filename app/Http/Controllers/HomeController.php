<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductListResource;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index(Request $request)
    {
        $bestSellingProducts = ProductListResource::collection(Product::query()->limit(10)->orderBy('sales', 'desc')->get())->resolve();
        $specialOffers = ProductListResource::collection(Product::query()->where('is_special_offer', true)->limit(4)->get())->resolve();
        $brands = Brand::query()->select('id', 'name', 'slug', 'image')->get()->map(function ($brand) {
            $brand->image = asset('storage/' . $brand->image);
            return $brand;
        });
        return Inertia::render('Ecommerce/Home', [
            'title' => 'Welcome to Our Store',
            'description' => 'Explore our wide range of products and enjoy exclusive offers.',
            'bestSellingProducts' => $bestSellingProducts,
            'specialOffers' => $specialOffers,
            'brands' => $brands,
        ]);
    }

    public function productDetail(Request $request, $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        $productResource = new ProductResource($product);
        $relatedProducts = ProductListResource::collection(
            Product::where('category_id', $product->category_id)
                ->where('id', '!=', $product->id)
                ->limit(4)
                ->get()
        );
        return Inertia::render('Ecommerce/ProductDetail', [
            'product' => $productResource->resolve(),
            'variationOptions' => request('options', []),
            'relatedProducts' => $relatedProducts->resolve(),
        ]);
    }

    public function byCategory(Category $category)
    {
        $products = ProductListResource::collection(Product::where('products.category_id', '=', $category->id)->limit(10)->orderBy('sales', 'desc')->get())->resolve();

        return Inertia::render('Ecommerce/Products', [
            'products' => $products,
            'category' => $category,
        ]);
    }

    public function search(Request $request)
    {
        $products = Product::query();

        if ($request->filled('search')) {
            $search = $request->search;

            $products->where(fn ($query) =>
                $query->where('name','like',"%{$search}%")
                    ->orWhere('description','like',"%{$search}%")
                    ->orWhere('price','like',"%{$search}%")
            );
        }

        $products = $products->latest()->paginate(12)->withQueryString();

        $resultSearch = ProductListResource::collection($products)->resolve();

        return Inertia::render('Ecommerce/Search', [
            'resultSearch' => $resultSearch,
            'filters' => $request->only(['search']),
        ]);
    }
}
