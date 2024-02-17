import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const NavBar = () => {

  const {cart} = useSelector(state => state.cart)

  return (
 <>
 <nav>
        <Link to={"/"}>
          <h1 className="logo">E-Shop</h1>
        </Link>
        <ul className="nav-links">
         <Link to={"/electronic"}> <li className="category"><a href="">Electronics</a></li></Link>
          <li className="category"><a href="">Jewelery</a></li>
          <li className="category"><a href="">Men's Clothing</a></li>
          <li className="category"><a href="">Women's Clothing</a></li>
          <li>
            <Link to={"/cart"}>
              <button className="cart">

                <p>Cart {cart.length}</p>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
 </>
  )
}

export default NavBar