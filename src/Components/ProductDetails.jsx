import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newProduct } from '../rtk/AddProduct';  // Import your action if needed
import { addToCart } from '../rtk/cartSlice';
import { Link } from 'react-router';
import './productDetails.css'
import { alarm } from './Products';
import { useNavigate } from 'react-router';

function ProductDetails() {
    let mynew = useSelector(state => state.new);
    let dispatch = useDispatch();

    function dispatchAndConfirm (product) {
        dispatch(addToCart(product))
        alarm()
    }

    

    return (
        <div className='show-details'>
           <div className="details">
           <h1>{mynew.title}</h1>
            <img src={mynew.image} alt={mynew.title} />
            <p >{mynew.description}</p>
            <p>Price : {mynew.price} AED</p>
            {/* <p className='text-danger'>{mynew.rating.offer} Discount </p> */}
            <button className='btn info' onClick={() => dispatchAndConfirm(mynew)}>Add To Cart</button>
            <a className='btn back-btn ' href='/'>Back To Prodcut</a>
           </div>
           
        </div>
    );
}

export default ProductDetails;
