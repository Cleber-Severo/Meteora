import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Caroulsel.module.css'


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Caroulsel() {
    return (

        <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay , EffectFade, Navigation, Pagination]}
            className={styles.swiper}
        >
            <SwiperSlide className={styles.slider}>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.slider}>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.slider}>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide className={styles.slider}>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
        </Swiper>

    );
}
