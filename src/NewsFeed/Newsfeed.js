import React, { useContext, useEffect, useState } from "react";
import "./Newsfeed.css";
import { createChart } from "lightweight-charts";
import GetStockData from "../Utiles/GetStockData";
import GenerateLineSeriesChart from "../Utiles/SetChart";
import SearchBar from "../Components/SearchBar";
import SelectedTicker from "../Utiles/SelectedTIcker";
import { PostStore } from "../App";

function Newsfeed() {
  const data = useContext(PostStore);
  console.log("🚀 ~ file: Newsfeed.js:18 ~ Newsfeed ~ data:", data.ticker);
  const [stockticker, setStockticker] = useState('')
  const [showPred, setShowPred] = useState(false)

  

  
  
 useEffect(() => {
  setShowPred(false)
  data.setrefresh(false)
  setStockticker(data.ticker)
  
}, [data.ticker])



 const handleOnClickPred =()=>{
  setShowPred(true)
  data.setrefresh(false)

 }

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartsection">
          <div className="newsfeed__portfolio">
            {
              !data.refresh ? "Loading.." : <GenerateLineSeriesChart ticker={stockticker} showPred={showPred} />     
            }
            
            {
              !data.refresh ? " ": <button onClick={handleOnClickPred}>Show Predictions</button>              
            }
            
          </div>
          <div className="newsfeed__chart"></div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
