import React from 'react'
import "./carouselFlip.css";
import Image1 from "../../assets/onlineShoping2.jpg";
import Image2 from "../../assets/onlineShoping4.jpg";
import Image3 from "../../assets/onlineShoping5.jpg";
import Image4 from "../../assets/onlineShoping.jpg";


const CarouselFlip = () => {
  return(
  <div className='carouselFlip__container'>
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active" style={{borderRadius: "2rem"}}>
      <img src={Image4} className='Carouse__image'  alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Image2} className='Carouse__image'  alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Image3} className='Carouse__image'   alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Image1} className='Carouse__image'   alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
    

}

export default CarouselFlip
