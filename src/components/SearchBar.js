import React from "react";

const SearchBar = (props) => {
    return (
        <>
            <input
                className="search-input"
                value={props.searchValue}
                onChange={(e) => props.setSearchValue(e.target.value)}
                placeholder="Search movies.."  />
        </>
    )
}

export default SearchBar;