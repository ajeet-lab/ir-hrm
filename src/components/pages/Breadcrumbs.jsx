import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  

  // Generate breadcrumbs based on current path
  const pathnames = location.pathname.split("/").filter((x) => x); // Exclude empty segments
  const breadcrumbs = pathnames.map((_, index) => {
    const fullPath = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      label: fullPath.replace("/",""), // Use label from routeMap or fallback to path
      path: fullPath,
    };
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
      <Typography component="div">
        <Link component={RouterLink} to="/" underline="hover" color="primary">
          Home
        </Link>
      </Typography>
      {breadcrumbs.map((crumb, index) => (
        <Typography color="primary" key={crumb.path} sx={{ mx: 1 }}>  
        <span style={{marginRight:'5px'}}>{">  "}</span>       
          <Link
            component={RouterLink}
            to={crumb.path}
            underline="hover"
            color="primary" sx={{textTransform:'capitalize'}}
          >
            {crumb.label}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

export default Breadcrumbs;
