import React from 'react';
import './searchBar.scss';
import { useState } from 'react';


const types = ["buy","rent"];
function SearchBar() {
  const [query,setQuery] = useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0,
  })

  const chooseType = (type) => {
    setQuery((prev) => ({
      ...prev,
      type,
    }))
  }

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button 
            key={type} 
            onClick = {() => chooseType(type)} 
            className={query.type === type ? "active" : ""}>
              {type}
          </button>
        ))}
      </div>

      <form action="">
        <input type='text' name='location' placeholder='Location' />
        <input type='number' name='minPrice' min={0} max={100000000} placeholder='Min Price' />
        <input type='number' name='maxPrice' min={0} max={100000000} placeholder='Max Price' />
        <button type='submit'>
          <img src='/search.png' alt="" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
