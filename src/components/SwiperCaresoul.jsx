import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image2 from "../assets/ekbatan.jpg";
import image3 from "../assets/tarkhine2.jpg";
import image4 from "../assets/tarkhine3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperCaresoul = () => {
  return ( 
    <div className="mt-6 mb-10 w-full h-[700px] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='w-full flex flex-col items-center'>
          <img className="w-full bg-fixed h-[700px] object-cover" src={image2}  alt=''/>
          <div className=' absolute top-[46%] text-center   md:right-1/4 font-semibold'>
            <h1 className='text-3xl lg:text-6xl text-white '>سرسبزی اکباتان دلیل حس خوب شماست</h1>
            <div >
              <button className=' bg-emerald-700 text-white mt-10 hover:bg-emerald-900 px-7 py-3 rounded-lg max-w-[200px] transition'>سفارش انلاین غذا</button>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full flex flex-col items-center'>
          <img className="w-full bg-fixed h-[700px] object-cover" src={image3}  alt=''/>
          <div className=' absolute top-[46%] text-center   md:right-1/3 font-semibold'>
            <h1 className='text-3xl lg:text-6xl text-white '>روز جدید , غذای جدید </h1>
            <div >
              <button className=' bg-emerald-700 text-white mt-10 hover:bg-emerald-900 px-7 py-3 rounded-lg max-w-[200px] transition'>سفارش انلاین غذا</button>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full flex flex-col items-center'>
          <img className="w-full bg-fixed h-[700px] object-cover" src={image4}  alt=''/>
          <div className=' absolute top-[46%] text-center   md:right-1/4 font-semibold'>
            <h1 className='text-3xl lg:text-6xl text-white '>حس تنوع غذا را در اکباتان احساس کنید</h1>
            <div >
              <button className=' bg-emerald-700 text-white mt-10 hover:bg-emerald-900 px-7 py-3 rounded-lg max-w-[200px] transition'>سفارش انلاین غذا</button>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperCaresoul;