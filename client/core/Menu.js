import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import auth from './../auth/auth-helper';
import { Link, withRouter } from 'react-router-dom';
import LogoImage from '../assets/images/logo.jpg'

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#FFB6C1' };
  else return { color: '#ffffff' };
};

const Menu = withRouter(({ history }) => {
  const appBarStyle = {
    backgroundColor: '#2c3e50',
    '&:hover': {
      backgroundColor: '#FF0000', 
    },
  };

  const buttonStyle = {
    margin: '0 20px',
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ marginRight: '20px', backgroundColor: '#ffffff', // Set white background
    color: '#000000',
    padding: '10px', 
    borderRadius: '5px' }}>
       <img
    src={LogoImage}
    alt="Logo"
    style={{ width: '30px', marginRight: '10px' }} // Set the width as needed
  />
          Group3
        </Typography>
        <Link to="/">
          <IconButton aria-label="Home" style={{ ...buttonStyle, ...isActive(history, '/') }}>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/users">
          <Button style={{ ...buttonStyle, ...isActive(history, '/users') }}>Users</Button>
        </Link>
        
        {!auth.isAuthenticated() && (
          <span>
            <Link to="/signup">
              <Button style={{ ...buttonStyle, ...isActive(history, '/signup') }}>Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button style={{ ...buttonStyle, ...isActive(history, '/signin') }}>Sign In</Button>
            </Link>
          </span>
        )}
        {auth.isAuthenticated() && (
          <span>
            <Link to={`/user/${auth.isAuthenticated().user._id}`}>
              <Button
                style={{ ...buttonStyle, ...isActive(history, `/user/${auth.isAuthenticated().user._id}`) }}
              >
                My Profile
              </Button>
            </Link>
            <Button
              color="inherit"
              onClick={() => {
                auth.clearJWT(() => history.push('/'));
              }}
            >
              Sign out
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default Menu;
