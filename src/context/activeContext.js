import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
// Create context with a default value of undefined
const ActiveContext = createContext(undefined);
// Define the provider component
export const ActiveContextProvider = ({ children, }) => {
    const [active, setActive] = useState("/");
    const [sideNav, setSideNav] = useState(true);
    return (_jsx(ActiveContext.Provider, { value: { active, sideNav, setActive, setSideNav }, children: children }));
};
// custom hook for the context
export const useActiveContext = () => {
    const context = useContext(ActiveContext);
    if (!context) {
        throw new Error("context must be within the Context provider");
    }
    return context;
};
