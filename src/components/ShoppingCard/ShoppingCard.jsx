import Layout from "../../pages/Layout";
import {useDispatch, useSelector} from "react-redux";
import vector from "../../assets/Vector@2x.png"
import vectorMobile from "../../assets/Vector.png";
import Stepper from "../Stepper";
import { NavLink } from "react-router-dom";


const ShoppingCard = () => {
    const cart = useSelector((state) => state.cart.cart)

    if(cart.length === 0) 
    return (
    <Layout>
          <div className="w-full flex-col flex justify-center items-center px-4">
            <div>
                <Stepper/>
            </div>
            <div className="lg:min-w-[1004px] sm:min-w-[300px] max-w-[300px] lg:min-h-[422px] border border-neutral-400 rounded-lg relative mb-[235px] md:mb-52">
              <div className="absolute top-2 md:right-1/3 w-[200px] lg:w-[500px] -z-10">
                <img src={vector} alt=""  className="hidden md:flex"/>
                <img src={vectorMobile} alt="" className="md:hidden"/>
              </div>
              <div className="flex justify-center mt-44 flex-col items-center gap-10 px-4">
                <h1 className="text-base md:text-xl lg:text-2xl text-neutral-600 ">شما در حال حاظر هیچ سفارشی ثبت نکرده اید</h1>
                <button className='border border-emerald-700 text-emerald-700 bg-white py-1 px-3 rounded-md hover:bg-emerald-700 hover:text-white transition-all md:w-[200px] mb-4'>
                  <NavLink to="/menu">منوی رستوران</NavLink> 
                </button>
              </div>
            </div>
        </div>
    </Layout>
    )

    
    return ( 
        <Layout>
            4
        </Layout>
     );
}
 
export default ShoppingCard;