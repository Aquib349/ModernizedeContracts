import { jsx as _jsx } from "react/jsx-runtime";
import { useState, createContext, } from "react";
// Optional : Default context value
const defaultValue = {
    isOpen: false,
    Open: false,
    toggleSideMenu: () => { },
    setIsOpen: () => { },
    setOpen: () => { },
};
// create context
export const ToggleMenuContext = createContext(defaultValue);
// create the context provider
export const ToggleMenuContextProvider = ({ children, }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [Open, setOpen] = useState(false);
    // function to toggle side menu
    function toggleSideMenu() {
        setIsOpen(true);
    }
    return (_jsx(ToggleMenuContext.Provider, { value: { isOpen, toggleSideMenu, setIsOpen, Open, setOpen }, children: children }));
};
