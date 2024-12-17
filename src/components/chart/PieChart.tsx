// import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// interface piechartProps {
//   title: string;
//   series: any[];
//   labels: any[];
// }

// function PieChart({ title, series, labels }: piechartProps) {
//   const [pieChart, setPieChart] = useState({
//     series: [],
//     options: {},
//   });

//   useEffect(() => {
//     setPieChart({
//       series: series,
//       options: {
//         chart: {
//           width: 500,
//           type: "pie",
//         },
//         labels: labels,
//         colors: ["#34d399", "#fdba74"],

//         legend: {
//           position: "bottom",
//         },
//       },
//     });
//   }, []);
//   return (
//     <>
//       <div>
//         <h1 className="graph-title text-center font-semibold text-sm">
//           {title}
//         </h1>
//         <ReactApexChart
//           type="pie"
//           height={600}
//           options={pieChart.options}
//           series={pieChart.series}
//         />
//       </div>
//     </>
//   );
// }

// export default PieChart;

import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface PieChartProps {
  title: string;
  series: number[]; // Updated type for clarity
  labels: string[];
  colors?: string[]; // Optional prop for custom colors
}

function PieChart({ title, series, labels, colors = ["#34d399", "#fdba74"] }: PieChartProps) {
  const [pieChart, setPieChart] = useState({
    series: [],
    options: {},
  });

  useEffect(() => {
    setPieChart({
      series: series,
      options: {
        chart: {
          width: 500,
          type: "pie",
        },
        labels: labels,
        colors: colors, // Use custom colors or defaults
        legend: {
          position: "bottom",
        },
      },
    });
  }, [series, labels, colors]); // Add dependencies to update on prop change

  return (
    <div>
      <h1 className="graph-title text-center font-semibold text-sm">
        {title}
      </h1>
      <ReactApexChart
        type="pie"
        height={600}
        options={pieChart.options}
        series={pieChart.series}
      />
    </div>
  );
}

export default PieChart;

