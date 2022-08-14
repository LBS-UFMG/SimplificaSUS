/* globals Chart:false, feather:false */

(() => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })

    // gráfico - artigos por data ---------------------------------------
    const onde1 = document.getElementById('g1')
    const grafico1 = new Chart(onde1, {
      type: 'line',
      data: {
        labels: [
1852,1867,1871,1872,1873,1874,1877,1879,1880,1881,1882,1885,1890,1891,1896,1902,1903,1906,1907,1908,1909,1910,1911,1912,1913,1916,1918,1919,1921,1923,1924,1925,1926,1928,1932,1933,1936,1937,1941,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,
        ],
        datasets: [{
          data: [
1,1,1,12,5,1,2,4,4,1,4,1,4,1,1,4,1,1,1,2,4,1,1,2,5,1,1,3,1,3,3,2,2,1,1,1,1,3,1,11,17,7,16,1,4,2,10,6,9,4,18,8,13,5,5,7,4,18,38,43,46,44,28,46,52,38,50,63,46,56,48,55,51,73,59,67,71,80,83,65,77,115,83,113,107,106,105,140,155,146,152,153,196,199,233,234,298,323,362,461,499,590,676,761,780,954,1066,1307,1498,1562,1855,1811,1877,1885,2077,1982,802,
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#1e90ff',
          borderWidth: 4,
          pointBackgroundColor: '#1e90ff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

// gráfico 1,5 - ---------------------------------------
const onde15 = document.getElementById('g15')
const grafico15 = new Chart(onde15, {
  type: 'bar',
  data: {
    labels: [
"Total","Com Impacto(FI)","Sem Impacto(FI)","Com Qualis","Sem Qualis",
        ]
    ,
    datasets: [{
      data: [
27196,,,10693,16503,
        ]
      ,
      lineTension: 0,
      backgroundColor: ['grey', '#1e90ff', '#ffa500', '#1e90ff', '#ffa500' ],
      fill: '#1e90ff',
      //borderColor: '#1e90ff',
      //borderWidth: 4,
      pointBackgroundColor: '#1e90ff'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  }
})

    // gráfico 2 - ---------------------------------------
    const onde2 = document.getElementById('g2')
    const grafico2 = new Chart(onde2, {
      type: 'bar',
      data: {
        labels: [
"A1","A2","A3","A4","B1","B2","B3","B4","C","NP",
        ]
        ,
        datasets: [{
          data: [

5092,2176,818,769,1097,435,279,27,344,18,
          ]
          ,
          lineTension: 0,
          backgroundColor: '#1e90ff',
          fill: '#1e90ff',
          //borderColor: '#1e90ff',
          //borderWidth: 4,
          pointBackgroundColor: '#1e90ff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    // gráfico 3 - ---------------------------------------
    const onde3 = document.getElementById('g3')
    const grafico3 = new Chart(onde3, {
      type: 'bar',
      data: {
        labels: [
"A1","A2","A3","A4","B1","B2","B3","B4","C","NP",
        ].map(i=>i.toFixed(1)),
        datasets: [{
          data: [
5092,2176,818,769,1097,435,279,27,344,18,
          ],
          lineTension: 0,
          backgroundColor: '#1e90ff',
          fill: '#1e90ff',
          //borderColor: '#1e90ff',
          //borderWidth: 4,
          pointBackgroundColor: '#1e90ff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })


    // gráfico 3,5 - ---------------------------------------
    const onde35 = document.getElementById('g35')
    const grafico35 = new Chart(onde35, {
      type: 'bar',
      data: {
        labels: [
1852,1867,1871,1872,1873,1874,1877,1879,1880,1881,1882,1885,1890,1891,1896,1902,1903,1906,1907,1908,1909,1910,1911,1912,1913,1916,1918,1919,1921,1923,1924,1925,1926,1928,1932,1933,1936,1937,1941,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,
        ].map(i=>i.toFixed(1)),
        datasets: [{
          data: [
1,1,1,12,5,1,2,4,4,1,4,1,4,1,1,4,1,1,1,2,4,1,1,2,5,1,1,3,1,3,3,2,2,1,1,1,1,3,1,11,17,7,16,1,4,2,10,6,9,4,18,8,13,5,5,7,4,18,38,43,46,44,28,46,52,38,50,63,46,56,48,55,51,73,59,67,71,80,83,65,77,115,83,113,107,106,105,140,155,146,152,153,196,199,233,234,298,323,362,461,499,590,676,761,780,954,1066,1307,1498,1562,1855,1811,1877,1885,2077,1982,802,
          ],
          lineTension: 0,
          backgroundColor: '#1e90ff',
          fill: '#1e90ff',
          //borderColor: '#1e90ff',
          //borderWidth: 4,
          pointBackgroundColor: '#1e90ff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    // gráfico 4 - ---------------------------------------
    const onde4 = document.getElementById('g4')
    const grafico4 = new Chart(onde4, {
      type: 'bar',
      data: {
        labels: [
47.08,93.16,139.24,185.32,231.39999999999998,277.48,323.56,369.64,415.71999999999997,461.79999999999995,507.88,553.96,600.04,646.12,692.1999999999999,738.28,784.36,830.4399999999999,876.52,922.5999999999999,968.68,1014.76,1060.84,1106.92,1153.0,
        ].map(i=>i.toFixed(0)),
        datasets: [{
          data: [
195,32,20,14,5,5,6,0,1,1,0,2,0,0,0,0,1,0,0,0,0,0,0,0,1,
          ],
          lineTension: 0,
          backgroundColor: '#1e90ff',
          fill: '#1e90ff',
          pointBackgroundColor: '#1e90ff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    // gráfico 5 - ---------------------------------------
    const onde5 = document.getElementById('g5');

    const grafico5 = new Chart(onde5, {
      type: 'bar',
      data: {
        labels: [
"permethrin","serine","malathion","glutathione","heparin","ribavirin","cysteine","ethanol","doxycycline","tyrosine","adenosine","fluorescein","methylprednisolone","spinosad","ivermectin","prednisolone","paracetamol","biotin","glycine","tetracycline","lysine","histidine","chloroquine","phenylalanine","azithromycin",
        ],
        datasets: [{
          data: [
128,122,83,56,46,46,44,43,40,34,29,27,21,18,18,17,17,17,17,17,16,16,15,15,15,
          ],
          backgroundColor: '#1e90ff'
        }]
      },
      options: {
        indexAxis: 'y',
        legend: {
          display: false
        },
        scales: {
          y: {
              beginAtZero: true
          }
        }
        
      }
    })

    // gráfico 6 - ---------------------------------------
    const onde6 = document.getElementById('g6')
    const grafico6 = new Chart(onde6, {
      type: 'bar',
      data: {
        labels: [
"permethrin","serine","malathion","glutathione","heparin","ribavirin","cysteine","ethanol","doxycycline","tyrosine","adenosine","fluorescein","methylprednisolone","spinosad","ivermectin","prednisolone","paracetamol","biotin","glycine","tetracycline","lysine","histidine","chloroquine","phenylalanine","azithromycin",
        ],
        datasets: [{
          data: [
86,49,45,30,17,23,24,22,14,14,12,9,9,9,9,5,3,2,8,8,6,7,7,6,5,
          ],
          lineTension: 0,
          backgroundColor: '#1e90ff',
          fill: '#1e90ff',
          //borderColor: '#1e90ff',
          //borderWidth: 4,
          pointBackgroundColor: '#1e90ff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            max:700,
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })


    // gráfico 8 - ---------------------------------------
const onde8 = document.getElementById('g8')
const grafico8 = new Chart(onde8, {
  type: 'horizontalBar',
  data: {
    labels: [
"permethrin","serine","malathion","glutathione","heparin","ribavirin","cysteine","ethanol","doxycycline","tyrosine","adenosine","fluorescein","methylprednisolone","spinosad","ivermectin","prednisolone","paracetamol","biotin","glycine","tetracycline","lysine","histidine","chloroquine","phenylalanine","azithromycin",
    ]
    ,
    datasets: [{
      stack: "Stack 0",
      data: [
41,56,17,21,16,21,14,12,15,11,13,9,4,8,12,1,4,5,9,11,6,8,2,2,5,
      ],
      backgroundColor: '#1e90ff'
    },
    {
      stack: "Stack 0",
      data: [
87,66,66,35,30,25,30,31,25,23,16,18,17,10,6,16,13,12,8,6,10,8,13,13,10,
      1
      ].map(i=>-i),
      backgroundColor: '#ffa500'
    }
  ]
  },
  options: {
    scales: {
      x:{
        max: 12,
        min: -12
      }
    },
    legend: {
      display: false
    }
  }
})





})() // fim
  
