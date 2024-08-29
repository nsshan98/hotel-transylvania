import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SuccessModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      // onClose={onClose}
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          textAlign: 'center'
        }}
      >
        <Typography id="success-modal-title" variant="h6" component="h2">
          Your Room Booking Completed Successfully! 😍
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:2 }}>
          <Button variant="contained" color="primary" component={Link} to="/">
            Home
          </Button>
          <Button variant="contained" color="secondary" component={Link} to="/allhotel">
            All Hotel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
