import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import RangeChart from "@/components/chart/range-chart";
function ActivityPlanGraph() {
    return (_jsx(_Fragment, { children: _jsx(RangeChart, { title: "Activity Plan Status", series: [
                {
                    name: "Business Review Feedback (2d behind)",
                    data: [
                        {
                            x: "Business Review Feedback (2d behind)",
                            y: [-2, 0],
                        },
                    ],
                },
                {
                    name: "Legal Compliance Check (5d remaining)",
                    data: [
                        {
                            x: "Legal Compliance Check (5d remaining)",
                            y: [0, 5],
                        },
                    ],
                },
            ], Xtitle: "Time (Days)", Ytitle: "Activities" }) }));
}
export default ActivityPlanGraph;
