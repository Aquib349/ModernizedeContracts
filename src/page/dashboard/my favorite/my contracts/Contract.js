import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SearchFilter from "../../../../components/search-filter/SearchFilter";
import RecordTable from "./RecordTable";
const Contract = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "text-sm space-y-5 relative", children: [_jsx(SearchFilter, { placeholder: "search contracts" }), _jsx(RecordTable, {})] }) }));
};
export default Contract;
