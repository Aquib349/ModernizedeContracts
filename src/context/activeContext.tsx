import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the context type
interface ContextProps {
  active: string;
  sideNav: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context with a default value of undefined
const ActiveContext = createContext<ContextProps | undefined>(undefined);

// Define the provider component
export const ActiveContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = useState<string>("/");
  const [sideNav, setSideNav] = useState<boolean>(true);

  return (
    <ActiveContext.Provider value={{ active, sideNav, setActive, setSideNav }}>
      {children}
    </ActiveContext.Provider>
  );
};

// custom hook for the context
export const useActiveContext = () => {
  const context = useContext(ActiveContext);

  if (!context) {
    throw new Error("context must be within the Context provider");
  }

  return context;
};
