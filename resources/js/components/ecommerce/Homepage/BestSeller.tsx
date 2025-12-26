import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { usePage } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductListItem } from '@/types'
import { router, useForm } from '@inertiajs/react'
import { Heart, ShoppingBag } from 'lucide-react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function BestSeller() {
    const { bestSellingProducts } = usePage().props as any;

    const form = useForm<{
        option_ids: Record<string, number>
        quantity: number
      }>({
        option_ids: {},
        quantity: 1,
      })

      const handleDetail = (slug: string) => {
        router.visit(route('product.detail', { slug }))
      }

      const addToCart = () => {
        form.post(route('cart.store', product.id), {
          preserveScroll: true,
          preserveState: true,
          onError: (err: any) => {
            console.log(err)
          },
        })
      }

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Best Sellers</h2>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                        View All
                    </a>
                </div>

                <div className="swiper brand-slider">
                    <div className="swiper-wrapper items-center">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={5}
                            // navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className="swiper-wrapper items-center"
                        >
                            {bestSellingProducts.length > 0 ? (
                                bestSellingProducts.map((product: any) =>
                                    <SwiperSlide key={product.id} className="swiper-slide p-4 text-center">
                                        <div className="group overflow-hidden rounded-lg bg-white shadow-sm">
                                            <div className="relative">
                                                <img src={product.image} alt="Product" className="h-64 w-full object-cover" />
                                                {product.isDiscount && (
                                                <div className="absolute top-0 right-0 m-2 rounded-md bg-red-500 px-2 py-1 text-sm text-white">
                                                    -{product.discount}%
                                                </div>
                                                )}
                                                <div className="bg-opacity-20 absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                                                <button
                                                    onClick={addToCart}
                                                    disabled={form.processing}
                                                    className="mx-2 rounded-full bg-white p-3 text-gray-800 transition hover:bg-indigo-600 hover:text-white"
                                                >
                                                    <ShoppingBag className="h-5 w-5" />
                                                </button>
                                                <button className="mx-2 rounded-full bg-white p-3 text-gray-800 transition hover:bg-indigo-600 hover:text-white">
                                                    <Heart className="h-5 w-5" />
                                                </button>
                                                </div>
                                            </div>
                                            <div className="p-4" onClick={() => handleDetail(product.slug)}>
                                                <h3 className="mb-2 text-lg font-medium">{product.name}</h3>
                                                <p className="mb-3 text-sm text-gray-600">{product.description}</p>
                                                <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="font-bold text-indigo-600">${product.price}</span>
                                                    {product.isDiscount && <span className="ml-2 text-gray-400 line-through">$119.99</span>}
                                                </div>
                                                <div className="flex text-yellow-400">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                            )) : (
                                <div className="col-span-4 text-center text-gray-500">No best sellers available at the moment.</div>
                            )}
                        </Swiper>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
}
