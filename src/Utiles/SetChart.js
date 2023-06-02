import { createChart, CrosshairMode, LineStyle } from "lightweight-charts";
import { Component, useEffect } from "react";
import GetStockData from "./GetStockData";


const GenerateLineSeriesChart = (props) => {
  let {ticker, showPred} = props;
  console.log("🚀 ~ file: SetChart.js:8 ~ GenerateLineSeriesChart ~ showPred:", showPred)
  
  const [stockData, PredData]= GetStockData({ ticker });
  console.log("🚀 ~ file: SetChart.js:9 ~ GenerateLineSeriesChart ~ PredData:", PredData)

 
  

  useEffect(() => {


    const generateChart = (stockData,PredData) => {
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

      if(PredData !== (undefined || null) && showPred === true ){
        const predlineSeries = chart.addLineSeries();
        

        predlineSeries.applyOptions({
          priceLineVisible: true,
          color: 'green',
          lineWidth: 1,
          lineStyle: LineStyle.Solid,
  
        });
  
        const PredchartData = PredData.map((item) => ({
          time: item.date,
          value: parseFloat(item.close),
        }));
        PredchartData.sort((a, b) => a.time - b.time);
  
        predlineSeries.setData(PredchartData);
  
        chart.timeScale().fitContent();
      }
    };

        

        if (stockData.length !== 0) {
            console.log("Calling GenerateChart Function")
            generateChart(stockData,PredData);
        }
    
        else{
            console.log("stock Data Length Zero")
        }

    
  }, [stockData]);




  return <div id="chart-container"></div>;
};

export default GenerateLineSeriesChart;

