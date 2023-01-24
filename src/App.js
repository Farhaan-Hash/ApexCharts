import {useState} from "react";
import Chart from "react-apexcharts";
import "./App.css";

function App() {
  const [state, setState] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "top",
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5,
      },
      colors: [
        function ({value, seriesIndex, w}) {
          if (value < 29) {
            return "#7E36AF";
          } else {
            return "#D9534F";
          }
        },
        function ({value, seriesIndex, w}) {
          if (value < 95) {
            return "#7E36AF";
          } else {
            return "#D9534F";
          }
        },
      ],

      fill: {
        colors: ["#1A73E8", "#B32824"],
        type: ["solid", "gradient"],
        gradient: {
          shadeIntensity: 0.7,
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
        pattern: {
          style: "verticalLines",
          width: 6,
          height: 6,
          strokeWidth: 2,
        },
      },

      xaxis: {
        categories1: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Death Rate",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Birth Rate",
        data: [80, 90, 44, 57, 41, 80, 20, 51],
      },
    ],
    // ----------------------------
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3C90EB",
          downward: "#DF7D46",
        },
      },
    },
    series1: [
      {
        data: [
          {
            x: new Date(1546646487877),
            y: [51.98, 56.29, 51.59, 53.85],
          },
          {
            x: new Date(1538778600000),
            y: [53.66, 54.99, 51.35, 52.95],
          },
          {
            x: new Date(1538778600000),
            y: [52.76, 57.35, 52.15, 57.03],
          },
        ],
      },
    ],
    // ----------------------------------
    series3: [
      {
        data: [
          {
            x: "TEAM A",
            y: [1358447400000, 1358620200000],
          },
          {
            x: "TEAM B",
            y: [1358447400000, 1358620200000],
          },
        ],
      },
    ],
    // ----------------------------------------

    series4: [44, 55, 41, 17, 15],
    chartOptions: {
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
    },

    // -----------------------------
    series5: [67, 84, 97, 61],
    options4: {
      chart: {
        height: 280,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            background: "#293450",
          },
          dataLabels: {
            total: {
              show: true,
              label: "TOTAL",
            },
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: "13px",
            },
            value: {
              color: "#fff",
              fontSize: "30px",
              show: true,
            },
          },
        },
      },
      labels: ["TEAM A", "TEAM B", "TEAM C", "TEAM D"],
    },
    // -----------------------------------------------
    series7: [
      {
        data: [
          {
            x: "INTC",
            y: 1.2,
          },
          {
            x: "GS",
            y: 0.4,
          },
          {
            x: "CVX",
            y: -1.4,
          },
          {
            x: "GE",
            y: 2.7,
          },
          {
            x: "CAT",
            y: -0.3,
          },
          {
            x: "RTX",
            y: 5.1,
          },
          {
            x: "CSCO",
            y: -2.3,
          },
          {
            x: "JNJ",
            y: 2.1,
          },
          {
            x: "PG",
            y: 0.3,
          },
          {
            x: "TRV",
            y: 0.12,
          },
          {
            x: "MMM",
            y: -2.31,
          },
          {
            x: "NKE",
            y: 3.98,
          },
          {
            x: "IYT",
            y: 1.67,
          },
        ],
      },
    ],

    options7: {
      legend: {
        show: false,
      },
      chart: {
        height: 350,
        type: "treemap",
      },
      title: {
        text: "Treemap with Color scale",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
        },
        formatter: function (text, op) {
          return [text, op.value];
        },
        offsetY: -4,
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -6,
                to: 0,
                color: "#CD363A",
              },
              {
                from: 0.001,
                to: 6,
                color: "#52B12C",
              },
            ],
          },
        },
      },
    },

    // --------------------------------------------------
    options8: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#99C2A2", "#C5EDAC", "#66C7F4"],
      series: [
        {
          name: "Column A",
          type: "column",
          data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5],
        },
        {
          name: "Column B",
          type: "column",
          data: [10, 19, 27, 26, 34, 35, 40, 38],
        },
        {
          name: "Line C",
          type: "line",
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
      ],
      stroke: {
        width: [4, 4, 4],
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
        },
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: [
        {
          seriesName: "Column A",
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
          },
          title: {
            text: "Columns",
          },
        },
        {
          seriesName: "Column A",
          show: false,
        },
        {
          opposite: true,
          seriesName: "Line C",
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
          },
          title: {
            text: "Line",
          },
        },
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },

    // -------------------------------------------------
    options9: {
      series: [
        {
          name: "TEAM A",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "TEAM B",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: "TEAM C",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
    // -----------------------------------------------
  });
  return (
    <div className="App">
      <h1 className="mb-5">ReactJS with APEX-Charts</h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="450"
          />
          <h6>Bar Chart</h6>
        </div>

        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="450"
          />
          <h6>Line Chart</h6>
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="425"
          />
          <h6>Area Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="450"
          />
          <h6>Radar Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options}
            series={state.series}
            type="histogram"
            width="450"
          />
          <h6>Histogram Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options}
            series={state.series}
            type="scatter"
            width="425"
          />
          <h6>Scatter Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options}
            series={state.series}
            type="heatmap"
            width="450"
          />
          <h6>HeatMap Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.plotOptions}
            series={state.series1}
            type="candlestick"
            width="450"
          />
          <h6> Candle Stick Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options}
            series={state.series3}
            type="rangeBar"
            width="425"
          />
          <h6> Range Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.chartOptions}
            series={state.series4}
            type="donut"
            width="425"
          />
          <h6> Dount/Pie Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options4}
            series={state.series5}
            type="radialBar"
            width="425"
          />
          <h6> Radial Bar</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options7}
            series={state.series7}
            type="treemap"
            width="425"
          />
          <h6> Tree Map</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options8}
            series={state.options8.series}
            width="425"
          />
          <h6> Multi-Axis Chart</h6>
        </div>
        <div className="col-4 mt-5">
          <Chart
            options={state.options9}
            series={state.options9.series}
            width="425"
          />
          <h6> Mixed Chart</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
