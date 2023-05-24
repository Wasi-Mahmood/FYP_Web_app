import React from "react";
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useContext } from "react";
import { watchListStore } from "./Your_lists";


const  Test_list =() =>
{
    const watchListData =  useContext(watchListStore)
    console.log("🚀 ~ file: Test_list.js:11 ~ watchListData:", watchListData)
    return(
        <div>
            This is Test List {watchListData}
            
        </div>
    )

}
export default Test_list;