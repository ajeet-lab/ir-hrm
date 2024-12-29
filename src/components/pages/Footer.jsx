import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#06396c",
        color: "white",
        py: 3,
        px: { xs: 2, sm: 4 },
      }}
    >
      
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Innovation Redefineds. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
