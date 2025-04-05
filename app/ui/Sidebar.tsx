import React from 'react';
import Link from 'next/link';
import { SiDash } from "react-icons/si";
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '@/app/data/dummy.js';

const Sidebar = () => {
  const activeMenu = true;
  const isActive = false;

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center sticky top-0 bg-white'>
          <Link href='/'
          className='items-center gap-3 ml-3 my-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 '>
            <SiDash /> <span>Dashy</span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button 
            className='text-xl rounded-full p-3 hover:bg-light-gray my-4 block md:hidden'>
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
                  <Link
                    href={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={isActive ? activeLink : normalLink}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar;