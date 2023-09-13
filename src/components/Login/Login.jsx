import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

// import { login } from '../../Store/actions/auth.action';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector((state) => state.auth);
     const dispatch = useDispatch();

    // const handleLogin = () => {
    //     dispatch(login(email, password));
    // };

    const handleLoginClick = () => {
        dispatch(authAction.login({
            username:'',
            password: '',
        }))
    }

    return (
        <>
            <Container>
                <h1>Sign In</h1>
                {error && <p>{error}</p>}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" onClick={handleLoginClick}  disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Login;