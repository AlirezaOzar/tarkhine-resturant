import { useState } from "react";
import {TiTick} from "react-icons/ti";
import {ShoppingCart} from "iconsax-react";

const Stepper = () => {
    const steps = ["سبد خرید", "تکمیل اطلاعات", "پرداخت"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete , setComplete] = useState(false);
    return ( 
       <div className="flex-col hidden md:flex">
        <div className="flex justify-between">
          {steps?.map((step,i) => (
            <div key={i} className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"}`}>
              <div className="step">
                {(i + 1 < currentStep || complete) ? <TiTick size={24}/> : i + 1 }
              </div>
              <p className="text-gray-500 mt-2">{step}</p>
            </div>
          ))}
        </div>
        <button className="btn" onClick={() => setCurrentStep((prev) => prev + 1)}>Next</button>
       </div>
     );
}
 
export default Stepper;