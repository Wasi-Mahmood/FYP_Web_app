import React, { useState, useEffect } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Test_list from "./Test_list";

import "./Your_lists.css";
import { elements } from "chart.js";
import { createBrowserRouter } from "react-router-dom";
import { createContext } from "react";
import { app, db } from "../../firebase";
import {query,collection,onSnapshot,QuerySnapshot,getDocs,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";



export const watchListStore = React.createContext();

export const WatchListProvider = ({ children }) => {
  const [watchlistdata, setwatchlistdata] = useState();

  return (
    <watchListStore.Provider value={watchlistdata}>
      {children}
    </watchListStore.Provider>
  );
};





export default function Your_lists({handleClickWatchlist}) {
  const [watchList, setwatchList] = useState({});
  console.log("🚀 ~ file: Your_lists.js:6 ~ watchList:", watchList);
  const [watchListName, setwatchListName] = useState("");  
  const [newStockTicker, setNewStockTicker] = useState("");
  const [DocID, setDocID] = useState([]);


  const [Testwatchlistdata, setTestwatchlistdata] = useState("")

  const navigate = useNavigate();



// Ask From Sheroz !
const createWatchList = (watchListName) => {
    setwatchList((prevWatchList) => {
        
      return { ...prevWatchList, [watchListName] :[] };
    });
  };


//   const addToWatchList = (watchListKey, ticker) => {
//     const updatedWatchList = { ...watchList };
//     if (!updatedWatchList[watchListKey]) {
//       updatedWatchList[watchListKey] = [];
//     }
//     updatedWatchList[watchListKey].push((ticker));
//     console.log("🚀 ~ file: Your_lists.js:65 ~ addToWatchList ~ updatedWatchList:", updatedWatchList)
    
//     setwatchList(updatedWatchList);
    
//     setwatchList((prevWatchList) => {
//         return { ...prevWatchList, [updatedWatchList]:[] };
//       });

//   };




// Ask From Sheroz !
const addToWatchList = (watchListKey, ticker) => {
    setwatchList((prevWatchList) => {
      const updatedWatchList = { ...prevWatchList };
      if (!updatedWatchList[watchListKey]) {
        updatedWatchList[watchListKey] = [];
      }
      updatedWatchList[watchListKey] = [...updatedWatchList[watchListKey], ticker];
      return updatedWatchList;
    });
  };
  




//read watchlist as the component loads
useEffect(() => {
    
    const ReadWatchlistFromFirebase = async () => {
    //   console.log("🚀 ~ file: Your_lists.js:37 ~ TestWatchlist:", 5);
    
  
      //read watchlist
      const q = query(collection(db, "User_Watch_Lists"));
      const unsubscribe  = onSnapshot(q, (querySnapshot) => {
        let watchlist = [];
        querySnapshot.forEach((doc) => {
          watchlist.push({ ...doc.data(), id: doc.id });
          setDocID((prevDocID) => [...prevDocID, doc.id]);

        });
        watchlist.forEach(element => {
            Object.keys(element).slice(0, Object.keys(element).length -1).forEach((WatchList_name) => {
                setTimeout(() => {
                    
                    const ticker_array = element[WatchList_name]
                    createWatchList(WatchList_name);
                    ticker_array.forEach(ticker => {
                                addToWatchList(WatchList_name,ticker)
                        });
                    }, 0);
            })
        }) 
      });

      return ()=> unsubscribe()
      
  };
ReadWatchlistFromFirebase();

}, [])



const writeWatchListToFireBase =(watchlistKey,watchList) =>{
    let updatedWatchList = {...watchList}
    const watchlistValue = updatedWatchList[watchlistKey]
    
    console.log("🚀 ~ file: Your_lists.js:176 ~ handleCreateWatchList ~ lastValue:", watchlistValue)
    console.log("🚀 ~ file: Your_lists.js:173 ~ handleCreateWatchList ~ topkey:", watchlistKey)
    console.log("🚀 ~ file: Your_lists.js:176 ~ handleCreateWatchList ~ updatedWatchList:", updatedWatchList)


    //writeWatchlist
    // this commented code will be used to add the document into the firebase
    // in the document there will be watchlist initilized later
    // this code is useful when user signs up for the app and there is no preior doc or watchlist 
    // we can add this piece of code into the useEffect where it checks, if there is doc for the user in firebase or not
    // if there ain't any doc in database for a use this code can make one 
    // addDoc(collection(db, "User_Watch_Lists"),{

    //     // watchlist: ["TSLA", "IBM", "GOOG"] 
    //     //watchlistKey : watchlistValue
    //      lastkey:lastValue
    // })



    //UpdateWatchlist
  updateDoc(doc(db,"User_Watch_Lists", DocID[0]) ,{
    [watchlistKey]: watchlistValue 
})
}





//deleteWatchlist
// deleteDoc(doc(db,"User_Watch_Lists","BcnYzl9Q4Jgibal4Y8rn"))
//  console.log("delete Mai cahl giya")



const TestHandlewatchListNameChange =(watchlist_name) =>
{
    setwatchListName(watchlist_name)
}



  const handelWatchListNameChange = (e) => {
    setwatchListName(e.target.value);
  };

  const HandleCreateWatchList = () => {
    // createWatchList(watchListName);

    
    setwatchList((prevWatchList) => {
        
        const updatedList = { ...prevWatchList, [watchListName] :[] };
        writeWatchListToFireBase(watchListName,updatedList)
        return updatedList
      });


    setwatchListName("");
    

};

// useEffect(() => {

//     setwatchList((prevWatchList) => {
        
//         return { ...prevWatchList, [watchListName] :[] };
//       });


// }, [watchList])



  
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

  const handleWatchlistClick = (watchlist_name) => {
  console.log("🚀 ~ file: Your_lists.js:232 ~ handleWatchlistClick ~ watchlist_name:", watchList[watchlist_name])
    // setRoutes({
    //     path: "Test_list/wasi",
    //     element: <Test_list/>
    // })
    handleClickWatchlist(watchlist_name, watchList[watchlist_name])
    // navigate("/Test_list", { state: 55 });
  };

  const handleReadWatchlistClick = () => {
    // const read = ReadWatchlistFromFirebase();

    console.log(
      "🚀 ~ file: Your_lists.js:137 ~ handleReadWatchlistClick ~ read:",5);
  };





  
  return (
    <div>
      <input
        type="text"
        value={watchListName}
        onChange={handelWatchListNameChange}
        placeholder="Enter Wishlist Name"
      />

      <button onClick={HandleCreateWatchList}> Add Watch List </button>
      {/* <button onClick={ReadWatchlistFromFirebase}> Read WatchList</button> */}

      <div className="watchListsContainer">
          {Object.entries(watchList).map(([watchListName, watchList]) => (
             <div className="watchListContainer" key={watchListName}>
              <div className="watchList" onClick={() => handleWatchlistClick(watchListName)}>
                <h5>{watchListName}</h5>
                <div></div>
                <watchListName key={watchListName}/>
              </div>
              {/* <input
                type="text"
                value={newStockTicker}
                onChange={handleStockTickerChange}
                placeholder="Enter Stock Ticker"
              />

              <button onClick={() => handleAddToWatchList(watchListName)}>
                Add to Watch List
              </button> */}
            </div>
          ))}
      </div>
   
    </div>
  );
}
