var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { LuRotateCw } from "react-icons/lu";
const SearchFilter = ({ placeholder }) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const handleClick = () => {
        setIsSpinning(true);
        setIsFetching(true);
    };
    // Simulate data fetching
    useEffect(() => {
        if (isFetching) {
            const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
                // Simulate a network request with a timeout
                yield new Promise((resolve) => setTimeout(resolve, 3000));
                setIsFetching(false);
                setIsSpinning(false);
            });
            fetchData();
        }
    }, [isFetching]);
    return (_jsx(_Fragment, { children: _jsx("div", { className: "search-filter-component", children: _jsxs("div", { className: "main flex space-x-2", children: [_jsx(Input, { type: "search", placeholder: placeholder, className: "h-9 w-2/4" }), _jsx(Button, { onClick: handleClick, className: "bg-transparent border text-lg text-slate-400 h-9 hover:bg-gray-50", children: _jsx("div", { className: `transition-transform duration-300 ease-in-out ${isSpinning ? "animate-spin" : ""}`, children: _jsx(LuRotateCw, {}) }) })] }) }) }));
};
export default SearchFilter;
