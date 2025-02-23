import React from "react";
import "../general/general.css";

const SearchBar = ({ title, setTitle }) => {
    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search Movies" 
                value={title} 
                onChange={handleInput} 
            />
        </div>
    );
};

export default SearchBar;
