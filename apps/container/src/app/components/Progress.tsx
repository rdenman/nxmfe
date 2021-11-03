import { Box, LinearProgress } from '@mui/material';
import { FC } from 'react';

const classes = {
  bar: {
    width: '100%',
    '& > * + *': {
      marginTop: 2,
    },
  },
};

const Progress: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        '& > * + *': {
          marginTop: 2,
        },
      }}
    >
      <LinearProgress />
    </Box>
  );
};

export default Progress;
