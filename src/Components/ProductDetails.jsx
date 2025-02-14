import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newProduct } from '../rtk/AddProduct';  // Import your action if needed
import { addToCart } from '../rtk/cartSlice';
import { Link } from 'react-router';
import './productDetails.css'

function ProductDetails() {
    let mynew = useSelector(state => state.new);
    let dispatch = useDispatch();


    return (
        <div className='show-details'>
           <div className="details">
           <h1>{mynew.title}</h1>
            <img src={mynew.image} alt={mynew.title} />
            <p >{mynew.description}</p>
            <p>Price : {mynew.price} AED</p>
            {/* <p className='text-danger'>{mynew.rating.offer} Discount </p> */}
            <button className='btn info' onClick={() => dispatch(addToCart(mynew))}>Add To Cart</button>
            <Link to="/back" className='btn back-btn '>Back To Prodcut</Link>
           </div>
           
        </div>
    );
}

export default ProductDetails;
