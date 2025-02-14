import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './chooseus.css'


function Choose() {
  return (
    <div>
      <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="1" className='btn choosebtn'>
        <Accordion.Header >Why Choose Us ?</Accordion.Header>
        <Accordion.Body className='chose-text'>
         <p><b>Quality & Durability</b>: We handpick materials that are built to last, ensuring every piece stands the test of time. </p>
         <p><b>Modern & Timeless Designs</b>: From minimalist chic to bold statement pieces, our designs cater to a range of tastes and preferences. </p>
         <p><b>Affordable Prices</b>: Great design doesn’t have to break the bank. We offer competitive prices without compromising on quality. </p>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  )
}

export default Choose
