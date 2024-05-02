import React from 'react';
import AboutImg from "../../assets/deliver-to-so-many-countries-2048x1152.jpeg";
import Info from './info';
import "./about.css";
import { translateText } from '../../helpers/translation';

const About = () => {
    return (
        <section className='about section' id='about'>
            <h1 className='section__title margin__top aboutText__color'>{translateText().aboutOurCompany}</h1>
            <p className="section__title section__title-introduction aboutText__color">{translateText().aboutHereYou}</p>
    
            <div className='about__container containerr grid'>
                <img src={AboutImg} alt='' className='about__img' />
    
                <div className='about__data'>
                    <Info />
    
                    <p className='about__description'>{translateText().AboutPagesText}...</p>
                    
                    <a href='/About' className='aboutText__color'>{translateText().ForMoreDetails}</a>
                </div>
            </div>
        </section>
      )
}

export default About