import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../features/cart/cartSlice';

const ElectricItem = ({ items }) => {
  const { cart } = useSelector(state => state.cart)


  const dispatch = useDispatch();

  const handleAdd = (items) => {

    let x = cart.filter(item => item.id == items.id)

    if (x.length) {
      alert("Item is allready in cart")
    }
    else {
      dispatch(add(items))
    }

  }

  return (
    <>

      <div className="product">
        <img src={items.image} alt="" />
        <h1>{items.title}</h1>
        {
          <span>

            <h3>Price : {items.price}</h3>

            <button className="add_cart"
              onClick={() => handleAdd(items)}
            >Add to cart</button>

          </span>

        }
      </div>
    </>
  )
}

export default ElectricItem