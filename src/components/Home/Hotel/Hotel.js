import React, { useEffect, useState } from 'react';
// import AllHotel from './AllHotel';
import { Box, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import HotelSection from './HotelSection';


const Hotel = () => {
    const [visibleHotels, setVisibleHotels] = useState(6);
    
    const handleSeeMore = () => {
        setVisibleHotels(hotels.length);
    };

    const [hotels, setHotels] = useState([])
    useEffect(() => {
        fetch('hoteldata.json')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    return (
        <Container>
            <Grid container spacing={2}>
                {
                    hotels.slice(0, visibleHotels).map(hotel => (
                        <Grid item md={4} key={hotel.hotel_id}>
                            <HotelSection hotel={hotel} />
                        </Grid>
                    ))
                }
            </Grid>
            {visibleHotels < hotels.length && (
                <Box display="flex" justifyContent="center" m={2}>
                <Link to={'/allhotel'} onClick={handleSeeMore} >
                    <Button variant="contained" color="primary">See More</Button>
                </Link>
            </Box>
            )}
        </Container>
    );
};

export default Hotel;




