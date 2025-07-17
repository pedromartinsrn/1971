
(function() {
    const goldData = [
      {"Date":2023,"Price":1942.666},{"Date":2022,"Price":1800.602},{"Date":2021,"Price":1799.629},{"Date":2020,"Price":1770.254},{"Date":2019,"Price":1392.498},{"Date":2018,"Price":1269.227},{"Date":2017,"Price":1257.559},{"Date":2016,"Price":1248.988},{"Date":2015,"Price":1160.663},{"Date":2014,"Price":1265.578},{"Date":2013,"Price":1411.462},{"Date":2012,"Price":1669.518},{"Date":2011,"Price":1569.211},{"Date":2010,"Price":1224.664},{"Date":2009,"Price":972.966},{"Date":2008,"Price":871.707},{"Date":2007,"Price":696.72},{"Date":2006,"Price":604.336},{"Date":2005,"Price":444.843},{"Date":2004,"Price":409.212},{"Date":2003,"Price":363.509},{"Date":2002,"Price":309.972},{"Date":2001,"Price":270.989},{"Date":2000,"Price":279.032},{"Date":1999,"Price":278.768},{"Date":1998,"Price":294.161},{"Date":1997,"Price":331.096},{"Date":1996,"Price":387.696},{"Date":1995,"Price":384.164},{"Date":1994,"Price":384.012},{"Date":1993,"Price":359.77},{"Date":1992,"Price":343.733},{"Date":1991,"Price":362.183},{"Date":1990,"Price":383.467},{"Date":1989,"Price":381.432},{"Date":1988,"Price":437.048},{"Date":1987,"Price":446.473},{"Date":1986,"Price":367.694},{"Date":1985,"Price":317.908},{"Date":1984,"Price":360.478},{"Date":1983,"Price":422.53},{"Date":1982,"Price":375.797},{"Date":1981,"Price":459.754},{"Date":1980,"Price":607.864},{"Date":1979,"Price":306.668},{"Date":1978,"Price":193.239},{"Date":1977,"Price":147.721},{"Date":1976,"Price":124.816},{"Date":1975,"Price":161.029},{"Date":1974,"Price":159.245},{"Date":1973,"Price":97.326},{"Date":1972,"Price":58.159},{"Date":1971,"Price":40.804},{"Date":1970,"Price":35.942},{"Date":1969,"Price":41.083},{"Date":1968,"Price":38.925},{"Date":1967,"Price":34.95},{"Date":1966,"Price":35.13},{"Date":1965,"Price":35.12},{"Date":1964,"Price":35.1},{"Date":1963,"Price":35.09},{"Date":1962,"Price":35.23},{"Date":1961,"Price":35.25},{"Date":1960,"Price":35.27},{"Date":1959,"Price":35.1},{"Date":1958,"Price":35.1},{"Date":1957,"Price":34.95},{"Date":1956,"Price":34.99},{"Date":1955,"Price":35.03},{"Date":1954,"Price":35.04},{"Date":1953,"Price":34.84},{"Date":1952,"Price":34.6},{"Date":1951,"Price":34.72},{"Date":1950,"Price":34.72},{"Date":1949,"Price":31.69},{"Date":1948,"Price":34.71},{"Date":1947,"Price":34.71},{"Date":1946,"Price":34.71},{"Date":1945,"Price":34.71},{"Date":1944,"Price":33.85},{"Date":1943,"Price":33.85},{"Date":1942,"Price":33.85},{"Date":1941,"Price":33.85},{"Date":1940,"Price":33.85},{"Date":1939,"Price":34.42},{"Date":1938,"Price":34.85},{"Date":1937,"Price":34.79},{"Date":1936,"Price":34.87},{"Date":1935,"Price":34.84},{"Date":1934,"Price":34.69},{"Date":1933,"Price":26.33},{"Date":1932,"Price":20.69},{"Date":1931,"Price":17.06},{"Date":1930,"Price":20.65},{"Date":1929,"Price":20.63},{"Date":1928,"Price":20.66},{"Date":1927,"Price":20.64},{"Date":1926,"Price":20.63},{"Date":1925,"Price":20.64},{"Date":1924,"Price":20.69},{"Date":1923,"Price":21.32},{"Date":1922,"Price":20.66},{"Date":1921,"Price":20.58},{"Date":1920,"Price":20.68},{"Date":1919,"Price":19.95},{"Date":1918,"Price":18.99},{"Date":1917,"Price":18.99},{"Date":1916,"Price":18.99},{"Date":1915,"Price":18.99},{"Date":1914,"Price":18.99},{"Date":1913,"Price":18.92},{"Date":1912,"Price":18.93},{"Date":1911,"Price":18.92},{"Date":1910,"Price":18.92},{"Date":1909,"Price":18.96},{"Date":1908,"Price":18.95},{"Date":1907,"Price":18.94},{"Date":1906,"Price":18.9},{"Date":1905,"Price":18.92},{"Date":1904,"Price":18.96},{"Date":1903,"Price":18.95},{"Date":1902,"Price":18.97},{"Date":1901,"Price":18.98},{"Date":1900,"Price":18.96},{"Date":1899,"Price":18.94},{"Date":1898,"Price":18.98},{"Date":1897,"Price":18.98},{"Date":1896,"Price":18.98},{"Date":1895,"Price":18.93},{"Date":1894,"Price":18.94},{"Date":1893,"Price":18.96},{"Date":1892,"Price":18.96},{"Date":1891,"Price":18.96},{"Date":1890,"Price":18.94},{"Date":1889,"Price":18.93},{"Date":1888,"Price":18.94},{"Date":1887,"Price":18.94},{"Date":1886,"Price":18.94},{"Date":1885,"Price":18.94},{"Date":1884,"Price":18.94},{"Date":1883,"Price":18.94},{"Date":1882,"Price":18.94},{"Date":1881,"Price":18.94},{"Date":1880,"Price":18.94},{"Date":1879,"Price":18.94},{"Date":1878,"Price":18.94},{"Date":1877,"Price":18.94},{"Date":1876,"Price":18.94},{"Date":1875,"Price":18.94},{"Date":1874,"Price":18.94},{"Date":1873,"Price":18.94},{"Date":1872,"Price":18.94},{"Date":1871,"Price":18.93},{"Date":1870,"Price":18.93},{"Date":1869,"Price":18.93},{"Date":1868,"Price":18.93},{"Date":1867,"Price":18.93},{"Date":1866,"Price":18.93},{"Date":1865,"Price":18.93},{"Date":1864,"Price":18.93},{"Date":1863,"Price":18.93},{"Date":1862,"Price":18.93},{"Date":1861,"Price":18.93},{"Date":1860,"Price":18.93},{"Date":1859,"Price":18.93},{"Date":1858,"Price":18.93},{"Date":1857,"Price":18.93},{"Date":1856,"Price":18.93},{"Date":1855,"Price":18.93},{"Date":1854,"Price":18.93},{"Date":1853,"Price":18.93},{"Date":1852,"Price":18.93},{"Date":1851,"Price":18.93},{"Date":1850,"Price":18.93},{"Date":1849,"Price":18.93},{"Date":1848,"Price":18.93},{"Date":1847,"Price":18.93},{"Date":1846,"Price":18.93},{"Date":1845,"Price":18.93},{"Date":1844,"Price":18.93},{"Date":1843,"Price":18.93},{"Date":1842,"Price":18.93},{"Date":1841,"Price":18.93},{"Date":1840,"Price":18.93},{"Date":1839,"Price":18.93},{"Date":1838,"Price":18.93},{"Date":1837,"Price":18.93},{"Date":1836,"Price":18.93},{"Date":1835,"Price":18.93},{"Date":1834,"Price":18.93},{"Date":1833,"Price":18.93}
    ];
    const reversedGoldData = goldData.reverse();
    const years = reversedGoldData.map(item => item.Date);
    const goldPrices = reversedGoldData.map(item => item.Price);

    const tooltipConfig = window.innerWidth > 768 ? {
        trigger: 'axis',
        formatter: (params) => {
          const year = params[0].name;
          const price = params[0].value;
          return `<strong>${year}</strong><br/>` +
            ` ${
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
            const showLabels = [1833, 1971, 2023];
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
        nameLocation: 'end',
        name:"$/oz",
        min: 0,
        max: 2000,
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
        data: goldPrices,
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: 'rgb(208, 177, 3)',
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255, 217, 0, 0.77)' },
            { offset: 1, color: 'rgba(232, 232, 167, 0.23)' }
          ])
        },
        emphasis: {
          lineStyle: {
            width: 2,
            shadowColor: 'rgba(0, 0, 0, 0)',
            shadowBlur: 0
          }
        }
      }],
      grid: {
        left: '5%',
        right: '3%',
        bottom: '1%',
        top: '5%',
        containLabel: true
      }
    };
    
    
    const chart = echarts.init(document.getElementById('preco-ouro'));
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
  })();
  