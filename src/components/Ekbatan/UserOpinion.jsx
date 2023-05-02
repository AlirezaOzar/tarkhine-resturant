import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../../assets/49e93a33a95adeec5fb423e4debd5312.jpg";
import img2 from "../../assets/f6d1f753b286332b007b2076174bf01a.png";
import img3 from "../../assets/55c2a114ed0abdf7bb056fdc35fae59d.png";
const UserOpinion = () => {
  return (
    <div className='my-10'>
      <div className='w-full flex justify-center items-center p-10'>
        <h2 className='text-xl font-semibold'>نظرات کاربران</h2>
      </div>
      <Swiper
        centeredSlides={true}
        className="mySwiper"
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          786: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}

      >
       <SwiperSlide className='md:min-w-[600px] w-[252px] h-[142px] md:h-[202px] border rounded-md flex items-center'>
          <div className=' flex flex-col items-center'>
            <div className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] mb-3'>
              <img src={img1} alt="" className='w-full h-full rounded-full' />
            </div>
            <p className='max-w-[95px] text-sm text-neutral-600'>ارزو محمدی , 23 اسفند 1401</p>
          </div>
          <div className='max-w-[227px] md:max-w-[427px] text-sm md:text-base'>
            از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم.
            بهترین غذاهای گیاهی عمرمو اینجا خوردم.
            از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.
          </div>
        </SwiperSlide>
        <SwiperSlide className='md:min-w-[600px] md:h-[202px] w-[252px] h-[142px] border rounded-md flex items-center'>
          <div className=' flex flex-col'>
            <div className=' w-[60px] h-[60px] md:w-[100px] md:h-[100px] mb-3'>
              <img src={img2} alt="" className='w-full h-full rounded-full' />
            </div>
            <p className='max-w-[95px] text-sm text-neutral-600'>سردار وظیفه , 23 اسفند 1401</p>
          </div>
          <div className='max-w-[227px] md:max-w-[427px] text-sm md:text-base'>
            از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم
            بهترین غذاهای گیاهی عمرمو اینجا خوردم.
            از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.
          </div>
        </SwiperSlide>
        <SwiperSlide className='md:min-w-[600px] md:h-[202px] w-[252px] h-[142px] border rounded-md flex items-center'>
          <div className=' flex flex-col'>
            <div className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] mb-3'>
              <img src={img3} alt="" className='w-full h-full rounded-full' />
            </div>
            <p className='max-w-[95px] text-sm text-neutral-600'>سردار وظیفه , 23 اسفند 1401</p>
          </div>
          <div className='max-w-[227px] md:max-w-[427px] text-sm md:text-base'>
            از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم
            بهترین غذاهای گیاهی عمرمو اینجا خوردم.
            از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default UserOpinion;