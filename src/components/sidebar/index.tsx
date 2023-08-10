/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

// import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import studentRoutes from "AllRoutes/studentRoutes";
import routes from "AllRoutes/routes"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/img/exam_prep_hub_logo.png"

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  const [currentRoutes, setCurrentRoutes] = useState<any>()



  const { pathname } = useLocation()
  // console.log(pathname.split("/"))
  const route = pathname.split("/")

  console.log(currentRoutes, 'route')

  useEffect(() => {
    if (route[1] === 'admin') setCurrentRoutes(routes)
    if (route[1] === 'student') setCurrentRoutes(studentRoutes)

  }, [])

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${open ? "translate-x-0" : "-translate-x-96"
        }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[50px] mt-[30px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[23px] font-bold uppercase text-navy-700 dark:text-white">
          {/* EXAM <span className="font-medium text-[#f6b024]">PREUPHUB</span> */}
          <img src={logo} alt="" className="w-48"/>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={currentRoutes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
