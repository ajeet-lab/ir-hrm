import { Alert, Box, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

const Registration = () => {
    const [error, setError]=useState({status:false, msg:"", type:""});
    const handleSubmit = (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const actualData={
                name: data.get('name'),
                email: data.get('email'),
                password: data.get('password'),
                confirmPassword: data.get('confirm_password'),
                tc: data.get('tc')
            }

          
           if(actualData.name && actualData.email && actualData.password && actualData.confirmPassword && actualData.tc != null){
             console.log(actualData)
             document.getElementById("register-form").reset();
           }else{
            setError({status:false, msg:"All fields are required", type:"error"})
           }
    }
    return (
       <Box component='form' noValidate sx={{mt:2, px:3}} id="register-form" onSubmit={handleSubmit}>
            <TextField margin="normal" size="small" required fullWidth id='name' label='Name' name="name"/>
            <TextField margin="normal" size="small" required fullWidth id='email' label='Employee id' name="email"/>
            <TextField margin="normal" size="small" required fullWidth id='password' label='Password' type="password" name="password"/>
            <TextField margin="normal" size="small" required fullWidth id='confirm_password' label='Confirm Password' type="password" name="confirm_password"/>
           <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition" />
            <Box textAlign='center'>
                <Button type="submit" variant="contained" sx={{my:3, px:5}}>Join</Button>
            </Box>
            <Alert severity={error.type}>{error.msg}</Alert>
       </Box>
    )
}

export default Registration;