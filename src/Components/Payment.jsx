import React from 'react'
import Form from 'react-bootstrap/Form';
import CardDetails from './CardDetails';
import visa from '../images/visa.png'
import paypal from "../images/paypal.jpg"
import tabby from "../images/tabby.avif"
import './payment.css'


function Payment() {
  return (

   <div className="payment-container">
      
         <Form>
      {['checkbox'].map((type) => (
       
         <div key={`default-${type}`} className="mb-3 payment-page ">
         <div className="visa">
         <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`Credit / Debit Card `}
            
          />
          <img src={visa} alt="" style={{width: "50px"}} />
       
         </div>

         <div className="paypal">
         <Form.Check
            
            type={type}
            label={`PayPal`}
            id={`disabled-default-${type}`}
          />
         <img src={paypal} alt="" style={{width: "50px"}} />
         </div>


         <div className="taby">
         <Form.Check
            
            type={type}
            label={`Tabby`}
            id={`disabled-default-${type}`}
          />
         <img src={tabby} alt="" style={{width: "50px"}} />
         </div>

      
         <CardDetails/>
        </div>
      ))}
    </Form>
    </div>
   
  
  );
  
}

export default Payment
