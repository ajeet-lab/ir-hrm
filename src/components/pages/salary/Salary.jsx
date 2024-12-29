import { Box, Button, Divider, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import React from 'react'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import moment from 'moment'

const Salary = () => {
  return (
    <>
      {/* <Box>
        <Typography variant='h4' sx={{ mb: 3 }}>Salary</Typography>
      </Box> */}
      <Box>
        <Box sx={{ p: 3, backgroundColor: "#fff", border: 1, borderRadius: '8px', borderColor: 'rgba(0,0,0, 0.1)' }}>
          <Box sx={{ my: 2, backgroundColor: "#fff", p: 3, border: 1, borderRadius: '8px', borderColor: 'rgba(0,0,0, 0.1)', width: '50%' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2">Salary Slip Report</Typography>
              <Divider sx={{ mt: 1 }}></Divider>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select Month and Year"
                views={['year', 'month']}
                minDate={dayjs('2013-01-01')}
                maxDate={dayjs(moment().format('YYYY-MM-DD'))}
                sx={{
                  width: '100%', // Full width
                  '& .MuiInputBase-root': { height: '40px' },
                  '& .MuiInputLabel-root': {
                    marginTop: '-7px'
                  },
                  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                    marginTop: '0px',
                  }
                }}
              />
            </LocalizationProvider>
            <Box sx={{ my: 2, mr: 'auto' }}>
              <Button variant="contained" sx={{ display: 'flex', justifySelf: "end" }} endIcon={<PictureAsPdfOutlinedIcon />} >PDF Export</Button>
            </Box>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default Salary