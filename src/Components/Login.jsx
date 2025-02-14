import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate


export default function Login () {
  const navigate = useNavigate(); 
function onSubmit (event) {
  event.preventDefault()
  // navigate('/pay');
}

    return (
   <div className="sign">
         <Form className='login-form' onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
         
        </Form.Group>
        <Button  to="/pay" className='btn btn-primary' variant="primary" type="submit">
          Log in
        </Button>
      </Form>
   </div>
    )
}