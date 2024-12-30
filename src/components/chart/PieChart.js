import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
function PieChart({ title, series, labels, colors }) {
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
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("h1", { className: "graph-title text-center font-semibold text-sm", children: title }), _jsx(ReactApexChart, { type: "pie", height: 400, options: pieChart.options, series: pieChart.series })] }) }));
}
export default PieChart;
