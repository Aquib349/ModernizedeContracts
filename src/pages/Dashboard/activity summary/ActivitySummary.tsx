import PieChart from "@/components/chart/PieChart";

const ActivitySummary = () => {
  return (
    <>
      <div className="activity-summary-component w-2/3">
        <div className="main bg-white h-[350px] rounded-md shadow p-3 mt-3">
          <h1 className="font-bold text-xl border-b pb-2">Activity Summary</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-r my-2">
              <PieChart
                name="Milestones"
                labels={["Delayed", "Upcoming (7d)", "Upcoming (30d)"]}
                SeriesData={[0, 0, 0]}
              />
            </div>
            <div className="border-r my-1">
              <PieChart
                name="Obligations"
                labels={["Delayed", "Upcoming (7d)", "Upcoming (30d)"]}
                SeriesData={[43, 32, 67]}
              />
            </div>
            <div>
              <PieChart
                name="Issues"
                labels={["Assigned To Me", "Submitted By Me", "Recent (7d)"]}
                SeriesData={[98, 102, 23]}
              />
            </div>
            <div className="border-r my-1">
              <PieChart
                name="Signature"
                labels={[
                  "Awaiting my Signature",
                  "In Progress, Initiated by Me",
                  "Recent (7d)",
                ]}
                SeriesData={[44, 90, 12]}
              />
            </div>
            <div className="border-r my-1">
              <PieChart
                name="External Share"
                labels={[
                  "In Progress, Shared by Me",
                  "Shared with Me",
                  "Recent (7d)",
                ]}
                SeriesData={[76, 92, 112]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitySummary;
