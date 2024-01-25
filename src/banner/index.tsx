"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

export default function Banner() {
    const data = [
        { id: '1', image: 'https://jornalinterprofissional.online/wp-content/uploads/2023/12/jornalinterprofissional-e1701790458297.jpeg', alt: 'Banner nº 1 - Jornal Interprofissional' },
    ];

    return (
        <div>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt={item.alt}
                            className='slide-item'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
