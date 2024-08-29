import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
        component="footer"
        sx={{
          backgroundColor: '#2A323C',
          color: 'neutral.contrastText',
          display: 'flex',
          alignItems: 'center',
          p: 1,
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ ml: 1, color:'white' }}>
            Copyright © {new Date().getFullYear()} - All rights reserved
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, color:'white' }}>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <YouTube />
          </IconButton>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
        </Box>
      </Box>
    );
};

export default Footer;