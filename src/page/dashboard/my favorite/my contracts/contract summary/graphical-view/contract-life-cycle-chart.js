import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BarChart from "@/components/chart/bar-chart";
function ContractLifeCycleGraph() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "space-y-14", children: [_jsx(BarChart, { title: "Contract Stages and Durations", seriesData: [10, 1, 1, 4, 2], Xcategories: [
                        "Signature",
                        "Approvals",
                        "Negotiation",
                        "Internal Reviews",
                        "Drafting",
                    ], Xtext: "Duration (Days)", Ytext: "Stages" }), _jsx(BarChart, { title: "Contract Status", seriesData: [4, 1, 8], Xcategories: ["Active", "Renewal", "Amendements"], Xtext: "Counts", Ytext: "" })] }) }));
}
export default ContractLifeCycleGraph;
