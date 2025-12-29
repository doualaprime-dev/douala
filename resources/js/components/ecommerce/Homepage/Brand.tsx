import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { usePage } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Brand() {
    const { brands } = usePage().props as any;
    return (
        <div className="container py-4">
            <div className='card shadow-lg p-4 mx-auto rounded-md bg-white'>

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
                            {brands.map((brand: any) => (
                                <SwiperSlide key={brand.id} className="">
                                    <div className="flex h-32 items-center justify-center rounded-lg bg-gray-50 p-6">
                                        <img src={brand.image} alt={brand.name} className="max-h-16" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
}
