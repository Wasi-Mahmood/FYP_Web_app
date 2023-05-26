import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useContext } from "react";
import { watchListStore } from "./Your_lists";


const  Test_list =() =>
{
    const location = useLocation()
    const val = Object.values(location.state)[0]
    console.log("🚀 ~ file: Test_list.js:11 ~ location:",val)
    const watchListData =  useContext(watchListStore)
    // console.log("🚀 ~ file: Test_list.js:11 ~ watchListData:", watchListData)
    return(
        <div>
            This is Test List {watchListData}
            
        </div>
    )

}
export default Test_list;