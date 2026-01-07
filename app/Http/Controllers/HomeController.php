<?php

namespace App\Http\Controllers;

use App\Models\Post;
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
        $bestSellingProducts = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->orderBy('sales', 'desc')
                        ->get()
        )->resolve();

        $specialOffers = ProductListResource::collection(
            Product::query()
                        ->where('is_special_offer', true)
                        ->limit(10)
                        ->get()
        )->resolve();

        $categories = Category::query()->select('id', 'name', 'slug', 'image')->whereIn('name', ['Congélateur Coffre', 'Réfrigérateur Combiné', 'Cuisinière Automatique', 'Semi-Automatique', 'Split Climatiseur', 'Micro-Ondes Et Fours', 'Téléviseurs Smart', 'Home Cinéma'])->get()->map(function ($category) {
            $category->image = asset('storage/' . $category->image);
            return $category;
        });

        $brands = Brand::query()->select('id', 'name', 'slug', 'image')->get()->map(function ($brand) {
            $brand->image = asset('storage/' . $brand->image);
            return $brand;
        });


        $posts = Post::with('author')->latest()->get();

        $congelateurs = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [1,2,3,4,5])
                        ->get()
        )->resolve();

        $refrigerateurs = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [6,7,8,9,10])
                        ->get()
        )->resolve();

        $cuisinieres = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [11,12,13,14,15,16])
                        ->get()
        )->resolve();

        $machines_a_laver = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [17,18,19,20,21])
                        ->get()
        )->resolve();

        $climatiseurs = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [22,23,24,25,26,27])
                        ->get()
        )->resolve();

        $appareils_cuisson = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [28,29,30,31])
                        ->get()
        )->resolve();

        $blender_hachoir = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [32,33,34,35,36,37,38,39,40])
                        ->get()
        )->resolve();

        $televiseurs = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [45,46,47,48,49,50,51])
                        ->get()
        )->resolve();

        $audio_hifi = ProductListResource::collection(
            Product::query()
                        ->limit(10)
                        ->whereIn('products.category_id', [51,52,53,54,55,56,57])
                        ->get()
        )->resolve();

        return Inertia::render('Ecommerce/Home', [
            'title' => 'Welcome to Our Store',
            'description' => 'Explore our wide range of products and enjoy exclusive offers.',
            'bestSellingProducts' => $bestSellingProducts,
            'specialOffers' => $specialOffers,
            'brands' => $brands,
            'categories' => $categories,
            'posts' => $posts,
            'congelateurs' => $congelateurs,
            'refrigerateurs' => $refrigerateurs,
            'cuisinieres' => $cuisinieres,
            'machines_a_laver' => $machines_a_laver,
            'climatiseurs' => $climatiseurs,
            'appareils_cuisson' => $appareils_cuisson,
            'blender_hachoir' => $blender_hachoir,
            'televiseurs' => $televiseurs,
            'audio_hifi' => $audio_hifi,
        ]);
    }

    public function productDetail(Request $request, $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        $productResource = new ProductResource($product);
        $relatedProducts = ProductListResource::collection(
            Product::where('category_id', $product->category_id)
                ->where('id', '!=', $product->id)
                ->limit(10)
                ->orderBy('sales', 'desc')
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
        $products = ProductListResource::collection(Product::where('products.category_id', '=', $category->id)->limit(25)->orderBy('sales', 'desc')->get())->resolve();

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

        $products = $products->latest()->paginate(25)->withQueryString();

        $resultSearch = ProductListResource::collection($products)->resolve();

        return Inertia::render('Ecommerce/Search', [
            'resultSearch' => $resultSearch,
            'filters' => $request->only(['search']),
        ]);
    }
}
