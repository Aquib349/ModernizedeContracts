import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function StackedColumnChart() {
    const [chartState, setChartState] = useState({
        series: [],
        options: {},
    });

    useEffect(() => {
        setChartState({
            series: [
                { name: "Complete", data: [44, 55, 41, 67] },
                { name: "Partially Complete", data: [13, 23, 20, 8] },
            ],
            options: {
                chart: {
                    type: "bar",
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: false, // Disable the toolbar
                    },
                },
                xaxis: {
                    categories: [
                        "Master Agreements",
                        "Dealer Contracts",
                        "Software Licensing",
                        "Service Agreements",
                    ],
                    title: {
                        text: "Contract Types", // X-axis title
                        style: {
                            fontSize: '12px',
                            // fontWeight: 'bold',
                        },
                    },
                },
                yaxis: {
                    title: {
                        text: "Number of contracts", // Y-axis title
                        style: {
                            fontSize: '14px',
                            fontWeight: 'bold',
                        },
                    },
                },
                legend: {
                    position: "right",
                },
                fill: {
                    opacity: 1,
                },
                plotOptions: {
                    bar: {
                        horizontal: false, // Ensures vertical bars
                    },
                },
                colors: ["#FFD54F", "#FFEB3B"],
            },
        });
    }, []);

    if (!chartState.series.length || Object.keys(chartState.options).length === 0) {
        return <div>Loading chart...</div>;
    }

    return (
        <div>
            <ReactApexChart
                key={JSON.stringify(chartState)}
                options={chartState.options}
                series={chartState.series}
                type="bar"
                height={350}
            />
        </div>
    );
}

export default StackedColumnChart;
