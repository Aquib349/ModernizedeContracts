import { jsx as _jsx } from "react/jsx-runtime";
import BarChart from "@/components/chart/bar-chart";
function ContractRenewalPipeline() {
    return (_jsx("div", { className: "space-y-14 mt-4", children: _jsx(BarChart, { title: "Renewal Funnel Chart", seriesData: [100, 70, 50, 40], Xcategories: ["Initial Review", "In Negotiation", "Final Approval", "Renewed"], Xtext: "Percentage of Contracts", Ytext: "Pipeline Stage" }) }));
}
export default ContractRenewalPipeline;
