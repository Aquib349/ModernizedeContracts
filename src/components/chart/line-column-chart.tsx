import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function LineColumnChart() {
    const [chartOptions, setChartOptions] = useState({
        series: [],
        options: {}
    });

    useEffect(() => {
        setChartOptions({
            series: [
                {
                    name: "Number of Issues",
                    type: "column",
                    data: [10, 5, 3, 7], // 4 data points
                },
                {
                    name: "Social Media",
                    type: "line",
                    data: [1, 4, 7, 10], // 4 data points
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: "line",
                    toolbar: {
                        show: false, // Disable the toolbar
                    },
                },
                stroke: {
                    width: [0, 4], // Column has width 0, line has width 4
                },
                title: {
                    text: "Traffic Sources",
                },
                colors: ["#FFA726", "#FFEB3B"], // Bar is orange (#FFA726), line is yellow (#FFEB3B)
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1], // Enable data labels only on the line series
                },
                labels: [
                    "SLA Disputes",
                    "Payment Delays",
                    "Compliance Violations",
                    "Scope Changes",
                ], // 4 categories
                yaxis: [
                    {
                        title: {
                            text: "Website Blog", // Y-axis title for column
                        },
                    },
                    {
                        opposite: true, // Displays on the right side
                        title: {
                            text: "Social Media", // Y-axis title for line
                        },
                    },
                ],
            },
        });
    }, []);

    if (!chartOptions.series.length || Object.keys(chartOptions.options).length === 0) {
        return <div>Loading chart...</div>;
    }

    return (
        <div>
            <ReactApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                type="line"
                height={350}
            />
        </div>
    );
}

export default LineColumnChart;
