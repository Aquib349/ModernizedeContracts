import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ListVideo, Loader2 } from "lucide-react";
import ResponseDetail from "./response-detail";
const Table = ({ Record, loading, getSheetData, sheetData }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case "Completed":
                return "inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 font-medium text-green-700 ring-1 ring-inset ring-green-600/20";
            case "Needs Review":
                return "inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10";
            case "Failed":
                return "inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 font-medium text-red-700 ring-1 ring-inset ring-red-600/10";
            case "NotStarted":
                return "inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10";
            default:
                return "-";
        }
    };
    return (_jsx("div", { className: "text-xs relative overflow-x-auto rounded", children: loading ? (_jsxs("div", { className: "flex justify-center items-center my-4", children: [_jsx(Loader2, { className: "animate-spin text-gray-600", size: 20 }), _jsx("span", { className: "ml-2", children: "Loading data..." })] })) : (_jsxs("table", { className: "w-full text-left table-auto whitespace-nowrap", children: [_jsx("thead", { className: "bg-[#fafafa] h-12", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2 border-r border-gray-100 font-semibold", children: _jsx("span", { children: "\uD83D\uDCC4 Documents" }) }), _jsx("th", { className: "px-4 py-2 border-r border-gray-100 font-semibold", children: "\uD83D\uDD04 Ingestion" }), _jsx("th", { className: "px-4 py-2 border-r border-gray-100 font-semibold", children: "\uD83D\uDCDD Ingestion Summary" }), _jsx("th", { className: "px-4 py-2 border-r border-gray-100 font-semibold", children: "\u2728 Classification" }), _jsx("th", { className: "px-4 py-2 border-r border-gray-100 font-semibold", children: "\uD83D\uDCCB Classification Summary" }), _jsx("th", { className: "px-4 py-2 border-r border-gray-100 font-semibold", children: "\u2699\uFE0F Record Setup" }), _jsx("th", { className: "px-4 py-2 font-semibold", children: "\uD83D\uDCC4 Record Setup Summary" })] }) }), _jsx("tbody", { children: Record.map((row, index) => (_jsxs("tr", { children: [_jsx("td", { className: "border-b border-gray-50 px-4 py-2 h-12 font-medium", children: row.DocumentName }), _jsx("td", { className: `border-b border-l border-gray-50 px-2 py-2 text-center`, children: _jsx("span", { className: `rounded-full text-[0.6rem] ${getStatusClass(row.IngestionStatus)}`, children: row.IngestionStatus }) }), _jsxs("td", { className: "px-2 py-4 italic flex items-center justify-center space-x-4 group border-b border-l border-gray-50", children: [_jsx("span", { className: "text-slate-400", children: "View Summary" }), _jsx(ResponseDetail, { TriggerButton: _jsx(ListVideo, { size: 12, className: "cursor-pointer text-white group-hover:text-black", onClick: () => getSheetData(row.RowKey) }), sheetData: sheetData })] }), _jsx("td", { className: `border-b border-l border-gray-50 px-4 py-2 text-center`, children: _jsx("span", { className: `rounded-full text-[0.6rem] ${getStatusClass(row.ClassificationStatus)}`, children: row.ClassificationStatus }) }), _jsx("td", { className: "border-b border-l border-gray-50 px-4 py-2" }), _jsx("td", { className: `border-b border-l border-gray-50 px-4 py-2 text-center`, children: _jsx("span", { className: `rounded-full text-[0.6rem] ${getStatusClass(row.RecordSetupStatus)}`, children: row.RecordSetupStatus }) }), _jsx("td", { className: "border-b border-l border-gray-50 px-4 py-2" })] }, index))) })] })) }));
};
export default Table;
