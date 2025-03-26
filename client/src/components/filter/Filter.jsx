import React from 'react';
import './filter.scss';

function Filter() {
    return (
        <div className="filter">
            <h1>Search results for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' name='city' placeholder='City name' />
                </div>
            </div>

            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">Any</option>
                        <option value="apartment" >Apartment</option>
                        <option value="hosue">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Min price</label>
                    <input type="number" id='minPrice' name='minPrice' placeholder='any' />
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">Max price</label>
                    <input type="number" id='maxPrice' name='maxPrice' placeholder='any' />
                </div>

                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="number" id='bedroom' name='bedroom' placeholder='any' />
                </div>

                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>

        </div>
    )
}

export default Filter
