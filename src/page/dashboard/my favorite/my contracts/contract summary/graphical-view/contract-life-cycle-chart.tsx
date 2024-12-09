import BarChart from "@/components/chart/bar-chart";

function ContractLifeCycleGraph() {
  return (
    <>
      <div className="space-y-14">
        <BarChart
          title="Contract Stages and Durations"
          seriesData={[10, 1, 1, 4, 2]}
          Xcategories={[
            "Signature",
            "Approvals",
            "Negotiation",
            "Internal Reviews",
            "Drafting",
          ]}
          Xtext="Duration (Days)"
          Ytext="Stages"
        />
        <BarChart
          title="Contract Status"
          seriesData={[4, 1, 8]}
          Xcategories={["Active", "Renewal", "Amendements"]}
          Xtext="Counts"
          Ytext=""
        />
      </div>
    </>
  );
}

export default ContractLifeCycleGraph;
