import React,{useState} from "react";

const SearchForm = ({search}) => {
    return(
        <>
          <label for='password'>Search:</label>
          <input type="text" id="password" onChange={search}/>
        </>
    );
}

export default SearchForm;