import React from 'react';
import './slider.scss';

function Slider({images}) {
  const[imageIndex,setImageIndex] = React.useState(null);

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>(prevIndex - 1 + images.length) % images.length);
  }  

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }



  return (
      <div className="slider">  
        {imageIndex !== null && <div className="fullSlider">
          <div className="arrow" onClick={handlePrevImage}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src= {images[imageIndex]}  alt="" />
          </div>
          <div className="arrow" onClick={handleNextImage}>
            <img src="/arrow.png" className='right' alt="" />
          </div>

          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>}

        <div className="bigImage">
          <img src={images[0]} alt=""  onClick={() => setImageIndex(0)}/>
        </div>
        <div className="smallImages">
          {images.slice(1).map((image,index) =>{
            return (
              <div className="smallImage" key={index}>
                <img src={image} alt=""  onClick={() => setImageIndex(index + 1)}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Slider
