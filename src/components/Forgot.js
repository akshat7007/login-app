import React from 'react'
import { Container, Card, Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {

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
      navigate('/login');
    }
  }, [formErrors, formValues, isSubmit, navigate])



  const validate = (values) => {

    const errors = {};
    // const userregex =/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
    const userregex = /^[A-Za-z][A-Za-z0-9_]{7,15}$/

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!"
    } else if (!userregex.test(values.username)) {
      errors.username = "Enter valid username";
    } 

    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    return errors;
  }

  return (
    <div>
      <header className="App-header">
        <Container>
          <div className='parent-div'>
            <div className='example-div'>
              <Card className='card-style'>
                <h1 className='login-heading'> Forgot Password </h1>
                <Form name='form' onSubmit={handleSubmit} method="post" action="/Home" style={{ margin: " 30px " }}>

                  <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label className='label-text'>Username</Form.Label>

                    <Form.Control autoComplete='off' className='form-control' name='username' value={formValues.username} type="text" onChange={handleChange} placeholder="Enter registered Username" />

                  </Form.Group>
                  <p className='error-box'>{formErrors.username}</p>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label-text'>Email</Form.Label>
                    <Form.Control autoComplete='off' className='form-control' name='email' value={formValues.email} type="email" onChange={handleChange} placeholder="Enter registered Email" />
                  </Form.Group>
                  <p className='error-box'>{formErrors.email}</p>

                  <Button variant="primary" type="submit" className='button'>
                    Send Mail 
                  </Button>

                </Form>
              </Card>
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}

export default Forgot