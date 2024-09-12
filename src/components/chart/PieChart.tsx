import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface PieChartProps {
  options: ApexOptions;
  series: number[];
  type: "donut";
}

interface ActivityChartData {
  name: string;
  labels: Array<any>;
  SeriesData: Array<any>;
}

const PieChart = ({ name, labels, SeriesData }: ActivityChartData) => {
  const [chartValue, setChartValue] = useState<PieChartProps>({
    series:
      SeriesData.length === 0 || SeriesData.every((value) => value === 0)
        ? [1]
        : SeriesData,
    options: {
      chart: {
        type: "donut",
        offsetX: -100,
      },
      colors:
        SeriesData.length === 0 || SeriesData.every((value) => value === 0)
          ? ["#d1d5db"]
          : ["#dc2626", "#22c55e", "#3b82f6"],
      labels:
        labels.length === 0 || SeriesData.every((value) => value === 0)
          ? ["No Data Available"]
          : labels,
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled:
          SeriesData.length > 0 && !SeriesData.every((value) => value === 0),
      },
    },
    type: "donut",
  });

  return (
    <div className="pie-chart py-2">
      <h1 className="text-sm font-medium">{name}</h1>
      <div className="flex items-center relative">
        <div id="chart">
          <ReactApexChart
            options={chartValue.options}
            series={chartValue.series}
            type={chartValue.type}
            height={130}
          />
        </div>
        <div className="flex flex-col absolute right-2">
          {labels.map((val, index) => (
            <div key={index} className="flex items-center space-x-2">
              {/* Dot for color identification */}
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  index === 0
                    ? "bg-red-500"
                    : index === 1
                    ? "bg-green-500"
                    : index === 2
                    ? "bg-blue-500"
                    : "bg-gray-500"
                }`}
              ></div>
              {/* Label text */}
              {/* handle the button for clicking because the cursor pointer is not working properly on donut charts label */}
              <button
                type="button"
                onClick={() => console.log(val)}
                className="text-xs font-medium leading-7"
              >
                {val}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
