import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,RouterProvider,Route, createSearchParams
}from 'react-router-dom';
import Account from './JS/Account';
import Home from './NavItems/Js/Home';
import Footer from './Components/Footer';
import Registrationform from './NavItems/Js/Registrationform';
import Loginform from './NavItems/Js/Loginform';
import Portfolio from './NavItems/Js/Portfolio';
import Services from './NavItems/Js/Services';
import Profile from './Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Loginform",
    element: <Loginform/>
  },
  {
    path: "Home",
    element: <Home/>
  },
  {
    path: "Registrationform",
    element: <Registrationform/>
  }
  ,
  {
    path: "Portfolio",
    element: <Portfolio/>
  }
  ,
  {
    path: "Services",
    element: <Services/>
  }
  ,
  {
    path: "Profile",
    element: <Profile/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
{/*reportWebVitals();*/}
reportWebVitals(console.log);
