import {Card, Tabs, Tab, Box} from '@mui/material'
import Grid from '@mui/material/Grid2';
import login from '../../../images/login2.png'
import { useState } from 'react';
import UserLogin from './UserLogin';
import Registration from './Registration';
 
const TabPanel=(props)=>{
    const {children, value, index} = props;

    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}


const LoginReg = () => {
        const [value, setValue] = useState(0);
        const handleChange = (event, newValue) => {setValue(newValue)}

    return <>
    <Grid container sx={{height: '90vh'}}>
        <Grid size={{ lg: 7, sm: 5, xs:12 }} 
        sx={{backgroundImage: `url(${login})`, 
        backgroundRepeat:'no-repeat', 
        backgroundSize:'cover', 
        backgroundPosition:'center',
        display:{sx:'none', sm:'block'}
        }}>
        </Grid>
        <Grid size={{ lg: 5, sm: 7, xs:12 }}>
            <Card sx={{width:'100%', height:'100%'}}>
                <Box>
                    <Box sx={{borderBottom:1, borderColor:'divider'}}>
                        <Tabs value={value} textColor='primary' indicatorColor='primary' onChange={handleChange}>
                            <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                            <Tab label='Registration' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                        </Tabs>                       
                    </Box>
                    <TabPanel value={value} index={0}>
                            <UserLogin />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Registration />
                        </TabPanel>
                </Box>
            </Card>
        </Grid>
    </Grid>

     
  </>
}

export default LoginReg;