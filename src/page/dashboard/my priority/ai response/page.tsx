import ContractUpdates from "./contract-updates";
import MyWorkflows from "./my-workflows";
import MyTask from "./my-task";
import CalendarList from "../../my calendar/list view/my-calendar-list";
function Page() {
  return (
    <>
      <div className="ai-response-compoent">
        <div className="main text-sm">
          <div className="space-y-4 w-[70%] mx-auto">
            <ContractUpdates />
            <MyWorkflows />
            <MyTask />
            <CalendarList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
