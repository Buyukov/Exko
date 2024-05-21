import "./item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
  function AutoScrollToTop() {
      window.scrollTo(100, 0);
  }

  return (
    <div className='item-container'>
    <Link onClick={AutoScrollToTop} to={`/product/${props.id}`}><div className='item'>
        <img src={props.image} className='item-image' alt='' />
        <p style={{color: "black"}}>{props.title}</p>
        <div className='item-prices'>
            <div className='item-price-old' style={{fontSize: "1rem"}}>
                Old Price: ${props.oldPrice}
            </div>

            <div className='item-price-new'>
                Current Price: ${props.price}
            </div>  
        </div>
    </div></Link>
    </div>
  )
}

export default Item

// to={`/product/${props.id}