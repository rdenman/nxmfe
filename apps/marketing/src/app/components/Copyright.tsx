import { Link, Typography } from '@mui/material';
import { FC } from 'react';

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="/">Your Website</Link>
      {' ' + new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
