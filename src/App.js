import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Box, CssBaseline } from '@mui/material';
import Footer from './components/pages/Footer';
import Breadcrumbs from './components/pages/Breadcrumbs';



function App() {
  return (
    <>
    <Box sx={{backgroundColor:'#edf4f9', height:'100%', minHeight:'100vh', pb:5}}>
        <CssBaseline />
        <div style={{marginBottom:'16px'}}> 
          <Navbar />
        </div>
        <Box sx={{px:3, mt: 5}}>
        <Breadcrumbs />
          <Outlet />
        </Box>

        
        </Box>
        <Box sx={{}}>
            <Footer />
        </Box>
        
    
    </>

  );
}

export default App;
