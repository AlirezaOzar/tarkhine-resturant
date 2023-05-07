import {Bank,EmptyWallet,Chart,Book1} from "iconsax-react";

const Advantages = () => {
    return ( 
        <div className="w-full mt-10 flex flex-col md:flex-row justify-center items-center gap-10  pb-4 mb-5">
          <div className="max-w-[184px] flex flex-col items-center gap-3">
            <span className="w-[140px] h-[140px] border-2 border-emerald-800 rounded-full relative flex justify-center items-center">
                <Bank className="text-emerald-700" size={50}/>
            </span>
            <p className="text-lg text-neutral-700">بیش از 20 شعبه فعال در سراسر کشور</p>
          </div>
          <div className="max-w-[184px] flex flex-col items-center gap-3">
            <span className="w-[140px] h-[140px] border-2 border-emerald-800 rounded-full relative flex justify-center items-center">
                <EmptyWallet className="text-emerald-700" size={50}/>
            </span>
            <p className="text-lg text-neutral-700">تسهیلات راه اندازی رستوران و تجهیزات ان</p>
          </div>
          <div className="max-w-[184px] flex flex-col items-center gap-3">
            <span className="w-[140px] h-[140px] border-2 border-emerald-800 rounded-full relative flex justify-center items-center">
                <Chart className="text-emerald-700" size={50}/>
            </span>
            <p className="text-lg text-neutral-700">طرح های تشویقی ارتقای فروش</p>
          </div>
          <div className="max-w-[184px] flex flex-col items-center gap-3">
            <span className="w-[140px] h-[140px] border-2 border-emerald-800 rounded-full relative flex justify-center items-center">
                <Book1 className="text-emerald-700" size={50}/>
            </span>
            <p className="text-lg text-neutral-700">اعطای دستور العمل پخت غذا ها</p>
          </div>
        </div>
     );
}
 
export default Advantages;