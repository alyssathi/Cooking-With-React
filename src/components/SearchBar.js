import React, {useContext} from 'react'
import {RecipeContext} from './App'

export default function SearchBar() {

    const {handleSearchBar} = useContext(RecipeContext);

    return (
        <div className = "search-bar__container">
            <input className = "search-bar__input"
            onChange = {(e)=> console.log(handleSearchBar(e.target.value))} />
            <button className = "search-bar__btn btn btn--primary">Search</button>
        </div>
    )
}
