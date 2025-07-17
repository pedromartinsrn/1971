
(function() {
    const data = {
        years: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        Average_Compensation_top_100_CEOS: [1.5, 1.55, 1.6, 1.65, 1.7, 1.7, 1.8, 1.9, 2.0, 2.2, 2.5, 2.7, 2.9, 3.2, 3.6, 4.0, 4.5, 5.0, 5.8, 6.5, 7.0, 8.0, 9.5, 11.0, 12.5, 15.0, 18.0, 22.0, 30.0, 40.0],
        Compensation_of_CEO_ranked_100: [0.7, 0.7, 0.72, 0.72, 0.7, 0.7, 0.75, 0.8, 0.85, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.7, 1.9, 2.1, 2.3, 2.5, 2.9, 3.5, 4.0, 4.5, 5.0, 6.0, 7.0, 8.5, 10.0],
        CEO_Salary_Bonus_ranked_10: [2.0, 2.05, 2.1, 2.15, 2.2, 2.2, 2.3, 2.4, 2.5, 2.6, 3.0, 3.3, 3.6, 4.0, 4.5, 5.0, 5.8, 6.8, 7.8, 8.5, 9.0, 11.0, 13.0, 15.0, 17.0, 20.0, 23.0, 26.0, 28.0, 30.0],
        Average_salary_right_scale: [21000, 22000, 23000, 24000, 26000, 30000, 32000, 34000, 36000, 38000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000, 45000]
    };

    const tooltipConfig = window.innerWidth > 768 ? {
        trigger: "axis",
        formatter: (params) => {
            return (
                `<strong>${params[0].name}</strong><br/>` +
                params
                    .map((param) => {
                        const color = param.color;
                        const value = param.seriesName === "Average salary" 
                            ? `$${param.value.toLocaleString()}`
                            : `$${param.value}M`;
                        return `<span style="color:${color}">●</span> ${param.seriesName}: ${value}`;
                    })
                    .join("<br/>")
            );
        }
    } : { show: false };
  
    const option = {
        legend: {
            show: true,
            bottom: 15,
            textStyle: { fontSize: 14, color: '#333333' },
            itemWidth: 15,
            itemHeight: 2,
            itemGap: 25,
        },
        tooltip: tooltipConfig,
        xAxis: {
            type: "category",
            data: data.years,
            boundaryGap: false,
            axisTick: { show: false },
            axisLabel: {
                rotate: 45,
                fontSize: 16,
                fontWeight: "bold",
                color: "#333333",
                interval: 0,
                formatter: (value) => [1970, 1999].includes(Number(value)) ? value : ""
            },
        },
        yAxis: [
            {
                type: "value",
                name: "CEOs pay (millions of 1999 dollars)",
                min: 0,
                max: 40,
                interval: 5,
                axisLabel: { 
                    fontSize: 14,
                    formatter: (value) => `$${value}M`
                },
                splitLine: {
                    show: true,
                    lineStyle: { type: "dashed", color: "#E0E0E0" },
                },
            },
            {
                type: "value",
                name: "Average salary",
                min: 21000,
                max: 45000,
                interval: 3000,
                position: 'right',
                axisLabel: {
                    fontSize: 14,
                    formatter: (value) => `$${value.toLocaleString()}`
                },
                splitLine: { show: false },
            }
        ],
        series: [
            {
                name: "Average Compensation of top 100 CEOs",
                type: "line",
                data: data.Average_Compensation_top_100_CEOS,
                smooth: true,
                symbol: "circle",
                lineStyle: { color: "rgb(26, 137, 228)", width: 2 },
                itemStyle: { color: "rgb(26, 137, 228)" },
            },
            {
                name: "Compensation of CEO ranked 100",
                type: "line",
                data: data.Compensation_of_CEO_ranked_100,
                smooth: true,
                symbol: "plus",
                lineStyle: { color: "rgb(86, 202, 90)", width: 2 },
                itemStyle: { color: "rgb(86, 202, 90)" },
            },
            {
                name: "CEO Salary+Bonus ranked 10",
                type: "line",
                data: data.CEO_Salary_Bonus_ranked_10,
                smooth: true,
                symbol: "none",
                lineStyle: { 
                    color: "rgb(233, 82, 36)", 
                    width: 2,
                    type: 'dashed'
                },
                itemStyle: { color: "rgb(233, 82, 36)" },
            },
            {
                name: "Average salary",
                type: "line",
                yAxisIndex: 1,
                data: data.Average_salary_right_scale,
                smooth: true,
                symbol: "none",
                lineStyle: { 
                    color: "#999999", 
                    width: 1
                },
                itemStyle: { color: "#999999" },
            }
        ],
        grid: {
            left: "10%",
            right: "10%",
            bottom: "15%",
            top: "5%",
            containLabel: true,
        },
    };
    
    const chart = echarts.init(document.getElementById('salarios-ceo-normal'));
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
})();
  