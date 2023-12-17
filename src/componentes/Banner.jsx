import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="http://www.cobao.edu.mx/images/PDF/2023/calendarios/CALENDARIOCOBAO2023-2024.pdf" target='_blank'>
          <img className='h-auto w-auto' src="banner/calendario-banner-01.jpg"/>
          </a></SwiperSlide>
        <SwiperSlide>
        <a href="http://www.cobao.edu.mx/index.php/estudiantes/26-informacion/320-intercea-2023" target='_blank'>
        <img src="banner/Banner-InterCEA-1_page-0001.jpg" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="http://www.cobao.edu.mx/index.php/convocatorias" target='_blank'>
        <img src="banner/BANNER-CAP-DOC-AGO-2023.jpg" />
        </a>
        </SwiperSlide>
        {/*}
        <SwiperSlide>Slide 3</SwiperSlide>
      {*/}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
