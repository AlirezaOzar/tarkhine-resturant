import {Heart,Star1} from "iconsax-react";
import Star from "../assets/Star.png";
const Item = ({name,score,scoreText,image,price,discountPercent,discount,item}) => {
    return ( 
     <div >
         <div className=" border flex flex-col md:w-[288px] m-5 rounded bg-white">
          <div className="max-w-[388px] h-[256px] mb-4">
              <img src={image} alt=""  className="w-full h-full rounded-t"/>
          </div>
          <p className="text-xl font-semibold px-3">{name}</p>
          <div className="text-sm flex justify-between items-center px-2 py-2">
            <div className="flex gap-1 items-center text-xs text-neutral-500">
                <Heart/>
                <p>افزودن به علاقه مندی ها</p>
            </div>
            <div className="flex gap-1 items-center">
                <p className="line-through text-xs text-neutral-500">{discount}</p>
                <p className="text-xs w-[32px] h-[17px] flex justify-center items-center rounded-lg text-red-700 bg-red-200 text-center">{discountPercent}</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2 py-3">
            <div className="flex gap-1 items-center">
              <div className="w-[16px]">
                <img src={Star} className="w-full"/>
              </div>
             <div className="text-base font-semibold">{score}</div>
             <div className="text-xs text-neutral-400">{scoreText}</div>
            </div>
            <div className="text-base font-semibold">{price}</div>
          </div>
          <div className="flex justify-center">
            <button className='text-base bg-emerald-700 text-white my-2 hover:bg-emerald-900 px-6 py-1 rounded max-w-[200px] transition'>افزودن به سبد خرید</button>
          </div>
        </div>
     </div>
     );
}
 
export default Item;