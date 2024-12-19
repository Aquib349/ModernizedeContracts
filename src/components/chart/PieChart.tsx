import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface piechartProps {
  title: string;
  series: any[];
  labels: any[];
  colors?: any[];
}

function PieChart({ title, series, labels, colors }: piechartProps) {
  const [pieChart, setPieChart] = useState({
    series: [],
    options: {},
  });

  useEffect(() => {
    setPieChart({
      series: series,
      options: {
        chart: {
          width: 300,
          type: "pie",
        },
        labels: labels,
        colors: ["#34d399", "#fdba74"],

        legend: {
          position: "bottom",
        },
      },
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="graph-title text-center font-semibold text-sm">
          {title}
        </h1>
        <ReactApexChart
          type="pie"
          height={400}
          options={pieChart.options}
          series={pieChart.series}
        />
      </div>
    </>
  );
}

export default PieChart;
