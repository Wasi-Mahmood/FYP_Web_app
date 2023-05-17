import './App.css';
import Header from './Components/Header';
import Newsfeed from './NewsFeed/Newsfeed';
import Stats from './Stats/Stats';
import Footer from './Components/Footer';
import Account from './JS/Account';
import Registrationform from './NavItems/Js/Registrationform';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';

function App(){ 

  return (
    <div className="App">
      {/*HEADER*/}
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__body">
        <div className='app__container'>
          <Newsfeed/>
          {/*STATS */}
          <Stats/>
        </div>
      </div>
      {/*BODY*/}
      <Footer/>
      </div>
  );
}

export default App;
