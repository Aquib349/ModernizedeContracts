import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BarChart from "@/components/chart/bar-chart";
import PieChart from "@/components/chart/PieChart";
function ReviewInsightsGraph() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex justify-around items-center", children: [_jsx(PieChart, { title: "Clause Status", series: [2, 1], labels: ["Approved Clauses", "Under Review Clauses"] }), _jsx(BarChart, { title: "Non-Standard/High-Risk Aspects", seriesData: [3, 2], Xcategories: ["Expedited Scope Review", "Late Penalties"], Xtext: "", Ytext: "" })] }) }));
}
export default ReviewInsightsGraph;
