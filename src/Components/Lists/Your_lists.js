import React, { useState , useEffect} from "react";
import {BrowserRouter, useNavigate } from "react-router-dom";
import Test_list from "./Test_list";

import "./Your_lists.css";
import { elements } from "chart.js";
import { createBrowserRouter } from "react-router-dom";
import { createContext } from "react";
import { app, db  } from "../../firebase";
import {query, collection, onSnapshot, QuerySnapshot, getDocs, getFirestore} from 'firebase/firestore'

export const watchListStore = React.createContext()


export const WatchListProvider =( {children}) =>
{
    const [watchlistdata, setwatchlistdata] = useState()

    return<watchListStore.Provider value={watchlistdata}>
        
        {children}
    </watchListStore.Provider>


}



export default function Your_lists()
{
    
    const [watchList, setwatchList] = useState({})
    console.log("🚀 ~ file: Your_lists.js:6 ~ watchList:", watchList)
    const [watchListName, setwatchListName] = useState("")
    const [newStockTicker, setNewStockTicker] = useState("");
    
    const navigate =useNavigate()
    
    


    const createWatchList = (watchListName)=>{
        
        const newWatchList ={[watchListName]:[]}
        setwatchList({...watchList, ...newWatchList})

    };

    const addToWatchList =(watchListKey, ticker) =>
    {
        const updatedWatchList ={...watchList}
        if(!updatedWatchList[watchListKey]){
            updatedWatchList[watchListKey] =[]
        }
        updatedWatchList[watchListKey].push(ticker)
        setwatchList(updatedWatchList)
    }






    const [TestWatchlist, setTestWatchlist] = useState([])



    const ReadWatchlistFromFirebase = async() =>{

        console.log("🚀 ~ file: Your_lists.js:37 ~ TestWatchlist:", 5)
        let watchlist =[]

        // useEffect(() =>{

        //     const q = query(collection(db, 'User_Watch_Lists'))
        //     const unsubscribe = onSnapshot(q,(querySnapshot) => {
        //         let watchlist =[]
        //         querySnapshot.forEach((doc)=> {
                    
        //             watchList.push({...doc.data(), id: doc.id})
        //         });

        //         console.log("🚀 ~ file: Your_lists.js:83 ~ unsubscribe ~ watchlist:", watchlist)
        //         setTestWatchlist(watchlist)

        //     })

        //     return() => unsubscribe()

        // },[]);
       
        // const q = query(collection(db,'User_Watch_Lists'))
        // const querySnapshot = await getDocs(collection('User_Watch_Lists', db));
        // console.log("🚀 ~ file: Your_lists.js:94 ~ ReadWatchlistFromFirebase ~ querySnapshot:", querySnapshot)
        
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //   });
        const q = query(collection(db, 'User_Watch_Lists'));
    onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        });
        console.log("🚀 ~ file: Your_lists.js:103 ~ unsubscribe ~ todosArr:", todosArr)
      
    });
    }









    const handelWatchListNameChange =(e) =>
    {
        setwatchListName(e.target.value)
    };

    const handleCreateWatchList = () =>
    {
        createWatchList(watchListName)
        setwatchListName("")
        
    }
    const handleAddToWatchList =(watchListKey) =>
    {
        addToWatchList(watchListKey, newStockTicker)
        setNewStockTicker("")
    }

    const handleStockTickerChange =(e) =>
    {
        setNewStockTicker(e.target.value)
    }
    
    const handleWatchlistClick =() =>{
       
       
        
        // setRoutes({
        //     path: "Test_list/wasi",
        //     element: <Test_list/>
        // })
    

        navigate("/Test_list", {state: 55});
    
      
       
    }

    const handleReadWatchlistClick =() =>{
        
            const read =ReadWatchlistFromFirebase()

    
        console.log("🚀 ~ file: Your_lists.js:137 ~ handleReadWatchlistClick ~ read:", read)
    }

    return(

        <div>
        <input
        type="text"
        value={watchListName}
        onChange={handelWatchListNameChange}
        placeholder="Enter Wishlist Name"
        />
        
            <button onClick={handleCreateWatchList}> Add Watch List </button>
            <button onClick={ReadWatchlistFromFirebase}> Read WatchList</button>
        
        {
            Object.entries(watchList).map(([watchListName, watchList]) =>
               (

                <div key={watchListName}>
                    <div className="watchList" onClick={handleWatchlistClick}>

                        <h5>{watchListName}</h5>
                       
                    <div>
                </div>
                <watchListName key={watchListName} c/>
                    </div>
                <input
                 type ="text"
                 value={newStockTicker}
                 onChange={handleStockTickerChange}
                 placeholder="Enter Stock Ticker"
                 />

                    <button onClick={() => handleAddToWatchList(watchListName)}>
                    Add to Watch List 
                    </button>
                  </div>
               )
            
            )
        }
        
        </div>
    )
}