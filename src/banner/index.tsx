"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules'
import Image from 'next/image';
import './style.css'

export default function Banner() {
    const images = [
        { id: '1', image: '/images/banners/Banner1.png', alt: 'Banner nº 1 - Jornal Interprofissional' },
        { id: '2', image: '/images/banners/Banner2.png', alt: 'Banner Estamos em Manutenção! Voltaremos em breve' },
    ];

    return (
        <div>
            <Swiper
                modules={[EffectFade]}
                effect='fade'
                speed={500}
                loop={true}
            >
                {images.map(item => (
                    <SwiperSlide key={item.id}>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={1920}
                            height={500}
                            className='banner'
                            priority='false'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
