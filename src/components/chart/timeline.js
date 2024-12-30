import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";
function Timeline() {
    const [chartState, setChartState] = useState({
        series: [],
        options: {},
    });
    useEffect(() => {
        setChartState({
            series: [
                {
                    data: [
                        {
                            x: "Contract",
                            y: [
                                new Date("2019-02-27").getTime(),
                                new Date("2019-03-04").getTime(),
                            ],
                            fillColor: "#008FFB",
                        },
                        {
                            x: "Renewal & Termination",
                            y: [
                                new Date("2019-03-04").getTime(),
                                new Date("2019-03-08").getTime(),
                            ],
                            fillColor: "#00E396",
                        },
                        {
                            x: "Payment milestones",
                            y: [
                                new Date("2019-03-07").getTime(),
                                new Date("2019-03-10").getTime(),
                            ],
                            fillColor: "#775DD0",
                        },
                        {
                            x: "Key deliverables",
                            y: [
                                new Date("2019-03-08").getTime(),
                                new Date("2019-03-12").getTime(),
                            ],
                            fillColor: "#FEB019",
                        },
                    ],
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: "rangeBar",
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        distributed: true,
                        dataLabels: {
                            hideOverflowingLabels: false,
                        },
                    },
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val, opts) {
                        const label = opts.w.globals.labels[opts.dataPointIndex];
                        const a = moment(val[0]);
                        const b = moment(val[1]);
                        const diff = b.diff(a, "days");
                        return `${label}: ${diff} ${diff > 1 ? "days" : "day"}`;
                    },
                    style: {
                        colors: ["#f3f4f5", "#fff"],
                    },
                },
                xaxis: {
                    type: "datetime",
                },
                yaxis: {
                    show: false,
                },
                grid: {
                    row: {
                        colors: ["#f3f4f5", "#fff"],
                        opacity: 1,
                    },
                },
            },
        });
    }, []);
    if (!chartState.series.length ||
        Object.keys(chartState.options).length === 0) {
        return _jsx("div", { children: "Loading chart..." });
    }
    return (_jsx(ReactApexChart, { options: chartState.options, series: chartState.series, type: "rangeBar", height: 350 }));
}
export default Timeline;
