import React from 'react'
import { Container, Card,Button,Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const  Forgot = () => {

    const initialValues = {password: "", confirmpassword: "" };
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
  
    if (!values.password) {
        errors.password = "Password is required!"
      }else if (values.password.length < 4) {
        errors.password = "Password must be 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }

      if (!values.confirmpassword) {
        errors.confirmpassword = "Password is required!"
      }else if (values.confirmpassword.length < 4) {
        errors.confirmpassword = "Password must be 4 characters";
      } else if (values.confirmpassword.length > 10) {
        errors.confirmpassword = "Password cannot exceed more than 10 characters";
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
                <h1 className='login-heading'> Reset Password </h1>
                <Form name='form' onSubmit={handleSubmit} method="post" action="/Home" style={{ margin: " 30px " }}>

                  <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label  className='label-text'>New Password</Form.Label>
                    <Form.Control className='form-control' name='password' value={formValues.password} type="password" onChange={handleChange} placeholder="Enter new password" />

                  </Form.Group>
                  <p className='error-box'>{formErrors.password}</p>

                  <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Label className='label-text'>Confirm Password</Form.Label>  
                    <Form.Control className='form-control' name='confirmpassword' value={formValues.confirmpassword} type="password" onChange={handleChange} placeholder="Confirm Password" />
                  
                  </Form.Group>
                  <p className='error-box'>{formErrors.password}</p>

                  <Button variant="primary" type="submit" className='button'>
                  Confirm
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

export default  Forgot