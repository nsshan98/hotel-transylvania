import React, { useState } from 'react';
import { AppBar, Box, Button, CssBaseline, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { UserData } from '../../context/UserContext';
import logo from '../../assets/logo.png';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutAnchorEl, setLogoutAnchorEl] = useState(null); // For logout submenu

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const userNameButton = (event) => {
    setLogoutAnchorEl(event.currentTarget);
  };

  const handleLogoutMenuClose = () => {
    setLogoutAnchorEl(null);
  };

  const { user, logOut } = React.useContext(UserData);
  const userLogOut = () => {
    logOut()
      .then(() => {
        handleLogoutMenuClose(); // Close the submenu on logout
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={logo} alt="Logo" style={{ height: '40px' }} /> {/* Adjust the height as needed */}
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

            {user?.uid ? (
              <>
                {/* Logout button with submenu */}
                <Button
                  color="inherit"
                  onClick={userNameButton}
                  className="btn btn-outline btn-error"
                >
                  {user?.displayName && <p>Hey {user.displayName}!</p>}
                </Button>
                <Menu
                  anchorEl={logoutAnchorEl}
                  open={Boolean(logoutAnchorEl)}
                  onClose={handleLogoutMenuClose}
                  sx={{ display: { xs: 'none', md: 'block' } }} // Only show on medium/large screens
                >
                  <MenuItem onClick={userLogOut}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            )}
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
            {user?.uid ? (
              <MenuItem onClick={userLogOut} className="btn btn-outline btn-error">
                Logout
              </MenuItem>
            ) : (
              <MenuItem onClick={handleMenuClose} component={Link} to="/login">
                Login
              </MenuItem>
            )}
          </Menu>
          <MenuItem sx={{ display: { xs: 'block', md: 'none' }, mt:1 }}>
            {user?.displayName && <p>Hey {user.displayName}!</p>}
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
