
(function() {
  const data = [
    {year: 1774, rate: 7.82}, {year: 1775, rate: 7.41}, {year: 1776, rate: 8.46},
    {year: 1777, rate: 10.31}, {year: 1778, rate: 13.38}, {year: 1779, rate: 11.84},
    {year: 1780, rate: 13.29}, {year: 1781, rate: 10.72}, {year: 1782, rate: 11.76},
    {year: 1783, rate: 10.31}, {year: 1784, rate: 9.91}, {year: 1785, rate: 9.43},
    {year: 1786, rate: 9.19}, {year: 1787, rate: 9.02}, {year: 1788, rate: 8.62},
    {year: 1789, rate: 8.54}, {year: 1790, rate: 8.86}, {year: 1791, rate: 9.10},
    {year: 1792, rate: 9.27}, {year: 1793, rate: 9.59}, {year: 1794, rate: 10.64},
    {year: 1795, rate: 12.17}, {year: 1796, rate: 12.81}, {year: 1797, rate: 12.33},
    {year: 1798, rate: 11.92}, {year: 1799, rate: 11.92}, {year: 1800, rate: 12.17},
    {year: 1801, rate: 12.33}, {year: 1802, rate: 10.39}, {year: 1803, rate: 10.96},
    {year: 1804, rate: 11.44}, {year: 1805, rate: 11.36}, {year: 1806, rate: 11.84},
    {year: 1807, rate: 11.20}, {year: 1808, rate: 12.17}, {year: 1809, rate: 11.92},
    {year: 1810, rate: 11.92}, {year: 1811, rate: 12.73}, {year: 1812, rate: 12.89},
    {year: 1813, rate: 15.47}, {year: 1814, rate: 17.00}, {year: 1815, rate: 14.91},
    {year: 1816, rate: 13.62}, {year: 1817, rate: 12.89}, {year: 1818, rate: 12.33},
    {year: 1819, rate: 12.33}, {year: 1820, rate: 11.36}, {year: 1821, rate: 10.96},
    {year: 1822, rate: 11.36}, {year: 1823, rate: 10.15}, {year: 1824, rate: 9.35},
    {year: 1825, rate: 9.59}, {year: 1826, rate: 9.59}, {year: 1827, rate: 9.67},
    {year: 1828, rate: 9.19}, {year: 1829, rate: 9.02}, {year: 1830, rate: 8.94},
    {year: 1831, rate: 8.38}, {year: 1832, rate: 8.30}, {year: 1833, rate: 8.14},
    {year: 1834, rate: 8.30}, {year: 1835, rate: 8.54}, {year: 1836, rate: 9.02},
    {year: 1837, rate: 9.27}, {year: 1838, rate: 9.02}, {year: 1839, rate: 9.02},
    {year: 1840, rate: 8.38}, {year: 1841, rate: 8.46}, {year: 1842, rate: 7.90},
    {year: 1843, rate: 7.17}, {year: 1844, rate: 7.25}, {year: 1845, rate: 7.33},
    {year: 1846, rate: 7.41}, {year: 1847, rate: 7.98}, {year: 1848, rate: 7.65},
    {year: 1849, rate: 7.41}, {year: 1850, rate: 7.57}, {year: 1851, rate: 7.41},
    {year: 1852, rate: 7.49}, {year: 1853, rate: 7.49}, {year: 1854, rate: 8.14},
    {year: 1855, rate: 8.38}, {year: 1856, rate: 8.22}, {year: 1857, rate: 8.46},
    {year: 1858, rate: 7.98}, {year: 1859, rate: 8.06}, {year: 1860, rate: 8.06},
    {year: 1861, rate: 8.54}, {year: 1862, rate: 9.75}, {year: 1863, rate: 12.17},
    {year: 1864, rate: 15.23}, {year: 1865, rate: 15.79}, {year: 1866, rate: 15.39},
    {year: 1867, rate: 14.34}, {year: 1868, rate: 13.78}, {year: 1869, rate: 13.21},
    {year: 1870, rate: 12.65}, {year: 1871, rate: 11.84}, {year: 1872, rate: 11.84},
    {year: 1873, rate: 11.60}, {year: 1874, rate: 11.04}, {year: 1875, rate: 10.64},
    {year: 1876, rate: 10.39}, {year: 1877, rate: 10.15}, {year: 1878, rate: 9.67},
    {year: 1879, rate: 9.67}, {year: 1880, rate: 9.91}, {year: 1881, rate: 9.91},
    {year: 1882, rate: 9.91}, {year: 1883, rate: 9.71}, {year: 1884, rate: 9.51},
    {year: 1885, rate: 9.32}, {year: 1886, rate: 9.12}, {year: 1887, rate: 9.22},
    {year: 1888, rate: 9.22}, {year: 1889, rate: 8.92}, {year: 1890, rate: 8.82},
    {year: 1891, rate: 8.82}, {year: 1892, rate: 8.82}, {year: 1893, rate: 8.72},
    {year: 1894, rate: 8.34}, {year: 1895, rate: 8.14}, {year: 1896, rate: 8.14},
    {year: 1897, rate: 8.04}, {year: 1898, rate: 8.04}, {year: 1899, rate: 8.04},
    {year: 1900, rate: 8.14}, {year: 1901, rate: 8.24}, {year: 1902, rate: 8.34},
    {year: 1903, rate: 8.53}, {year: 1904, rate: 8.63}, {year: 1905, rate: 8.53},
    {year: 1906, rate: 8.72}, {year: 1907, rate: 9.11}, {year: 1908, rate: 8.92},
    {year: 1909, rate: 8.82}, {year: 1910, rate: 9.21}, {year: 1911, rate: 9.21},
    {year: 1912, rate: 9.40}, {year: 1913, rate: 9.60}, {year: 1914, rate: 9.69},
    {year: 1915, rate: 9.74}, {year: 1916, rate: 10.64}, {year: 1917, rate: 12.82},
    {year: 1918, rate: 15.06}, {year: 1919, rate: 17.30}, {year: 1920, rate: 20.04},
    {year: 1921, rate: 17.90}, {year: 1922, rate: 16.77},   {year: 1923, rate: 17.07}, {year: 1924, rate: 17.10}, {year: 1925, rate: 17.53},
    {year: 1926, rate: 17.70}, {year: 1927, rate: 17.37}, {year: 1928, rate: 17.13},
    {year: 1929, rate: 17.13}, {year: 1930, rate: 16.70}, {year: 1931, rate: 15.23},
    {year: 1932, rate: 13.66}, {year: 1933, rate: 12.96}, {year: 1934, rate: 13.39},
    {year: 1935, rate: 13.73}, {year: 1936, rate: 13.86}, {year: 1937, rate: 14.36},
    {year: 1938, rate: 14.09}, {year: 1939, rate: 13.89}, {year: 1940, rate: 14.03},
    {year: 1941, rate: 14.73}, {year: 1942, rate: 16.30}, {year: 1943, rate: 17.30},
    {year: 1944, rate: 17.60}, {year: 1945, rate: 18.00}, {year: 1946, rate: 19.54},
    {year: 1947, rate: 22.34}, {year: 1948, rate: 24.08}, {year: 1949, rate: 23.85},
    {year: 1950, rate: 24.08}, {year: 1951, rate: 25.98}, {year: 1952, rate: 26.55},
    {year: 1953, rate: 26.75}, {year: 1954, rate: 26.88}, {year: 1955, rate: 26.78},
    {year: 1956, rate: 27.18}, {year: 1957, rate: 28.15}, {year: 1958, rate: 28.92},
    {year: 1959, rate: 29.16}, {year: 1960, rate: 29.62}, {year: 1961, rate: 29.92},
    {year: 1962, rate: 30.26}, {year: 1963, rate: 30.62}, {year: 1964, rate: 31.03},
    {year: 1965, rate: 31.56}, {year: 1966, rate: 32.46}, {year: 1967, rate: 33.40},
    {year: 1968, rate: 34.80}, {year: 1969, rate: 36.67}, {year: 1970, rate: 38.84},
    {year: 1971, rate: 40.51}, {year: 1972, rate: 41.85}, {year: 1973, rate: 44.45},
    {year: 1974, rate: 49.33}, {year: 1975, rate: 53.84}, {year: 1976, rate: 56.94},
    {year: 1977, rate: 60.61}, {year: 1978, rate: 65.22}, {year: 1979, rate: 72.57},
    {year: 1980, rate: 82.38}, {year: 1981, rate: 90.93}, {year: 1982, rate: 96.50},
    {year: 1983, rate: 99.60}, {year: 1984, rate: 103.90}, {year: 1985, rate: 107.60},
    {year: 1986, rate: 109.60}, {year: 1987, rate: 113.60}, {year: 1988, rate: 118.30},
    {year: 1989, rate: 124.00}, {year: 1990, rate: 130.70}, {year: 1991, rate: 136.20},
    {year: 1992, rate: 140.30}, {year: 1993, rate: 144.50}, {year: 1994, rate: 148.20},
    {year: 1995, rate: 152.40}, {year: 1996, rate: 156.90}, {year: 1997, rate: 160.50},
    {year: 1998, rate: 163.00}, {year: 1999, rate: 166.60}, {year: 2000, rate: 172.20},
    {year: 2001, rate: 177.10}, {year: 2002, rate: 179.90}, {year: 2003, rate: 184.00},
    {year: 2004, rate: 188.90}, {year: 2005, rate: 195.30}, {year: 2006, rate: 201.60},
    {year: 2007, rate: 207.34}, {year: 2008, rate: 215.30}, {year: 2009, rate: 214.54},
    {year: 2010, rate: 218.06}, {year: 2011, rate: 224.94}, {year: 2012, rate: 229.59},
    {year: 2013, rate: 232.96}, {year: 2014, rate: 236.74}, {year: 2015, rate: 237.02},
    {year: 2016, rate: 240.01}, {year: 2017, rate: 245.12}, {year: 2018, rate: 251.11},
    {year: 2019, rate: 255.66}, {year: 2020, rate: 258.81}, {year: 2021, rate: 270.97},
    {year: 2022, rate: 292.66}, {year: 2023, rate: 304.70}, {year: 2024, rate: 313.69}
];
    

    const baseCPI = data[0].rate;
    const cumulativeInflation = data.map(item => ({
      year: item.year,
      rate: ((item.rate / baseCPI) - 1) * 100
    }));
    
    const years = cumulativeInflation.map(item => item.year);
    const inflationRates = cumulativeInflation.map(item => item.rate);

    const tooltipConfig = window.innerWidth > 768 ? {
      trigger: "axis",
        formatter: (params) => {
          const year = params[0].name;
          const rate = params[0].value;
  
          return `<strong>${year}</strong><br/>` +
            `${rate.toFixed(0)}%`;
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
            const showLabels = [1774, 1971, 2024];
            return showLabels.includes(Number(value)) ? value : "";
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        min: -5,
        max: 4000,
        nameLocation: "end",
        axisLabel: {
          fontSize: 14,
          formatter: value => `${value.toFixed(0)}%`
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
          data: inflationRates,
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "rgb(181, 30, 30)",
            width: 2,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(195, 65, 39, 0.3)" },
              { offset: 1, color: "rgba(184, 71, 40, 0.1)" },
            ])
          },
        },
      ],
      grid: {
        left: '5%',
        right: '5%',
        bottom: '0%',
        top: '7%',
        containLabel: true
      }
    };
    
    const chart = echarts.init(document.getElementById("inflacao-acumulada"));
    chart.setOption(option);
    window.addEventListener("resize", () => chart.resize());
  })();