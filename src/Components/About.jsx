import React from 'react'
import { Link } from 'react-router'
import Choose from './Choose'
import aboutImg from "../images/aboutsection.jpg"
import './about.css'

function About() {
  return (
<div className="about">
<h1>About HomeVibes</h1>
<div className='container'>
<div className="about-text">

<p> where comfort meets style. We are a furniture brand dedicated to transforming your living spaces into cozy, stylish, and functional sanctuaries. Whether you're outfitting your first apartment, upgrading your home office, or curating the perfect living room, HomeVibe has the perfect pieces for you.
Our Mission At HomeVibe, we believe that your home should reflect your personality and offer a sense of warmth and tranquility. Our mission is simple: to bring you high-quality, affordable furniture that complements your lifestyle and enhances the heart of your home.

</p>
<Choose/>
</div>

<div className="about-img">
    <img src={aboutImg} alt="" />
</div>
    </div>
</div>
  )
}

export default About
