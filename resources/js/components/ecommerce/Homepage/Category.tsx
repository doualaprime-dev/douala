import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { usePage } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'lucide-react';

export default function Category() {
    const { categories } = usePage().props as any;
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
                            // pagination={{ clickable: true }}
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
                            {categories.map((category: any) => (
                                <SwiperSlide key={category.id} className="">
                                    <a href={`/category/${category.slug}`} className="flex items-center hover:bg-gray-100">
                                        <h3 className="text-lg font-medium text-[#1B3B6C]">{category.name}</h3>
                                    </a>
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
