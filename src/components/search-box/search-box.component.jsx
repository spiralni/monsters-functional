import { Component } from "react";

import './search-box.styles.css'

const SearchBox = ({ placeholder, className, onSearchChange }) => {
    
    const onSearch = (e) => {
        onSearchChange(e.target.value.toLowerCase())
    }

    return (
        <input 
            type="search"
            placeholder={placeholder}
            className={`search-box ${className}`}
            onChange={onSearch}
        ></input>
    )
}

export default SearchBox