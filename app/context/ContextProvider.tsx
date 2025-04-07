'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ContextProps {
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
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(initialState);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (clicked: string) => {
    setIsClicked({ 
      ...initialState,
      [clicked]: [!clicked]
    });
  };

  return (
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      handleClick,
      screenWidth
    }}>
      {children}
    </StateContext.Provider>
  )
}

interface ScreenContextType {
  width: number;
}

const ScreenContext = createContext<ScreenContextType | null>(null);

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState<number>(0); // default to 0 to avoid SSR mismatch

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // Set initial width

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ width }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => {
  const context = useContext(ScreenContext);
  if (!context) throw new Error("useScreen must be used within a ScreenProvider");
  return context;
};


export const useStateContext = () => useContext(StateContext);