import { useContext } from "react";
import { History } from "lucide-react";
import ToggleView from "@/components/ai-toggle-view/toggle-view";
import ContractLifeCycle from "./list-view/contract-life-cycle";
import AcitivityPlan from "./list-view/activity-plan";
import ReviewInsights from "./list-view/review-insights";
import ContractHighLights from "./list-view/contract-highlights";
import ActivityTimeline from "./list-view/activity-timeline";
import { ViewContext } from "@/context/viewContext";
import { Button } from "@/components/ui/button";
import ToggleButton from "@/components/ai-toggle-view/toggle-button";
import { Folder } from 'lucide-react';
import ContractLifeCycleGraph from "./graphical-view/contract-life-cycle-chart";
import ActivityPlanGraph from "./graphical-view/activity-plan";
import ContractRepositoryOverview from "./graphical-view/contract-repository-overview";
import ReviewInsightsTabular from "./tabular-view/review-insights";


const BusinessAreaDashboard: React.FC = () => {


    // Define table columns
    const columns = [
        { header: "Contract Type", key: "ContractType" },
        { header: "Count", key: "value" },
        { header: "% of Total Contracts", key: "Percentage" },
        { header: "Status Breakdown", key: "Status" }
    ];

    // Define table data
    const data = [
        {
            ContractType: "Master Service Agreements",
            value: "120",
            Percentage: "27",
            Status: "80 Active, 40 Expired"
        },
        {
            ContractType: "Dealer Contracts",
            value: "100",
            Percentage: "22",
            Status: "70 Active, 10 Terminating"
        },
        {
            ContractType: "Software Licensing",
            value: "80",
            Percentage: "18",
            Status: "60 Active, 20 Expired"
        },
        {
            ContractType: "Service Agreements",
            value: "150",
            Percentage: "33",
            Status: "120 Active, 30 Expired"
        },
    ];



    const { getView } = useContext(ViewContext);
    return (
        <>
            <div className="contract-summary space-y-2 bg-white p-2 rounded-md mt-2">
                <ToggleView heading={"AI Generated Business Area Summary"} businessArea />
                {/* <div className="text-sm"> */}
                <div className=" text-gray-500 ml-4">
                    <p className="italic text-slate-500 text-xs flex items-center gap-1">
                        <History size={16} className="cursor-pointer" />
                        Time Since Last Update: 2 hours ago
                    </p>
                    <div className="flex items-center gap-x-3">
                        <span className="font-medium w-1/4">Business Area Name:</span>
                        <p className="text-left flex-grow">
                            Sales
                        </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <span className="font-medium w-1/4">Business Area Owner:</span>
                        <p className="text-left flex-grow">John Smith</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <span className="font-medium w-1/4">Contract Owners:</span>
                        <p className="text-left flex-grow">Andrew Tang, Pia Cramling, Craig, <span className="text-sky-500">+5 others</span></p>
                    </div>
                    <Button variant="outline" className="h-8 mt-2 text-sky-500 border border-sky-500 hover:bg-sky-100">
                        Generate Report
                    </Button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-md mt-2">
                <ToggleButton
                    title="Contract Repositort OverView"
                    componentKey="reviewInsights"
                    Allviews={true}
                    businessArea
                />

                {getView("reviewInsights") === "graph" ? (
                    <ContractRepositoryOverview />
                ) : (
                    <ReviewInsightsTabular columns={columns} data={data} />
                )}
            </div>
        </>
    );
};

export default BusinessAreaDashboard;
