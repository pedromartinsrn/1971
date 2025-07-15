(function() {

    const data = [
{
    "1959": 11.0,
    "1960": 10.4,
    "1961": 11.6,
    "1962": 10.3,
    "1963": 10.7,
    "1964": 12.5,
    "1965": 11.7,
    "1966": 11.6,
    "1967": 11.8,
    "1968": 11.1,
    "1969": 11.8,
    "1970": 13.2,
    "1971": 13.0,
    "1972": 13.7,
    "1973": 14.8,
    "1974": 14.0,
    "1975": 12.0,
    "1976": 10.6,
    "1977": 11.4,
    "1978": 10.4,
    "1979": 10.1,
    "1980": 11.4,
    "1981": 12.4,
    "1982": 10.9,
    "1983": 10.1,
    "1984": 11.1,
    "1985": 8.6,
    "1986": 6.8,
    "1987": 8.4,
    "1988": 8.3,
    "1989": 7.7,
    "1990": 8.8,
    "1991": 9.8,
    "1992": 10.5,
    "1993": 9.0,
    "1994": 7.0,
    "1995": 6.0,
    "1996": 6.1,
    "1997": 6.1,
    "1998": 5.5,
    "1999": 3.7,
    "2000": 4.1,
    "2001": 3.7,
    "2002": 5.3,
    "2003": 5.0,
    "2004": 6.2,
    "2005": 2.5,
    "2006": 2.6,
    "2007": 2.4,
    "2008": 5.8,
    "2009": 5.4,
    "2010": 6.2,
    "2011": 7.2,
    "2012": 10.9,
    "2013": 4.5,
    "2014": 6.0,
    "2015": 5.8,
    "2016": 5.0,
    "2017": 5.0,
    "2018": 8.4,
    "2019": 6.2,
    "2020": 11.8,
    "2021": 6.0,
    "2022": 3.7,
    "2023": 4.4,
    "2024": 3.8
  }
];

    const years = Object.keys(data[0]).map(Number);
    const rates = Object.values(data[0]).map(Number);

    const tooltipConfig = window.innerWidth > 768 ? {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
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
                    const showLabels = [1959, 1971, 2024];
                    return showLabels.includes(Number(value)) ? value : "";
                  }
            },
        axisTick: {
          show: false
        }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 16,
            interval: 2,
            axisLabel: {
                fontSize: 14,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [{
            data: rates,
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                color: 'rgb(15, 37, 92)',
                width: 2
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(46, 123, 255, 0.3)'
                }, {
                    offset: 1,
                    color: 'rgba(112, 112, 112, 0)'
                }])
            }
        }],
        grid: {
            left: '5%',
            right: '3%',
            bottom: '0%',
            top: '3%',
            containLabel: true
        }
    };

    const chart = echarts.init(document.getElementById('taxa-poupanca'));
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
  })();