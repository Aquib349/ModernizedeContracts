import { useState, ReactNode, createContext } from "react";

// Define the shape of the context value
interface ToggleSideMenuContextType {
  isOpen: boolean;
  toggleSideMenu: () => void;
}

// Define the shape of the Provider value props
interface ToggleSideMenuProviderProps {
  children: ReactNode;
}

// Optional : Default context value
const defaultValue: ToggleSideMenuContextType = {
  isOpen: false,
  toggleSideMenu: () => {},
};

// create context
export const ToggleMenuContext =
  createContext<ToggleSideMenuContextType>(defaultValue);

// create the context provider
export const ToggleMenuContextProvider = ({
  children,
}: ToggleSideMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle side menu
  function toggleSideMenu() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <ToggleMenuContext.Provider value={{ isOpen, toggleSideMenu }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};
