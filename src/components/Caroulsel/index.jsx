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

//images

import desktopOneImg from '/Images/Desktop/Banner-1-desktop.png'
import desktopTwoImg from '/Images/Desktop/Banner-2-desktop.png'
import desktopThreeImg from '/Images/Desktop/Banner-3-desktop.png'
import tabletOneImg from '/Images/Tablet/Banner-1-tablet.png'
import tabletTwoImg from '/Images/Tablet/Banner-2-tablet.png'
import tabletThreeImg from '/Images/Tablet/Banner-3-tablet.png'
import mobileOneImg from '/Images/Mobile/Banner-1-mobile.png'
import mobileTwoImg from '/Images/Mobile/Banner-2-mobile.png'
import mobileThreeImg from '/Images/Mobile/Banner-3-mobile.png'

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
                <img src={desktopOneImg} className={styles.desktop} />
                <img src={tabletOneImg} className={styles.tablet} />
                <img src={mobileOneImg} className={styles.mobile} />
            </SwiperSlide>
            <SwiperSlide className={styles.slider}>
                <img src={desktopTwoImg} className={styles.desktop} />
                <img src={tabletTwoImg} className={styles.tablet} />
                <img src={mobileTwoImg} className={styles.mobile} />
            </SwiperSlide>
            <SwiperSlide className={styles.slider}>
                <img src={desktopThreeImg} className={styles.desktop} />
                <img src={tabletThreeImg} className={styles.tablet} />
                <img src={mobileThreeImg} className={styles.mobile} />
            </SwiperSlide>
          
        </Swiper>

    );
}
