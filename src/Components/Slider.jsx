import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from '../images/img1.jpg'
import imgTwo from '../images/img2.jpg'
import imgThree from '../images/img3.jpg'


function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='myCarsoual'>
      <Carousel.Item className='carsoual-item'>
      <img src={imgOne} alt="" className="d-block w-100" />
        <Carousel.Caption className='carsoual-cap'>
          <h3>Where Comfort Meets Elegance</h3>
          <p>Discover furniture designed for your lifestyle.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carsoual-item'>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={imgTwo} alt="" className="d-block w-100" />
        <Carousel.Caption className='carsoual-cap'>
          <h3>Create a Space You’ll Love Coming Home To</h3>
          <p>Let HomeVibe help you design your dream home.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carsoual-item'>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={imgThree} alt="" className="d-block w-100" />
        <Carousel.Caption className='carsoual-cap'>
          <h3>Discover the Art of Living Well</h3>
          <p>
          Explore our collections and elevate your everyday.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  
}

export default Slider
