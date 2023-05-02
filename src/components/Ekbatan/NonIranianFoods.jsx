import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as data from "../../data";
import {ArrowLeft2,ArrowRight2} from "iconsax-react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Item from '../Item';
import {NoteText} from "iconsax-react";
import { NavLink } from 'react-router-dom';

const NonIranianFoods = () => {

    return ( 
        <div className='my-10'>
      <div className='w-full justify-start p-10'>
        <h2 className='text-xl font-semibold'>غذا های غیر ایرانی</h2>
      </div>
      <Swiper
        centeredSlides={true}
        className="mySwiper"
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView:1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView:2,
            spaceBetween: 10,
          },
          786: {
            slidesPerView:3,
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
        
           {data.productsData.map((item) => (
            <SwiperSlide className='flex flex-col'>
            <Item
            name={item.name}
            price={item.price}
            score={item.score}
            scoreText={item.scoreText}
            key={item.id}
            image={item.image}
            discount={item.discount}
            discountPercent={item.discountPercent}
            />
             </SwiperSlide>
           )).slice(10,15)}
     
      </Swiper>

      <NavLink to="/menu" className='w-full flex justify-center items-center mt-4'>
        <button className='flex gap-3 items-center border border-emerald-700 text-emerald-700 bg-white py-1 px-3 rounded-md hover:bg-emerald-700 hover:text-white transition-all'>
         <p>مشاهده منوی کامل</p>
         <NoteText/>
        </button>
      </NavLink>
    </div>
     );
}
 
export default NonIranianFoods;