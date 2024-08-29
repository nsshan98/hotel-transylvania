// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import { UserData } from '../../context/UserContext';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];
// const navBar = <>
//   <li><Link to='/'>Home</Link></li>
//   <li><Link to='/login'>Login</Link></li>
// </>

// function DrawerAppBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />

//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//               <Link to={`${'/home'}`}></Link>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       {/* <ListItemButton sx={{textAlign:'center', color: '#000', listStyle:'none', gap: '15px' }} >

//                 {navBar}
//               </ListItemButton> */}
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   const { user, logOut } = React.useContext(UserData)
//   const userLogOut = () => {
//     logOut()
//       .then(() => {

//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, p: 0, display: { xs: 'none', sm: 'block' } }}
//           >
//             <Link to="/" color="inherit">
//               Hotel Transylvania
//             </Link>
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             <Button sx={{ color: '#fff', listStyle: 'none', gap: '15px' }}>
//               {/* {navBar} */}
//               <Link to='/'>Home</Link>
//               <Link to='/allhotel'>All Hotel</Link>
//               {user?.displayName && <p>Hey {user.displayName}!</p>}
//               { 
//             user?.uid ?
//               <button onClick={userLogOut} className="btn btn-outline btn-error">LOGOUT</button>
//               :
//               <>
//               <Link to='/login'>Login</Link>
//               </>
//           }
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;



import React, { useState } from 'react';
import { AppBar, Box, Button, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { UserData } from '../../context/UserContext';
import logo from '../../assets/logo.png'

const SimpleMenu = () => {
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

export default SimpleMenu;
