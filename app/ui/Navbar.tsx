'use client';
import React, { useContext, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '@/public/avatars/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

const Navbar = () => {
  const { activeMenu, setActiveMenu, screenWidth, handleClick, isClicked } = useStateContext();

  useEffect(() => {
    if (screenWidth <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenWidth, setActiveMenu]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu(!activeMenu)}
        color='blue'
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title='Cart'
          customFunc={() => handleClick('cart')}
          color='blue'
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          customFunc={() => handleClick('chat')}
          color='blue'
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notification'
          customFunc={() => handleClick('notification')}
          color='blue'
          icon={<RiNotification3Line />}
        />
        <TooltipComponent
          content='Profile'

        >
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg text-gray-400 text-14'
            onClick={() => handleClick('userProfile')}
          >
            <img
              src={avatar.src}
              alt="User"
              className='rounded-full w-8 h-8'
            />
            <p>
              <span>Hi, </span>
              <span className='font-bold ml-1'>Dasher</span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>
      </div>
    </div>
  )
}

interface NavButtonProps {
  title: string;
  customFunc: () => void;
  icon: React.ReactNode;
  color: string;
  dotColor?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent
      content={title}
    >
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray cursor-pointer"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
          {icon}
      </button>
    </TooltipComponent>
  );
};

export default Navbar
