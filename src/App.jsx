import React from 'react'
import NavBar from './component/NavBar'

import Footer from './component/Footer'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Electronics from './pages/Electronics'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/electronic' element={<Electronics/>}/>
      </Routes>
      
      <Footer/>

    </Router>
  )
}

export default App