import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {createUser} from '../../Store/actions/auth.action';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { loading, error, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[formData, setFormData] = useState({});


    useEffect(() => {
        if (user) {
          navigate("/home");
        }
      }, [user, navigate]);

      useEffect(() => {
        if (error) {
          toast.error("Register failed! Email or username is duplicate.");
        }
      }, [error]);

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(formData));
        
        // navigate('/home');
    }

    return (
        <>
            <Container>
                <h1>Sign In</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"  name='username'
                        onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  name='email' 
                        onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        name='password'
                        onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type='submit' disabled={loading}>
                    {loading ? "Register..." : "Register"}
                    </Button>
                </Form>
            </Container>
            <ToastContainer />
        </>
    );
};

export default Register;