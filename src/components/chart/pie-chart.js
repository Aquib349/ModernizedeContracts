import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
function SimplePieChart() {
    const [chartState, setChartState] = useState({
        series: [],
        options: {},
    });
    useEffect(() => {
        setChartState({
            series: [60, 40],
            options: {
                chart: {
                    width: 380,
                    type: "pie",
                    toolbar: {
                        show: false,
                    },
                },
                labels: ["Fulfilled Obligations", "Pending Obligations"],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
        });
    }, []);
    if (!chartState.series.length ||
        Object.keys(chartState.options).length === 0) {
        return _jsx("div", { children: "Loading chart..." });
    }
    return (_jsx(_Fragment, { children: _jsx(ReactApexChart, { options: chartState.options, series: chartState.series, type: "pie", width: 380 }) }));
}
export default SimplePieChart;
