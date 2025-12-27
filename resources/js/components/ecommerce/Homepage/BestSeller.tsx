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
import ProductCard from '../ProductCard';

export default function BestSeller() {
    const { bestSellingProducts } = usePage().props as any;

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
                            breakpoints={{
                                344: { slidesPerView: 2 },
                                360: { slidesPerView: 2 },
                                375: { slidesPerView: 2 },
                                385: { slidesPerView: 2 },
                                430: { slidesPerView: 2 },
                                720: { slidesPerView: 3 },
                                1280: { slidesPerView: 5 },
                                1920: { slidesPerView: 5 }
                            }}
                            className="swiper-wrapper items-center"
                        >
                            {bestSellingProducts.length > 0 ? (
                                bestSellingProducts.map((product: any) =>
                                    <SwiperSlide key={product.id} className="swiper-slide p-4 text-center">
                                        <ProductCard key={product.id} {...product} />
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
