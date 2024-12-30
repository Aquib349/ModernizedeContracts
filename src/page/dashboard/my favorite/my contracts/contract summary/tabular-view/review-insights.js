import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ReviewInsightsTabular = ({ columns, data, className = "", }) => {
    return (_jsx("div", { className: `overflow-x-auto mt-4 ${className}`, children: _jsxs("table", { className: "table-auto w-full border border-gray-300", children: [_jsx("thead", { className: "bg-gray-100 border border-gray-300", children: _jsx("tr", { children: columns.map((column, index) => (_jsx("th", { className: "px-4 py-2 border border-gray-300 text-center text-sm font-medium text-gray-600", children: column.header }, index))) }) }), _jsx("tbody", { children: data.map((row, rowIndex) => (_jsx("tr", { className: "hover:bg-gray-50", children: columns.map((column, colIndex) => (_jsx("td", { className: "px-4 py-3 border border-gray-300 text-center text-sm text-gray-700", children: column.render ? column.render(row[column.key]) : row[column.key] }, colIndex))) }, rowIndex))) })] }) }));
};
export default ReviewInsightsTabular;
