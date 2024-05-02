import React from 'react'
import randomProducts2 from '../../assets/RandomProducts2'
import Item from '../Item/Item'

const RandomProducts2 = () => {
    return (
        <div className='randomProducts__container'>
            <div className='randomProducts'>
            {randomProducts2.map((item, i)=> {
               return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price} oldPrice={item.oldPrice}/>
            })}
            </div>
        </div>
      )
}

export default RandomProducts2