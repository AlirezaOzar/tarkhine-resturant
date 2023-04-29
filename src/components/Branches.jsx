import branch1 from "../assets/4e04e13a12171d7b7ef85748639524b8.png";
import vanak from "../assets/vanak.png";
import chalos from "../assets/chalos.png";
import aghdasie from "../assets/aghdasie.png";


const Branches = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h2 className="font-bold text-2xl">ترخینه گردی</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:flex-row items-center my-10 gap-8">
                <div className="flex flex-row md:flex-col max-w-[388px] md:max-w-[288px] max-h-[200px] md:max-h-[444px] rounded-lg border border-t-0">
                    <div className="w-1/2 md:w-full h-[150px] md:h-[288px] ">
                        <img src={branch1} className="w-full  h-full" />
                    </div>
                    <div className="w-1/2 md:w-full">
                        <div className="w-full flex justify-center items-center flex-col py-3 px-2 gap-4 ">
                            <h2 className="text-xl">شعبه اکباتان</h2>
                            <p className="text-sm">شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col max-w-[388px] md:max-w-[288px] max-h-[200px] md:max-h-[444px] rounded-lg border border-t-0">
                    <div className="w-1/2 md:w-full h-[150px] md:h-[288px] ">
                        <img src={chalos} className="w-full  h-full" />
                    </div>
                    <div className="w-1/2 md:w-full">
                        <div className="w-full flex justify-center items-center flex-col py-3 px-2 gap-4 ">
                            <h2 className="text-xl">شعبه چالوس</h2>
                            <p className="text-sm">چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col max-w-[388px] md:max-w-[288px] max-h-[200px] md:max-h-[444px] rounded-lg border border-t-0">
                    <div className="w-1/2 md:w-full h-[150px] md:h-[288px] ">
                        <img src={aghdasie} className="w-full  h-full" />
                    </div>
                    <div className="w-1/2 md:w-full">
                        <div className="w-full flex justify-center items-center flex-col py-5 px-2 gap-4 ">
                            <h2 className="text-xl">شعبه اقدسیه</h2>
                            <p className="text-sm">خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col max-w-[388px] md:max-w-[288px] max-h-[200px] md:max-h-[444px] rounded-lg border border-t-0">
                    <div className="w-1/2 md:w-full h-[150px] md:h-[288px] ">
                        <img src={vanak} className="w-full  h-full" />
                    </div>
                    <div className="w-1/2 md:w-full">
                        <div className="w-full flex justify-center items-center flex-col py-3 px-2 gap-4 ">
                            <h2 className="text-xl">شعبه ونک</h2>
                            <p className="text-sm">میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Branches;