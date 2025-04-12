'use client';
import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

type ContextProps = {
  activeMenu: boolean;
  setActiveMenu: (value: boolean) => void;
  isClicked: {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
  };
  handleClick: (clicked: string) => void;
  screenWidth: number;
  currentColor: string;
  setCurrentColor: (color: string) => void;
  currentMode: 'Light' | 'Dark';
  setCurrentMode: Dispatch<SetStateAction<'Light' | 'Dark'>>;
  themeSettings: boolean;
  setThemeSettings: (value: boolean) => void;
  setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setColor: (color: string) => void;
}

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

const StateContext = createContext<ContextProps>({
  activeMenu: true,
  setActiveMenu: () => {},
  isClicked: initialState,
  handleClick: () => {},
  screenWidth: 0,
  currentColor: '#03C9D7',
  setCurrentColor: () => {},
  currentMode: 'Light',
  setCurrentMode: () => {},
  themeSettings: false,
  setThemeSettings: () => {},
  setMode: () => {},
  setColor: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentMode, setCurrentMode] = useState<'Light' | 'Dark'>('Light');

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value as 'Light' | 'Dark');
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (clicked: string) => {
    setIsClicked({
      ...initialState,
      [clicked]: !isClicked[clicked as keyof typeof isClicked]
    });
  };

  return (
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      handleClick,
      screenWidth,
      currentColor, setCurrentColor,
      currentMode, setCurrentMode,
      themeSettings, setThemeSettings,
      setMode, setColor,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
