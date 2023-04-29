import React from 'react';
import image2 from "../assets/tarkhine.png";
import image3 from "../assets/tarkhine2.jpg";
import image4 from "../assets/tarkhine3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

const MainCaresoul = () => {

  return (
     <div>  
      <div className='w-full flex flex-col items-center'>
          <img className="w-full bg-fixed h-[700px] object-cover" src={image2}  alt=''/>
          <div className=' absolute top-[46%] text-center   md:right-1/4 font-semibold'>
            <h1 className='text-3xl lg:text-6xl text-white '>تجربه غذای سالم و گیاهی به  سبک ترخینه</h1>
            <div >
              <button className=' bg-emerald-700 text-white mt-10 hover:bg-emerald-900 px-7 py-3 rounded-lg max-w-[200px] transition'>سفارش انلاین غذا</button>
            </div>
          </div>
        </div>
     </div>
  );
}

export default MainCaresoul;