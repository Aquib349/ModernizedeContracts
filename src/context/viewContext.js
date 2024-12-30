import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const ViewContext = createContext(undefined);
export const ViewContextProvider = ({ children, }) => {
    const [views, setViews] = useState({});
    const setView = (key, view) => {
        setViews((prevViews) => (Object.assign(Object.assign({}, prevViews), { [key]: view })));
    };
    const getView = (key) => {
        return views[key] || "tabular";
    };
    return (_jsx(ViewContext.Provider, { value: { views, setView, getView }, children: children }));
};
