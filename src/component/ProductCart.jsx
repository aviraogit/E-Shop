import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../features/cart/cartSlice';

const ProductCart = ({product}) => {

// console.log(product.category);

  const { cart } = useSelector(state => state.cart)

 
  const dispatch = useDispatch();

  
 
   const handleAdd = (product) =>{
    
    let x = cart.filter(item => item.id == product.id)
    
    if (x.length) {
   alert("Item is allready in cart")
    }
    else {
      const cartProduct = {...product , qty : 1 , NewPrice : product.price}
     
      dispatch(add(cartProduct))
    }
    
  }


  return (

    <div data-aos="fade-down">

    <div className="product">
          <img src={product.image} alt="" />
          <h1>{product.title}</h1>
         { 
         <span>

            <h3>Price : {product.price}</h3>

            <button className="add_cart"
            onClick={()=>handleAdd(product)}
             >Add to cart</button>

          </span>
          
          }
        </div>
           </div>
  )
}

export default ProductCart