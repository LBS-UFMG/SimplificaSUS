/* 
  Este script é responsável por renderizar os gráficos exibidos na página inicial do dashboard. 
  Ele utiliza chart.js 

  // globals Chart:false, feather:false

*/

const cor1 = '#1e90ff';
const cor2 = '#ffa500';
const cor3 = 'red';

(() => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })

    // gráfico - artigos por data ---------------------------------------
    const onde1 = document.getElementById('g1')
    const grafico1 = new Chart(onde1, {
      type: 'line',
      data: {
        labels: [
          'janeiro, 2020',
          'fevereiro, 2020',
          'março, 2020',
          'abril, 2020',
          'maio, 2020',
          'junho, 2020',
          'julho, 2020',
          'agosto, 2020',
          'setembro, 2020',
          'outubro, 2020',
          'novembro, 2020',
          'dezembro, 2020',
          'janeiro, 2021'
        ],
        datasets: [{
          data: [
            5,
            9,
            47,
            337,
            337,
            320,
            303,
            221,
            176,
            137,
            145,
            88,
            22
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: cor1,
          borderWidth: 4,
          pointBackgroundColor: cor1
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
    labels: 
      ["Total",
        "Com impacto (FI)",
        "Sem impacto (FI)",
        "Com Qualis",
        "Sem Qualis"
        ]
    ,
    datasets: [{
      data: 
        [2147,
          1145,
          1002,
          1364,
          783,
        ]
      ,
      lineTension: 0,
      backgroundColor: ['#3cb371', cor1, cor2, cor1, cor2 ],
      fill: cor1,
      //borderColor: '#1e90ff',
      //borderWidth: 4,
      pointBackgroundColor: cor1,
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
        labels: 
          ['A1','A2','A3','B1','A4','B2','C','B3','B4']
        ,
        datasets: [{
          data: 
            [303,140,126,96,83,15,12,5,3]
          ,
          lineTension: 0,
          backgroundColor: cor1,
          fill: cor1,
          //borderColor: '#1e90ff',
          //borderWidth: 4,
          pointBackgroundColor: cor1
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
        labels: [1.3922,  2.6724,  3.9526,  5.2328,  6.513 ,  7.7932,
          9.0734, 10.3536, 11.6338, 12.914 , 14.1942, 15.4744, 16.7546,
         18.0348, 19.315 , 20.5952, 21.8754, 23.1556, 24.4358, 25.716 ].map(i=>i.toFixed(1)),
        datasets: [{
          data: 
           [475., 275.,  97.,  54.,   8.,  13.,   6.,  11.,   4.,   0.,   1.,
            0.,  13.,   2.,   0.,   0.,   0.,   0.,   1.,  41.],
          lineTension: 0,
          backgroundColor: cor1,
          fill: cor1,
          //borderColor: '#1e90ff',
          //borderWidth: 4,
          pointBackgroundColor: cor1
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
        labels: [1.8212,  3.5124,  5.2036,  6.8948,  8.586 , 10.2772,
          11.9684, 13.6596, 15.3508, 17.042 , 18.7332, 20.4244, 22.1156,
          23.8068, 25.498 , 27.1892, 28.8804, 30.5716, 32.2628, 33.954 ,
          35.6452, 37.3364, 39.0276, 40.7188, 42.41  ].map(i=>i.toFixed(1)),
        datasets: [{
          data: [ 84., 195., 209., 105.,  81., 119.,  38.,  24.,  76.,   6.,  14.,
            5.,   2.,   0.,   0.,   1.,   0.,   0.,  39.,   0.,   1.,   0.,
            0.,   0.,   2.],
          lineTension: 0,
          backgroundColor: cor1,
          fill: cor1,
          //borderColor: '#1e90ff',
          //borderWidth: 4,
          pointBackgroundColor: cor1
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
          3.  ,   28.46,   53.92,   79.38,  104.84,  130.3 ,  155.76,
            181.22,  206.68,  232.14,  257.6 ,  283.06,  308.52,  333.98,
            359.44,  384.9 ,  410.36,  435.82,  461.28,  486.74,  512.2 ,
            537.66,  563.12,  588.58,  614.04,  639.5 ,  664.96,  690.42,
            715.88,  741.34,  766.8 ,  792.26,  817.72,  843.18,  868.64,
            894.1 ,  919.56,  945.02,  970.48,  995.94, 1021.4 , 1046.86,
           1072.32, 1097.78, 1123.24, 1148.7 , 1174.16, 1199.62, 1225.08,
           1250.54, 1276.  
        ].map(i=>i.toFixed(0)),
        datasets: [{
          data: [
            77, 131, 158, 122, 101, 132,  33,  85,   9,  16,   8,  15,   7,
             10,  11,   8,   5,   4,   0,   2,   1,   0,   1,   0,   5,   0,
              0,   4,   0,   0,   0,  16,   0,   0,   0,   0,   0,   0,   0,
              0,   0,   0,  39,   0,   0,   0,   0,   0,   0,   2
          ],
          lineTension: 0,
          backgroundColor: cor1,
          fill: cor1,
          pointBackgroundColor: cor1
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
          "Hidroxicloroquina",
          "Tocilizumabe",
          "Lopinavir",
          "Ritonavir",
          "Remdesivir",
          "Cloroquina",
          "Corticosteroides",
          "Plasma convalescente",
          "Azitromicina",
          "Inibidores da Enzima Conversora da Angiotensina 2 (IECA 2)",
          "Antagonistas do Receptor da Angiotensina II",
          "Favipiravir",
          "Prednisona",
          "Umifenovir",
          "Imunoglobulina",
          "Heparina",
          "Oseltamivir",
          "Ribavirina",
          "Ivermectina",
          "Anakinra",
          "Vitamina D (25-hidroxivitamina D)",
          "Terapia celular",
          "Interferon",
          "Interferon alfa",
          "Dexametasona"
        ],
        datasets: [{
          data: [
            700,
            343,
            329,
            328,
            315,
            285,
            237,
            213,
            212,
            140,
            134,
            117,
            94,
            88,
            86,
            80,
            73,
            71,
            71,
            56,
            55,
            52,
            51,
            49,
            44
          ],
          backgroundColor: cor1
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
          "Hidroxicloroquina",
          "Tocilizumabe",
          "Ritonavir",
          "Lopinavir",
          "Remdesivir",
          "Cloroquina",
          "Plasma convalescente",
          "Azitromicina",
          "Corticosteroides",
          "Antagonistas do Receptor da Angiotensina II",
          "Inibidores da Enzima Conversora da Angiotensina 2 (IECA 2)",
          "Heparina",
          "Prednisona",
          "Favipiravir",
          "Umifenovir",
          "Imunoglobulina",
          "Anakinra",
          "Terapia celular",
          "Ribavirina",
          "Dexametasona",
          "Oseltamivir",
          "Interferon alfa",
          "Vitamina D (25-hidroxivitamina D)",
          "Interferon",
          "Darunavir"
        ],
        datasets: [{
          data: [283,
            171,
            147,
            146,
            146,
            116,
            101,
            99,
            85,
            64,
            64,
            52,
            50,
            50,
            36,
            35,
            33,
            30,
            28,
            26,
            23,
            22,
            21,
            21,
            20
          ],
          lineTension: 0,
          backgroundColor: cor1,
          fill: cor1,
          pointBackgroundColor: cor1
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


// gráfico 9 - PLN ----------------------------------------
// const dados_g9 = d3.dsv(';','./dados/dados_graficos/covid_ouro/tudo/g9.csv')

// dados_g9.then(
//   dados=>{
//     dados.forEach(
//       i=>{
//         console.log(i)
//       }
//     );
//   }
// );

const g9_labels = ['hydroxychloroquine','vaccine','tocilizumab','remdesivir','chloroquine','azithromycin','oxygen','ribavirin','methylprednisolone','anakinra','famotidine','dexamethasone','ivermectin','prednisolone','lopinavir','heparin','nitazoxanide','baricitinib','atazanavir','kaletra','colchicine','calcium','ritonavir','doxycycline','meropenem','tacrolimus','cyclosporine','sarilumab','siltuximab','rituximab','fingolimod','zosyn','linezolid','bactrim','canakinumab','dexmedetomidine','etanercept','adalimumab','infliximab','ustekinumab','today','eculizumab','darunavir','cholecalciferol','rivaroxaban','acitretin','metformin','oseltamivir','methotrexate','ruxolitinib'];

const g9_pos = [62,37,35,22,21,19,16,7,6,6,5,5,5,4,4,4,3,3,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const g9_neg = [113,40,60,27,37,38,28,4,11,11,2,7,8,2,7,10,0,2,0,0,2,4,7,7,2,2,5,6,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,4,4,4,5,5,5,8];

const onde9 = document.getElementById('g9')
const grafico9 = new Chart(onde9, {
  type: 'horizontalBar',
  data: {
    labels: 
    // ['hydroxychloroquine', 'tocilizumab', 'azithromycin', 'chloroquine', 'remdesivir', 'methylprednisolone', 'doxycycline', 'ribavirin', 'nitazoxanide', 'heparin', 'ivermectin', 'argatroban', 'anakinra', 'apixaban', 'baricitinib', 'colchicine', 'sitagliptin', 'leflunomide', 'ruxolitinib', 'sarilumab', 'alteplase', 'bivalirudin', 'propofol', 'ketamine', 'cisatracurium', 'fentanyl', 'meropenem', 'atazanavir', 'famotidine', 'dipyridamole', 'midazolam', 'metformin', 'dexamethasone', 'tenofovir', 'prednisolone', 'estradiol', 'ganciclovir', 'ibuprofen', 'ritonavir', 'oseltamivir', 'natalizumab', 'lopinavir', 'quercetin']
    g9_labels
    ,
    datasets: [{
      stack: "Stack 0",
      data: 
      // [8, 7, 5, 4, 4, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      g9_pos,
      backgroundColor: cor1
    },
    {
      stack: "Stack 0",
      data:
      // [12, 4, 6, 3, 6, 3, 0, 0, 0, 6, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1]
      g9_neg
        .map(i=>-i),
      backgroundColor: cor3
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


// revisao sistematica
const g9_sr_labels = ['hydroxychloroquine','chloroquine','ivermectin','remdesivir', 'tocilizumab'];
  
const g9_sr_pos = [5,3,2,1,0];

const g9_sr_neg = [10,2,0,5,7];

const onde9_sr = document.getElementById('g9_sr')
const grafico9_sr = new Chart(onde9_sr, {
  type: 'horizontalBar',
  data: {
    labels: 
    g9_sr_labels
    ,
    datasets: [{
      stack: "Stack 0",
      data: 
      g9_sr_pos,
      backgroundColor: cor1
    },
    {
      stack: "Stack 0",  data:
      g9_sr_neg
        .map(i=>-i), backgroundColor: cor3
    }
  ]
  },
  options: { scales: { x:{ max: 12, min: -12 } }, legend: { display: false }
  }
})

// meta analise
const g9_ma_labels = ['tocilizumab','prednisolone','chloroquine'];
const g9_ma_pos = [ 2,2,0 ];
const g9_ma_neg = [0,0,2];

const onde9_ma = document.getElementById('g9_ma')
const grafico9_ma = new Chart(onde9_ma, {
  type: 'horizontalBar',
  data: {
    labels: 
    g9_ma_labels
    ,
    datasets: [{
      stack: "Stack 0",
      data: 
      g9_ma_pos,
      backgroundColor: cor1
    },
    {
      stack: "Stack 0",  data:
      g9_ma_neg
        .map(i=>-i), backgroundColor: cor3
    }
  ]
  },
  options: { scales: { x:{ max: 12, min: -12 } }, legend: { display: false }
  }
})


// case report
const g9_cr_labels = ['tocilizumab','hydroxychloroquine','oxygen','remdesivir','azithromycin']

const g9_cr_pos = [  3,3,3,2,0 ];

const g9_cr_neg = [2,3,3,3,3];

const onde9_cr = document.getElementById('g9_cr')
const grafico9_cr = new Chart(onde9_cr, {
  type: 'horizontalBar',
  data: {
    labels: 
    g9_cr_labels
    ,
    datasets: [{
      stack: "Stack 0",
      data: 
      g9_cr_pos,
      backgroundColor: cor1
    },
    {
      stack: "Stack 0",  data:
      g9_cr_neg
        .map(i=>-i), backgroundColor: cor3
    }
  ]
  },
  options: { scales: { x:{ max: 12, min: -12 } }, legend: { display: false }
  }
})

// clinical trial

const g9_ct_labels = ['hydroxychloroquine','vaccine','remdesivir','chloroquine','tocilizumab','azithromycin','ribavirin','oxygen','lopinavir','methylprednisolone','anakinra','sarilumab','baricitinib','oseltamivir','today']

const g9_ct_pos = [15,13,12,7,4,3,2,2,1,1,1,1,0,0,0];
  
const g9_ct_neg = [14,9,5,12,11,3,1,2,2,3,3,5,2,2,3];

const onde9_ct = document.getElementById('g9_ct')
const grafico9_ct = new Chart(onde9_ct, {
  type: 'horizontalBar',
  data: {
    labels: 
    g9_ct_labels
    ,
    datasets: [{
      stack: "Stack 0",
      data: 
      g9_ct_pos,
      backgroundColor: cor1
    },
    {
      stack: "Stack 0",  data:
      g9_ct_neg
        .map(i=>-i), backgroundColor: cor3
    }
  ]
  },
  options: { scales: { x:{ max: 12, min: -12 } }, legend: { display: false }
  }
})


// coorte
const g9_co_labels = ['tocilizumab','hydroxychloroquine','methylprednisolone','oxygen','vaccine','azithromycin','heparin','cholecalciferol','anakinra'];

const g9_co_pos = [9,3,1,1,1,1,0,0,0];
  
const g9_co_neg = [16,15,2,2,3,5,2,3,4];

const onde9_co = document.getElementById('g9_co')
const grafico9_co = new Chart(onde9_co, {
  type: 'horizontalBar',
  data: {
    labels: 
    g9_co_labels
    ,
    datasets: [{
      stack: "Stack 0",
      data: 
      g9_co_pos,
      backgroundColor: cor1
    },
    {
      stack: "Stack 0",  data:
      g9_co_neg
        .map(i=>-i), backgroundColor: cor3
    }
  ]
  },
  options: { scales: { x:{ max: 12, min: -12 } }, legend: { display: false }
  }
})


})() // fim
  
