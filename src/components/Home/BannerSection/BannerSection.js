import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import saintmartin from "../../../assets/images/saint-martin.jpg";
import sundarban from "../../../assets/images/sundarban.jpg";
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <Box sx={{ bgcolor: '#F2F2F2', height: { xs: '100vh', md: '500px' }, overflow: 'hidden', position: 'relative' }}>
            <Box 
                sx={{ 
                    display: { xs: 'block', md: 'none' },
                    backgroundImage: `url(${saintmartin})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    position: 'relative',
                    ':before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                }}
            >
                <Container
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        color: '#fff',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant='h3' sx={{ fontWeight: 700, fontSize: '1.8rem', mb: 2 }}>
                        Book Your Dream With Us!
                    </Typography>
                    <Typography variant='body1' sx={{ mb: 2 }}>
                        "Unlock the possibilities with just a few clicks. Whether you're planning a getaway or a special occasion, our platform is your gateway to seamless bookings and unforgettable experiences."
                    </Typography>
                    <Link to={'/allhotel'}>
                        <Button variant="contained" color="primary">
                            Get Started
                        </Button>
                    </Link>
                </Container>
            </Box>

            <Grid container spacing={1} direction={'row-reverse'} sx={{ display: { xs: 'none', md: 'flex' }, pt: 4 }}>
                <Grid item md={6}>
                    <div className='relative'>
                        <img src={saintmartin} alt="" className='ml-0 max-w-lg top-2/4 rounded-lg' />
                        <img src={sundarban} alt="" className='absolute w-3/5 top-2/4 left-1/3  rounded-lg' />
                    </div>
                </Grid>
                <Grid item md={6}>
                    <Container>
                        <Typography variant='h3' sx={{ mt: 10, fontWeight: 700 }}>
                            Book Your Dream With Us!
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 2 }}>
                            "Unlock the possibilities with just a few clicks. Whether you're planning a getaway or a special occasion, our platform is your gateway to seamless bookings and unforgettable experiences. Booking your next adventure has never been easier. Start your journey with us today—your dream destination is just a click away!"
                        </Typography>
                        <Link to={'/allhotel'}>
                            <Button variant="contained" sx={{ mt: 2 }}>Get Started</Button>
                        </Link>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BannerSection;
