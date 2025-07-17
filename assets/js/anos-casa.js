
(function() {
  const data = [
    { year: 1950, years: 2.3 },
    { year: 1960, years: 2.6 },
    { year: 1970, years: 2.4 },
    { year: 1980, years: 3.8 },
    { year: 1990, years: 5.4 },
    { year: 2000, years: 7.0 },
    { year: 2010, years: 7.0 },
    { year: 2020, years: 6.9 }
  ];

  const years = data.map(item => item.year);
  const values = data.map(item => item.years);

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
      min: 0,
      max: 8,
      interval: 1,
      axisLabel: {
        show: false,
        fontSize: 14,
        formatter: function (value) {
          return value.toFixed(1);
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: "dashed",
          color: "#f3f3f3",
        },
      },
    },
    series: [
      {
        type: "bar",
        data: values,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(40, 184, 115)",
            },
            {
              offset: 1,
              color: "rgb(89, 219, 155)",
            },
          ]),
        },
        barWidth: "70%",
        label: {
          show: true,
          position: "top",
          fontSize: 14,
          fontWeight: "bold",
          formatter: function (params) {
            return params.value.toFixed(1);
          },
        },
      },
    ],
    grid: {
      left: "5%",
      right: "5%",
      bottom: "0%",
      top: "5%",
      containLabel: true,
    },
  };
  
  
  const chart = echarts.init(document.getElementById('anos-casa'));
  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
})();
