import { React, useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { TbSquareLetterR } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { SlLogout } from "react-icons/sl";
import { FiSettings } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard" },
      { title: "People", icon: <IoIosPeople /> },
      { title: "Settings", icon: <FiSettings />},
      { title: "Logout", icon: <SlLogout /> },
    ];

  return (
    <div className={`bg-inevitable-blue h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort 
            className = {
            `bg-white text-inevitable-blue text-3xl rounded-full absolute -right-3 top-9 border border-inevitable-blue cursor-pointer ${!open && "rotate-180"}`} 
            onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
              <TbSquareLetterR className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
              <h1 className={`uppercase text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
                Inevitable
              </h1>
        </div>
        <div className={`flex items-center rounded-md bg-gray-100 mt-6 ${!open ? "px-2.5": "px-4"}  py-2`}>
              <BsSearch className= {`text-black text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
              <input type = {"search"} placeholder="Search"
                  className={`text-base bg-transparent w-full text-black focus:outline-none ${!open && "hidden"}`}/>
        </div>
        <ul className="pt-2">
            { Menus.map((menu, index) => (
              <>
                <li key={index} className="uppercase text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md">
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RxDashboard />} 
                  </span>
                  <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                </li>
              </>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar