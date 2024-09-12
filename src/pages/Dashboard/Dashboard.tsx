import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext } from "react";
import Search from "./Search";
import ReportAnalytics from "./ReportAnalytics";
import TaskManagement from "./TaskManagement";
import ContractUpdates from "./contract updates/ContractUpdates";
import ActivitySummary from "./activity summary/ActivitySummary";
import ContractRequests from "./ContractRequests";
import IntelligentCalendar from "./Calendar";

const Dashboard = () => {
  const { isOpen } = useContext(ToggleMenuContext);
  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "pt-[3.8rem] pl-[4rem] pr-2" : "pt-14 p-2"
        }`}
      >
        {/* dashboard navbar with search */}
        <Search />

        <div className="flex gap-x-3">
          {/* report / overview */}
          <ReportAnalytics />

          {/* Task management */}
          <TaskManagement />
        </div>

        <div className="flex gap-x-3">
          {/* Activity Summary */}
          <ActivitySummary />

          {/* Contract Requests */}
          <ContractRequests />
        </div>

        {/* Contract Updates */}
        <ContractUpdates />

        {/* Calendar */}
        <IntelligentCalendar />
      </div>
    </>
  );
};

export default Dashboard;
