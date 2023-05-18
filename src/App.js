import "./App.css";
import Header from "./Components/Header";
import Newsfeed from "./NewsFeed/Newsfeed";
import Stats from "./Stats/Stats";
import Footer from "./Components/Footer";
import Account from "./JS/Account";
import Registrationform from "./NavItems/Js/Registrationform";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

export const PostStore = React.createContext();

// const PostList =() =>{
//   const data = useContext(PostStore)
//   console.log("🚀 ~ file: App.js:18 ~ PostList ~ data:", data)
// }

function App() {
  const [ticker, setticker] = useState("");
  const [refresh , setrefresh] = useState(false)
  return (
    <div className="App">

        <PostStore.Provider value={{ ticker, setticker,refresh, setrefresh }}>
      <div className="app__header">
          {/*HEADER*/}
         
          <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
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
