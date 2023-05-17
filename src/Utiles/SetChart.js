import { createChart, CrosshairMode, LineStyle } from "lightweight-charts";
import { Component, useEffect } from "react";
import GetStockData from "./GetStockData";


const GenerateLineSeriesChart = (props) => {
  let {ticker} = props;
  const stockData = GetStockData({ ticker });

  
  

  useEffect(() => {
    const generateChart = (stockData) => {
      const chartContainer = document.getElementById('chart-container');

      const chart = createChart(chartContainer, {
        width: chartContainer.offsetWidth,
         height: 300,//chartContainer.offsetHeight,
        crosshair: {
          mode: CrosshairMode.Normal,
        },
      });

      chart.applyOptions({
        layout: {
          backgroundColor: 'black',
          textColor: 'grey',
        },
      });

      const lineSeries = chart.addLineSeries();

      lineSeries.applyOptions({
        priceLineVisible: true,
        color: 'blue',
        lineWidth: 2,
        lineStyle: LineStyle.Solid,

      });

      const chartData = stockData.map((item) => ({
        time: item.date,
        value: parseFloat(item.close),
      }));
      chartData.sort((a, b) => a.time - b.time);

      lineSeries.setData(chartData);

      chart.timeScale().fitContent();
    };

        

        if (stockData.length !== 0) {
            console.log("Calling GenerateChart Function")
            generateChart(stockData);
        }
    
        else{
            console.log("stock Data Length Zero")
        }

    
  }, [stockData]);

  return <div id="chart-container"></div>;
};

export default GenerateLineSeriesChart;

