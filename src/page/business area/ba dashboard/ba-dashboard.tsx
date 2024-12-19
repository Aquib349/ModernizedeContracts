import React, { useContext } from "react";
import { History } from "lucide-react";
import ToggleView from "@/components/ai-toggle-view/toggle-view";
import { ViewContext } from "@/context/viewContext";
import { Button } from "@/components/ui/button";
import ToggleButton from "@/components/ai-toggle-view/toggle-button";
import ContractRepositoryOverview from "../../dashboard/my favorite/my contracts/contract summary/graphical-view/contract-repository-overview";
import { columns, dataItem, columns1, data1, columns2, data2, columns3, data3, columns4, data4, } from "@/constants/CustomData";
import ReviewInsightsTabular from "../../dashboard/my favorite/my contracts/contract summary/tabular-view/review-insights";
import ContractRenewalPipeline from "../../dashboard/my favorite/my contracts/contract summary/graphical-view/contract-renewal-pipeline";
import ContractIntakeMetrix from "../../dashboard/my favorite/my contracts/contract summary/graphical-view/contract-intake-metrics";
import ContractIssueMetrix from "../../dashboard/my favorite/my contracts/contract summary/graphical-view/contract-issue-matrix";
import ContractValueOverview from "../../dashboard/my favorite/my contracts/contract summary/graphical-view/contract-value-overview";


function BusinessAreaDashboard() {

    const { getView } = useContext(ViewContext);

    return (
        <>
            <div className="contract-summary space-y-2 bg-white p-2 pt-0 rounded-md mt-2">
                <ToggleView heading={"AI Generated Business Area Summary"} />
                {/* <div className="text-sm"> */}
                <div className=" text-gray-500 ml-4 text-sm">
                    <p className="italic text-slate-500 text-xs flex items-center gap-1">
                        <History size={16} className="cursor-pointer" />
                        Time Since Last Update: 2 hours ago
                    </p>
                    <div className="flex items-center gap-x-3 mt-2">
                        <span className=" w-1/4 font-semibold">Business Area Name:</span>
                        <p className="text-left flex-grow font-normal">
                            Sales
                        </p>
                    </div>
                    <div className="flex items-center gap-x-3 mt-2">
                        <span className=" w-1/4 font-semibold">Business Area Owner:</span>
                        <p className="text-left flex-grow font-normal">John Smith</p>
                    </div>
                    <div className="flex items-center gap-x-3 mt-2">
                        <span className=" w-1/4 font-semibold">Contract Owners:</span>
                        <p className="text-left flex-grow font-normal">Andrew Tang, Pia Cramling, Craig, <span className="text-sky-500">+5 others</span></p>
                    </div>
                    <Button variant="outline" className="h-8 mt-2 text-sky-500 border border-sky-500 hover:bg-sky-100 ">
                        Generate Report
                    </Button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-md mt-2">
                <ToggleButton
                    title="Contract Repository OverView"
                    componentKey="contractRepositoryOverview"
                    Allviews={["graph", "tabular"]}
                />

                {getView("contractRepositoryOverview") === "tabular" ? (
                    <ContractRepositoryOverview />
                ) : (
                    <ReviewInsightsTabular columns={columns} data={dataItem} />
                )}
                <div className="mt-4">
                    <Button className="px-2 text-xs font-medium rounded h-8 border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border text-transparent bg-clip-text">
                        View all
                    </Button>
                </div>

            </div>

            <div className="bg-white p-4 rounded-md mt-4">
                <ToggleButton
                    title="Key Activities & Alerts"
                    componentKey="reviewInsights"
                    Allviews={["list"]}
                />
                <div className=" text-gray-500  mt-4">
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
                <div className=" text-gray-500  mt-4">
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
                    componentKey="contractValueOverview"
                    Allviews={["graph", "tabular"]}
                />

                {getView("contractValueOverview") === "tabular" ? (
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
                    componentKey="contractRenewalPipeline"
                    Allviews={["graph", "tabular"]}
                />

                {getView("contractRenewalPipeline") === "tabular" ? (
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
                    componentKey="contractIntakeMetrix"
                    Allviews={["graph", "tabular"]}
                />

                {getView("contractIntakeMetrix") === "tabular" ? (
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
                    componentKey="contractIssueMetrix"
                    Allviews={["graph", "tabular"]}
                />

                {getView("contractIssueMetrix") === "tabular" ? (
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
