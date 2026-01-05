import { usePage } from '@inertiajs/react';
import EcomLayout from '@/layouts/ecom-layout';
import ProductCard from '@/components/ecommerce/ProductCard';

interface FilterProps {
    search: string;
}

export default function Search() {
    const { resultSearch } = usePage().props as any;

    return (
        <EcomLayout>
            {/* Breadcrumb */}
            <div className="bg-gray-100 py-3">
                <div className="container mx-auto px-4">
                <div className="flex items-center text-sm text-gray-600">
                    {/* <Link href="/" className="hover:text-indigo-600"> */}
                    ACCUEIL
                    {/* </Link> */}
                    <span className="mx-2">/</span>
                    {/* <Link href="/products" className="hover:text-indigo-600"> */}
                    PRODUITS
                    {/* </Link> */}
                    <span className="mx-2">/</span>
                    <span className="text-gray-800"></span>
                </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* <!-- Product Card 1 --> */}
                    {resultSearch.length > 0 ? (
                        resultSearch.map((product: any) => <ProductCard key={product.id} {...product} />)
                    ) : (
                        <div className="col-span-4 text-center text-gray-500">Aucun produits dans cette catégorie.</div>
                    )}
                </div>
            </div>
        </EcomLayout>
    )
}
