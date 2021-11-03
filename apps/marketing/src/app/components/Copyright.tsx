import { Link, Typography } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link component={RouterLink} to="/">
        Your Website
      </Link>
      {' ' + new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
