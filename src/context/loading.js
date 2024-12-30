import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, } from "react";
export const LoadingContext = createContext(undefined);
export const LoadingContextProvider = ({ children, }) => {
    const [loading, setLoading] = useState(false);
    return (_jsx(LoadingContext.Provider, { value: { loading, setLoading }, children: children }));
};
