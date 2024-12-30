import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BarChart from "@/components/chart/bar-chart";
import PieChart from "@/components/chart/PieChart";
function ContractRepositoryOverview() {
    return (_jsxs("div", { className: "flex justify-around items-center mt-4", children: [_jsx(BarChart, { title: "Non-Standard/High-Risk Aspects", seriesData: [3, 2], Xcategories: ["Expedited Scope Review", "Late Penalties"], Xtext: "", Ytext: "" }), _jsx(PieChart, { title: "Contract Distribution by Type", series: [3, 4, 2, 1], labels: ["Service Agreement", "Master Service Agreement", "Software Licensing", "Dealer Contract"], colors: ["#F857C1", "#F53255", "#F46920", "#FFAF00"] })] }));
}
export default ContractRepositoryOverview;
