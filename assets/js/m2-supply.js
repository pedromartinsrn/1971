
(function() {

const Data = [
  {
  "1867": 1,
  "1868": 1,
  "1869": 2,
  "1870": 2,
  "1871": 2,
  "1872": 2,
  "1873": 2,
  "1874": 2,
  "1875": 2,
  "1876": 2,
  "1877": 2,
  "1878": 2,
  "1879": 2,
  "1880": 3,
  "1881": 4,
  "1882": 4,
  "1883": 4,
  "1884": 4,
  "1885": 4,
  "1886": 5,
  "1887": 5,
  "1888": 5,
  "1889": 6,
  "1890": 6,
  "1891": 6,
  "1892": 7,
  "1893": 6,
  "1894": 7,
  "1895": 7,
  "1896": 7,
  "1897": 8,
  "1898": 8,
  "1899": 10,
  "1900": 10,
  "1901": 12,
  "1902": 12,
  "1903": 13,
  "1904": 14,
  "1905": 15,
  "1906": 16,
  "1907": 17,
  "1908": 17,
  "1909": 19,
  "1910": 20,
  "1911": 21,
  "1912": 22,
  "1913": 23,
  "1914": 24,
  "1915": 25,
  "1916": 30,
  "1917": 34,
  "1918": 36,
  "1919": 41,
  "1920": 45,
  "1921": 44,
  "1922": 46,
  "1923": 50,
  "1924": 53,
  "1925": 57,
  "1926": 60,
  "1927": 62,
  "1928": 65,
  "1929": 66,
  "1930": 66,
  "1931": 64,
  "1932": 56,
  "1933": 51,
  "1934": 57,
  "1935": 63,
  "1936": 69,
  "1937": 73,
  "1938": 74,
  "1939": 80,
  "1940": 91,
  "1941": 101,
  "1942": 110,
  "1943": 130,
  "1944": 148,
  "1945": 169,
  "1946": 185,
  "1947": 195,
  "1948": 202,
  "1949": 204,
  "1950": 209,
  "1951": 215,
  "1952": 229,
  "1953": 240,
  "1954": 251,
  "1955": 264,
  "1956": 274,
  "1957": 287,
  "1958": 286,
  "1959": 298,
  "1960": 314,
  "1961": 337,
  "1962": 365,
  "1963": 395,
  "1964": 427,
  "1965": 462,
  "1966": 481,
  "1967": 527,
  "1968": 569,
  "1969": 589,
  "1970": 632,
  "1971": 717,
  "1972": 810,
  "1973": 859,
  "1974": 906,
  "1975": 1026,
  "1976": 1165,
  "1977": 1279,
  "1978": 1371,
  "1979": 1482,
  "1980": 1601,
  "1981": 1758,
  "1982": 1921,
  "1983": 2128,
  "1984": 2332,
  "1985": 2505,
  "1986": 2751,
  "1987": 2835,
  "1988": 2991,
  "1989": 3181,
  "1990": 3291,
  "1991": 3376,
  "1992": 3430,
  "1993": 3485,
  "1994": 3498,
  "1995": 3661,
  "1996": 3836,
  "1997": 4055,
  "1998": 4398,
  "1999": 4669,
  "2000": 4987,
  "2001": 5481,
  "2002": 5804,
  "2003": 6091,
  "2004": 6457,
  "2005": 6716,
  "2006": 7136,
  "2007": 7526,
  "2008": 8277,
  "2009": 8544,
  "2010": 8896,
  "2011": 9731,
  "2012": 10630,
  "2013": 11140,
  "2014": 11799,
  "2015": 12464,
  "2016": 13298,
  "2017": 13970,
  "2018": 14544,
  "2019": 15473,
  "2020": 19294,
  "2021": 21751,
  "2022": 21393,
  "2023": 20855,
  "2024": 21680,
  "2025": 21692 }
];

  const years = Object.keys(Data[0]);
  const m2Supply = Object.values(Data[0]);

  
const tooltipConfig = window.innerWidth > 768 ? {
  trigger: "axis",
  axisPointer: {
    type: 'none'
  },
  extraCssText: 'width: 88px; height: auto; padding: 3px; white-space: normal;',
  formatter: (params) => {
    const year = params[0].name;
    const supply = params[0].value;

    const formattedSupply = supply.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

    let unit;
    if (supply >= 1000) {
      const trillionValue = supply / 1000;
      const formattedTrillion = trillionValue.toLocaleString("pt-BR", { maximumFractionDigits: 0 });
      unit = trillionValue === 1 ? `${formattedTrillion} trilhão` : `${formattedTrillion} trilhões`;
    } else {
      unit = supply === 1 ? `${formattedSupply} bilhão` : `${formattedSupply} bilhões`;
    }

    return `<strong>${year}</strong><br/>` +
      `$${unit}`;
  }
} : { show: false };

  const option = {
    tooltip: tooltipConfig,
    emphasis: { disabled: true },
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
          const showLabels = [1867, 1971, 2025];
          return showLabels.includes(Number(value)) ? value : "";
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      name:"M2, trilhões",
      min: 0,
      max: 23000,
      nameLocation: "end",
      axisLabel: {
        fontSize: 14,
        formatter: (value) => Math.round(value/1000)
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#f3f3f3"
        }
      }
    },
    series: [
      {
        type: "line",
        data: m2Supply,
        smooth: true,
        symbol: "none",
        lineStyle: {
          color: "rgb(44, 144, 95)",
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(21, 215, 121, 0.3)" },
            { offset: 1, color: "rgba(40, 184, 115, 0.1)" },
          ])
        },
      },
    ],
    label: {
      show: true,
      position: 'top',
      formatter: (params) => {
          const showLabels = [1900, 1971, 2020];
          if (showLabels.includes(Number(params.name))) {
            return `${params.value}%`;
          } else {
            return '';
          }
        },
      color: '#333'
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "0%",
      top: "7%",
      containLabel: true,
    },
  };

  const chart = echarts.init(document.getElementById("m2-supply"));
  chart.setOption(option);

  window.addEventListener("resize", () => chart.resize());
})();
