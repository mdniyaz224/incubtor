import * as React from 'react';
import "../header/Navbar.css";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;
// const navItems = ['HOME', 'ABOUT', 'CONTACT',  ];

// const navItems = [
//   {
//     'title': 'Home',
//     'link': '/'
//   },
//   {
//     'title': 'About',
//     'link': '/About'
//   },
//   {
//     'title': 'Contact',
//     'link': '/Contact'
//   },
// ];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={logo} alt='' />
      <Divider />
      <Box  className="navbar1">
      <List>
        <ListItem>
          <Link to="/">HOME</Link>
        </ListItem>
        <ListItem>
          <Link to="/About">ABOUT</Link>
        </ListItem>
        <ListItem>
          <Link to="/Contact">CONTACT</Link>
        </ListItem>
        <ListItem>
          <Link >TEAM</Link>
        </ListItem>
        <ListItem>
          <Link >PORTFOLIO</Link>
        </ListItem>
        <ListItem>
          <Link >TESTIMONIALS</Link>
        </ListItem>
        <ListItem>
          <Link >BLOG</Link>
        </ListItem>
        <ListItem>
          <Link >PAGES</Link>
        </ListItem>
        <ListItem>
          <Link >SHOP</Link>
        </ListItem>
        <ListItem>
          <Link >ELEMENTS</Link>
        </ListItem>
        <ListItem>
          <Link><SearchIcon /></Link>
        </ListItem>
        <ListItem>
          <Button variant="outlined" sx={{ color: 'black', border: 'black' }}>
            LET'S TALK</Button>
        </ListItem>
      </List>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, Padding: '30px' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={logo} alt='' />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', color: 'white' } }} >
            {/* {pages.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <Box className="navbar">
              <List>
                <ListItem>
                  <Link to="/">HOME</Link>
                </ListItem>
                <ListItem>
                  <Link to="/About">ABOUT</Link>
                </ListItem>
                <ListItem>
                  <Link to="/Contact">CONTACT</Link>
                </ListItem>
                {/* <ListItem>
                  <Link >TEAM</Link>
                </ListItem>
                <ListItem>
                  <Link >PORTFOLIO</Link>
                </ListItem>
                <ListItem>
                  <Link >TESTIMONIALS</Link>
                </ListItem> */}
                {/* <ListItem>
                  <Link >BLOG</Link>
                </ListItem>
                <ListItem>
                  <Link >PAGES</Link>
                </ListItem>
                <ListItem>
                  <Link >SHOP</Link>
                </ListItem>
                <ListItem>
                  <Link >ELEMENTS</Link>
                </ListItem> */}
                <ListItem>
                  <Link><SearchIcon /></Link>
                </ListItem>
                <ListItem>
                  <Button variant="outlined" sx={{ color: 'black', border: 'black' }}>
                    LET'S TALK</Button>
                </ListItem>
              </List>

            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;