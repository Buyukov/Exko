import React from 'react'
import "./topHeader.css";
import {translateText, editLanguage } from "../../helpers/translation";
import UzbekFlag from "../../assets/UzbekFlag.webp";
import RussianFlag from "../../assets/RussianFlag.png";
import KoreanFlag from "../../assets/south-korea.jpg";

const TopHeader = () => {
  return (
    <div className='topHeader-Container'>
        <div className='topHeader__item display__None'>
           <i className='bx bxs-location-plus bx-tada' ></i>
           <a href='/' className='topHeader__currentLocation'>{translateText().currentLocation}</a>
        </div>

        <div className='topHeader__item display__None'>
           <i className='bx bxs-cart-alt bx-tada' ></i>
           <span className='topHeader__delivery'>{translateText().topDeliver}</span>
        </div>

        <div className='topHeader__item display__None'>
           <i className='bx bxs-phone bx-tada' ></i>
           <span href='/' className='topHeader__Colab'>{translateText().forColaborate}</span>
           <a href='/' className='topHeader__Colab-Number'>+998 99 999 99 99</a>
        </div>

        <div className='Languages'>
         <p>{translateText().chooseLanguage}:</p>
         <img src={UzbekFlag} alt='uz' onClick={editLanguage}></img>
         <img src={RussianFlag} alt='ru' onClick={editLanguage}></img>
         <img src={KoreanFlag} alt='kor' onClick={editLanguage}></img>
        </div>
    </div>
  )
};

export default TopHeader