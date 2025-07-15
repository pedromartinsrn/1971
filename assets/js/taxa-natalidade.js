// Taxa de Natalidade Mundial
(function() {
  const data = [
    {year: 1950, rate: 4.852}, {year: 1951, rate: 4.816}, {year: 1952, rate: 5.001},
    {year: 1953, rate: 4.922}, {year: 1954, rate: 4.998}, {year: 1955, rate: 5.003},
    {year: 1956, rate: 4.931}, {year: 1957, rate: 5.068}, {year: 1958, rate: 4.932},
    {year: 1959, rate: 4.740}, {year: 1960, rate: 4.696}, {year: 1961, rate: 4.571},
    {year: 1962, rate: 5.022}, {year: 1963, rate: 5.308}, {year: 1964, rate: 5.123},
    {year: 1965, rate: 5.071}, {year: 1966, rate: 4.961}, {year: 1967, rate: 4.852},
    {year: 1968, rate: 4.963}, {year: 1969, rate: 4.866}, {year: 1970, rate: 4.825},
    {year: 1971, rate: 4.679}, {year: 1972, rate: 4.545}, {year: 1973, rate: 4.416},
    {year: 1974, rate: 4.259}, {year: 1975, rate: 4.080}, {year: 1976, rate: 3.974},
    {year: 1977, rate: 3.850}, {year: 1978, rate: 3.787}, {year: 1979, rate: 3.771},
    {year: 1980, rate: 3.744}, {year: 1981, rate: 3.711}, {year: 1982, rate: 3.712},
    {year: 1983, rate: 3.581}, {year: 1984, rate: 3.553}, {year: 1985, rate: 3.515},
    {year: 1986, rate: 3.504}, {year: 1987, rate: 3.476}, {year: 1988, rate: 3.390},
    {year: 1989, rate: 3.347}, {year: 1990, rate: 3.310}, {year: 1991, rate: 3.131},
    {year: 1992, rate: 3.044}, {year: 1993, rate: 2.980}, {year: 1994, rate: 2.933},
    {year: 1995, rate: 2.889}, {year: 1996, rate: 2.846}, {year: 1997, rate: 2.809},
    {year: 1998, rate: 2.776}, {year: 1999, rate: 2.750}, {year: 2000, rate: 2.754},
    {year: 2001, rate: 2.714}, {year: 2002, rate: 2.684}, {year: 2003, rate: 2.659},
    {year: 2004, rate: 2.647}, {year: 2005, rate: 2.630}, {year: 2006, rate: 2.625},
    {year: 2007, rate: 2.623}, {year: 2008, rate: 2.626}, {year: 2009, rate: 2.621},
    {year: 2010, rate: 2.602}, {year: 2011, rate: 2.588}, {year: 2012, rate: 2.607},
    {year: 2013, rate: 2.572}, {year: 2014, rate: 2.564}, {year: 2015, rate: 2.537},
    {year: 2016, rate: 2.536}, {year: 2017, rate: 2.504}, {year: 2018, rate: 2.437},
    {year: 2019, rate: 2.397}, {year: 2020, rate: 2.322}, {year: 2021, rate: 2.291},
    {year: 2022, rate: 2.265}, {year: 2023, rate: 2.251}
  ];

  const years = data.map(item => item.year);
  const rates = data.map(item => item.rate);

  const tooltipConfig = window.innerWidth > 768 ? {
    trigger: "axis",
    trigger: 'axis',
    formatter: (params) => {
      const year = params[0].name;
      const value = params[0].value;
      return `<strong>${year}</strong><br/>` +
        `${value.toFixed(1)}`;
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
        interval: function(index, value) {
          return [1950, 1971, 2023].includes(Number(value));
        }
      },
      axisTick: {
        show: false
      }
    },
    
    yAxis: {
      type: 'value',
      min: 1,
      max: 5.5,
      interval: 1,
      axisLabel: {
        fontSize: 14
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(45, 3, 15, 0.2)'
        }
      }
    },
    series: [{
      name: 'World',
      type: 'line',
      data: rates,
      symbol: 'circle',
      symbolSize: 1,
      smooth: true,
      itemStyle: {
        color: '#000'
      },
      symbol: "circle",
      itemStyle: {
        color: "rgb(29, 187, 199)"
      },
      lineStyle: {
        color: 'rgba(45, 3, 15, 0.75)',
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(51, 129, 237, 0.89)' },
          { offset: 1, color: 'rgba(46, 204, 215, 0.41)' }
        ])
      }
    }],
    
    grid: {
      left: '9%',
      right: '5%',
      bottom: '7%',
      top: '2%'
    }
  };
  
  const chart = echarts.init(document.getElementById('taxa-natalidade'));
  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
})();
