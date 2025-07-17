
(function() {
    const Data =
        [{"1948":49.3,"1949":49.7,"1950":49.3,"1951":49.9,"1952":50.9,"1953":51.6,"1954":50.9,"1955":50.1,"1956":50.7,"1957":50.6,
            "1958":50.2,"1959":49.8,"1960":50.2,"1961":49.8,"1962":49.5,"1963":49.3,"1964":49.3,"1965":49,"1966":49.5,"1967":50.1,
            "1968":50.3,"1969":51,"1970":51.6,"1971":50.6,"1972":50.2,"1973":49.9,"1974":50.2,"1975":48.7,"1976":48.5,"1977":48.2,
            "1978":48.1,"1979":48.5,"1980":48.8,"1981":47.7,"1982":47.6,"1983":46.9,"1984":46.2,"1985":46.3,"1986":46.7,"1987":46.9,
            "1988":46.6,"1989":46.3,"1990":46.7,"1991":46.4,"1992":46.3,"1993":45.9,"1994":45.3,"1995":45.3,"1996":45.1,"1997":45.2,
            "1998":45.8,"1999":46.1,"2000":46.6,"2001":46.3,"2002":45.3,"2003":44.7,"2004":44.2,"2005":43.4,"2006":43.1,"2007":44.2,
            "2008":44.8,"2009":43.7,"2010":42.5,"2011":42.4,"2012":42.2,"2013":42,"2014":42.1,"2015":42.7,"2016":43.1,"2017":43.3,
            "2018":43.2,"2019":43.4,"2020":44.5,"2021":43.5,"2022":42.6,"2023":42.6}];
  
    const years = Object.keys(Data[0]);
    const values = Object.values(Data[0]);
    
    const tooltipConfig = window.innerWidth > 768 ? {
        trigger: "axis",
        formatter: (params) => {
          const year = params[0].name;
          const value = params[0].value;
  
          return `<strong>${year}</strong><br/>` +
            `${value}`;
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
            const showLabels = [1948,1971, 2023];
            return showLabels.includes(Number(value)) ? value : "";
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        name: "%",
        min: 40,
        max: 54,
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
          data: values,
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "rgb(102, 98, 104)",
            width: 2,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(81, 67, 85, 0.3)" },
              { offset: 1, color: "rgba(66, 66, 66, 0.1)" },
            ])
          },
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
  
    const chart = echarts.init(document.getElementById("remuneracao-pib"));
    chart.setOption(option);
    window.addEventListener("resize", () => chart.resize());
  })();