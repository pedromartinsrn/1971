
(function() {
const Data = [
{"year":1947,"value":0.376},{"year":1948,"value":0.371},{"year":1949,"value":0.378},{"year":1950,"value":0.379},{"year":1951,"value":0.363},{"year":1952,"value":0.368},{"year":1953,"value":0.359},
{"year":1954,"value":0.371},{"year":1955,"value":0.363},{"year":1956,"value":0.358},{"year":1957,"value":0.351},{"year":1958,"value":0.354},{"year":1959,"value":0.361},{"year":1960,"value":0.364},
{"year":1961,"value":0.374},{"year":1962,"value":0.362},{"year":1963,"value":0.362},{"year":1964,"value":0.361},{"year":1965,"value":0.356},{"year":1966,"value":0.349},{"year":1967,"value":0.358},
{"year":1968,"value":0.348},{"year":1969,"value":0.349},{"year":1970,"value":0.353},{"year":1971,"value":0.355},{"year":1972,"value":0.359},{"year":1973,"value":0.356},{"year":1974,"value":0.355},
{"year":1975,"value":0.357},{"year":1976,"value":0.358},{"year":1977,"value":0.363},{"year":1978,"value":0.363},{"year":1979,"value":0.365},{"year":1980,"value":0.365},{"year":1981,"value":0.369},
{"year":1982,"value":0.38},{"year":1983,"value":0.382},{"year":1984,"value":0.383},{"year":1985,"value":0.389},{"year":1986,"value":0.392},{"year":1987,"value":0.393},{"year":1988,"value":0.395},
{"year":1989,"value":0.401},{"year":1990,"value":0.396},{"year":1991,"value":0.397},{"year":1992,"value":0.404},{"year":1993,"value":0.429},{"year":1994,"value":0.426},{"year":1995,"value":0.421},
{"year":1996,"value":0.425},{"year":1997,"value":0.429},{"year":1998,"value":0.43},{"year":1999,"value":0.429},{"year":2000,"value":0.433},{"year":2001,"value":0.435},{"year":2002,"value":0.434},
{"year":2003,"value":0.436},{"year":2004,"value":0.438},{"year":2005,"value":0.44},{"year":2006,"value":0.444},{"year":2007,"value":0.432},{"year":2008,"value":0.438},{"year":2009,"value":0.443},
{"year":2010,"value":0.44},{"year":2011,"value":0.45},{"year":2012,"value":0.451},{"year":2013,"value":0.455},{"year":2014,"value":0.452},{"year":2015,"value":0.448},{"year":2016,"value":0.452},
{"year":2017,"value":0.458},{"year":2018,"value":0.452},{"year":2019,"value":0.454},{"year":2020,"value":0.458},{"year":2021,"value":0.462},{"year":2022,"value":0.458},{"year":2023,"value":0.452}
]

const years = Data.map(item => item.year);
const values = Data.map(item => item.value);

const tooltipConfig = window.innerWidth > 768 ? {
    trigger: 'axis',
        axisPointer: {
            type: 'cross',
            formatter: (params) => {
                const year = params[0].name;
                const values = params[0].value;
                return `<strong>${year}</strong><br/>` +
                  ` ${
                    (function(p) {
                      return `$${p.toFixed(3)}`;
                    })(values)
                  }`;
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
                const showLabels = [1947, 1971, 2023];
                return showLabels.includes(Number(value)) ? value : '';
              }
        },
        axisTick: {
            show: false,
            alignWithLabel: true,
            interval: 0
          }
    },
    yAxis: {
        type: 'value',
        name:"Gini",
        nameLocation: "end",
        min: 0.30,
        max: 0.5,
        interval: 0.1,
        axisLabel: {
            fontSize: 14,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(45, 3, 15, 0.2)',
            },
        },
    },
    series: [{
        type: 'line',
        data: values,
        smooth: true,
        symbol: 'none',
        lineStyle: {
            color: 'rgb(117, 97, 52)',
            width: 2,
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(120, 114, 92, 0.67)' },
                { offset: 1, color: 'rgba(211, 182, 120, 0.08)' }
            ]),
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

const chart = echarts.init(document.getElementById('desigualdade-renda'));
chart.setOption(option);
window.addEventListener('resize', () => chart.resize());
})();