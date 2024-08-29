import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';

const SignUp = () => {
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
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container sx={{mb:5}}>
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