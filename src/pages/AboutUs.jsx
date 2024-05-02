import React from 'react'
import "./Css/aboutPages.css"
import About from "../components/About/About"


const AboutUs = (props) => {
  return (
    <div>
    <div className='aboutPages__container'>
      <img src={props.bannerAbout} className='aboutBanner' alt='aboutBanner' />
    </div>

    <About />
    </div>
  )
}

export default AboutUs