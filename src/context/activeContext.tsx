import React, { createContext, ReactNode, useEffect, useState } from "react";

// Define the context type
interface ContextProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

// Create context with a default value of undefined
export const ActiveContext = createContext<ContextProps | undefined>(undefined);

// Define the provider component
export const ActiveContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = useState<string>("/");

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
