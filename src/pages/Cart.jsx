import React from 'react'
import CartItem from '../component/CartItem'
import { useSelector } from 'react-redux'



const Cart = () => {
 
const {cart} = useSelector((state) => state.cart)


const total = cart.reduce(( p ,c) =>{
  return p + c.NewPrice
},0)

                                                                                   


  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
        {
          cart.map((item) => (
            <CartItem key={item.id} item={item}/>
          ))
        }
   
   
        </div>

        <div className="bill-section">
          <h1>
            Total Amount : <br />
            <br />
            ${total.toFixed(2)}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  )
}

export default Cart