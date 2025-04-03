import React from 'react';
import './homePage.scss';
import SearchBar from '../../components/searchBar/SearchBar';

function HomePage() {
  
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className="wrapper">
          <h1 className='title'>
            Find Your Dream Home 
          </h1>

          <p>
            Looking for your dream home? Whether you're buying, selling, or just exploring, we make real estate simple. Browse thousands of listings, compare prices, and connect with top agents—all in one place.
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Properties Sold</h2>
            </div>
            <div className="box">
              <h1>3000+</h1>
              <h2>Happy Customers</h2>
            </div>
          </div>
        </div>

      </div>
      <div className='imageContainer'>
        <img src="/bg.png" alt="" />
      </div>


    </div>
  )
}

export default HomePage
