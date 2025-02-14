import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CardDetails() {
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="email" placeholder="4111 - 1111 - 1111 - 1111" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Expiry</Form.Label>
        <Form.Control type="date" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Pay Now
      </Button>
    </Form>
    </div>
  )
}

export default CardDetails
 