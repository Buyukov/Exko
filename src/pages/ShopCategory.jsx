import React, { useContext } from 'react'
import "./Css/shopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import Item from '../components/Item/Item'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} className='shopCategory_banner' alt='Banner'/>
      <div className='shopcategory-products'>
        {all_product.map((item, i)=> {
          if(props.category === item.category) {
            return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price} oldPrice={item.oldPrice}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory;