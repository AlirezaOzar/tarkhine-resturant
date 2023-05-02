import { User, ShoppingCart, SearchNormal, ArrowDown2, ArrowUp2, HambergerMenu, CloseSquare,CallIncoming,LocationAdd } from "iconsax-react";
import { Menu } from '@headlessui/react'
import { useState } from 'react'
import image1 from "../assets/Logo.png";
import Acording from "./Acording";
import { NavLink } from "react-router-dom";

const AccordingData = [
  { title: "شعبه ها", desc: "اکباتان", to:"/ekbatan" },
  { title: "منو", desc: "پیتزا" },
]


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }
  return (
    <div className="w-full bg-white flex justify-around py-4 items-center cursor-pointer">
      <div className="lg:hidden bg-emerald-50 p-2 rounded-lg text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer">
        <HambergerMenu onClick={() => setMenu(!menu)} />
        {menu ? <div className="relative transition-all ease-out">
          <div className="bg-white fixed h-full top-0 right-0 p-10 z-10">
            <div>
              <div className="flex justify-between gap-10 items-center">
                <div>
                  <img className="w-[80px]" src={image1} alt="" />
                </div>
                <CloseSquare className="cursor-pointer" onClick={() => setMenu(!menu)} />
              </div>
              <div>
                {AccordingData.map((data, index) => {
                  return <Acording toggle={() => toggle(index)} open={index === open} key={index} title={data.title} desc={data.desc} to={data.to}/>
                })}
                <div className="px-5 flex flex-col items-center mt-6 gap-6">
                  <div className="hover:border-b py-2 hover:border-emerald-700 flex items-center gap-10">
                    <p>نمایندگی ما</p>
                    <LocationAdd/>
                  </div>
                  <div className="hover:border-b py-2 hover:border-emerald-700 flex items-center gap-10">
                    <p>درباره ی ما</p>
                    <User/>
                  </div>
                  <div className="hover:border-b py-2 hover:border-emerald-700 flex items-center gap-10">
                    <p>تماس با ما</p>
                   <CallIncoming/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> : null}
      </div>
      <div>
        <div className="w-[100px] md:w-[130px]">
          <img src={image1} alt="" className="w-full" />
        </div>
      </div>
      <div className="text-neutral-500 text-lg hidden lg:flex  items-center space-between gap-6">
        <NavLink to="/" className="font-semibold text-emerald-700 hover:border-b hover:border-emerald-700">صفحه ی اصلی</NavLink>
        <div>
          <Menu className="w-full lg:max-w-[296px] cursor-pointer relative" as="div">
            <Menu.Button className="rounded py-2 flex justify-center items-center gap-2 w-full" onClick={() => setIsOpen(!isOpen)}>
              <div className=" font-medium text-sm">
                <div className="text-lg">شعبه ها</div>
              </div>
              {isOpen ? (
                <ArrowUp2 className=' text-neutral-500' />
              ) : (
                <ArrowDown2 className='text-neutral-500' />
              )}
            </Menu.Button>
            <Menu.Items className="list-none font-normal text-base px-4 py-2 absolute bg-white w-full border rounded border-t-0 text-center z-10">
              <Menu.Item as="li" className="cursor-pointerpy-2 font-medium">
                 <NavLink to="/ekbatan">اکباتان</NavLink>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div>
          <Menu className="w-full lg:max-w-[296px] cursor-pointer relative" as="div">
            <Menu.Button className="rounded py-2 flex justify-center items-center gap-2 w-full" onClick={() => setIsOpened(!isOpened)}>
              <div className=" font-medium text-sm">
                <NavLink to="/menu" className="text-lg">منو</NavLink>
              </div>
              {isOpened ? (
                <ArrowUp2 className=' text-neutral-500' />
              ) : (
                <ArrowDown2 className='text-neutral-500' />
              )}
            </Menu.Button>
            <Menu.Items className="w-[100px] list-none font-normal text-base py-3 px-4 absolute bg-white  border rounded border-t-0 text-center z-10">
              <Menu.Item as="li" className="cursor-pointerpy-2 font-medium">
                اکباتان
              </Menu.Item>
              <Menu.Item as="li" className="cursor-pointerpy-2 font-medium pt-5">
                اکباتان
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="hover:border-b hover:border-emerald-700">اعطای نمایندگی</div>
        <div className="hover:border-b hover:border-emerald-700">درباره ما</div>
        <div className="hover:border-b hover:border-emerald-700">تماس با ما</div>
      </div>
      <div className="flex items-center gap-3">
        <div className=" bg-emerald-50 p-2 rounded-lg text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer">
          <User />
        </div>
        <div className=" bg-emerald-50 p-2 rounded-lg text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer">
          <ShoppingCart />
        </div>
        <div className="hidden md:flex bg-emerald-50 p-2 rounded-lg text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer">
          <SearchNormal />
        </div>
      </div>
    </div>
  );
}

export default Navbar;