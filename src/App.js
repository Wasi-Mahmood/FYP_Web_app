import "./App.css";
import Header from "./Components/Header";
import Newsfeed from "./NewsFeed/Newsfeed";
import Stats from "./Stats/Stats";
import Footer from "./Components/Footer";
import Test_list from "./Components/Lists/Test_list";
import Account from "./JS/Account";
import Registrationform from "./NavItems/Js/Registrationform";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import Your_lists from "./Components/Lists/Your_lists";

export const PostStore = React.createContext();

// const PostList =() =>{
//   const data = useContext(PostStore)
//   console.log("🚀 ~ file: App.js:18 ~ PostList ~ data:", data)
// }

function App() {
  const [ticker, setticker] = useState("");
  const [refresh , setrefresh] = useState(false)

  const [showNewsfeed, setShowNewsfeed] = useState(true);
  const [showTestlist, setShowTestlist] = useState(false);
  const [WatchList, setWatchList] = useState({})
  console.log("🚀 ~ file: App.js:30 ~ App ~ watchList:", WatchList)

  const handleClickWatchlist = (watchlist_name, watchlist) => {
    setShowNewsfeed(false);
    setShowTestlist(true);
    setWatchList({[watchlist_name]: watchlist})
  };

  const handleClickStockSearch =() =>
  {
    setShowNewsfeed(true);
    setShowTestlist(false);

  }

  return (
    <div className="App">

        <PostStore.Provider value={{ ticker, setticker,refresh, setrefresh }}>
      <div className="app__header">
          {/*HEADER*/}
         
          <Header handleClickStockSearch ={handleClickStockSearch}/>
      </div>

      <div className="your_lists">
      <Your_lists handleClickWatchlist ={handleClickWatchlist}/>


      </div>




      <div className="app__body">
        <div className="app__container">
          {showNewsfeed && <Newsfeed/>}
          {showTestlist && <Test_list  WatchList={WatchList}/>}
          {/*STATS */}

          <Stats />
        </div>
      </div>
        </PostStore.Provider>
      {/*BODY*/}

      <Footer />
    </div>
  );
}

export default App;
