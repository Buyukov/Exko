import React from 'react'
import randomProducts from '../../assets/RandomProducts'
import Item from '../Item/Item'
import "./randomProducts.css"
import { translateText } from '../../helpers/translation'

const RandomProducts = () => {
  return (
    <div className='randomProducts__container'>
        <div className='randomProducts__title'>
            <h1>{translateText().RandomProducts}</h1>
        </div>

        <div className='randomProducts'>
        {randomProducts.map((item, i)=> {
           return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price} oldPrice={item.oldPrice}/>
        })}
        </div>
    </div>
  )
}

export default RandomProducts;