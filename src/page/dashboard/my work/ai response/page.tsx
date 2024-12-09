import { CircleArrowRight } from "lucide-react";
import ai_logo from "../../../../assets/image.png";
import ContractUpdates from "./contract-updates";
import MyWorkflows from "./my-workflows";
import MyTask from "./my-task";
import ToggleView from "@/components/ai-toggle-view/toggle-view";
function Page() {
  return (
    <>
      <div className="ai-response-compoent">
        <div className="main text-sm">
          {/* heading */}
          <ToggleView heading="My Dashboard"/>

          {/* response contents */}
          <div className="space-y-4">
            <ContractUpdates />
            <MyWorkflows />
            <MyTask />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
