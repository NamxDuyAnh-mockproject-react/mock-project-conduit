
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { fetchUser } from '../../Store/actions/auth.action';
import { loginSuccess, loginFail } from '../../Store/slices/auth.slice';
import { useNavigate } from 'react-router';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        dispatch(loginSuccess({ user: { token } })); // Cập nhật trạng thái đăng nhập từ local storage
      }
    }, [dispatch]);

    useEffect(() => {
      // Kiểm tra xem loginSuccess đã được kích hoạt sau khi đăng nhập thành công
      if (user) {
        navigate('/home');
      }
    }, [user, navigate]);
  

     const handleLogin = () => {
      dispatch(fetchUser({ email, password }))

    };
    // const handleLogin = async () => {
    //   try {
    //     const response = await dispatch(fetchUser({ email, password }));
  
    //     if (response.error) {
    //       dispatch(loginFail(response.error));
    //     } else {
    //       dispatch(loginSuccess(response.user));
    //     }
    //   } catch (error) {
    //     dispatch(loginFail(error.message));
    //   }
    // };
  return (
    <>
      <Container>
        <h1>Sign In</h1>
        {error && <p>{JSON.stringify(error.response.data.errors)}</p>}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
              <Button variant="primary" onClick={handleLogin}  disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
              </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
