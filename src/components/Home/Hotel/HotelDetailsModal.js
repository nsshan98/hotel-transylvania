import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const HotelDetailsModal = ({ open, handleClose, hotel }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        {hotel.hotel_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Location: {hotel.city}, {hotel.country}, {hotel.continent_name}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Price: ${hotel.price} per night
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Rating: {hotel.star_rating} / 5
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        {hotel.description}
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default HotelDetailsModal;
