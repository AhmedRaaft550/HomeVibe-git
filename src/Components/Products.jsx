
import { useEffect } from 'react';
import { Row , Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../rtk/productSlice';
import { Link } from 'react-router';
import { addToCart } from '../rtk/cartSlice';
import { newProduct } from '../rtk/AddProduct';
import Swal from 'sweetalert2';
import './product.css'



/*

*/

export default function Products () {
    let products = useSelector((state) => state.products)
    let dispatch = useDispatch(); 
    
  console.log(Array.isArray(products))
  console.log(products)

    useEffect(() => {
        dispatch(fetchProduct())
    },[dispatch])

    function alarm () {
      Swal.fire({
        position: "center-top",
        icon: "success",
        title: "Product has added to Cart",
        showConfirmButton: false,
        timer: 1200,
        background: "#fff",
        borderRaduis: "50px",
        color : "#000"
      });
    }



    
      return (

        <div className="container products-container" id='products' >
        <h2 className='product-title'>Discover the Perfect Piece for Your Home</h2>
        <Row>
            {products.map((x) => {
              return  <Col key={x.id} className='my-col' >
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={x.image} />
             <Card.Body>
               <Card.Title>{x.title}</Card.Title>
               <p className='offer'>Discount Up To: {x.rating.offer}</p>
                <p className='best-seller text-danger'>{x.rating.count}</p>
               <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
               <Button className='addCart' variant="primary" onClick={()=>{
                  dispatch(addToCart(x))
                  alarm()
               }}>Add To Cart</Button>
               <Link to="/product-detail" className='info btn' variant="primary" onClick={() => dispatch(newProduct(x))}>Product Details</Link>
                 </Card.Body>
           </Card>
             </Col>
            })}
         </Row>
       
             </div>
      )
  
    
   
}

/*
       
   

*/