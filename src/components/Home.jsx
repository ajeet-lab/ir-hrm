import Grid from "@mui/material/Grid2";
import React from "react";
import attendence from '../images/attendence.png';
import timesheet from '../images/timesheet.png'
import performance from '../images/performance.png'
import leave from '../images/leave.png'
import salary from '../images/salary.png'
import expansion from '../images/expansion.png'
import compensation from '../images/compensation.png'

import ServiceItem from "./pages/services/ServiceItem";

const Home = () => {
    const items = [
        {
          icon: attendence,
          title: "Attendence",
          url: "/attendence"
        },
        {
            icon: timesheet,
            title: "Timesheet Tracker",
            url: "/timesheet"
          },
          {
            icon: performance,
            title: "Performance",
            url: "/performance"
          },
          {
            icon: leave,
            title: "Leave Tracker",
            url: "/leave"
          },
          {
            icon: salary,
            title: "Salary",
            url: "/salary"
          },
          {
            icon: expansion,
            title: "Expanse Tracker",
            url: "/expance"
          },
          {
            icon: compensation,
            title: "Compansation",
            url: "/compansation"
          },
      ];
      return (
        <>
        {/* <Box >
            <Typography variant='h4' sx={{pl:3}}>Home</Typography>
          </Box> */}
          <Grid container spacing='2'  justifyContent='space-around' sx={{ mt: 3 }}> 
              {items.map(({title, icon, url}) => (
                <Grid  size={{xs:12, sm:6, md:6, lg:2}} >
                    <ServiceItem key={title} icon={icon} title={title} url={url}/>
                </Grid>
              ))}       
           
          </Grid>
        </>
      );
    };

export default Home;