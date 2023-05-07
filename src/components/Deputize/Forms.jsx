const Forms = () => {
    return ( 
        <div className="flex justify-center items-center flex-col border-y py-10">
           <h2 className="text-2xl font-semibold">دریافت مشاوره</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
             <input type="text" className="max-w-[392px] lg:min-w-[392px] lg:h-[40px] border border-neutral-400 rounded px-4 py-1" placeholder="نام و نام خانوادگی"/>
             <input type="text" className="max-w-[392px] lg:min-w-[392px] lg:h-[40px] border border-neutral-400 rounded px-4 py-1" placeholder="کد ملی"/>
             <input type="date" className="max-w-[392px] lg:min-w-[392px] lg:h-[40px] border border-neutral-400 rounded px-4 py-1" placeholder="زمان  ایده آل"/>
           </div>
           <button className='text-base bg-emerald-700 text-white my-2 hover:bg-emerald-900 px-6 py-1 rounded max-w-[200px] transition mt-10'>درخواست مشاوره</button>
        </div>
     );
}
 
export default Forms;