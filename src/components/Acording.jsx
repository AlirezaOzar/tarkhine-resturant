import {  ArrowDown2, ArrowUp2 } from "iconsax-react";
import {Collapse} from "react-collapse";

const Acording = ({open,toggle,title, desc,name}) => {
    return ( 
        <div className="pt-[10px] mt-6">
          <div className="bg-white  px-5 flex justify-between items-center gap-6 cursor-pointer" onClick={toggle}>
            <p>{title}</p>
            <div>
              {open ? <ArrowUp2/> : <ArrowDown2/>}
            </div>
          </div>
          <Collapse isOpened={open}>
            <div className="mt-2 py-2 bg-emerald-800 rounded-lg text-white flex flex-col items-center ">
                <p>{desc}</p>
            </div>
          </Collapse>
        </div>
     );
}
 
export default Acording;