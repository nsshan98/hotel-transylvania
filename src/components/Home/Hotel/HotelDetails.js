import { Box, Button, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import DatePickerField from '../../../DatePickerField/DatePickerField';

const HotelDetails = () => {
  const hotels = useLoaderData()
  const { hotelId } = useParams()
  const hotel = hotels.find(hotel => hotel.hotel_id === parseInt(hotelId))
  console.log(hotel)
  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>

      {/* Image Side */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <Box
            component="img"
            src={hotel.photo1}
            alt={hotel.hotel_name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Paper>
      </Grid>

      {/* Details Side */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <DatePickerField></DatePickerField>
          <Typography sx={{ mt: 1.5 }} variant="h4" gutterBottom>
            {hotel.hotel_name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {hotel.city}, {hotel.country}, {hotel.continent_name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total Reviews: {hotel.number_of_reviews}
          </Typography>
          <Rating value={hotel.star_rating} readOnly />
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {`Price: $${hotel.price}`}
          </Typography>
          <Link to={`/checkout/${hotel.hotel_id}`} variant="contained" color="primary">
            <Button variant='contained' color="primary">
              Checkout
            </Button>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HotelDetails;