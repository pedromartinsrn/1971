//Dívida Americana
(function() {
    const data = [{"record_date":"2025-07-01","debt_outstanding_amt":"35500000000000.00"},{"record_date":"2023-09-30","debt_outstanding_amt":"33167334044723.16"},{"record_date":"2022-09-30","debt_outstanding_amt":"30928911613306.73"},{"record_date":"2021-09-30","debt_outstanding_amt":"28428918570048.68"},{"record_date":"2020-09-30","debt_outstanding_amt":"26945391194615.15"},{"record_date":"2019-09-30","debt_outstanding_amt":"22719401753433.78"},{"record_date":"2018-09-30","debt_outstanding_amt":"21516058183180.23"},{"record_date":"2017-09-30","debt_outstanding_amt":"20244900016053.51"},{"record_date":"2016-09-30","debt_outstanding_amt":"19573444713936.79"},{"record_date":"2015-09-30","debt_outstanding_amt":"18150617666484.33"},{"record_date":"2014-09-30","debt_outstanding_amt":"17824071380733.82"},{"record_date":"2013-09-30","debt_outstanding_amt":"16738183526697.32"},{"record_date":"2012-09-30","debt_outstanding_amt":"16066241407385.89"},{"record_date":"2011-09-30","debt_outstanding_amt":"14790340328557.15"},{"record_date":"2010-09-30","debt_outstanding_amt":"13561623030891.79"},{"record_date":"2009-09-30","debt_outstanding_amt":"11909829003511.75"},{"record_date":"2008-09-30","debt_outstanding_amt":"10024724896912.49"},{"record_date":"2007-09-30","debt_outstanding_amt":"9007653372262.48"},{"record_date":"2006-09-30","debt_outstanding_amt":"8506973899215.23"},{"record_date":"2005-09-30","debt_outstanding_amt":"7932709661723.50"},{"record_date":"2004-09-30","debt_outstanding_amt":"7379052696330.32"},{"record_date":"2003-09-30","debt_outstanding_amt":"6783231062743.62"},{"record_date":"2002-09-30","debt_outstanding_amt":"6228235965597.16"},{"record_date":"2001-09-30","debt_outstanding_amt":"5807463412200.06"},{"record_date":"2000-09-30","debt_outstanding_amt":"5674178209886.86"},{"record_date":"1999-09-30","debt_outstanding_amt":"5656270901615.43"},{"record_date":"1998-09-30","debt_outstanding_amt":"5526193008897.62"},{"record_date":"1997-09-30","debt_outstanding_amt":"5413146011397.34"},{"record_date":"1996-09-30","debt_outstanding_amt":"5224810939135.73"},{"record_date":"1995-09-29","debt_outstanding_amt":"4973982900709.39"},{"record_date":"1994-09-30","debt_outstanding_amt":"4692749910013.32"},{"record_date":"1993-09-30","debt_outstanding_amt":"4411488883139.38"},{"record_date":"1992-09-30","debt_outstanding_amt":"4064620655521.66"},{"record_date":"1991-09-30","debt_outstanding_amt":"3665303351697.03"},{"record_date":"1990-09-28","debt_outstanding_amt":"3233313451777.25"},{"record_date":"1989-09-29","debt_outstanding_amt":"2857430960187.32"},{"record_date":"1988-09-30","debt_outstanding_amt":"2602337712041.16"},{"record_date":"1987-09-30","debt_outstanding_amt":"2350276890953.00"},{"record_date":"1986-09-30","debt_outstanding_amt":"2125302616658.42"},{"record_date":"1985-09-30","debt_outstanding_amt":"1823103000000.00"},{"record_date":"1984-09-30","debt_outstanding_amt":"1572266000000.00"},{"record_date":"1983-09-30","debt_outstanding_amt":"1377210000000.00"},{"record_date":"1982-09-30","debt_outstanding_amt":"1142034000000.00"},{"record_date":"1981-09-30","debt_outstanding_amt":"997855000000.00"},{"record_date":"1980-09-30","debt_outstanding_amt":"907701000000.00"},{"record_date":"1979-09-30","debt_outstanding_amt":"826519000000.00"},{"record_date":"1978-09-30","debt_outstanding_amt":"771544000000.00"},{"record_date":"1977-09-30","debt_outstanding_amt":"698840000000.00"},{"record_date":"1976-06-30","debt_outstanding_amt":"620433000000.00"},{"record_date":"1975-06-30","debt_outstanding_amt":"533189000000.00"},{"record_date":"1974-06-30","debt_outstanding_amt":"475059815731.55"},{"record_date":"1973-06-30","debt_outstanding_amt":"458141605312.09"},{"record_date":"1972-06-30","debt_outstanding_amt":"427260460940.50"},{"record_date":"1971-06-30","debt_outstanding_amt":"398129744455.54"},{"record_date":"1970-06-30","debt_outstanding_amt":"370918706949.93"},{"record_date":"1969-06-30","debt_outstanding_amt":"353720253841.41"},{"record_date":"1968-06-30","debt_outstanding_amt":"347578406425.88"},{"record_date":"1967-06-30","debt_outstanding_amt":"326220937794.54"},{"record_date":"1966-06-30","debt_outstanding_amt":"319907087795.48"},{"record_date":"1965-06-30","debt_outstanding_amt":"317273898983.64"},{"record_date":"1964-06-30","debt_outstanding_amt":"311712899257.30"},{"record_date":"1963-06-30","debt_outstanding_amt":"305859632996.41"},{"record_date":"1962-06-30","debt_outstanding_amt":"298200822720.87"},{"record_date":"1961-06-30","debt_outstanding_amt":"288970938610.05"},{"record_date":"1960-06-30","debt_outstanding_amt":"286330760848.37"},{"record_date":"1959-06-30","debt_outstanding_amt":"284705907078.22"},{"record_date":"1958-06-30","debt_outstanding_amt":"276343217745.81"},{"record_date":"1957-06-30","debt_outstanding_amt":"270527171896.43"},{"record_date":"1956-06-30","debt_outstanding_amt":"272750813649.32"},{"record_date":"1955-06-30","debt_outstanding_amt":"274374222802.62"},{"record_date":"1954-06-30","debt_outstanding_amt":"271259599108.46"},{"record_date":"1953-06-30","debt_outstanding_amt":"266071061638.57"},{"record_date":"1952-06-30","debt_outstanding_amt":"259105178785.43"},{"record_date":"1951-06-29","debt_outstanding_amt":"255221976814.93"},{"record_date":"1950-06-30","debt_outstanding_amt":"257357352351.04"},{"record_date":"1949-06-30","debt_outstanding_amt":"252770359860.33"},{"record_date":"1948-06-30","debt_outstanding_amt":"252292246512.99"},{"record_date":"1947-06-30","debt_outstanding_amt":"258286383108.67"},{"record_date":"1946-06-28","debt_outstanding_amt":"269422099173.26"},{"record_date":"1945-06-30","debt_outstanding_amt":"258682187409.93"},{"record_date":"1944-06-30","debt_outstanding_amt":"201003387221.13"},{"record_date":"1943-06-30","debt_outstanding_amt":"136696090329.90"},{"record_date":"1942-06-30","debt_outstanding_amt":"72422445116.22"},{"record_date":"1941-06-30","debt_outstanding_amt":"48961443535.71"},{"record_date":"1940-06-29","debt_outstanding_amt":"42967531037.68"},{"record_date":"1939-06-30","debt_outstanding_amt":"40439532411.11"},{"record_date":"1938-06-30","debt_outstanding_amt":"37164740315.45"},{"record_date":"1937-06-30","debt_outstanding_amt":"36424613732.29"},{"record_date":"1936-06-30","debt_outstanding_amt":"33778543493.73"},{"record_date":"1935-06-29","debt_outstanding_amt":"28700892624.53"},{"record_date":"1934-06-30","debt_outstanding_amt":"27053141414.48"},{"record_date":"1933-06-30","debt_outstanding_amt":"22538672560.15"},{"record_date":"1932-06-30","debt_outstanding_amt":"19487002444.13"},{"record_date":"1931-06-30","debt_outstanding_amt":"16801281491.71"},{"record_date":"1930-06-30","debt_outstanding_amt":"16185309831.43"},{"record_date":"1929-06-29","debt_outstanding_amt":"16931088484.10"},{"record_date":"1928-06-30","debt_outstanding_amt":"17604293201.43"},{"record_date":"1927-06-30","debt_outstanding_amt":"18511906931.85"},{"record_date":"1926-06-30","debt_outstanding_amt":"19643216315.19"},{"record_date":"1925-06-30","debt_outstanding_amt":"20516193887.90"},{"record_date":"1924-06-30","debt_outstanding_amt":"21250812989.49"},{"record_date":"1923-06-30","debt_outstanding_amt":"22349707365.36"},{"record_date":"1922-06-30","debt_outstanding_amt":"22963381708.31"},{"record_date":"1921-06-30","debt_outstanding_amt":"23977450552.54"},{"record_date":"1920-07-01","debt_outstanding_amt":"25952456406.16"},{"record_date":"1919-07-01","debt_outstanding_amt":"27390970113.12"},{"record_date":"1918-07-01","debt_outstanding_amt":"14592161414.00"},{"record_date":"1917-07-01","debt_outstanding_amt":"5717770279.52"},{"record_date":"1916-07-01","debt_outstanding_amt":"3609244262.16"},{"record_date":"1915-07-01","debt_outstanding_amt":"3058136873.16"},{"record_date":"1914-07-01","debt_outstanding_amt":"2912499269.16"},{"record_date":"1913-07-01","debt_outstanding_amt":"2916204913.66"},{"record_date":"1912-07-01","debt_outstanding_amt":"2868373874.16"},{"record_date":"1911-07-01","debt_outstanding_amt":"2765600606.69"},{"record_date":"1910-07-01","debt_outstanding_amt":"2652665838.04"},{"record_date":"1909-07-01","debt_outstanding_amt":"2639546241.04"},{"record_date":"1908-07-01","debt_outstanding_amt":"2626806271.54"},{"record_date":"1907-07-01","debt_outstanding_amt":"2457188061.54"},{"record_date":"1906-07-01","debt_outstanding_amt":"2337161839.04"},{"record_date":"1905-07-01","debt_outstanding_amt":"2274615063.84"},{"record_date":"1904-07-01","debt_outstanding_amt":"2264003585.14"},{"record_date":"1903-07-01","debt_outstanding_amt":"2202464781.89"},{"record_date":"1902-07-01","debt_outstanding_amt":"2158610445.89"},{"record_date":"1901-07-01","debt_outstanding_amt":"2143326933.89"},{"record_date":"1900-07-01","debt_outstanding_amt":"2136961091.67"},{"record_date":"1899-07-01","debt_outstanding_amt":"1991927306.92"},{"record_date":"1898-07-01","debt_outstanding_amt":"1796531995.90"},{"record_date":"1897-07-01","debt_outstanding_amt":"1817672665.90"},{"record_date":"1896-07-01","debt_outstanding_amt":"1769840323.40"},{"record_date":"1895-07-01","debt_outstanding_amt":"1676120983.25"},{"record_date":"1894-07-01","debt_outstanding_amt":"1632253636.68"},{"record_date":"1893-07-01","debt_outstanding_amt":"1545985686.13"},{"record_date":"1892-07-01","debt_outstanding_amt":"1588464144.63"},{"record_date":"1891-07-01","debt_outstanding_amt":"1545996591.61"},{"record_date":"1890-07-01","debt_outstanding_amt":"1552140204.73"},{"record_date":"1889-07-01","debt_outstanding_amt":"1619052922.23"},{"record_date":"1888-07-01","debt_outstanding_amt":"1692858984.58"},{"record_date":"1887-07-01","debt_outstanding_amt":"1657602592.63"},{"record_date":"1886-07-01","debt_outstanding_amt":"1775063013.78"},{"record_date":"1885-07-01","debt_outstanding_amt":"1863964873.14"},{"record_date":"1884-07-01","debt_outstanding_amt":"1830528923.57"},{"record_date":"1883-07-01","debt_outstanding_amt":"1884171728.07"},{"record_date":"1882-07-01","debt_outstanding_amt":"1918312994.03"},{"record_date":"1881-07-01","debt_outstanding_amt":"2069013569.58"},{"record_date":"1880-07-01","debt_outstanding_amt":"2120415370.63"},{"record_date":"1879-07-01","debt_outstanding_amt":"2349567482.04"},{"record_date":"1878-07-01","debt_outstanding_amt":"2256205892.53"},{"record_date":"1877-07-01","debt_outstanding_amt":"2205301392.10"},{"record_date":"1876-07-01","debt_outstanding_amt":"2180395067.15"},{"record_date":"1875-07-01","debt_outstanding_amt":"2232284531.95"},{"record_date":"1874-07-01","debt_outstanding_amt":"2251690468.43"},{"record_date":"1873-07-01","debt_outstanding_amt":"2234482993.20"},{"record_date":"1872-07-01","debt_outstanding_amt":"2253251328.78"},{"record_date":"1871-07-01","debt_outstanding_amt":"2353211332.32"},{"record_date":"1870-07-01","debt_outstanding_amt":"2480672427.81"},{"record_date":"1869-07-01","debt_outstanding_amt":"2588452213.94"},{"record_date":"1868-07-01","debt_outstanding_amt":"2611687851.19"},{"record_date":"1867-07-01","debt_outstanding_amt":"2678126103.87"},{"record_date":"1866-07-01","debt_outstanding_amt":"2773236173.69"},{"record_date":"1865-07-01","debt_outstanding_amt":"2680647869.74"},{"record_date":"1864-07-01","debt_outstanding_amt":"1815784370.57"},{"record_date":"1863-07-01","debt_outstanding_amt":"1119772138.63"},{"record_date":"1862-07-01","debt_outstanding_amt":"524176412.13"},{"record_date":"1861-07-01","debt_outstanding_amt":"90580873.72"},{"record_date":"1860-07-01","debt_outstanding_amt":"64842287.88"},{"record_date":"1859-07-01","debt_outstanding_amt":"58496837.88"},{"record_date":"1858-07-01","debt_outstanding_amt":"44911881.03"},{"record_date":"1857-07-01","debt_outstanding_amt":"28699831.85"},{"record_date":"1856-07-01","debt_outstanding_amt":"31972537.90"},{"record_date":"1855-07-01","debt_outstanding_amt":"35586956.56"},{"record_date":"1854-07-01","debt_outstanding_amt":"42242222.42"},{"record_date":"1853-07-01","debt_outstanding_amt":"59803117.70"},{"record_date":"1852-07-01","debt_outstanding_amt":"66199341.71"},{"record_date":"1851-07-01","debt_outstanding_amt":"68304796.02"},{"record_date":"1850-07-01","debt_outstanding_amt":"63452773.55"},{"record_date":"1849-07-01","debt_outstanding_amt":"63061858.69"},{"record_date":"1848-07-01","debt_outstanding_amt":"47044862.23"},{"record_date":"1847-07-01","debt_outstanding_amt":"38826534.77"},{"record_date":"1846-07-01","debt_outstanding_amt":"15550202.97"},{"record_date":"1845-07-01","debt_outstanding_amt":"15925303.01"},{"record_date":"1844-07-01","debt_outstanding_amt":"23461652.50"},{"record_date":"1843-07-01","debt_outstanding_amt":"32742922.00"},{"record_date":"1843-01-01","debt_outstanding_amt":"20201226.27"},{"record_date":"1842-01-01","debt_outstanding_amt":"13594480.73"},{"record_date":"1841-01-01","debt_outstanding_amt":"5250875.54"},{"record_date":"1840-01-01","debt_outstanding_amt":"3573343.82"},{"record_date":"1839-01-01","debt_outstanding_amt":"10434221.14"},{"record_date":"1838-01-01","debt_outstanding_amt":"3308124.07"},{"record_date":"1837-01-01","debt_outstanding_amt":"336957.83"},{"record_date":"1836-01-01","debt_outstanding_amt":"37513.05"},{"record_date":"1835-01-01","debt_outstanding_amt":"33733.05"},{"record_date":"1834-01-01","debt_outstanding_amt":"4760082.08"},{"record_date":"1833-01-01","debt_outstanding_amt":"7001698.83"},{"record_date":"1832-01-01","debt_outstanding_amt":"24322235.18"},{"record_date":"1831-01-01","debt_outstanding_amt":"39123191.68"},{"record_date":"1830-01-01","debt_outstanding_amt":"48565406.50"},{"record_date":"1829-01-01","debt_outstanding_amt":"58421413.67"},{"record_date":"1828-01-01","debt_outstanding_amt":"67475043.87"},{"record_date":"1827-01-01","debt_outstanding_amt":"73987357.20"},{"record_date":"1826-01-01","debt_outstanding_amt":"81054059.99"},{"record_date":"1825-01-01","debt_outstanding_amt":"83788432.71"},{"record_date":"1824-01-01","debt_outstanding_amt":"90269777.77"},{"record_date":"1823-01-01","debt_outstanding_amt":"90875877.28"},{"record_date":"1822-01-01","debt_outstanding_amt":"93546676.98"},{"record_date":"1821-01-01","debt_outstanding_amt":"89987427.66"},{"record_date":"1820-01-01","debt_outstanding_amt":"91015566.15"},{"record_date":"1819-01-01","debt_outstanding_amt":"95529648.28"},{"record_date":"1818-01-01","debt_outstanding_amt":"103466633.83"},{"record_date":"1817-01-01","debt_outstanding_amt":"123491965.16"},{"record_date":"1816-01-01","debt_outstanding_amt":"127334933.74"},{"record_date":"1815-01-01","debt_outstanding_amt":"99833660.15"},{"record_date":"1814-01-01","debt_outstanding_amt":"81487846.24"},{"record_date":"1813-01-01","debt_outstanding_amt":"55962827.57"},{"record_date":"1812-01-01","debt_outstanding_amt":"45209737.90"},{"record_date":"1811-01-01","debt_outstanding_amt":"48005587.76"},{"record_date":"1810-01-01","debt_outstanding_amt":"53173217.52"},{"record_date":"1809-01-01","debt_outstanding_amt":"57023192.09"},{"record_date":"1808-01-01","debt_outstanding_amt":"65196317.97"},{"record_date":"1807-01-01","debt_outstanding_amt":"69218398.64"},{"record_date":"1806-01-01","debt_outstanding_amt":"75723270.66"},{"record_date":"1805-01-01","debt_outstanding_amt":"82312150.50"},{"record_date":"1804-01-01","debt_outstanding_amt":"86427120.88"},{"record_date":"1803-01-01","debt_outstanding_amt":"77054686.40"},{"record_date":"1802-01-01","debt_outstanding_amt":"80712632.25"},{"record_date":"1801-01-01","debt_outstanding_amt":"83038050.80"},{"record_date":"1800-01-01","debt_outstanding_amt":"82976294.35"},{"record_date":"1799-01-01","debt_outstanding_amt":"78408669.77"},{"record_date":"1798-01-01","debt_outstanding_amt":"79228529.12"},{"record_date":"1797-01-01","debt_outstanding_amt":"82064479.33"},{"record_date":"1796-01-01","debt_outstanding_amt":"83762172.07"},{"record_date":"1795-01-01","debt_outstanding_amt":"80747587.39"},{"record_date":"1794-01-01","debt_outstanding_amt":"78427404.77"},{"record_date":"1793-01-01","debt_outstanding_amt":"80358634.04"},{"record_date":"1792-01-01","debt_outstanding_amt":"77227924.66"},{"record_date":"1791-01-01","debt_outstanding_amt":"75463476.52"},{"record_date":"1790-01-01","debt_outstanding_amt":"71060508.50"}]  
    
    const years = [...data].reverse().map(item => parseInt(item.record_date));
    const debtData = data.map(item => parseFloat(item.debt_outstanding_amt)).reverse();
    
    const tooltipConfig = window.innerWidth > 768 ? {
      trigger: 'axis',
      formatter: params => {
        const v = params[0].value;
        let formatted = v >= 1e12 ? `$${(v/1e12).toFixed(0)} Trilhões` 
                        : v >= 1e9 ? `$${(v/1e9).toFixed(0)} Bilhões`
                        : v >= 1e6 ? `$${(v/1e6).toFixed(0)} Milhões`
                        : `$${v.toLocaleString()}`;
        return `<strong>${params[0].name}</strong><br/>${formatted}`;
      }
    } : { show: false };
  
    const option = {
      xAxis: {
        type: 'category',
        data: years,
        axisLabel: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#333333',
          rotate: 45,
          interval: 0,
          formatter: (value) => {
            const showLabels = [1790, 1971, 2025];
            return showLabels.includes(Number(value)) ? value : '';
          }
        },
        axisTick: {
          show: false,
          alignWithLabel: true,
          interval: 0
        },
        splitLine: {
          show: false
        }
      },
      tooltip: tooltipConfig,
      grid: {
        left: '2%',
        right: '2%',
        top: '4%',
        bottom: '8%',
        containLabel: true
      },
      yAxis: {
        type: 'value',
        name: "Trilhões de $",
        nameLocation: "end",
        min: 0,
        max: 36000000000000,
        interval: 10000000000000,
        axisLabel: {
          formatter: value => {
            const formattedValue = (value/1e12).toFixed(0);
            // Mostra apenas o 36, esconde o 35
            if (formattedValue === '35') {
              return '';
            }
            return formattedValue;
          },
          fontSize: 14,
          color: '#333'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#f3f3f3",
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ccc'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#ccc'
          }
        }
      },      
      series: [{
        type: 'line',
        data: debtData,
        smooth: true,
        symbol: 'none',
        itemStyle: {
          color: 'rgb(218, 20, 20)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(248, 42, 42, 0.67)' },
            { offset: 1, color: 'rgba(220, 150, 150, 0.23)' }
          ]),
        }
      }],
      
    };
    
    const chart = echarts.init(document.getElementById('divida-americana'));
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
    })();