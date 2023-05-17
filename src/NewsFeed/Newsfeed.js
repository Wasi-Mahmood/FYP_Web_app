import React from 'react'
import './Newsfeed.css'
import { createChart } from 'lightweight-charts';
import GetStockData from '../Utiles/GetStockData';
import GenerateLineSeriesChart from '../Utiles/SetChart'


function Newsfeed() {


  return (
    <div className='newsfeed'>

        <div className='newsfeed__container'>
            <div className='newsfeed__chartsection'>
                <div className='newsfeed__portfolio'> 
                <GenerateLineSeriesChart ticker ="AAPL"/>

                </div>
                <div className='newsfeed__chart'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed;