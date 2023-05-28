import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useContext } from "react";
import { watchListStore } from "./Your_lists";
import "./Test_list.css";

import { app, db } from "../../firebase";
import {query,collection,onSnapshot,QuerySnapshot,getDocs,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";


const  Test_list =({WatchList}) => {
    console.log("🚀 ~ file: Test_list.js:9 ~ watchList:", WatchList)

    // const location = useLocation()
    // const val = Object.values(location.state)[0]
    // console.log("🚀 ~ file: Test_list.js:11 ~ location:",val)
    // const watchListData =  useContext(watchListStore)
    // console.log("🚀 ~ file: Test_list.js:11 ~ watchListData:", watchListData)


    const [newStockTicker, setNewStockTicker] = useState("");
    const [watchListName, setwatchListName] = useState("");  

    const [watchList, setwatchList] = useState({});

    useEffect(() => {
        setwatchList(WatchList)
    }, [WatchList]) 



    const writeWatchListToFireBase =(watchlistKey,WatchList) =>{
        let updatedWatchList = {...WatchList}
        const watchlistValue = updatedWatchList[watchlistKey]
        
        console.log("🚀 ~ file: Your_lists.js:176 ~ handleCreateWatchList ~ lastValue:", watchlistValue)
        console.log("🚀 ~ file: Your_lists.js:173 ~ handleCreateWatchList ~ topkey:", watchlistKey)
        console.log("🚀 ~ file: Your_lists.js:176 ~ handleCreateWatchList ~ updatedWatchList:", updatedWatchList)
    
    
        //UpdateWatchlist
      updateDoc(doc(db,"User_Watch_Lists", "58hHgLDJw5phtnnztAky") ,{
        [watchlistKey]: watchlistValue 
    })
    }



    const handleAddToWatchList = (watchListKey) => {
        //addToWatchList(watchListKey, newStockTicker);
    
        
        setwatchList((prevWatchList) => {
          const updatedWatchList = { ...prevWatchList };
          if (!updatedWatchList[watchListKey]) {
            updatedWatchList[watchListKey] = [];
          }
          updatedWatchList[watchListKey] = [...updatedWatchList[watchListKey], newStockTicker];
    
          writeWatchListToFireBase(watchListKey,updatedWatchList)
          return updatedWatchList;
        });
    
        setNewStockTicker("");
      };





    const handleStockTickerChange = (e) => {
    
        setNewStockTicker(e.target.value);
      };



    return(
        <div>
            {
                Object.keys(watchList).map((Key) =>(
                    <div className="WatchListContainer" key={Key}>
                        <div className="Keycontainer"><h5>{Key}</h5>
                            <input
                                type="text"
                                value={newStockTicker}
                                onChange={handleStockTickerChange}
                                placeholder="Enter Stock Ticker"
                             />
                            <button onClick={() => handleAddToWatchList(Key)}>
                                Add to Watch List
                            </button>
                        </div>
                        {watchList[Key].map((item) =>(
                            <div className="valueTickercontainer" key={item}>
                                <h5><b>{item}</b></h5>
                            </div>
                        ))}
                    </div>
                ))
            }
            
        </div>
    )

}
export default Test_list;