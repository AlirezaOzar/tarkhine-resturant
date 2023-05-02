import img from "../../assets/EkbatanBranchI.jpg";
import {Call,Location,Clock} from "iconsax-react";


const EkbatanBranch = () => {
    return ( 
        <div className="w-full relative my-16 h-[336px]">
           <div className="w-full h-[336px]">
             <img src={img} alt=""  className="w-full object-cover h-full"/>
           </div>
           <div className="absolute w-[320px] sm:w-[509px] lg:w-[809px] bg-white border-2 right-10   xl:right-1/3 lg:right-28 sm:right-16 md:right-1/4 lg:left-6 -bottom-14 border-emerald-700 rounded mb-10">
            <div className="grid text-xs  md:text-base grid-cols-2 md:grid-cols-3 items-center py-3 px-4 gap-3">
               <div className="flex items-center flex-col gap-3">
                <Call/>
                <p>021-33533534</p>
                <p>021-33533536</p>
               </div>
               <div className="flex items-center flex-col gap-3">
                  <Location/>
                  <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
               </div>
               <div className="flex items-center flex-col gap-3 max-w-[200px]">
                  <Clock/>
                  <p>همه‌روزه از ساعت ۱۲  الی ۲۳ , 
                    در خدمت شما هستیم
                  </p>
               </div>
            </div>
           </div>
        </div>
     );
}
 
export default EkbatanBranch;