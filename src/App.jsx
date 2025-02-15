

import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Slider from './Components/Slider'
import Login from './Components/Login'
import Signup from './Components/Signup'
import About from './Components/About'
import ProductDetails from './Components/ProductDetails'
import DreamHome from './images/DreamHome'
import Footer from './Components/Footer'
import ConfirmbeforeCheck from './Components/ConfirmbeforeCheck'
import Payment from './Components/Payment'



function App() {

  
  return (
    <div>

    <NavBar/>
   
    <Routes>
    <Route path="/" element={ <><Slider /> <Products/>  <DreamHome/> <About/><Footer/></>} />
      <Route path='cart' element={<Cart />}/>
      <Route path='login' element={<Login/>}/>
      <Route path='sign' element={<Signup/>}/>
      <Route path="product-detail/:id" element={<ProductDetails/>} />
      <Route path='back' element={<Products/>}/>
      <Route path='check' element={<ConfirmbeforeCheck/>}/>
      <Route path='pay' element={<Payment/>}/>
    </Routes>
 

    </div>
  )
}

export default App
