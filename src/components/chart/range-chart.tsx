import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface chartProps {
  title: string;
  series: any[];
  Xtitle: string;
  Ytitle: string;
}

function RangeChart({ title, series, Xtitle, Ytitle }: chartProps) {
  const [rangeChart, setRangeChart] = useState({
    series: [],
    options: {},
  });

  useEffect(() => {
    setRangeChart({
      series: series,
      options: {
        chart: {
          type: "rangeBar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        colors: ["#ef4444", "#22c55e"],

        xaxis: {
          title: {
            text: Xtitle,
          },
        },
        yaxis: {
          title: {
            text: Ytitle,
          },
        },
      },
    });
  }, []);
  return (
    <>
      <h1 className="graph-title text-center font-semibold text-sm">{title}</h1>
      <ReactApexChart
        options={rangeChart.options}
        series={rangeChart.series}
        type="rangeBar"
        height={250}
      />
    </>
  );
}

export default RangeChart;
