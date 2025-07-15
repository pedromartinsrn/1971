// Share of Young Adults Living with a Parent
(function() {
    const Data = [
      {
        "1960": 29,
        "1971": 31,
        "1980": 32,
        "1990": 36,
        "2000": 38,
        "2010": 44,
        "2020": 52
      }
    ];
  
    const years = Object.keys(Data[0]);
    const percentages = Object.values(Data[0]);

    const tooltipConfig = window.innerWidth > 768 ? {
      trigger: "axis",
      formatter: (params) => {
        const year = params[0].name;
        const percentage = params[0].value;

        return `<strong>${year}</strong><br/>` +
          `<span style="color:#333">● </span>${percentage}%`;
      }
    } : { show: false };
  
    const option = {
      tooltip: tooltipConfig,
      xAxis: {
        type: "category",
        data: years,
        axisLabel: {
          rotate: 45,
          fontSize: 16,
          fontWeight: "bold",
          color: "#333333",
          interval: 0,
          formatter: (value) => {
            const showLabels = [1960, 1971, 2020];
            return showLabels.includes(Number(value)) ? value : "";
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        show: false,
        name: "%",
        min: 20,
        max: 60,
        nameLocation: "end",
        axisLabel: {
          fontSize: 14,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#f3f3f3",
          },
        },
      },
      series: [
        {
          type: "line",
          data: percentages,
          smooth: true,
          symbol: "circle",
          itemStyle: {
            color: "rgb(29, 187, 199)"
          },
          lineStyle: {
            color: "rgb(40, 184, 182)",
            width: 2,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(13, 182, 244, 0.3)" },
              { offset: 1, color: "rgba(40, 184, 115, 0.1)" },
            ])
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            color: '#333'
          }
        },
      ],
      grid: {
        left: "5%",
        right: "5%",
        bottom: "1%",
        top: "7%",
        containLabel: true,
      },
    };
  
    const chart = echarts.init(document.getElementById("jovens-morando"));
    chart.setOption(option);
    window.addEventListener("resize", () => chart.resize());
  })();