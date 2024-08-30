import { Google, LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const { signInUser, googleSignIn } = useContext(UserData)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()


    const userLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        signInUser(email, password)
            .then((loginData) => {
                const user = loginData.user
                form.reset()
                console.log(user)
                navigate(from, { replace: true })
                toast.success(`🤗 Welcome Back! 🤗`)

            })
            .catch(error => {
                console.error(error)
            })
    }

    const googleUser = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                toast.success(`🚀 You're In! 🚀`)
                navigate('/')
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
                    <LockOutlined></LockOutlined>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={userLogin} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={emailError}
                        helperText={emailError ? 'Email is required' : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={passwordError}
                        helperText={passwordError ? 'Password is required' : ''}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container sx={{ mb: 1 }}>
                        <Grid item xs>
                            <Link to="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider sx={{ width: '100%', my: 2 }} />

                    <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        startIcon={<Google />}
                        onClick={googleUser}
                        sx={{ mb: 6.5 }}
                    >
                        Sign in with Google
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;