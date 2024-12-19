import { CircleArrowRight } from "lucide-react";
import ai_logo from "../../../../assets/image.png";
import BusinessAreaDashboard from "./ba-dashboard";
// import ContractUpdates from "./contract-updates";
// import MyWorkflows from "./my-workflows";
// import MyTask from "./my-task";
// import ToggleView from "@/components/ai-toggle-view/toggle-view";
// import CalendarList from "../../my calendar/list view/my-calendar-list";
function BAPage() {
    return (
        <>
            <div className="ai-response-compoent">
                <div className="main text-sm">
                    {/* heading */}
                    {/* <ToggleView heading="My Dashboard" /> */}

                    {/* response contents */}
                    <div className="space-y-4">
                        <BusinessAreaDashboard />
                        {/* <ContractUpdates />
            <MyWorkflows />
            <MyTask />
            <CalendarList /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BAPage;