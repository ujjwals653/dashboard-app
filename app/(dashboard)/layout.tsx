'use client';
import './layout.css';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import React from 'react';
import { Sidebar, Navbar } from '../ui';
import { useStateContext } from '../context/ContextProvider';

const layout = ({ children }: { children: React.ReactNode }) => {
  const { activeMenu } = useStateContext();
	
	return (
    <>
			{/* Setting button at bottom right */}
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4 z-1000'>
          <TooltipComponent 
            content='settings'
            position='TopCenter'
          >
            <button
              className={`text-xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray bg-blue-600 rounded-full`}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
				
				{/* Positioning the Sidebar Component */}
				{activeMenu ? (
					<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
						<Sidebar />
					</div>
				) : (
					<div className="w-0 dark:bg-secondary-dark-bg">
						<Sidebar />
					</div>
				)}

				{/* Positioning the Navbar Component */}
				<div
					className={
						`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
						${activeMenu
							? 'md:ml-72'
							: 'flex-2 '}`
					}
				>
					<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
						<Navbar />
					</div>
					{children}
      	</div>
    	</div>
		</>
  )
}

export default layout;