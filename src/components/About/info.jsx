import React from 'react';
import "./about.css";
import { translateText } from '../../helpers/translation';

const info = () => {
  return (
    <div className='about__info grid'>
       <div className='about__box'>
        <i className='bx bx-award about__icon'></i>

           <h3 className='about__title aboutText__color'>{translateText().AboutExperience}</h3>
           <span className='about__subtitle'>{translateText().AboutExperienceTime}</span>
       </div>

       <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon'></i>

           <h3 className='about__title aboutText__color'>{translateText().AboutProductsSold}</h3>
           <span className='about__subtitle'>{translateText().AboutProductsSoldNumber}</span>
       </div>

       <div className='about__box'>
        <i className='bx bx-support about__icon'></i>

           <h3 className='about__title aboutText__color'>{translateText().AboutSupport}</h3>
           <span className='about__subtitle'>{translateText().AboutSupportTime}</span>
       </div>
    </div>
  )
}

export default info