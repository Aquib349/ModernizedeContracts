import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

interface ChartProps {
  options: ApexOptions;
  series: { name: string; data: number[] }[];
  type: "line" | "bar" | "area" | "pie";
  height: number;
}

const ReportAnalytics = () => {
  const [chartValue, setChartValue] = useState<ChartProps>({
    series: [
      {
        name: "Active Contracts",
        data: [30, 45, 32, 55, 60, 80, 90, 110, 150, 170, 180, 200],
      },
      {
        name: "Approved Contracts",
        data: [20, 35, 28, 50, 55, 65, 70, 85, 100, 120, 130, 140],
      },
      {
        name: "Pending Contracts",
        data: [15, 25, 22, 40, 45, 50, 55, 65, 75, 90, 95, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      colors: ["#dc2626", "#22c55e", "#3b82f6"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      title: {
        text: "Contract Analytics",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    type: "line",
    height: 320,
  });

  return (
    <div id="chart" className="bg-white shadow rounded-md p-2 w-2/4">
      <ReactApexChart
        options={chartValue.options}
        series={chartValue.series}
        type={chartValue.type}
        height={chartValue.height}
      />
    </div>
  );
};

export default ReportAnalytics;
