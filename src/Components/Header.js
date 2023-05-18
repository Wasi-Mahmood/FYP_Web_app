import React,{useContext, useState} from "react";
import "../Components/Header.css";
import Account from "../JS/Account";
import myImage from "../Img/Logosvg/stockapplogo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "./SearchBar";
import SelectedTicker from "../Utiles/SelectedTIcker";
import {PostStore} from "../App"




function Header() {

 const data = useContext(PostStore)
 
  const [Ticker, setTicker] = useState("");
  const [refresh , setrefresh] = useState(false)

  data.setticker(Ticker)
  data.setrefresh(refresh)
 

  const handleSearch = (ticker) => {
   setTicker(ticker);
   setrefresh(true)
  }

  return (

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


          <div className="searchBar">
          <SearchBar onSearch={handleSearch}/>
          </div>
        
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
