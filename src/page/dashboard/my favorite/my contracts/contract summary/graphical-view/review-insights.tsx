import BarChart from "@/components/chart/bar-chart";
import PieChart from "@/components/chart/PieChart";

function ReviewInsightsGraph() {
  return (
    <>
      <div className="flex justify-around items-center">
        <PieChart
          title="Clause Status"
          series={[2, 1]}
          labels={["Approved Clauses", "Under Review Clauses"]}
        />
        <BarChart
          title="Non-Standard/High-Risk Aspects"
          seriesData={[3, 2]}
          Xcategories={["Expedited Scope Review", "Late Penalties"]}
          Xtext=""
          Ytext=""
        />
      </div>
    </>
  );
}

export default ReviewInsightsGraph;
