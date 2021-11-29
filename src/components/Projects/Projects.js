import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
const Projects = () => {
    return (
        <div>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">

                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="project" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="project" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="project" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="project" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="project" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="project" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="project" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="project" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="project" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;