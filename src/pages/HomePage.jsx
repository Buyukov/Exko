import "../App.css";
import React from 'react'
import CarouselFlip from "../components/carouselFlip/CarouselFlip";
import SpaceImages from "../components/spaceImages/SpaceImages";
import About from "../components/About/About";
import RandomProducts from "../components/RandomProducts/RandomProducts";
import RandomProducts2 from "../components/RandomProducts2/RandomProducts2";
// import Footer from "../components/footer/Footer";


const HomePage = () => {
  return (
    <>
      <CarouselFlip />
      <About />
      <RandomProducts />
      <SpaceImages />
      <RandomProducts2 />
      {/* <Footer /> */}
    </>
  )
}

export default HomePage