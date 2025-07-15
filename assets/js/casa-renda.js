// Aumento do preço das casas vs renda
(function() {
    const data = {
      years: [1960,1970,1980,1990,2000,2008,2010,2017],
      
      LAHomePrice: [0,7,97,219,100,373,279,358],
      LAMediumHouseIncome: [0,5,6,26,24,31,20,32],

      SFHomePrice: [0,43,161,396,381,476,389,531],
      SFMediumHouseIncome: [0,14,19,46,67,66,54,91],

      NYHomePrice: [0,24,35,176,108,242,207,184],
      NYMediumHouseIncome: [0,15,-3,23,48,52,41,54],

      BSHomePrice: [0,7,33,166,141,229,204,228],
      BSMediumHouseIncome: [0,20,19,54,51,64,52,71],
      
    };

    const tooltipConfig = window.innerWidth > 768 ? {
      trigger: "axis",
      formatter: (params) => {
        return (
          `<strong>${params[0].name}</strong><br/>` +
          params
            .map((param) => {
              const color = param.color;
              const value = param.value;
              return `<span style="color:${color}">●</span> ${param.seriesName}: ${value}`;
            })
            .join("<br/>")
        );
      }
    } : { show: false };
  
    const option = {
      legend: [
        {
          show: true,
          bottom: 35,
          type: 'plain',
          left: 'center',
          data: [
            { 
              name: "Preço da casa em LA",
              icon: 'rect'
            },
            { 
              name: "Preço da casa em SF",
              icon: 'rect'
            }
          ],
          textStyle: {
            fontSize: 14,
            color: '#333333',
          },
          itemGap: 25,
          itemWidth: 25,
          itemHeight: 2
        },
        {
          show: true,
          bottom: 15,
          type: 'plain',
          left: 'center',
          data: [
            { 
              name: "Renda em LA",
              icon: 'rect',
              lineStyle: {
                type: 'dashed',
                width: 2,
                dashArray: [2, 2]
              }
            },
            {
              name: "Renda em SF",
              icon: 'rect',
              lineStyle: {
                type: 'dashed',
                width: 2,
                dashArray: [2, 2]
              }
            }
          ],
          textStyle: {
            fontSize: 14,
            color: '#333333',
          },
          itemGap: 25,
          itemWidth: 25,
          itemHeight: 2
        }
      ],
      tooltip: {
        trigger: "axis",
        formatter: function(params) {
          return params[0].axisValue + '<br/>' + 
            params.map(function(item) {
              return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' 
                + item.color + '"></span>'
                + 'Aumento da ' + item.seriesName + ': '
                + item.value + '%';
            }).join('<br/>');
        },
        textStyle: {
          fontSize: 14
        }
      },
      xAxis: {
        type: "category",
        data: data.years,
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLabel: {
          rotate: 45,
          fontSize: 16,
          fontWeight: "bold",
          color: "#333333",
          interval: 0,
          formatter: (value) => {
            const showLabels = [1960, 1970, 2017];
            return showLabels.includes(Number(value)) ? value : "";
          },
        },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 550,
        interval: 50,
        axisLabel: {
          fontSize: 14,
          formatter: '{value}%'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#E0E0E0",
          },
        },
      },
      series: [
        {
          name: "Preço da casa em LA",
          type: "line",
          data: data.LAHomePrice,
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "rgb(233, 82, 36)",
            width: 2,
          },
          itemStyle: {
            color: "rgb(233, 82, 36)",
          },
        },
        {
          name: "Renda em LA",
          type: "line",
          data: data.LAMediumHouseIncome,
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "rgb(233, 82, 36)",
            width: 2,
            type: 'dashed'
          },
          itemStyle: {
            color: "rgb(233, 82, 36)",
          },
        },
        {
          name: "Preço da casa em SF",
          type: "line",
          data: data.SFHomePrice,
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
        {
          name: "Renda em SF",
          type: "line",
          data: data.SFMediumHouseIncome,
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "rgb(26, 137, 228)",
            width: 2,
            type: 'dashed'
          },
          itemStyle: {
            color: "rgb(26, 137, 228)",
          },
        },
      ],
      grid: {
        left: "5%",
        right: "5%",
        bottom: "15%",
        top: "5%",
        containLabel: true,
      },
    };
    
    
    const chart = echarts.init(document.getElementById('casa-renda'));
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
  })();
  