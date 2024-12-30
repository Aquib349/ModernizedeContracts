import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ViewContext } from "@/context/viewContext";
import { AlignJustify, ChartPie, TableCellsMerge, FolderKanban, FileWarning, Contact, UserRoundPen } from "lucide-react";
import { useContext } from "react";
function ToggleButton({ title, componentKey, Allviews }) {
    const { setView, getView } = useContext(ViewContext);
    const titleIcons = {
        "Contract Repository Overview": _jsx(FolderKanban, { size: 18 }),
        "Key Activities & Alerts": _jsx(UserRoundPen, { size: 18 }),
        "Contract Value OverView": _jsx(FileWarning, { size: 18 }),
        // Add more title-to-icon mappings as needed
    };
    // Define icons for each view type
    const viewIcons = {
        list: _jsx(AlignJustify, { size: 12 }),
        graph: _jsx(ChartPie, { size: 12 }),
        tabular: _jsx(TableCellsMerge, { size: 12 }),
    };
    // Fallback icon if title doesn't exist in titleIcons
    const icon = titleIcons[title] || _jsx(Contact, { size: 16 }); // Default icon (Contact) for undefined title
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center justify-center", children: [_jsx("span", { className: "text-4xl text-blue-500 mr-2", children: icon }), " ", _jsx("h2", { className: "font-semibold text-base text-gray-700", children: title })] }), _jsx("div", { className: "flex items-center gap-2", children: Allviews === null || Allviews === void 0 ? void 0 : Allviews.map((view) => {
                        {
                            console.log("view:-", view);
                        }
                        {
                            console.log("getView(componentKey):-", getView(componentKey));
                        }
                        return (_jsx("div", { className: "flex items-center cursor-pointer text-sm", onClick: () => setView(componentKey, view), children: _jsx("span", { className: "p-[1px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded", children: _jsx("div", { className: `p-1 rounded-md ${getView(componentKey) === view ? "text-black" : "bg-white"}`, children: viewIcons[view] }) }) }, view));
                    }) })] }) }));
}
export default ToggleButton;
