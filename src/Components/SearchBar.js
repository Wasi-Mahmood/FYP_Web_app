import React,{useState} from "react";

export default function SearchBar({ onSearch}){

    const [ticker, setticker] = useState("")

    const handleSearch =() =>
    {
        onSearch(ticker)
    };


    

    return(
        <div>
            <input
                type="text"
                value={ticker}
                onChange={(e) => setticker(e.target.value)}
                placeholder="Search"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}