import { Box } from '@mui/material';
import React from 'react'
import FormatterDemoNoSnap from './FormatterDemoNoSnap';

const Performance = () => {
  return (
    <>
        {/* <Box >
        <Typography variant='h4' sx={{mb:3}}>Performance</Typography>
      </Box> */}
      <Box sx={{backgroundColor:'#fff', p:3}}>
        <FormatterDemoNoSnap />
    </Box>
    </>
    
  )
}

export default Performance;