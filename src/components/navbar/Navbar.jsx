import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { NavLink } from "react-router-dom"
const Navbar = () => {


    return <>

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <Typography variant='h5' component="div" sx={{
                        flexGrow: 1, color: "white"
                    }}>
                        IR
                    </Typography>
                    <Button component={NavLink} to='/' sx={{ color: 'white', textTransform: 'none' }} style={({ isActive }) => { return { backgroundColor: isActive ? "#06396c" : "" } }}>Home</Button>
                    <Button component={NavLink} to='/login' sx={{ color: 'white', textTransform: 'none' }} style={({ isActive }) => { return { backgroundColor: isActive ? "#06396c" : "" } }}>Login/Reg</Button>
                </Toolbar>
            </AppBar>
        </Box>

    </>
}


export default Navbar;