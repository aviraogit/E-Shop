import React from 'react'
import comerce_header from "../assets/commerce_header (2).png"
import img1 from "../assets/pexels-photo-8128670.webp"
import img2 from "../assets/pexels-photo-1930353.jpeg"
import img3 from "../assets/pexels-photo-2096499.webp"
// import card1 from "../assets/TT-3-WhiteTT.webp"
// import card2 from "../assets/vista-mb.jpg"
// import card3 from "/src/assets/517XL6OwctL._AC_SY580_.jpg"



const HeroSection = () => {
  return (
    <>
<div data-aos="fade-down">

      <div className="hero-section">
        <div className="text-section">
          <span>
            <h1>Raining Offers For Hot Summer!</h1>
            <h3>Shop Anything At Your Home Online</h3>
            <button className="shop-btn">Shop Now</button>
          </span>
        </div>
        <div className="image-section"><img src={comerce_header} alt="" /></div>
      </div>
</div>





<div data-aos="fade-down">

      <div className="cards">
        <div className="cards-container">
            <div className="three-cards">
                <span><img className='card1' src={img1} alt="" /></span>
                <span><img className='card3' src={img2} alt="" /></span>
                <span><img className='card2' src={img3} alt="" /></span>
            </div>
        </div>
    </div>
  </div>     
    </>
  )
}

export default HeroSection