import React from 'react'
import { Container, Button, Card, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            navigate('/login');
        }
    }, [formErrors, formValues, isSubmit, navigate])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{4,15}$/i;
        const userregex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/

        // username error         
        if (!values.username) {
            errors.username = "Username is required!"
        } else if (!userregex.test(values.username)) {
            errors.username = "Enter valid username";
        }
        // email error
        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "this is not a valid email format";
        }
        // password error
        if (!values.password) {
            errors.password = "Password is required!"
        } else if (values.password.length < 4) {
            errors.password = "Password must be 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    }

    return (
        <div className="App">
            <header className="app-header">
                <Container>
                    <div className='parent-div'>
                        <div className='example-div'>
                            <Card className='card-style'>
                                <h1 className='signup-heading'>SignUp</h1>
                                <Form name='form' onSubmit={handleSubmit} method="post" action="/Login" style={{ margin: " 30px " }}>

                                    {/* Username */}
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='label-text'>Username</Form.Label>
                                        <Form.Control autoComplete='off' className='username' name='username' value={formValues.username} type="username" onChange={handleChange} placeholder="Username" />
                                    </Form.Group>
                                    <p className='error-box'>{formErrors.username}</p>

                                    {/* Email  */}
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='label-text'>Email address</Form.Label>
                                        <Form.Control autoComplete='off' className='email' name='email' value={formValues.email} type="email" onChange={handleChange} placeholder="Enter email" />
                                    </Form.Group>
                                    <p className='error-box'>{formErrors.email}</p>

                                    {/* Password */}
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='label-text'>Password</Form.Label>
                                        <Form.Control autoComplete='off' className='form-control' name='password' value={formValues.password} type="password" onChange={handleChange} placeholder="Password" />
                                    </Form.Group>
                                    <p className='error-box'>{formErrors.password}</p>

                                    <Button variant="primary" type="submit" className='button'>
                                        Signup
                                    </Button>
                                    <a className='create-an-acc' href="/login" style={{ textDecoration: "none", fontSize: "17px" }} >Login</a>
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