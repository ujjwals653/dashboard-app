'use client';
import './layout.css';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import React, { useEffect } from 'react';
import { Sidebar, Navbar } from '../ui';
import { useStateContext } from '../context/ContextProvider';
import ThemeSettings from '../ui/ThemeSettings';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { activeMenu, themeSettings, currentMode, setCurrentMode, setCurrentColor, setThemeSettings, currentColor } = useStateContext();

  useEffect(() => {
    const bodyDivs = document.querySelectorAll('body > div');
    if (bodyDivs.length > 1) {
      bodyDivs[1].remove();
      if (!bodyDivs[bodyDivs.length - 1].classList.contains('flex')) {
        bodyDivs[bodyDivs.length - 1].remove();
      }
    }
  });

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor) {
      setCurrentColor(currentThemeColor);
    }
    if (currentThemeMode === 'Light' || currentThemeMode === 'Dark') {
      setCurrentMode(currentThemeMode as 'Light' | 'Dark');
    }
  }, []);

	return (
    <>
			{/* Setting button at bottom right */}
      <div className='flex relative dark:bg-main-dark-bg' data-theme={currentMode === 'Dark' ? 'dark' : 'light'}>
        <div className='fixed right-4 bottom-4 z-1000'>
          <TooltipComponent
            content='settings'
            position='TopCenter'
          >
            <button
              type='button'
              style={{backgroundColor: currentColor}}
              className={`text-xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full`}
              onClick={() => setThemeSettings(true)}
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
					<div>
					  {themeSettings && (<ThemeSettings />)}
						{children}
					</div>
      	</div>
    	</div>
		</>
  )
}

export default Layout;
