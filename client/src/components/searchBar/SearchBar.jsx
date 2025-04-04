import React from 'react';
import './searchBar.scss';
import { useState } from 'react';
import { Link } from 'react-router';


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

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

      <form>
        <input type='text' name='city' placeholder='City' onChange={handleChange}/>
        <input type='number' name='minPrice' min={0} max={100000000} placeholder='Min Price' onChange={handleChange}/>
        <input type='number' name='maxPrice' min={0} max={100000000} placeholder='Max Price' onChange={handleChange}/>
        <Link to={`/?type=${query.type}&city=${query.city}&min=${query.minPrice}&max=${query.maxPrice}`}>
          <button>
            <img src='/search.png' alt="" />
          </button>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar
