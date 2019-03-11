import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import * as HC_more from 'highcharts/highcharts-more';
import * as HC_solidgauge from 'highcharts/modules/solid-gauge';
HC_more(Highcharts);
HC_solidgauge(Highcharts);

function highchartsLaquageOptions() {
  Highcharts.setOptions({
    lang: {
      months: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Keäskuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
      weekdays: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'],
      shortMonths: ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syy', 'Lok', 'Mar', 'Jou'],
      resetZoom: "Nollaa suurennus"
    }
  });
}

function lineChartOptions(params) {
  var yAxisMax = params.yAxisMax || 100;
  const options = {
    chart: {
      zoomType: 'x',
      type: 'spline',
      resetZoomButton: {
        position: {
          align: 'right',
          x: 0,
          y: -25
        },
        theme: {
          fill: 'white',
          stroke: 'silver',
          r: 5,
          states: {
            hover: {
              fill: '#EEEEEE',
              style: {
                color: 'black',
              }
            }
          }
        }
      }
    },
    title: {
      text: params.title,
      align: 'left',
      margin: 0,
      x: 30
    },
    yAxis: {
      max: yAxisMax,
      tickInterval: 10,
      title: {
        enabled: false
      }
    },
    xAxis: {
      tickPixelInterval: 75,
      type: 'datetime',
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%e. %b',
        week: '%e. %b',
        month: '%b \'%y',
        year: '%Y'
      }
    },
    navigator: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    rangeSelector: {
      selected: 4,
      inputEnabled: false,
      buttonTheme: {
        visibility: 'hidden'
      },
      labelStyle: {
        visibility: 'hidden'
      }
    },
    plotOptions: {
      series: {
        marker: {
          symbol: 'point',
          radius: 3,
          enabled: false
        },
        lineWidth: 2.5,
        states: {
          hover: {
            enabled: true,
            lineWidth: 3.5
          }
        }
      },
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [
              0, Highcharts.getOptions().colors[0]
            ],
            [
              1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')
            ]
          ]
        },
        threshold: null
      }
    },
    series: params.data
  };
  return options;
}


function weatherChartOptions(params) {
  const options = {
    chart: {
      zoomType: 'x',
      type: 'area',
      margin: [30, 10, 20, 10],
      resetZoomButton: {
        position: {
          align: 'right',
          x: 0,
          y: -25
        },
        theme: {
          fill: 'white',
          stroke: 'silver',
          r: 5,
          states: {
            hover: {
              fill: '#EEEEEE',
              style: {
                color: 'black',
              }
            }
          }
        }
      }
    },
    title: {
      text: params.title,
      align: 'left',
      margin: 0,
      x: 40
    },
    yAxis: {
      gridLineWidth: 0,
      labels: {
        align: 'left',
        x: 0,
        y: -1,
        formatter: function() {
          return this.value + '°';
        }
      },
      max: params.yAxisMax,
      min: params.yAxisMin,
      //tickInterval: 10,
      title: {
        enabled: false
      }
    },
    xAxis: {
      tickWidth: 0,
      lineWidth: 0,
      gridLineWidth: 0,
      labels: {
        x: 0,
        y: 14
      },
      tickPixelInterval: 100,
      type: 'datetime',
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%e. %b',
        week: '%e. %b',
        month: '%b \'%y',
        year: '%Y'
      }
    },
    navigator: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    rangeSelector: {
      selected: 4,
      inputEnabled: false,
      buttonTheme: {
        visibility: 'hidden'
      },
      labelStyle: {
        visibility: 'hidden'
      }
    },
    plotOptions: {
      series: {
        color: 'rgba(249, 203, 2, 1)',
        fillOpacity: 0.1,
        marker: {
          symbol: 'point',
          radius: 3,
          enabled: false
        },
        states: {
          hover: {
            enabled: true,
            lineWidth: 3
          }
        }
      },
      area: {
        threshold: null
      }
    },
    legend: {
      enabled: false
    },
    series: params.data
  };
  return options;
}


function gaugeChartOptions(params) {
  const options = {
    chart: {
      type: 'solidgauge',
      height: '220px',
      backgroundColor: 'none',
      margin: 10,
    },
    credits: {
      enabled: false
    },
    title: {
      text: params.title,
      align: 'left',
      margin: 0,
      x: 15,
      style: {
        fontSize: '17px'
      }
    },
    tooltip: {
      enabled: false,
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{
        outerRadius: '90%',
        innerRadius: '80%',
        backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
          .setOpacity(0.2)
          .get(),
        borderWidth: 0,
        //shape: 'arc'
      }, {
        outerRadius: '77%',
        innerRadius: '66%',
        backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
          .setOpacity(0.2)
          .get(),
        borderWidth: 0,
        //shape: 'arc'
      }]
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: true,
          borderWidth: 0,
          useHTML: true,
        },
        linecap: 'round',
        rounded: true
      }
    },

    series: [{
      name: 'Kosteus',
      data: [{
        color: Highcharts.getOptions().colors[0],
        radius: '90%',
        innerRadius: '80%',
        y: params.data[1].data,
        dataLabels: {
          y: -45,
          backgroundColor: 'none',
          format: '<div style="text-align:center; font-size: 13px; color: grey; font-family:Arial, Helvetica, sans-serif;"><span>Kosteus</span></br><span style="font-size:15px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span>' +
            '<span style="font-size:12px;color:grey">%</span></div>'
        },
      }]
    }, {
      name: 'Lämpötila',
      data: [{
        color: Highcharts.getOptions().colors[1],
        radius: '77%',
        innerRadius: '66%',
        y: params.data[0].data,
        dataLabels: {
          y: -0,
          backgroundColor: 'none',
          format: '<div style="text-align:center; font-size: 13px; color: grey; font-family:Arial, Helvetica, sans-serif;"><span>Lämpötila</span></br><span style="font-size:15px; color: black;'
            + '">{y:.1f}</span>' +
            '<span style="font-size:12px;color:grey">°C</span></div>'
        },
      }]
    }]
  };
  return options;
}

function plainLineChartOptions(params) {
  const options = {
    chart: {
      type: 'spline',
      marginBottom: 10,
      marginTop: 0
    },
    title: {
      text: "",
    },
    subtitle: {
      enabled: false
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      visible: false,
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false
        },
        states: {
          hover: {
            enabled: true
          }
        }
      },
      line: {
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: false
      }
    },
    series: [{
      data: params.data,
    }]
  };
  return options;
}

export {
  lineChartOptions,
  gaugeChartOptions,
  plainLineChartOptions,
  highchartsLaquageOptions,
  weatherChartOptions
};
