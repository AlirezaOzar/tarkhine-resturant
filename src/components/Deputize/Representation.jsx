const Representation = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col gap-8 mt-10 border-t mx-auto py-10">
                <h2 className="text-2xl font-semibold">مزیت دریافت نمایندگی</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-3 text-sm ">
                    <li className="flex items-center gap-2">
                        <div className="w-[16px] h-[16px] border-2 border-emerald-800 rotate-45 rounded"></div>
                        <p>استفاده از برند شناخته شده ترخینه</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-[16px] h-[16px] border-2 border-emerald-800 rotate-45 rounded"></div>
                        <p>به حداقل رساندن ریسک سرمایه گذاری</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-[16px] h-[16px] border-2 border-emerald-800 rotate-45 rounded"></div>
                        <p>تسریع روند بازگشت سرمایه</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-[16px] h-[16px] border-2 border-emerald-800 rotate-45 rounded"></div>
                        <p>مشاوره های تخصصی جهت مدیریت رستوران</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-[16px] h-[16px] border-2 border-emerald-800 rotate-45 rounded"></div>
                        <p>طرح های تشویقی برای ارتقا فروش</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-[16px] h-[16px] border-2 border-emerald-800 rotate-45 rounded"></div>
                        <p>دریافت مشاوره جهت تامین مواد اولیه و تجهیزات</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-[16px] h-[16px] border-2 border-emerald-800 rotate-45 rounded"></div>
                        <p>پشتیبانی بازاریابی و منابع انسانی</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-[16px] h-[16px] border-2 border-emerald-800 rotate-45 rounded"></div>
                        <p>مشاوره در امور حقوقی، مالی و مالیاتی</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Representation;