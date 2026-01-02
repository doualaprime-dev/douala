import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { usePage } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from '../ProductCard';

export default function AudioHifi() {
    const { audio_hifi } = usePage().props as any;

    return (
        <div className="container py-4">
            <div className='card shadow-lg p-4 w-full rounded-md bg-white'>
                <h2 className="text-[20px] font-bold text-gray-800 border-b-4 border-[#FFC533] w-full mb-2">Audio & Hifi</h2>

                <div className="swiper brand-slider">
                    <div className="swiper-wrapper items-center">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={10}
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
                            className="productSlider"
                        >
                            {audio_hifi.length > 0 ? (
                                audio_hifi.map((product: any) =>
                                    <SwiperSlide key={product.id} className="">
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
