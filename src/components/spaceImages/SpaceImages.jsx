import { useEffect } from 'react';
import React from 'react';
import "./spaceImages.css";
import spaceImage1 from "../../assets/onlineShoping4.jpg";

import Aos from 'aos';
import 'aos/dist/aos.css';



const SpaceImages = () => {
  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);

  /* data-aos = "zoom-in-up" */
  return (
    <div className='spaceImages__contaienr' > 
        <img src={spaceImage1} alt='' className='spaceImages__image'/>
    </div>
  )
}

export default SpaceImages