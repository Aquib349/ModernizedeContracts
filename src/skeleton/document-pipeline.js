import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs } from "@/components/ui/tabs";
const DocumentPipelineSkeleton = () => {
    return (_jsx("div", { className: "document-intake-component", children: _jsx("div", { className: "main", children: _jsx("div", { className: "batch-files w-full", children: _jsxs(Tabs, { className: "w-full", children: [_jsx("div", { className: "relative flex items-center mt-2", children: _jsxs("div", { className: "flex justify-start w-full overflow-x-auto whitespace-nowrap no-scrollbar", children: [Array(5)
                                        .fill(null)
                                        .map((_, index) => (_jsx("div", { className: "flex-shrink-0 px-4 py-2 mr-1 bg-[#fafafa] animate-pulse rounded-md", style: { width: "120px", height: "40px" } }, index))), _jsx("div", { className: "flex-shrink-0 px-4 py-2 bg-[#fafafa] animate-pulse rounded-md", style: { width: "120px", height: "40px" } })] }) }), _jsx("div", { className: "animate-pulse mt-2", children: Array(1)
                                .fill(null)
                                .map((_, index) => (_jsxs("div", { children: [_jsx("div", { className: "h-10 w-3/4 bg-[#fafafa] rounded-md mb-2" }), _jsx("div", { className: "h-64 w-full bg-[#fafafa] rounded-md" })] }, index))) })] }) }) }) }));
};
export default DocumentPipelineSkeleton;
