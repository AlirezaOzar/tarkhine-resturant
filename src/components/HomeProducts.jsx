import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

const HomeProducts = () => {
    return ( 
        <div className="flex justify-center flex-col items-center my-10 pb-10">
            <h2 className=" font-bold text-2xl">منوی رستوران</h2>
            <div className="grid grid-cols-1 md:mx-0 md:grid-cols-2 lg:grid-cols-4  gap-24 md:gap-20 lg:gap-5 mt-40">
                <div className="relative w-[287px] flex justify-center items-center flex-col mt-10">
                    <div className="w-[150px] md:w-[240px] absolute -top-20">
                       <img src={img1} alt="" className="w-full "/>
                    </div>
                    <div className="w-[150px] h-[80px] md:w-[287px] md:h-[180px] -z-10 border rounded-lg border-emerald-700"></div>
                    <button className=" absolute -bottom-5 md:-bottom-6 rounded-lg px-6 py-1 md:px-10 md:py-2 bg-emerald-700 text-white transition-all hover:bg-emerald-900">غذای اصلی</button>
                </div>
                <div className="relative md:max-w-[287px] flex justify-center items-center flex-col mt-10">
                    <div className="w-[150px] md:w-[240px] absolute -top-20">
                      <img src={img2} alt="" className="w-full"/>
                    </div>
                    <div className="w-[150px] h-[80px] md:w-[287px] md:h-[180px] -z-10 border rounded-lg border-emerald-700"></div>
                    <button className="absolute -bottom-5 md:-bottom-6 rounded-lg px-6 py-1 md:px-10 md:py-2 bg-emerald-700 text-white transition-all hover:bg-emerald-900">پیش غذا</button>
                </div>
                <div className="relative md:max-w-[287px] flex justify-center items-center flex-col mt-10">
                    <div className="w-[150px] md:w-[240px] absolute -top-20">
                      <img src={img3} alt="" className="w-full"/>
                    </div>
                    <div className="w-[150px] h-[80px] md:w-[287px] md:h-[180px] -z-10 border rounded-lg border-emerald-700"></div>
                    <button className=" absolute -bottom-5 md:-bottom-6 rounded-lg  px-6 py-1 md:px-10 md:py-2 bg-emerald-700 text-white transition-all hover:bg-emerald-900">دسر</button>
                </div>
                <div className="relative md:max-w-[287px] flex justify-center items-center flex-col mt-10">
                    <div className="w-[150px] md:w-[240px] absolute -top-20">
                        <img src={img4} alt="" className="w-full"/>
                    </div>
                    <div className="w-[150px] h-[80px] md:w-[287px] md:h-[180px] -z-10 border rounded-lg border-emerald-700"></div>
                    <button className=" absolute -bottom-5 md:-bottom-6  px-6 py-1 md:px-10 md:py-2 rounded-lg bg-emerald-700 text-white transition-all hover:bg-emerald-900">نوشیدنی</button>
                </div>
            </div>
        </div>
     );
}
 
export default HomeProducts;