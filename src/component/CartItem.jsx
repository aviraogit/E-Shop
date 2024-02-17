import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  QtyUpdate, newPrice, remove } from '../features/cart/cartSlice'


const CartItem = ({ item }) => {

  const { cart } = useSelector(state => state.cart)
  

  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  const [Qty, setQty] = useState(1)

  const handlezero = () => {
    if (Qty <= 1) {
      setQty(1)
    }


  }

  // const [updateprice, setupdateprice] = useState()

  const PriceUpdate = ((id, num) => {
 
    const newPayload = {
      id,
      num
    }
    dispatch(QtyUpdate(newPayload))

    dispatch(newPrice(newPayload))
    
    
  })

  
  



  useEffect(() => {
    handlezero()
    // PriceUpdate()

  }, [Qty])




  return (
    <>

      <div className="cart-item">
        <img
          src={item.image}
          alt=""
        />
        {/* item.NewPrice ?(item.NewPrice).toFixed(2) : (item.price).toFixed(2) */}
        <span>
          <h1>{item.title}</h1>
          <h3>Rate : ${item.NewPrice ?item.NewPrice : item.price }</h3>
          <h3>Qty :<strong onClick={() => PriceUpdate(item.id, - 1)}>-</strong> {item.qty}
            <strong onClick={() => PriceUpdate(item.id, + 1)}>+</strong></h3>
        </span>
        <button className="remove-btn"
          onClick={() => handleRemove(item.id)}
        >Remove Item</button>
      </div>
    </>
  )
}

export default CartItem