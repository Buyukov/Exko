import React from 'react'
import "./carouselFlip.css";
import Image1 from "../../assets/onlineShoping2.jpg";
import Image2 from "../../assets/onlineShoping4.jpg";
import Image3 from "../../assets/onlineShoping5.jpg";
import Image4 from "../../assets/onlineShoping.jpg";


const CarouselFlip = () => {
  return(
  <div className='carouselFlip__container'>
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{borderRadius: "2rem"}}>
      <img src={Image4} className='Carouse__image'  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Image2} className='Carouse__image'  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Image3} className='Carouse__image'  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={Image1} className='Carouse__image'  class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
    

}

export default CarouselFlip
