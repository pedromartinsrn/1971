(function() {

    const data = [

{
    "1955": 255300000,
    "1956": 785400000,
    "1957": 413300000,
    "1958": 199800000,
    "1959": 140700000,
    "1960": 489000000,
    "1961": 375000000,
    "1962": 430900000,
    "1963": 571000000,
    "1964": 738800000,
    "1965": 451200000,
    "1966": 221400000,
    "1967": 184100000,
    "1968": 69800000,
    "1969": 201700000,
    "1970": 167700000,
    "1971": -288200000,
    "1972": -449100000,
    "1973": 657600000,
    "1974": -1080900000,
    "1975": 84900000,
    "1976": -1373700000,
    "1977": -3456000000,
    "1978": -2927500000,
    "1979": -4533100000,
    "1980": -3112600000,
    "1981": -1814000000,
    "1982": -3655200000,
    "1983": -6734800000,
    "1984": -8033700000,
    "1985": -17373400000,
    "1986": -12744400000,
    "1987": -13168700000,
    "1988": -12140900000,
    "1989": -6842000000,
    "1990": -6185800000,
    "1991": -6175700000,
    "1992": -7407700000,
    "1993": -8114000000,
    "1994": -12259000000,
    "1995": -11895000000,
    "1996": -16594000000,
    "1997": -16809000000,
    "1998": -19878000000,
    "1999": -30606000000,
    "2000": -37857000000,
    "2001": -30458000000,
    "2002": -46671000000,
    "2003": -47481000000,
    "2004": -58798600000,
    "2005": -69454800000,
    "2006": -68328000000,
    "2007": -68143000000,
    "2008": -51242000000,
    "2009": -49327000000,
    "2010": -54251000000,
    "2011": -63916000000,
    "2012": -55473000000,
    "2013": -55447000000,
    "2014": -63917000000,
    "2015": -61258999999,
    "2016": -63486000000,
    "2017": -71826000000,
    "2018": -79529000000,
    "2019": -68358999999,
    "2020": -82243000000,
    "2021": -99613999999,
    "2022": -92150000000,
    "2023": -87561000000,
    "2024": -103504000000
  }];

    
const years = Object.keys(data[0]);
const values = Object.values(data[0]);


const tooltipConfig = window.innerWidth > 768 ? {
    trigger: 'axis',
    formatter: (params) => `<strong>${params[0].name}</strong><br/>${params[0].value/1000000000} bilhões`
  } : { show: false };
  
  const option = {
    tooltip: tooltipConfig,
    xAxis: {
      type: 'category',
      data: years,
      axisLabel: {
        rotate: 45,
        fontSize: 12
      },
      axisLabel: {
        rotate: 45,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        interval: 0,
        formatter: (value) => {
          const showLabels = [1955, 1971, 2024];
          return showLabels.includes(Number(value)) ? value : '';
        }
      },
      axisTick: {
        show: false,
        alignWithLabel: true,
        interval: 0
      },
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: (value) => (value/1000000000).toFixed(0),
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      data: values,
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: {
        color: 'rgb(75, 6, 105)',
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(165, 33, 202, 0.3)'
        }, {
          offset: 1,
          color: 'rgba(112, 112, 112, 0)'
        }])
      }
    }],
    grid: {
      left: '5%',
      right: '5%',
      bottom: '1%',
      top: '3%',
      containLabel: true
    }
  };
  
  const chart = echarts.init(document.getElementById('balanca-produtos'));
  chart.setOption(option);
  window.addEventListener('resize', () => chart.resize());
  })();