export const ColourSelector = (color) => {
    const colorMap = {
        red: "bg-red-100 text-red-500",
        green: "bg-green-100 text-green-500",
        orange: "bg-orange-100 text-orange-500",
        indigo: "bg-indigo-100 text-indigo-500",
    };
    return colorMap[color] || "";
};
