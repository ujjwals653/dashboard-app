'use client';
import React from 'react';
import Link from 'next/link';
import { SiDash } from "react-icons/si";
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '@/data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenWidth, currentColor } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-100 m-2';

  const handleSidebarClose = () => {
    if (activeMenu && screenWidth <= 900) {
      setActiveMenu(false);
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center sticky top-0 bg-white dark:bg-secondary-dark-bg'>
          <Link href='/'
          className='items-center gap-3 ml-3 my-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 dark:bg-secondary-dark-bg'
          onClick={handleSidebarClose}>
            <SiDash /> <span>Dashy</span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button
              className='text-xl rounded-full p-3 hover:bg-light-gray my-4 block md:hidden'
              onClick={() => setActiveMenu(false)}
              style={{ color: currentColor }}>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-8'>
          {links.map((item) =>
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
              {item.title}
              </p>
              {item.links.map((link) => (
                  <ActiveLink
                  href={`${link.name === 'ecommerce' ? '/' : '/'+link.name}`}
                  key={link.name}
                  onClick={handleSidebarClose}
                  activeClassName={activeLink} // same as activeLink
                  className={normalLink}      // same as normalLink
                  currentColor={currentColor}
                >
                  <>
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </>
                </ActiveLink>
                ))}
            </div>
          )}
        </div>
      </>)}
    </div>
  )
}


type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
  currentColor?: string;
};

const ActiveLink = ({
  href,
  children,
  onClick,
  className,
  activeClassName,
  currentColor,
}: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ backgroundColor: isActive && currentColor ? currentColor : '' }}
      className={clsx(isActive ? activeClassName : className)}
    >
      {children}
    </Link>
  );
};

export default Sidebar;
