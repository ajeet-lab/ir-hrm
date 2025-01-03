import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [error, setError]=useState({status:false, msg:"", type:""});
    const navigate=useNavigate();
    const handleSubmit = (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const actualData={
                email: data.get('email'),
                password: data.get('password')
            }

          
           if(actualData.email && actualData.password){
             console.log(actualData)
             document.getElementById("login-form").reset();
             navigate("/");
           }else{
            setError({status:false, msg:"All fields are required", type:"error"})
           }
    }
    return (
       <Box component='form' noValidate sx={{mt:2, px:3}} id="login-form" onSubmit={handleSubmit}>
            <TextField margin="normal" required fullWidth size="small" id='email' label='Employee id' name="email"/>
            <TextField margin="normal" required fullWidth size="small" id='password' label='Password' type="password" name="password"/>
            <Box textAlign='center'>
                <Button type="submit" variant="contained" sx={{my:3, px:5}}>Login</Button>
            </Box>
            <NavLink to="/">Forgot Password..</NavLink>
            <Alert severity={error.type}>{error.msg}</Alert>
       </Box>
    )
}

export default UserLogin;