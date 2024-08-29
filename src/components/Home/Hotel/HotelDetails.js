import React, { useState } from 'react';
import { Box, Button, Grid, Paper, Rating, Typography } from '@mui/material';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import DatePickerField from '../../../DatePickerField/DatePickerField';
import dayjs from 'dayjs';

const HotelDetails = () => {
  const hotels = useLoaderData();
  const { hotelId } = useParams();
  const hotel = hotels.find(hotel => hotel.hotel_id === parseInt(hotelId));

  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs().add(1, 'day'));

  const [mainImage, setMainImage] = useState(hotel.photo1); // Initial main image

  const handleDateChange = (from, to) => {
    setFromDate(from);
    setToDate(to);
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <Box
            component="img"
            src={mainImage}
            alt={hotel.hotel_name}
            sx={{
              width: '100%',
              height: '350px',
              objectFit: 'cover',
            }}
          />
        </Paper>

        {/* Thumbnails */}
        <Grid container spacing={1} sx={{ mt: 2 }}>
          {[hotel.photo1, hotel.photo2, hotel.photo3, hotel.photo4, hotel.photo5].map((photo, index) => (
            <Grid item xs={2.4} key={index}>
              <Paper elevation={3}>
                <Box
                  component="img"
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '80px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: mainImage === photo ? '2px solid #1976d2' : 'none', // Highlight selected thumbnail
                  }}
                  onClick={() => handleThumbnailClick(photo)}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <DatePickerField
            fromDate={fromDate}
            toDate={toDate}
            onDateChange={handleDateChange}
          />
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
            {`Price per Night: $${hotel.price}`}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Duration: {dayjs(toDate).diff(dayjs(fromDate), 'day')} nights
          </Typography>
          <Typography variant="h6" gutterBottom>
            Total Price: ${dayjs(toDate).diff(dayjs(fromDate), 'day') * hotel.price}
          </Typography>
          <Link
            to={`/checkout/${hotel.hotel_id}`}
            state={{ fromDate: fromDate.toISOString(), toDate: toDate.toISOString(), price: hotel.price }}
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained" color="primary">
              Checkout
            </Button>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HotelDetails;
