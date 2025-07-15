(function() {
const data = [
    {
      "year": 2024,
      "men_median_age": 30.2,
      "women_median_age": 28.6
    },
    {
      "year": 2023,
      "men_median_age": 30.2,
      "women_median_age": 28.4
    },
    {
      "year": 2022,
      "men_median_age": 30.1,
      "women_median_age": 28.2
    },
    {
      "year": 2021,
      "men_median_age": 30.3,
      "women_median_age": 28.6
    },
    {
      "year": 2020,
      "men_median_age": 30.5,
      "women_median_age": 28.1
    },
    {
      "year": 2019,
      "men_median_age": 29.8,
      "women_median_age": 28.0
    },
    {
      "year": 2018,
      "men_median_age": 29.8,
      "women_median_age": 27.8
    },
    {
      "year": 2017,
      "men_median_age": 29.5,
      "women_median_age": 27.4
    },
    {
      "year": 2016,
      "men_median_age": 29.5,
      "women_median_age": 27.4
    },
    {
      "year": 2015,
      "men_median_age": 29.2,
      "women_median_age": 27.1
    },
    {
      "year": 2014,
      "men_median_age": 29.3,
      "women_median_age": 27.0
    },
    {
      "year": 2013,
      "men_median_age": 29.0,
      "women_median_age": 26.6
    },
    {
      "year": 2012,
      "men_median_age": 28.6,
      "women_median_age": 26.6
    },
    {
      "year": 2011,
      "men_median_age": 28.4,
      "women_median_age": 26.4
    },
    {
      "year": 2010,
      "men_median_age": 28.2,
      "women_median_age": 26.1
    },
    {
      "year": 2009,
      "men_median_age": 28.1,
      "women_median_age": 25.9
    },
    {
      "year": 2008,
      "men_median_age": 27.6,
      "women_median_age": 25.9
    },
    {
      "year": 2007,
      "men_median_age": 27.5,
      "women_median_age": 25.6
    },
    {
      "year": 2006,
      "men_median_age": 27.5,
      "women_median_age": 25.5
    },
    {
      "year": 2005,
      "men_median_age": 27.1,
      "women_median_age": 25.3
    },
    {
      "year": 2004,
      "men_median_age": 27.4,
      "women_median_age": 25.3
    },
    {
      "year": 2003,
      "men_median_age": 27.1,
      "women_median_age": 25.3
    },
    {
      "year": 2002,
      "men_median_age": 26.9,
      "women_median_age": 25.3
    },
    {
      "year": 2001,
      "men_median_age": 26.9,
      "women_median_age": 25.1
    },
    {
      "year": 2000,
      "men_median_age": 26.8,
      "women_median_age": 25.1
    },
    {
      "year": 1999,
      "men_median_age": 26.9,
      "women_median_age": 25.1
    },
    {
      "year": 1998,
      "men_median_age": 26.7,
      "women_median_age": 25.0
    },
    {
      "year": 1997,
      "men_median_age": 26.8,
      "women_median_age": 25.0
    },
    {
      "year": 1996,
      "men_median_age": 27.1,
      "women_median_age": 24.8
    },
    {
      "year": 1995,
      "men_median_age": 26.9,
      "women_median_age": 24.5
    },
    {
      "year": 1994,
      "men_median_age": 26.7,
      "women_median_age": 24.5
    },
    {
      "year": 1993,
      "men_median_age": 26.5,
      "women_median_age": 24.5
    },
    {
      "year": 1992,
      "men_median_age": 26.5,
      "women_median_age": 24.4
    },
    {
      "year": 1991,
      "men_median_age": 26.3,
      "women_median_age": 24.1
    },
    {
      "year": 1990,
      "men_median_age": 26.1,
      "women_median_age": 23.9
    },
    {
      "year": 1989,
      "men_median_age": 26.2,
      "women_median_age": 23.8
    },
    {
      "year": 1988,
      "men_median_age": 25.9,
      "women_median_age": 23.6
    },
    {
      "year": 1987,
      "men_median_age": 25.8,
      "women_median_age": 23.6
    },
    {
      "year": 1986,
      "men_median_age": 25.7,
      "women_median_age": 23.1
    },
    {
      "year": 1985,
      "men_median_age": 25.5,
      "women_median_age": 23.3
    },
    {
      "year": 1984,
      "men_median_age": 25.4,
      "women_median_age": 23.0
    },
    {
      "year": 1983,
      "men_median_age": 25.4,
      "women_median_age": 22.8
    },
    {
      "year": 1982,
      "men_median_age": 25.2,
      "women_median_age": 22.5
    },
    {
      "year": 1981,
      "men_median_age": 24.8,
      "women_median_age": 22.3
    },
    {
      "year": 1980,
      "men_median_age": 24.7,
      "women_median_age": 22.0
    },
    {
      "year": 1979,
      "men_median_age": 24.4,
      "women_median_age": 22.1
    },
    {
      "year": 1978,
      "men_median_age": 24.2,
      "women_median_age": 21.8
    },
    {
      "year": 1977,
      "men_median_age": 24.0,
      "women_median_age": 21.6
    },
    {
      "year": 1976,
      "men_median_age": 23.8,
      "women_median_age": 21.3
    },
    {
      "year": 1975,
      "men_median_age": 23.5,
      "women_median_age": 21.1
    },
    {
      "year": 1974,
      "men_median_age": 23.1,
      "women_median_age": 21.1
    },
    {
      "year": 1973,
      "men_median_age": 23.2,
      "women_median_age": 21.0
    },
    {
      "year": 1972,
      "men_median_age": 23.3,
      "women_median_age": 20.9
    },
    {
      "year": 1971,
      "men_median_age": 23.1,
      "women_median_age": 20.9
    },
    {
      "year": 1970,
      "men_median_age": 23.2,
      "women_median_age": 20.8
    },
    {
      "year": 1969,
      "men_median_age": 23.2,
      "women_median_age": 20.8
    },
    {
      "year": 1968,
      "men_median_age": 23.1,
      "women_median_age": 20.8
    },
    {
      "year": 1967,
      "men_median_age": 23.1,
      "women_median_age": 20.6
    },
    {
      "year": 1966,
      "men_median_age": 22.8,
      "women_median_age": 20.5
    },
    {
      "year": 1965,
      "men_median_age": 22.8,
      "women_median_age": 20.6
    },
    {
      "year": 1964,
      "men_median_age": 23.1,
      "women_median_age": 20.5
    },
    {
      "year": 1963,
      "men_median_age": 22.8,
      "women_median_age": 20.5
    },
    {
      "year": 1962,
      "men_median_age": 22.7,
      "women_median_age": 20.3
    },
    {
      "year": 1961,
      "men_median_age": 22.8,
      "women_median_age": 20.3
    },
    {
      "year": 1960,
      "men_median_age": 22.8,
      "women_median_age": 20.3
    },
    {
      "year": 1959,
      "men_median_age": 22.5,
      "women_median_age": 20.2
    },
    {
      "year": 1958,
      "men_median_age": 22.6,
      "women_median_age": 20.2
    },
    {
      "year": 1957,
      "men_median_age": 22.6,
      "women_median_age": 20.3
    },
    {
      "year": 1956,
      "men_median_age": 22.5,
      "women_median_age": 20.1
    },
    {
      "year": 1955,
      "men_median_age": 22.6,
      "women_median_age": 20.2
    },
    {
      "year": 1954,
      "men_median_age": 23.0,
      "women_median_age": 20.3
    },
    {
      "year": 1953,
      "men_median_age": 22.8,
      "women_median_age": 20.2
    },
    {
      "year": 1952,
      "men_median_age": 23.0,
      "women_median_age": 20.2
    },
    {
      "year": 1951,
      "men_median_age": 22.9,
      "women_median_age": 20.4
    },
    {
      "year": 1950,
      "men_median_age": 22.8,
      "women_median_age": 20.3
    },
    {
      "year": 1949,
      "men_median_age": 22.7,
      "women_median_age": 20.3
    },
    {
      "year": 1948,
      "men_median_age": 23.3,
      "women_median_age": 20.4
    },
    {
      "year": 1947,
      "men_median_age": 23.7,
      "women_median_age": 20.5
    }
  ];
  
    const reversedData = data.reverse();
  
    const years = reversedData.map(item => item.year);
    const men = reversedData.map(item => item.men_median_age);
    const women = reversedData.map(item => item.women_median_age);

    const tooltipConfig = window.innerWidth > 768 ? {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        }
    } : { show: false };
  
    const option = {
      tooltip: tooltipConfig,
      legend: {
        bottom: 15,
        data: ["Homens", "Mulheres"],
      },
      xAxis: {
        type: "category",
        data: years,
        axisTick: {
            show: false,
          alignWithLabel: true,
        },
        axisLabel: {
          rotate: 45,
          fontSize: 16,
          fontWeight: "bold",
          color: "#333333",
          interval: 0,
          formatter: (value) => {
            const showLabels = [1948, 1971, 2023];
            return showLabels.includes(Number(value)) ? value : "";
          },
        },
      },
      yAxis: {
        type: "value",
        min: 18,
        max: 33,
      },
      series: [
        {
          name: "Homens",
          type: "line",
          data: men,
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
          name: "Mulheres",
          type: "line",
          data: women,
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "rgb(255, 0, 0)",
            width: 2,
          },
          itemStyle: {
            color: "rgb(255, 0, 0)",
          },
        },
      ],
    };
  
    const chart = echarts.init(document.getElementById("primeiro-casamento"));
    chart.setOption(option);

    window.addEventListener("resize", () => chart.resize());
  })();