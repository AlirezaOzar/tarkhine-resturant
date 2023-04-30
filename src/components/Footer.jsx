import {Instagram, Whatsapp, Facebook} from "iconsax-react";

const Footer = () => {
    return ( 
        <div className="footer w-full flex justify-around items-center text-white py-5">
         <div className="flex flex-col gap-3">
            <h2 className="text-xl">دسترسی اسان</h2>
            <div className="text-sm flex flex-col items-start gap-3">
                <p>پرسش های متدول</p>
                <p>قوانین ترخینه</p>
                <p>حریم خصوصی</p>
                 <div className="flex gap-3">
                    <Instagram/>
                    <Whatsapp/>
                    <Facebook/>
                 </div>
            </div>
         </div>
         <div className="flex flex-col gap-3">
         <div className="flex flex-col gap-3">
            <h2 className="text-xl">شعبه های ترخینه</h2>
            <div className="text-sm flex flex-col items-start gap-3">
                <p>شعبه ونک</p>
                <p>شعبه اقدسیه</p>
                <p>شعبه چالوس</p>
                <p>شعبه اکباتان</p>
            </div>
         </div>
         </div>
         <div className="flex-col hidden xl:flex">
            <h2 className="text-xl pb-3">شعبه های ترخینه</h2>
            <div className="flex gap-2">
              <div className="flex flex-col gap-3">
                <input type="name"   className="max-w-[276px] border-2 border-neutral-700 text-white placeholder:text-white h-[40px] rounded-md bg-transparent py-5 px-3" placeholder="نام و نام خانوادگی "/>
                <input type="number" className="max-w-[276px] border-2 border-neutral-700 text-white placeholder:text-white h-[40px] rounded-md bg-transparent py-5 px-3" placeholder="شماره تماس"/>
                <input type="email"  className="max-w-[276px] border-2 border-neutral-700 text-white placeholder:text-white h-[40px] rounded-md bg-transparent py-5 px-3"placeholder="ادرس ایمیل (اختیاری)"/>
              </div>
              <div>
                <textarea className="w-[286px] h-[155px] placeholder:text-white bg-transparent border-2 border-neutral-700 rounded-md py-5 px-3" placeholder="پیام شما"></textarea>
              </div>
            </div>
            <div className="flex w-full justify-end">
                <button className="border-2 border-neutral-700 text-white hover:bg-neutral-600 transition-all rounded-md bg-transparent py-2 px-7">ارسال پیام</button>
            </div>
            <div></div>
         </div>
        </div>
     );
}
 
export default Footer;