import { Box } from '@mui/material'
import React from 'react'
import TimesheetTracker from './TimesheetTracker'

const Timesheet = () => {
  return (
    <>
    
    {/* <Box >
        <Typography variant='h4' sx={{}}>Timesheet</Typography>
      </Box> */}

      <Box>
        <TimesheetTracker />
      </Box>
    </>
  )
}

export default Timesheet