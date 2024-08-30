import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import HotelDetailsModal from './HotelDetailsModal';
import { Link } from 'react-router-dom';

const AllHotel = () => {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (hotel) => {
        setSelectedHotel(hotel);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedHotel(null);
        setOpen(false);
    };

    const [allHotels, setAllHotels] = useState([]);

    useEffect(() => {
        fetch('hoteldata.json')
            .then(res => res.json())
            .then(data => setAllHotels(data));
    }, []);

    return (
        <Container>
            <Grid container spacing={2}>
                {allHotels.map((allHotel) => (
                    <Grid container spacing={2} style={{ padding: '20px' }} key={allHotel.hotel_id}>
                        {/* Image Side */}
                        <Grid item xs={12} md={5}>
                            <Paper elevation={3}>
                                <Box
                                    component="img"
                                    src={allHotel.photo1}
                                    alt={allHotel.hotel_name}
                                    sx={{
                                        width: '100%',
                                        height: '315px',
                                        objectFit: 'cover',
                                        borderRadius: '5px'
                                    }}
                                />
                            </Paper>
                        </Grid>

                        {/* Details Side */}
                        <Grid item xs={12} md={7}>
                            <Paper elevation={3} style={{ padding: '10px' }}>
                                <Typography variant="h4" gutterBottom>
                                    {allHotel.hotel_name}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {allHotel.city}, {allHotel.country}, {allHotel.continent_name}
                                </Typography>
                                <Typography variant="body2">
                                    {allHotel.overview.split(' ').length > 45 ? (
                                        <>
                                            {allHotel.overview.split(' ').slice(0, 45).join(' ')}...
                                        </>
                                    ) : (
                                        allHotel.overview
                                    )}
                                </Typography>
                                <Typography sx={{ pt: '4px' }} variant="body1" gutterBottom>
                                    Total Reviews: {allHotel.number_of_reviews}
                                </Typography>
                                <Rating value={allHotel.star_rating} readOnly />
                                <Typography variant="h6" color="textSecondary" gutterBottom>
                                    {`Price: $${allHotel.price}`}
                                </Typography>
                                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button onClick={() => handleOpen(allHotel)} variant='contained' color="primary">
                                        Details
                                    </Button>
                                    <Link to={`/allhotel/${allHotel.hotel_id}`}>
                                        <Button variant='contained' color="primary">
                                            Book Now
                                        </Button>
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                ))}
            </Grid>

            {selectedHotel && (
                <HotelDetailsModal
                    open={open}
                    handleClose={handleClose}
                    hotel={selectedHotel}
                />
            )}
        </Container>
    );
};

export default AllHotel;
