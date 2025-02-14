import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signup.css'

function Signup() {
  return (
 <div className="sign">
       <Form className='register-form'>

<Form.Group controlId="formBasicPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>

    <Form.Group className='mb-3' controlId="formBasicEmail">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Country</Form.Label>
      <Form.Control type="text" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control type="number" placeholder="Enter Mobile Number" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Po Box</Form.Label>
      <Form.Control type="number" placeholder="Enter PO box" />
    </Form.Group>

 

    <Button variant="primary" type="submit">
      Sign in
    </Button>
  </Form>
 </div>
  )
}

export default Signup
