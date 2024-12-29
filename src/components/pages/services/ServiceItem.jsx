import React from 'react'
import {
    Box,
    Button,
    Typography
  } from "@mui/material";
  import { NavLink } from "react-router-dom";
  import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const ServiceItem = ({icon, title, url}) => {
  return (
              <Card sx={{ width: 150, height:175, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mt:3  }}>
                <Button sx={{width:'100%', height:'100%', pt:4, display:'block',  textAlign:'center'}} component={NavLink} to={url}>
                <Box  sx={{height:'70px', width:'70px', m:'auto',boxShadow: "-1px 2px 3px rgba(0, 0, 0, 0.4)", display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius:'50px'}}>
                    <CardMedia
                    component="img"
                    sx={{height:'40px', width:'40px', display:'flex', justifySelf:'center', alignSelf:'center'}}
                    src={icon}
                    alt={icon}
                />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt:2, textTransform:'none' }}>
                {title}
                </Typography>
                </Button>
           </Card>
  )
}

export default ServiceItem;