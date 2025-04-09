'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
  setCurrentMode: (mode: string) => void;
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
  currentColor: 'blue',
  setCurrentColor: () => {},
  currentMode: 'Light',
  setCurrentMode: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState('blue');
  const [currentMode, setCurrentMode] = useState<'Light' | 'Dark'>('Light');

  const handleModeChange = (mode: string) => {
    setCurrentMode(mode as 'Light' | 'Dark');
  }

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
      currentColor,
      setCurrentColor,
      currentMode,
      setCurrentMode: handleModeChange
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
