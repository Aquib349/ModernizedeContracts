import { useContext } from "react";
import { History } from "lucide-react";
import ToggleView from "@/components/ai-toggle-view/toggle-view";
import { ViewContext } from "@/context/viewContext";
import { Button } from "@/components/ui/button";
import ToggleButton from "@/components/ai-toggle-view/toggle-button";
import ContractRepositoryOverview from "./graphical-view/contract-repository-overview";
import ReviewInsightsTabular from "./tabular-view/review-insights";
import ContractValueOverview from "./graphical-view/contract-value-overview";
import ContractRenewalPipeline from "./graphical-view/contract-renewal-pipeline";
import ContractIntakeMetrix from "./graphical-view/contract-intake-metrics";
import ContractIssueMetrix from "./graphical-view/contract-issue-matrix";

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

    // Define table columns
    const columns1 = [
        { header: "Metric", key: "Metric" },
        { header: "Value", key: "value" },
        { header: "Key Insights", key: "KeyInsights" },
    ];

    // Define table data
    const data1 = [
        {
            Metric: "Total Contracts",
            value: "$450",
            KeyInsights: "5% increase QoQ",
        },
        {
            Metric: "Total Contract Value (TCV)",
            value: "$200M",
            KeyInsights: "7% growth driven by renewals",
        },
        {
            Metric: "Average Contract Value (ACV)",
            value: "$500K",
            KeyInsights: "10% increase in Large Hospital deals",
        },
        {
            Metric: "Revenue Impact from Issues",
            value: "-$5M",
            KeyInsights: "Concentrated in SLA disputes",
        },
    ];


    // Define table columns
    const columns2 = [
        { header: "Renewal Activity", key: "RenewalActivity" },
        { header: "Count", key: "Count" },
        { header: "Potential Revenue", key: "PotentialRevenue" },
        { header: "Renewal Probability", key: "RenewalProbability" },
    ];

    // Define table data
    const data2 = [
        {
            RenewalActivity: "Initial Renewal Review",
            Count: "20",
            PotentialRevenue: "$5M",
            RenewalProbability: "70%"
        },
        {
            RenewalActivity: "In Negotiation",
            Count: "15",
            PotentialRevenue: "$4M",
            RenewalProbability: "78%"
        },
        {
            RenewalActivity: "Final Approval",
            Count: "10",
            PotentialRevenue: "$2.2M",
            RenewalProbability: "90%"
        },
        {
            RenewalActivity: "Renewal Completed",
            Count: "12",
            PotentialRevenue: "$3.3M",
            RenewalProbability: "100%"
        },
    ];

    // Define table columns
    const columns3 = [
        { header: "Metric", key: "Metric" },
        { header: "Value", key: "Value" },
        { header: "Key Insights", key: "KeyInsights" },
    ];

    // Define table data
    const data3 = [
        {
            Metric: "New Contract Signed",
            Value: "50",
            KeyInsights: "$15M Added Revenue",
        },
        {
            Metric: "Average Intake Time",
            Value: "15 minutes",
            KeyInsights: "Reduced by 2 min QoQ",
        },
        {
            Metric: "Intake Completion Rate",
            Value: "95%",
            KeyInsights: "Remaining 5% pending information",
        },
        {
            Metric: "Contract Updates (in Progress)",
            Value: "18",
            KeyInsights: "New Contracts Updates",
        },
    ];

    // Define table columns
    const columns4 = [
        { header: "Renewal Activity", key: "RenewalActivity" },
        { header: "Count", key: "Count" },
        { header: "Revenue Impact", key: "RevenueImpact" },
        { header: "Resolution Status", key: "ResolutionStatus" },
    ];

    // Define table data
    const data4 = [
        {
            RenewalActivity: "SLA Disputes",
            Count: "20",
            RevenueImpact: "-$2M",
            ResolutionStatus: "60% Resolved"
        },
        {
            RenewalActivity: "Payment Delays",
            Count: "15",
            RevenueImpact: "-$1M",
            ResolutionStatus: "Pending Resolution"
        },
        {
            RenewalActivity: "Compliance Violations",
            Count: "10",
            RevenueImpact: "-$1.2M",
            ResolutionStatus: "Escalated to Legal"
        },
        {
            RenewalActivity: "Others",
            Count: "12",
            RevenueImpact: "-$100M",
            ResolutionStatus: "60% Resolved"
        },
    ];


    const { getView } = useContext(ViewContext);
    return (
        <>
            <div className="contract-summary space-y-2 bg-white p-2 pt-0 rounded-md mt-2">
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
                    title="Contract Repository OverView"
                    componentKey="reviewInsights"
                    Allviews={true}
                    businessArea
                />

                {getView("reviewInsights") === "graph" ? (
                    <ContractRepositoryOverview />
                ) : (
                    <ReviewInsightsTabular columns={columns} data={data} />
                )}
                <div className="mt-4">
                    <Button className="px-2 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border text-transparent bg-clip-text">
                        View all
                    </Button>
                </div>

            </div>

            <div className="bg-white p-4 rounded-md mt-2">
                <ToggleButton
                    title="Key Activities & Alerts"
                    componentKey="reviewInsights"
                    Allviews={true}
                    businessArea
                />
                <div className=" text-gray-500 ml-4 mt-8">
                    <div className="flex items-center gap-x-3 text-sm">
                        <span className="font-semibold w-1/4">New Contracts Setup: </span>
                        <p className="text-left flex-grow font-normal">
                            15 contracts uploaded & setup in the last week <span className="text-sky-500 font-light text-xs underline">Review</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-x-3 text-sm  mt-2">
                        <span className="font-semibold w-1/4">Amendments Initiated: </span>
                        <p className="text-left flex-grow font-normal">3 amendments created recently <span className="text-sky-500 font-light text-xs underline">Review</span></p>
                    </div>
                    <div className="flex items-center gap-x-3 text-sm mt-2">
                        <span className="font-semibold w-1/4">Renewals Processed:</span>
                        <p className="text-left flex-grow font-normal">2 contract renewals completed <span className="text-sky-500 font-light text-xs underline">Review</span></p>
                    </div>
                    <div className="flex items-center gap-x-3 text-sm mt-2">
                        <span className="font-semibold w-1/4">Urgent Alerts: </span>
                        <p className="text-left flex-grow font-normal">5 new alerts generated <span className="text-sky-500 font-light text-xs underline">Review</span></p>
                    </div>

                </div>
                <div className=" text-gray-500 ml-4 mt-8">
                    <div className=" text-slate-500 font-semibold flex items-center gap-1 gap-1 border-b border-gray-200 pb-1">
                        Recent Activity
                    </div>
                    <div className="flex items-center gap-x-3 text-sm mt-2">
                        <span className="font-semibold">Nov 10, 2024: </span>
                        <p className="text-left flex-grow font-normal">
                            Escalated Equipment Purchase Agreement with MedEquip Inc.
                        </p>
                    </div>
                    <div className="flex items-center gap-x-3 text-sm  mt-2">
                        <span className="font-semibold">Nov 12, 2024: </span>
                        <p className="text-left flex-grow font-normal">Initiated Renewal for Supply Contract with PharmaPlus.</p>
                    </div>
                    <div className="flex items-center gap-x-3 text-sm mt-2">
                        <span className="font-semibold">Nov 15, 2024:</span>
                        <p className="text-left flex-grow font-normal">Released RFP for IT Support Services.</p>
                    </div>
                </div>

                <div className="mt-4">
                    <Button className="px-2 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border text-transparent bg-clip-text">
                        View all
                    </Button>
                </div>

            </div>

            <div className="bg-white p-4 rounded-md mt-2">
                <ToggleButton
                    title="Contract Value OverView"
                    componentKey="reviewInsights"
                    Allviews={true}
                    businessArea
                />

                {getView("reviewInsights") === "graph" ? (
                    <ContractValueOverview />
                ) : (
                    <ReviewInsightsTabular columns={columns1} data={data1} />
                )}
                <div className="mt-4">
                    <Button className="px-2 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border text-transparent bg-clip-text">
                        View all
                    </Button>
                </div>

            </div>
            <div className="bg-white p-4 rounded-md mt-2">
                <ToggleButton
                    title="Contract Renewal Pipeline"
                    componentKey="reviewInsights"
                    Allviews={true}
                    businessArea
                />

                {getView("reviewInsights") === "graph" ? (
                    <ContractRenewalPipeline />
                ) : (
                    <ReviewInsightsTabular columns={columns2} data={data2} />
                )}
                <div className="mt-4">
                    <Button className="px-2 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border text-transparent bg-clip-text">
                        View all
                    </Button>
                </div>

            </div>
            <div className="bg-white p-4 rounded-md mt-2">
                <ToggleButton
                    title="New Contracts and Contract Intake Metrics"
                    componentKey="reviewInsights"
                    Allviews={true}
                    businessArea
                />

                {getView("reviewInsights") === "graph" ? (
                    <ContractIntakeMetrix />
                ) : (
                    <ReviewInsightsTabular columns={columns3} data={data3} />
                )}
                <div className="mt-4">
                    <Button className="px-2 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border text-transparent bg-clip-text">
                        View all
                    </Button>
                </div>

            </div>
            <div className="bg-white p-4 rounded-md mt-2">
                <ToggleButton
                    title="Contracts Issue Metrics"
                    componentKey="reviewInsights"
                    Allviews={true}
                    businessArea
                />

                {getView("reviewInsights") === "graph" ? (
                    <ContractIssueMetrix />
                ) : (
                    <ReviewInsightsTabular columns={columns4} data={data4} />
                )}
                <div className="mt-4">
                    <Button className="px-2 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border text-transparent bg-clip-text">
                        View all
                    </Button>
                </div>

            </div>
        </>
    );
};

export default BusinessAreaDashboard;
