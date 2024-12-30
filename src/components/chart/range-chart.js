import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
function RangeChart({ title, series, Xtitle, Ytitle }) {
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
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "graph-title text-center font-semibold text-sm", children: title }), _jsx(ReactApexChart, { options: rangeChart.options, series: rangeChart.series, type: "rangeBar", height: 250 })] }));
}
export default RangeChart;
