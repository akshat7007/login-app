import React from 'react'
import { Container, Button, Card, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import {useForm } from 'react-router-dom'
  
const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      navigate('/dashboard');
    }
  }, [formErrors, formValues, isSubmit, navigate])



  const validate = (values) => {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regex = ^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$;



    
    if (!values.email) {
      errors.email = "Email is required!"
    }    
    else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }



    if (!values.password) {
      errors.password = "Password is required!"
    }else if (values.password.length < 4) {
      errors.password = "Password must be 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;

  }

  return (


    <div className='App'>

      <header className="App-header"> 
        <Container>
          <div className='parent-div'>
            <div className='example-div'>
              <Card className='card-style'>
                <h1 className='login-heading'>Login</h1>
                <Form name='form' onSubmit={handleSubmit} method="post" action="/Home" style={{ margin: " 30px " }}>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                          
                    <Form.Label autoComplete='off' className='label-text'>Email address</Form.Label>

                    <Form.Control className='form-control' name='email' value={formValues.email} type="email" onChange={handleChange} placeholder="Enter email" />

                  </Form.Group>
                  <p className='error-box'>{formErrors.email}</p>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label-text'>Password</Form.Label>
                    <Form.Control className='form-control' name='password' value={formValues.password} type="password" onChange={handleChange} placeholder="Password" />

                  </Form.Group>
                  <p className='error-box'>{formErrors.password}</p>

                  <a href="/forgotpassword" className='forget-link'> Forgot Password? </a>
                  <a href="/resetpassword" className='forget-link'> Reset Password </a>

                  <Button variant="primary" type="submit" className='button'>
                    Login
                  </Button>
                  <a className='create-an-acc' href="/" style={{ textDecoration: "none", fontSize: "17px" }}> Create an Account</a>
                </Form>
              </Card>
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}
export default Login