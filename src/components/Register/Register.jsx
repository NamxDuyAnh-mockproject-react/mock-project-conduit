import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {createUser} from '../../Store/actions/auth.action';
import { userRegistered } from '../../Store/slices/register.slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Register = () => {
    const { loading, error, user } = useSelector((state) => state.register);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[formData, setFormData] = useState({});
    const defaultTheme = createTheme();
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) {
            dispatch(userRegistered({ user: { token } }));
        }
    }, [dispatch]);

    useEffect(() => {
        if (user) {
          navigate("/home");
        }
      }, [user, navigate]);

      useEffect(() => {
        if (error) {
          toast.error("Register failed! Email or username already exists.");
        }
      }, [error]);

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(formData));
    }

    return (
        <>
            {/* <Container>
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"  name='username'
                        onChange={handleChange}/>
                        <TextField id="outlined-basic" label="Username" variant="outlined"  onChange={handleChange}/>
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
            </Container> */}
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            onChange={handleChange}
                            />
                        </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            {loading ? "Register..." : "Register"}
                        </Button>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <ToastContainer />
        </>
    );
};

export default Register;