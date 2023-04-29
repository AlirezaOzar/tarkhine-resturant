import {ArrowLeft2,NoteText,HomeWifi,User,Chart2} from "iconsax-react";

const AboutPage = () => {
    return ( 
        <div className="about w-full p-3 min-h-[400px] bg-cover mb-4 flex gap-3 flex-col md:flex-row justify-around items-center ">
            <div>
                <h2 className="text-white text-2xl">رستوران‌های زنجیره‌ای ترخینه</h2>
                <p className="max-w-[300px] lg:max-w-[600px] text-sm md:text-xl text-white pt-7 text-start leading-loose">
                 مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های 
                  ایرانیان است و باعث افتخار ماست که بیش از 20
                  سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن
                  در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                </p>
                <div className="w-full flex justify-end mt-5">
                    <button className="border-white border text-white px-2 md:px-4 py-1 flex items-center rounded-sm hover:bg-emerald-800 transition-all hover:border-emerald-800">
                        <p>اطلاعات بیشتر</p>
                        <ArrowLeft2/>
                    </button>
                </div>
            </div>
            <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-10 text-lg">
                <div className="flex flex-col items-center gap-4">
                    <NoteText className=""/>
                    <p className="text-">منوی متنوع</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <HomeWifi/>
                    <p>محیطی دل نشین و ارام</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <User/>
                    <p>پرسنل مجرب و حرفه ای</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Chart2/>
                    <p>کیفیت بالای غذاها</p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutPage;