//Estoque de Gado
(function() {
    const Data = [
        {"year":1867,"inventory":30},{"year":1872,"inventory":35},{"year":1877,"inventory":40},{"year":1882,"inventory":45},{"year":1887,"inventory":50},
        {"year":1892,"inventory":55},{"year":1897,"inventory":60},{"year":1902,"inventory":65},{"year":1907,"inventory":70},{"year":1912,"inventory":75},
        {"year":1917,"inventory":80},{"year":1922,"inventory":85},{"year":1927,"inventory":90},{"year":1932,"inventory":95},{"year":1937,"inventory":100},
        {"year":1942,"inventory":105},{"year":1947,"inventory":110},{"year":1952,"inventory":115},{"year":1957,"inventory":120},{"year":1962,"inventory":125},
        {"year":1967,"inventory":130},{"year":1972,"inventory":135},{"year":1977,"inventory":140},{"year":1979,"inventory":135},{"year":1982,"inventory":130},
        {"year":1987,"inventory":125},{"year":1992,"inventory":120},{"year":1997,"inventory":115},{"year":2002,"inventory":110},{"year":2007,"inventory":105},
        {"year":2012,"inventory":100},{"year":2017,"inventory":95},{"year":2022,"inventory":90},{"year":2024,"inventory":87.1574}
    ];

const years = Data.map(item => item.year);
const values = Data.map(item => item.inventory);

const option = {
    xAxis: {
        type: "category",
        data: years,
        axisLabel: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#333333",
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: "value",
        axisLabel: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#333333",
        },
    },
    series: [
        {
            type: "line",
            data: values,
            smooth: true,
            symbol: "none",
            lineStyle: {
                color: "rgb(26, 137, 228)",
                width: 2,
            },
            itemStyle: {
                color: "rgb(26, 137, 228)",
            },
        },
    ],
    grid: {
        left: "5%",
        right: "3%",
        bottom: "0%",
        top: "3%",
        containLabel: true,
    },
};

const chart = echarts.init(document.getElementById("cattle-calves"));
chart.setOption(option);
window.addEventListener("resize", () => chart.resize());

})();
