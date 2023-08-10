import { Link, useNavigate } from "react-router-dom";
import { useAuthHook } from "hooks/useAuthHook";
import { AiFillThunderbolt, AiOutlineUser } from 'react-icons/ai'
import { TbHelpHexagon } from 'react-icons/tb'
import { IoIosLogOut } from 'react-icons/io'
import { PiUserCircleGearLight } from 'react-icons/pi'
import { useState } from "react";
import { useAuth } from "utils/AuthContext";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
}) => {
  const { onOpenSidenav, brandText } = props;
  const handleLogout = useAuthHook()

  const { logoutUser } = useAuth();

  const userName = JSON.parse(localStorage.getItem('currentUser'))
  const [show, setShow] = useState(false);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>
      <div className=''>
        <div className='ml-60 flex justify-end items-center h-full relative'>
          <div className='flex items-center gap-4'>
            <div onClick={() => setShow(!show)} className='rounded-full cursor-pointer'>
              <div className='bg-orange-300 w-14 h-14 rounded-full text-xl font-bold text-white flex items-center justify-center uppercase'>{userName.userName.charAt(0)}</div>
            </div>
          </div>
          <div className={`h-auto shadow-lg bg-white rounded-xl absolute top-16 ease-in ${show ? 'visible' : 'invisible'}`}>
            <div className='flex p-4 gap-2'>
              <div className='bg-orange-300 w-14 h-14 rounded-full text-xl font-bold text-white flex items-center justify-center uppercase'>{userName.userName.charAt(0)}</div>
              <div className='text-sm flex flex-col justify-center'>
                <p>{userName.userName}</p>
                <p className='text-gray-500'>{userName.email}</p>
              </div>
            </div>
            <ul className='flex flex-col gap-1 flex-1 overscroll-contain p-3 border-t'>
              <li className='flex items-center gap-2 hover:bg-gray-100 py-2 px-3 rounded-lg cursor-pointer'>
                <PiUserCircleGearLight size={25}/>
                <p className='text-sm'>Account Settings</p>
              </li>
              <li className='flex items-center gap-2 hover:bg-gray-100 py-2 px-3 rounded-lg cursor-pointer' onClick={logoutUser}>
                <IoIosLogOut size={25}/>
                <p className='text-sm'>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
