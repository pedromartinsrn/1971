
(function() {
    const data = {
      years: [1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
      
      male: [149,157,173,182,187,200,211,211,209,209,217,217,227,236,263,252,239,217,202,200,193,191,202,205,211,211,208,208,211,218,217,218,221,229,228,230,234,229,225,219,213,201,195,187,192,191,189,185,191,202,220,238,255,261,264,275,304,337,354,370,397,426,453,482,535,575,606,642,698,753,789,819,853,885,913,915,896,906,917,923,932,948,955,956,952,948,932,909,903,890],
      
      total: [79,83,91,96,98,104,110,110,109,109,113,113,118,123,137,131,124,112,103,100,98,99,105,106,109,109,107,107,108,112,112,112,113,117,117,117,119,117,114,111,108,102,98,94,97,96,95,93,96,102,111,120,129,132,133,139,154,171,179,188,202,217,231,247,276,297,313,332,359,389,411,427,444,461,463,469,470,476,483,487,492,501,506,506,504,500,492,480,477,471],
      
      female: [6,6,7,8,8,8,7,7,7,7,8,8,8,8,10,10,9,9,9,9,9,8,9,8,8,8,8,8,8,8,8,9,8,8,8,8,8,8,8,8,8,7,6,6,6,5,6,6,6,7,8,9,10,10,10,11,12,14,15,16,17,20,22,24,29,32,34,36,41,45,47,51,54,57,59,59,58,60,62,64,65,68,69,69,67,66,65,63,65,65]
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
              return `<span style="color:${color}">●</span> ${value} por 100.000`;
            })
            .join("<br/>")
        );
      }
    } : { show: false };
  
    const option = {
      legend: {
        show: true,
        bottom: 15,
        textStyle: {
          fontSize: 14,
          color: '#333333',
        },
        itemWidth: 15,
        itemHeight: 2,
        itemGap: 25,
      },
      tooltip: tooltipConfig,
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
            const showLabels = [1925, 1971, 2014];
            return showLabels.includes(Number(value)) ? value : "";
          },
        },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 1000,
        interval: 100,
        axisLabel: {
          fontSize: 14,
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
          name: "Homens",
          type: "line",
          data: data.male,
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
          name: "Média",
          type: "line",
          data: data.total,
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "rgb(86, 202, 90)",
            width: 2,
          },
          itemStyle: {
            color: "rgb(86, 202, 90)",
          },
        },
        {
          name: "Mulheres",
          type: "line",
          data: data.female,
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
      ],
      grid: {
        left: "5%",
        right: "5%",
        bottom: "10%",
        top: "5%",
        containLabel: true,
      },
    };
    
    
    const chart = echarts.init(document.getElementById('taxa-encarceramento'));
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
  })();
  