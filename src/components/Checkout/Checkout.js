import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLoaderData, useParams, useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import SuccessModal from './SuccessModal';
// import DatePickerField from '../../../DatePickerField/DatePickerField';

const Checkout = () => {
  const hotels = useLoaderData();
  const { hotelId } = useParams();
  const hotel = hotels.find(hotel => hotel.hotel_id === parseInt(hotelId));
  const location = useLocation();
  const { fromDate, toDate, price } = location.state || {}
  

  // Ensure fromDate and toDate are dayjs objects
  const startDate = dayjs(fromDate instanceof dayjs ? fromDate : new Date(fromDate));
  const endDate = dayjs(toDate instanceof dayjs ? toDate : new Date(toDate));

  const totalDays = endDate.diff(startDate, 'day'); // Calculate the difference in days
  const totalPrice = totalDays * price;

  const [modalOpen, setModalOpen] = useState(false);

  const handleCheckout = () => {
    // Handle checkout logic here
    setModalOpen(true); // Open the modal after checkout
  };

  const handleClose = () => {
    setModalOpen(false); // Close the modal
  };

  const [mainImage, setMainImage] = useState(hotel.photo1); // Default main image

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>

      {/* Main Image */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <Box
            component="img"
            src={mainImage}
            alt={hotel.hotel_name}
            sx={{
              width: '100%',
              height: '400px',
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
                  }}
                  onClick={() => handleThumbnailClick(photo)}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Details Side */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Just Step Before Your Dream Booking!
          </Typography>
          {/* <DatePickerField></DatePickerField> */}
          <Typography sx={{ mt: 1.5 }} variant="h5" gutterBottom>
            Choosen Hotel: {hotel.hotel_name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Location: {hotel.city}, {hotel.country}, {hotel.continent_name}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Per Night Price: ${hotel.price}
          </Typography>
          <Typography variant="body1">
            From Date: {startDate.format('DD-MMM-YYYY')}
          </Typography>
          <Typography variant="body1">
            To Date: {endDate.format('DD-MMM-YYYY')}
          </Typography>
          <Typography variant="body1">
            Total Days: {totalDays}
          </Typography>
          <Typography variant="body1">
            Total Price: ${totalPrice}
          </Typography>
          <Button sx={{ mt: 2 }} variant="contained" color="primary" onClick={handleCheckout}>
            Confirm Booking
          </Button>

          {/* Render the Success Modal */}
          <SuccessModal open={modalOpen} onClose={handleClose} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Checkout;
