import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ImageCardSwiper = () => {
    const imageDetails = [
        { url: '/Basic.png', link: 'http://10.1.133.177:5500/medieval_wooden_bucket.html' },
        { url: '/Basic1.png', link: 'http://10.1.133.177:5500/vintage_wooden_cabinets.html' },
        { url: '/cave1.png', link: 'http://10.1.133.177:5500/elephanta_caves_mumbai_india.html' },
        { url: '/cave2.png', link: 'http://10.1.133.177:5500/mandapeshwar_caves_mumbai_maharashtra.html' },
        // { url: '/cave3.png', link: 'https://example.com/cave3' },
        { url: '/temple1.jpg', link: 'http://10.1.133.177:5500/indian_temples.html' },
        { url: '/temple2.jpg', link: 'http://10.1.133.177:5500/south_indian_temple_-_modular_kit.html' },
        { url: '/temple3.jpg', link: 'http://10.1.133.177:5500/ellora_caves__india.html' },
    ];

    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            loop={true}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}
        >
            {imageDetails.map((image, index) => (
                <SwiperSlide key={index}>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                        <div
                            style={{
                                width: '100%',
                                height: '200px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${image.url})`,
                                borderRadius: '10px',
                            }}
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageCardSwiper;
