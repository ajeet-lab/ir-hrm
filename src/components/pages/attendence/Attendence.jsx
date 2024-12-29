import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid2';
import { Box, Button, Typography, useTheme } from '@mui/material';
import moment from 'moment';
import Fingerprint from '@mui/icons-material/Fingerprint';

const Attendence = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('hh:mm:ss A, DD MMM YYYY'));
  const today = dayjs();
  const theme = useTheme();

  // const now = moment().format('LLL');
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('hh:mm:ss A, DD MMM YYYY')); // Update the time every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      {/* <Box >
        <Typography variant='h3'>Attendence</Typography>
      </Box> */}
      <Grid container sx={{ mt: 5 }}>
        <Grid size={{ lg: 4, sm: 6 }} sx={{ backgroundColor: 'rgba(255,165,0, 0.1)', border: 1, borderColor: 'orange', borderRadius: '8px' }}>
          <Box sx={{ py: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
            <Typography variant='body2'>Attendence</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{currentTime}</Typography>
            <Box component='div' sx={{ my: 2, width: '150px', height: '150px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: theme.shadows[3] }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '13px' }}>Total Hours</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>5:45:23</Typography>
              </Box>
            </Box>
            <Button variant='contained' sx={{ textTransform: 'none', fontSize: '12px', backgroundColor: 'black' }}>Production: 03:45 hrs</Button>
            <Typography variant='p' sx={{ my: 1, fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}><Fingerprint sx={{ fontSize: '14px', mr: 1 }} /> Punch in at 10 AM</Typography>
            <Button variant='contained' color='error' sx={{ width: "80%" }}>Punch out</Button>
          </Box>
        </Grid>
        <Grid size={{ lg: 8, sm: 6 }} sx={{px:5}}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', // Ensure the Box takes up the full height of the Grid
            border: 1,
            borderColor:'orange',
            borderRadius:'8px',
            px:3
          }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                defaultValue={today}
                disableFuture
                sx={{
                  width: '100%', // Set the desired width
                  height: '100%', // Set the desired height
                  '& .MuiDayCalendar-weekDayLabel': {
                    width: '100%',
                    fontSize: '18px', // Increase the font size of weekdays
                    fontWeight: 'bold', // Optional: Make the font bold
                  },
                  '& .MuiPickersDay-root': {
                    width: '100%',
                    // fontWeight: 'bold',
                    borderRadius: "50px",
                  },
                  '& .MuiPickersDay-root.Mui-selected': {
                    borderRadius: "50px",
                    backgroundColor: 'orange',
                    color: 'white',
                  },
                }} />
            </LocalizationProvider>
          </Box>
        </Grid>
      </Grid>





    </>
  )
}

export default Attendence;