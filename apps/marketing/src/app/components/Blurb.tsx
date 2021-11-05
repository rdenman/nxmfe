import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

const Blurb: FC = () => {
  return (
    <Box>
      <Typography variant="h6">My Company</Typography>
      <Typography variant="body1">
        My Company does work in all sorts of industries. We really are a
        fantastic option for all your needs. Call us today and schedule a call
        to learn more about our fantastic offerings!
      </Typography>
    </Box>
  );
};

export default Blurb;
