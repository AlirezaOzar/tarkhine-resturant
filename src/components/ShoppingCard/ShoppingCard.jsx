import Layout from "../../pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import vector from "../../assets/Vector@2x.png"
import vectorMobile from "../../assets/Vector.png";
import Stepper from "../Stepper";
import { NavLink } from "react-router-dom";
import { Truck, TickCircle, ShoppingBag, AddCircle, Location, MenuBoard, Trash, Add } from "iconsax-react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {removeFromCart,increaseCount,decreaseCount} from "../../state/index";


const ShoppingCard = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0)
  const renderProduct = () => {
    return (
      <div className="w-full flex-col flex justify-center items-center px-4">
        <div className="lg:min-w-[1004px] sm:min-w-[300px] max-w-[300px] lg:min-h-[422px] border border-neutral-400 rounded-lg relative mb-[235px] md:mb-52">
          <div className="absolute top-2 md:right-1/3 w-[200px] lg:w-[500px] -z-10">
            <img src={vector} alt="" className="hidden md:flex" />
            <img src={vectorMobile} alt="" className="md:hidden" />
          </div>
          <div className="flex justify-center mt-44 flex-col items-center gap-10 px-4">
            <h1 className="text-base md:text-xl lg:text-2xl text-neutral-600 ">شما در حال حاظر هیچ سفارشی ثبت نکرده اید</h1>
            <button className='border border-emerald-700 text-emerald-700 bg-white py-1 px-3 rounded-md hover:bg-emerald-700 hover:text-white transition-all md:w-[200px] mb-4'>
              <NavLink to="/menu">منوی رستوران</NavLink>
            </button>
          </div>
        </div>
      </div>
    )
  }
  const cartProduct = () => {
    return (
      <div className="w-full flex-col lg:flex-row flex justify-center lg:items-start items-center gap-5 mb-5 px-2">
        <div className="max-w-[320px] sm:min-w-[320px] md:max-w-[704px] flex flex-col gap-5">
          <div className="max-w-[320px] md:max-w-[704px] border border-neutral-400 rounded-lg flex flex-col md:flex-row  md:justify-between gap-2 py-2 md:px-10 md:py-5">
            <div className="flex items-center mx-3 gap-2">
              <Truck className="text-base text-neutral-700" />
              <h2 className="text-base text-neutral-700">روش تحویل سفارش</h2>
            </div>
            <div className="flex items-center gap-2  mx-4 text-neutral-500">
              <input type="radio" className="accent-emerald-700 w-4 h-4" />
              <div className="flex flex-col">
                <h2 className="text-sm">ارسال توسط پیک</h2>
                <p className="text-[10px]">توسط پیک رستوران ارسال شود</p>
              </div>
              <Truck size={20}/>
            </div>
            <div className="flex items-center gap-2 mx-4 text-neutral-500">
              <input type="radio" className="accent-emerald-700 w-4 h-4" />
              <div>
                <h2 className="text-sm">تحویل حضوری</h2>
                <p className="text-[10px]">توسط پیک رستوران ارسال شود</p>
              </div>
              <ShoppingBag size={20} />
            </div>
          </div>
          <div className="max-w-[320px] md:max-w-[704px]">
            <div className="max-w-[320px] md:max-w-[704px] rounded-lg border-neutral-400 border px-5 py-5 h-[210px]">
              <div className="flex justify-between items-center border-neutral-400 border-b pb-2 ">
                <div className="flex items-center gap-2">
                  <Location />
                  <h2 className="text-sm md:text-base">ادرس ها</h2>
                </div>
                <div className="flex items-center text-emerald-700 gap-2">
                  <AddCircle size={20} />
                  <h2 className="text-sm">افزودن ادرس</h2>
                </div>
              </div>
              <div className="w-full relative flex justify-center h-full text-neutral-500 pt-20">
                <h2 className="md:text-base text-sm">شما در حال حاظر هیچ ادرس ثبت نکرده اید!</h2>
              </div>
            </div>
          </div>
          <div className="max-w-[320px] md:max-w-[704px]">
            <div className="max-w-[704px] h-[210px] flex justify-start px-10 border rounded-lg border-neutral-400">
              <div className="flex py-5 gap-3">
                <MenuBoard />
                <h2>توضیحات سفارش (اختیاری)</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[320px] md:max-w-[496px]">
          <div className="md:w-[496px] rounded-lg border border-neutral-400 px-5 py-2">
            <div className="flex justify-between items-center border-neutral-400 border-b pb-2 ">
              <div className="flex items-center gap-2">
                <h2 className="text-base">سبد خرید ({cart.length})</h2>
              </div>
            </div>
            <div className="overflow-y-auto h-[186px]">
              {cart.length && cart.map((item) => (
                <div className="w-full flex justify-between items-center bg-neutral-100 py-2 px-2 mt-3">
                  <Trash size={25} onClick={() => dispatch(removeFromCart(item))} className="text-emerald-700 cursor-pointer"/>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-neutral-500">{item.price} تومان</p>
                    <p></p>
                  </div>
                  <div className="flex bg-[#E5F2E9] text-emerald-800 py-1 px-2 gap-1 items-center cursor-pointer">
                    <Add size={17} onClick={() => dispatch(increaseCount(item))}/>
                    <p className="text-base">{item.count}</p>
                    <Trash size={17} onClick={() => dispatch(decreaseCount(item))}/>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex border-t border-b text-neutral-600 border-neutral-300 justify-between py-3 mt-2">
              <p className="text-sm font-normal">تخفیف محصولات</p>
              <p className="text-sm font-normal">تخفیف</p>
            </div>
            <div className="flex border-t border-b text-neutral-600 border-neutral-300 flex-col  py-3">
              <div className="flex justify-between">
                <p className="text-sm font-normal">هزینه ارسال</p>
                <p className="text-sm font-normal">0 تومان</p>
              </div>
              <div className="text-[#A9791C] flex justify-between mt-3">
                <AiOutlineExclamationCircle className="text-xl" />
                <p className="max-w-[416px] text-xs">هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
              </div>
            </div>
            <div className="flex border-t  text-neutral-600 border-neutral-300 flex-col  py-3">
              <div className="flex justify-between">
                <p className="text-sm font-normal">مبلغ قابل پرداخت</p>
                <p className="text-sm font-normal text-emerald-800"> {totalPrice} تومان</p>
              </div>
              <button className="flex items-center justify-center gap-2 bg-emerald-800 text-white rounded-lg py-2 px-2 mt-3 cursor-pointer hover:bg-emerald-900 transition-all">
                <TickCircle />
                <p>ثبت سفارش</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <Layout>
      <div className="w-full flex-col flex justify-center items-center px-4">
        <Stepper />
      </div>
      {cart.length ? cartProduct() : renderProduct()}
    </Layout>
  );
}

export default ShoppingCard;