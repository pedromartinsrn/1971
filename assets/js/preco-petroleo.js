
(function() {
    const oilData = [
      {"Date":2023,"Price":76.1},{"Date":2022,"Price":93.97},{"Date":2021,"Price":65.84},{"Date":2020,"Price":36.86},{"Date":2019,"Price":55.59},{"Date":2018,"Price":61.4},{"Date":2017,"Price":48.05},{"Date":2016,"Price":38.29},{"Date":2015,"Price":44.39},{"Date":2014,"Price":87.39},{"Date":2013,"Price":95.99},{"Date":2012,"Price":94.52},{"Date":2011,"Price":95.73},{"Date":2010,"Price":74.71},{"Date":2009,"Price":56.35},{"Date":2008,"Price":94.04},{"Date":2007,"Price":66.52},{"Date":2006,"Price":59.69},{"Date":2005,"Price":50.28},{"Date":2004,"Price":36.77},{"Date":2003,"Price":27.56},{"Date":2002,"Price":22.51},{"Date":2001,"Price":21.84},{"Date":2000,"Price":26.72},{"Date":1999,"Price":15.56},{"Date":1998,"Price":10.87},{"Date":1997,"Price":17.23},{"Date":1996,"Price":18.46},{"Date":1995,"Price":14.62},{"Date":1994,"Price":13.19},{"Date":1993,"Price":14.25},{"Date":1992,"Price":15.99},{"Date":1991,"Price":16.54},{"Date":1990,"Price":20.03},{"Date":1989,"Price":15.86},{"Date":1988,"Price":12.58},{"Date":1987,"Price":15.4},{"Date":1986,"Price":12.51},{"Date":1985,"Price":24.09},{"Date":1984,"Price":25.88},{"Date":1983,"Price":26.19},{"Date":1982,"Price":28.52},{"Date":1981,"Price":31.77},{"Date":1980,"Price":21.59},{"Date":1979,"Price":12.64},{"Date":1978,"Price":9},{"Date":1977,"Price":8.57},{"Date":1976,"Price":8.19},{"Date":1975,"Price":7.67},{"Date":1974,"Price":6.87},{"Date":1973,"Price":3.89},{"Date":1972,"Price":3.39},{"Date":1971,"Price":3.39},{"Date":1970,"Price":3.18},{"Date":1969,"Price":3.09},{"Date":1968,"Price":2.94},{"Date":1967,"Price":2.92},{"Date":1966,"Price":2.88},{"Date":1965,"Price":2.86},{"Date":1964,"Price":2.88},{"Date":1963,"Price":2.89},{"Date":1962,"Price":2.9},{"Date":1961,"Price":2.89},{"Date":1960,"Price":2.88},{"Date":1959,"Price":2.9},{"Date":1958,"Price":3.01},{"Date":1957,"Price":3.09},{"Date":1956,"Price":2.79},{"Date":1955,"Price":2.77},{"Date":1954,"Price":2.78},{"Date":1953,"Price":2.68},{"Date":1952,"Price":2.53},{"Date":1951,"Price":2.53},{"Date":1950,"Price":2.51},{"Date":1949,"Price":2.54},{"Date":1948,"Price":2.6},{"Date":1947,"Price":1.93},{"Date":1946,"Price":1.41},{"Date":1945,"Price":1.22},{"Date":1944,"Price":1.21},{"Date":1943,"Price":1.2},{"Date":1942,"Price":1.19},{"Date":1941,"Price":1.14},{"Date":1940,"Price":1.02},{"Date":1939,"Price":1.02},{"Date":1938,"Price":1.13},{"Date":1937,"Price":1.18},{"Date":1936,"Price":1.09},{"Date":1935,"Price":0.97},{"Date":1934,"Price":1},{"Date":1933,"Price":0.67},{"Date":1932,"Price":0.87},{"Date":1931,"Price":0.65},{"Date":1930,"Price":1.19},{"Date":1929,"Price":1.27},{"Date":1928,"Price":1.17},{"Date":1927,"Price":1.3},{"Date":1926,"Price":1.88},{"Date":1925,"Price":1.68},{"Date":1924,"Price":1.43},{"Date":1923,"Price":1.34},{"Date":1922,"Price":1.61},{"Date":1921,"Price":1.73},{"Date":1920,"Price":3.07},{"Date":1919,"Price":2.01},{"Date":1918,"Price":1.98},{"Date":1917,"Price":1.56},{"Date":1916,"Price":1.1},{"Date":1915,"Price":0.64},{"Date":1914,"Price":0.81},{"Date":1913,"Price":0.95},{"Date":1912,"Price":0.74},{"Date":1911,"Price":0.61},{"Date":1910,"Price":0.61},{"Date":1909,"Price":0.7},{"Date":1908,"Price":0.72},{"Date":1907,"Price":0.72},{"Date":1906,"Price":0.73},{"Date":1905,"Price":0.62},{"Date":1904,"Price":0.86},{"Date":1903,"Price":0.94},{"Date":1902,"Price":0.8},{"Date":1901,"Price":0.96},{"Date":1900,"Price":1.19},{"Date":1899,"Price":1.13},{"Date":1898,"Price":0.8},{"Date":1897,"Price":0.68},{"Date":1896,"Price":0.96},{"Date":1895,"Price":1.09},{"Date":1894,"Price":0.72},{"Date":1893,"Price":0.6},{"Date":1892,"Price":0.51},{"Date":1891,"Price":0.56},{"Date":1890,"Price":0.77},{"Date":1889,"Price":0.77},{"Date":1888,"Price":0.65},{"Date":1887,"Price":0.67},{"Date":1886,"Price":0.71},{"Date":1885,"Price":0.88},{"Date":1884,"Price":0.85},{"Date":1883,"Price":1.1},{"Date":1882,"Price":0.78},{"Date":1881,"Price":0.92},{"Date":1880,"Price":0.94}
    ];
  

    const reversedOilData = oilData.reverse();
  
    const years = reversedOilData.map(item => item.Date);
    const oilPrices = reversedOilData.map(item => item.Price);
  
    const tooltipConfig = window.innerWidth > 768 ? {
      trigger: 'axis',
      formatter: (params) => {
        const year = params[0].name;
        const price = params[0].value;
        return `<strong>${year}</strong><br/>` +
          `${
            (function(p) {
              return `$${p.toFixed(0)}`;
            })(price)
          }`;
      }
  } : { show: false };

  
    const option = {
      tooltip: tooltipConfig,
      xAxis: {
        type: 'category',
        data: years,
        axisLabel: {
          rotate: 45,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#333333',
          interval: 0,
          formatter: (value) => {
            const showLabels = [1880, 1971, 2023];
            return showLabels.includes(Number(value)) ? value : '';
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        nameLocation: 'end',
        name: '$/barril',
        min: 0,
        max: 100,
        axisLabel: {
          fontSize: 14,
          formatter: function(value) {
            return `${value.toFixed(0)}`;
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#f3f3f3'
          }
        }
      },
      series: [{
        type: 'line',
        data: oilPrices,
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: '#333',
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(51, 51, 51, 0.3)' },
            { offset: 1, color: 'rgba(51, 51, 51, 0.1)' }
          ])
        }
      }],
      grid: {
        left: '5%',
        right: '5%',
        bottom: '1%',
        top: '5%',
        containLabel: true
      }
    };
    
    const chart = echarts.init(document.getElementById('preco-petroleo'));
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
  })();
  