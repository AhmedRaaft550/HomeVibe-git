import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';



function Mycartflex() {

    
    let myCartSumary = useSelector(state => state.cart);
    let dispatch = useDispatch()
   
    let totalPrice = myCartSumary.reduce((acc,current) => {
        return acc += current.price
    },0)

   
  return (
    <div>
      <div className="summary-card">
                <Card className='mysummary-result' style={{ width: '100%' }}>
                    <h5 className='text text-danger'>Summary</h5>
      <ListGroup variant="flush">
       {myCartSumary.map((x) => {
        return <div className='mycontainer' key={x.id}>
            <div className="product-name">
            <ListGroup.Item className='sumamary-title'>{x.title}: </ListGroup.Item>
        
            </div>

            <div className="product-price">
            <ListGroup.Item className=' sumamary-title '> Price : {x.price} AED</ListGroup.Item>
        
            </div>
        </div>
       })}
      </ListGroup>
      <p className='text-danger pt-2 text-center'>Total Price: {totalPrice} AED</p>
      
      <Link to="/check" className='btn btn-danger btn-sm '>Check Out</Link>
    </Card>
                </div>
    </div>
  )
}

export default Mycartflex
