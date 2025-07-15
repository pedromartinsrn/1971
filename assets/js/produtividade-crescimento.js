(function() {
    const years = [1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014];
    const compensation = [0.0,6.3,10.5,11.8,15.0,20.8,23.5,28.7,33.9,37.1,38.2,42.5,45.5,48.0,52.5,55.0,58.5,62.5,64.9,66.9,70.7,74.7,76.6,82.0,91.2,91.3,87.0,86.8,89.7,93.1,96.0,93.4,88.6,87.6,87.8,88.3,86.9,86.3,87.3,84.6,83.9,83.7,82.2,81.9,83.0,83.4,83.8,83.8,82.8,84.8,89.2,91.9,92.9,95.6,99.5,101.6,101.0,100.0,100.2,101.7,101.8,109.7,111.5,109.1,107.3,108.3,109.0];
    const productivity = [0.0,1.5,9.3,12.3,15.6,19.5,21.6,26.5,26.7,30.1,32.8,37.6,40.0,44.3,49.8,55.0,60.0,64.9,70.0,72.0,77.2,77.9,80.4,87.1,92.0,96.7,93.7,97.9,103.4,105.8,107.8,108.1,106.6,111.0,107.9,114.1,119.7,123.4,128.0,129.1,131.8,133.6,137.0,138.9,147.5,148.4,150.7,150.8,156.9,160.5,165.7,172.1,178.5,178.5,190.7,200.2,208.3,213.6,215.6,217.8,218.3,224.9,234.4,234.8,236.6,236.9,238.7];
    
    const chart = echarts.init(
      document.getElementById('produtividade-crescimento')
    );

    const tooltipConfig = window.innerWidth > 768 ? {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
        extraCssText: 'width: 65px; height: auto; padding: 3px;',
      formatter: function(params) {
        return `<strong>${params[0].axisValue}</strong><br/>
                <span style="color:#efd60b">●</span>  ${params[1].value}%<br/>
                <span style="color:#e74a3b">●</span>  ${params[0].value}%`;
      }
    } : { show: false };
    
    const option = {
      animation: false,
      tooltip: tooltipConfig,
      emphasis: { disabled: true },
      grid: {
        left: 60,
        right: 15,
        top: 30,
        bottom: 40
      },
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
            const showLabels = [
              1948, 1971, 2014
            ];
            return showLabels.includes(Number(value)) ? value : '';
          }
        },
        axisTick: {
          show: false,
          alignWithLabel: true,
          interval: 0
        },
        nameLocation: 'middle',
        nameGap: 50
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          fontSize: 12,
          formatter: '{value}%'
        },
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'Remuneração',
          type: 'line',
          data: compensation,
          symbol: 'none',
          lineStyle: { 
            width: 4,
            color: '#e74a3b'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(231,74,59,0.4)' },
              { offset: 1, color: 'rgba(231,74,59,0.05)' }
            ])
          }
        },
        {
          name: 'Produtividade',
          type: 'line',
          data: productivity,
          symbol: 'none',
          lineStyle: { 
            width: 3,
            color: '#efd60b'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#efd60b' },
              { offset: 1, color: 'rgba(202, 207, 224, 0.05)' }
            ])
          }
        }
      ]
    };
        
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
      })();