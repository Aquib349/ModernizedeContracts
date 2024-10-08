import {
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of the context value
interface ToggleSideMenuContextType {
  isOpen: boolean;
  Open: boolean;
  toggleSideMenu: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// Define the shape of the Provider value props
interface ToggleSideMenuProviderProps {
  children: ReactNode;
}

// Optional : Default context value
const defaultValue: ToggleSideMenuContextType = {
  isOpen: false,
  Open: false,
  toggleSideMenu: () => {},
  setIsOpen: () => {},
  setOpen: () => {},
};

// create context
export const ToggleMenuContext =
  createContext<ToggleSideMenuContextType>(defaultValue);

// create the context provider
export const ToggleMenuContextProvider = ({
  children,
}: ToggleSideMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [Open, setOpen] = useState(false);

  // function to toggle side menu
  function toggleSideMenu() {
    setIsOpen(true);
  }

  return (
    <ToggleMenuContext.Provider
      value={{ isOpen, toggleSideMenu, setIsOpen, Open, setOpen }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
};
