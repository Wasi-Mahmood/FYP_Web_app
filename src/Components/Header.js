import React from "react";
import "../Components/Header.css";
import Account from "../JS/Account";
import myImage from "../Img/Logosvg/stockapplogo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  return (
    /*<div className='header__wrapper'>
            {/*logo
            <div className='header__logo'>
            <img src={myImage} alt="My Image" width={100}/>
               {/* <img src={Logo} width={25}/>                
            </div>
            
            {/*search*/
    /* <div className='header__search'>
                <div className='header__searchcontainer'>
                    <input placeholder='Search' type="text" />
                </div>
            </div>*/
    /*menu items
            <div className='header__menuitems'>
                <a href='/Home'>Home</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Cash</a>
                <a href='#'>Messages</a>
                <a href='/Account'>Account</a>
            </div>

    </div>*/
    <header>
      <div className="navbar">
        <nav>
          
          <input type={"checkbox"} id="check" />
          <label for="check" className="checkbtn">
            <i className="bi bi-list"></i>
          </label>
          
          <label className="header__logo">
            <a href="/Home">
              <label>upStoxs</label>
            </a>
            <a href="/Home">
              <img
                src={myImage}
                alt="My Image"
                className="imageheader"
                width={100}
                height={60}
              />
            </a>
          </label>
        

         
          <ul>
            <li>
              <a class="active" href="/Home">
                Home
              </a>
            </li>
            <li>
              <a href="/Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="#">Cash</a>
            </li>
            <li>
              <a href="/Loginform">Account</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
