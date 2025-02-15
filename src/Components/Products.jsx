
import { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router';




export function alarm () {
  Swal.fire({
    icon: "success",
    title: "Product has added to Cart",
    showConfirmButton: false,
    timer: 1200,
    background: "#fff",
    color : "#000"
  });
}

export default function Products () {

  let navigate = useNavigate(); 

  // to add the product from the home page 
  let check = () => {
    Swal.fire({
      title: "Product has added to Cart",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      cancelButtonText: "Continue Shopping" ,
      confirmButtonText: "Go to Cart Page"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart")
      }
    });
  }


    let products = useSelector((state) => state.products)
    let dispatch = useDispatch(); 

    let [cartCount, setCartCount ] = useState(0)


    useEffect(() => {
        dispatch(fetchProduct())
    },[dispatch])

    function handleIconAndAddToCart (product) {
      dispatch(product)
      setCartCount(cartCount+ 1)
      check()
    }
    
      return (

        <div className="container products-container" id='products' 
        >
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
               <Button
               className='addCart' variant="primary" onClick={()=>{
                  handleIconAndAddToCart(addToCart(x))
               }}>Add To Cart</Button>
               <Link to= {`/product-detail/${x.id}`}  className='info btn' variant="primary" onClick={() => dispatch(newProduct(x))}>Product Details</Link>
                 </Card.Body>
           </Card>
             </Col>
            })}
         </Row>
    
      </div>
      )
          }