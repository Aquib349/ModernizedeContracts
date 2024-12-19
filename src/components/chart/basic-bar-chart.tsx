import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Basicbarchart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      title: {
        text: "Total Contract Value by Region (This Quarter)",
        align: "center",
        margin: 10,
        offsetY: 10,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
        },
      },
      xaxis: {
        categories: [
          "North America",
          "Europe",
          "Asia-Pacific",
          "Emerging Markets",
        ],
        title: {
          text: "Region",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#333",
          },
        },
      },
      yaxis: {
        title: {
          text: "Total Contract Value (in $M)",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#333",
          },
        },
      },

      plotOptions: {
        bar: {
          distributed: true, // Allows individual bar colors
          colors: {
            backgroundBarColors: ["#f3f3f3"], // Background color of bars
            backgroundBarOpacity: 1, // Opacity of the background
            backgroundBarRadius: 5, // Rounded background bars
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (value, opts) => {
          // Customize the label text
          const customLabels = ["$90M", "$50M", "$40M", "$20M"];
          return customLabels[opts.dataPointIndex];
        },
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          colors: ["#000"], // Label color
        },
        offsetY: -10, // Adjust vertical position of labels
      },
      colors: ["#FFA726", "#FFD54F", "#FFCC80", "#FFEB3B"], // Custom bar colors
    },
    series: [
      {
        name: "series-1",
        data: [90, 50, 40, 20],
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Basicbarchart;
