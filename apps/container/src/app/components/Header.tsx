import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {
  isSignedIn: boolean;
  onSignOut(): void;
}

const Header: FC<HeaderProps> = ({ isSignedIn, onSignOut }) => {
  function onClick() {
    if (isSignedIn) {
      onSignOut();
    }
  }

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'grey.400' }}
    >
      <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none' }}
        >
          App
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          component={RouterLink}
          to={isSignedIn ? '/' : '/auth/signin'}
          onClick={onClick}
          sx={{ my: 1, mx: 1.5 }}
        >
          {isSignedIn ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
