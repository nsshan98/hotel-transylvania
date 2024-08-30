import React, { useState } from 'react';
import { AppBar, Box, Button, CssBaseline, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { UserData } from '../../context/UserContext';
import logo from '../../assets/logo.png'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { user, logOut } = React.useContext(UserData)
  const userLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleMenuClick}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }} // Show on small screens only (xs to md)
          >
            <MenuIcon />
          </IconButton>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Menu
          </Typography> */}

          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={logo} alt="Logo" sx={{ height: '40px' }} /> {/* Adjust the height as needed */}
            </Link>
          </Box>

          {/* Horizontal Menu for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}> {/* Hide on small screens */}
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/allhotel">
              All Hotel
            </Button>
            {
              user?.uid ?
                <Button color="inherit" onClick={userLogOut} className="btn btn-outline btn-error">LOGOUT</Button>
                :
                <>

                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                </>
            }


            {/* {user?.displayName && <p>Hey {user.displayName}!</p>} */}

          </Box>

          {/* Mobile Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: 'block', md: 'none' } }} // Show on small screens only
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/">
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/allhotel">
              All Hotel
            </MenuItem>
            {
              user?.uid ?
                <MenuItem color="inherit" onClick={userLogOut} className="btn btn-outline btn-error">Logout</MenuItem>
                :
                <>

                  <MenuItem onClick={handleMenuClose} component={Link} to="/login">
                    Login
                  </MenuItem>
                </>
            }

          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
