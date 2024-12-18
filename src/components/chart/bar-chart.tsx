// import { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// interface chartProps {
//   title: string;
//   seriesData: any[];
//   Xcategories: any[];
//   Xtext: string;
//   Ytext: string;
// }

// function BarChart({
//   title,
//   seriesData,
//   Xcategories,
//   Xtext,
//   Ytext,
// }: chartProps) {
//   const [chartState, setChartState] = useState({
//     series: [],
//     options: {},
//   });

//   useEffect(() => {
//     setChartState({
//       series: [
//         {
//           data: seriesData,
//         },
//       ],
//       options: {
//         chart: {
//           type: "bar",
//           height: 250,
//           toolbar: {
//             show: false,
//           },
//         },
//         plotOptions: {
//           bar: {
//             barHeight: "100%",
//             distributed: true,
//             horizontal: true,
//             dataLabels: {
//               position: "bottom",
//             },
//           },
//         },
//         colors: [
//           "#31C48D",
//           "#fdba74",
//           "#9CA3AF",
//           "#76A9FA",
//           "#f9a8d4",
//           "#33b2df",
//           "#546E7A",
//           "#d4526e",
//           "#13d8aa",
//           "#A5978B",
//           "#2b908f",
//           "#f9a3a4",
//           "#90ee7e",
//           "#f48024",
//           "#69d2e7",
//         ],
//         dataLabels: {
//           enabled: true,
//           offsetX: -6,
//           style: {
//             fontSize: "12px",
//             colors: ["#fff"],
//           },
//         },
//         stroke: {
//           show: true,
//           width: 1,
//           colors: ["#fff"],
//         },
//         tooltip: {
//           shared: true,
//           intersect: false,
//         },
//         xaxis: {
//           categories: Xcategories,
//           title: {
//             text: Xtext,
//           },
//         },
//         yaxis: {
//           title: {
//             text: Ytext,
//           },
//           labels: {
//             formatter: (value: any) => `${value}`,
//           },
//         },
//       },
//     });
//   }, []);

//   if (
//     !chartState.series.length ||
//     Object.keys(chartState.options).length === 0
//   ) {
//     return <div>Loading chart...</div>;
//   }

//   return (
//     <>
//       <div>
//         <h1 className="graph-title text-center font-semibold text-sm">
//           {title}
//         </h1>
//         <ReactApexChart
//           options={chartState.options}
//           series={chartState.series}
//           type="bar"
//           height={250}
//         />
//       </div>
//     </>
//   );
// }

// export default BarChart;



import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface chartProps {
  title: string;
  seriesData: any[];
  Xcategories: any[];
  Xtext: string;
  Ytext: string;
}

function BarChart({
  title,
  seriesData,
  Xcategories,
  Xtext,
  Ytext,
}: chartProps) {
  const [chartState, setChartState] = useState({
    series: [],
    options: {},
  });

  useEffect(() => {
    setChartState({
      series: [
        {
          data: seriesData,
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 250,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            barHeight: "100%",
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: "bottom",
            },
          },
        },
        colors: [
          "#31C48D",
          "#fdba74",
          "#9CA3AF",
          "#76A9FA",
          "#f9a8d4",
          "#33b2df",
          "#546E7A",
          "#d4526e",
          "#13d8aa",
          "#A5978B",
          "#2b908f",
          "#f9a3a4",
          "#90ee7e",
          "#f48024",
          "#69d2e7",
        ],
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
          formatter: function (val: any) {
            return `${val}%`; // Add '%' sign to data labels
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (value: any) {
              return `${value}%`; // Add '%' sign to tooltip
            },
          },
        },
        xaxis: {
          categories: Xcategories,
          title: {
            text: Xtext,
          },
          labels: {
            formatter: (value: any) => `${value}%`, // Add '%' sign to y-axis labels
          },
        },
        yaxis: {
          title: {
            text: Ytext,
          },
          labels: {
            formatter: (value: any) => `${value}`, // Add '%' sign to y-axis labels
          },
        },
      },
    });
  }, [seriesData, Xcategories, Xtext, Ytext]);

  if (
    !chartState.series.length ||
    Object.keys(chartState.options).length === 0
  ) {
    return <div>Loading chart...</div>;
  }

  return (
    <div>
      <h1 className="graph-title text-center font-semibold text-sm">
        {title}
      </h1>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="bar"
        height={250}
      />
    </div>
  );
}

export default BarChart;






