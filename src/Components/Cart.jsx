
import { Button , Image} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart , clear } from '../rtk/cartSlice';
import Products from './Products';
import { Link } from 'react-router';
import Mycartflex from './Mycartflex';
import './cart.css'
import { useNavigate } from 'react-router';
import { newProduct } from '../rtk/AddProduct';

export default function Cart() {
    let myCart = useSelector(state => state.cart);
    let dispatch = useDispatch()

  
    
    
    let myConstId = 1; 


    // to back to the product again 
    let myNav = useNavigate()
    function backToProduct (component) {
        myNav(component)
    }


    return (
        <div className="cart">
             <div className="container">
            <h1 className="pt-5 mt-5">YOUR CART</h1>

            {/* Conditional Rendering */}
            {myCart.length === 0 ? (
              <div >
                <h1 className='empty-cart'>Card is empty</h1>
                <Link to="/back" className='btn btn-lg btn-primary checkProduct'>back To Product</Link>
              </div>) : (
                <>
                <Button onClick={() => dispatch(clear())}  className='px-5 mb-5 clear-cart'>Clear Cart</Button>
               <div className="mycartflex">
               <div className="table-wrapper">
               <Table className='myTable'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCart.map((x) => (
                            <tr key={x.id}>
                                <td>{myConstId++}</td>
                               
                                <td>
                                    <Image
                                        src={x.image}
                                        alt=""
                                        style={{ width: "200px", height: "200px", borderRadius :"20px" }}
                                           onClick={() => useNavigate(`/product-detail/${x.id}`) }
                                   />
                                </td>
                                <td >{x.title}</td>
                                <td>{x.price}<span style={{marginLeft: "3px"}}>AED</span></td>

                                <td>
                                    <Button onClick={() => dispatch(deleteFromCart(x))} className='delete-btn' >Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
               </div>
               
                <Mycartflex/>

               </div>
              

                
                </>
            )}
        </div>
   
        </div>
    )
}
