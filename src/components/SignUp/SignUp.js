import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';

const SignUp = () => {

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const { createUser, updateUserInfo, googleSignIn, facebookSignIn } = useContext(UserData)
//   const [checked, setChecked] = useState(false)

  const navigate = useNavigate()

  const userRegister = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password)

    if (!name) {
        setNameError(true);
    } else {
        setNameError(false);
    }
    
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

    createUser(email, password)
      .then((registerData) => {
        const user = registerData.user
        console.log(user)
        form.reset()
        userInfo(name)
        toast.success(`🚀 You're In! 🚀`)
        navigate('/')
      })
      .catch(error => {
        console.error(error)
      })
  }

//   const googleUser = () => {
//     googleSignIn()
//       .then((result) => {
//         const user = result.user
//         toast.success(`🚀 You're In! 🚀`)
//         navigate('/')
//         console.log(user)
//       })
//       .catch(error => {
//         console.error(error)
//       })
//   }

//   const facebookUser = () => {
//     facebookSignIn()
//       .then((result) => {
//         const user = result.user
//         toast.success(`🚀 You're In! 🚀`)
//         navigate('/')
//         console.log(user)
//       })
//       .catch(error => {
//         console.error(error)
//       })
//   }

  const userInfo = (name) => {
    const profile = {
      displayName: name
    }
    updateUserInfo(profile)
    .then(() => {})
    .catch(error => console.error(error))
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
                <Avatar sx={{ mt: 2, bgcolor: 'secondary.main' }}>
                    <LockOutlined></LockOutlined>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={userRegister} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Your Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        error={nameError}
                        helperText={nameError ? 'Please Enter Your Name' : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        type="email"
                        id="email"
                        autoComplete="email"
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
                        Sign Up
                    </Button>
                    <Grid container sx={{mb:6.5}}>
                        <Grid item xs>
                            <Link to="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/login" variant="body2">
                                {"Already have an account? Login"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;