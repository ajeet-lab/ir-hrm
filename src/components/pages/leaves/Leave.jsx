import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Grid from '@mui/material/Grid2';
import { Box, Button, Card, Checkbox, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Delete, Restore, Save } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Chart from '../chart/Chart';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1876d2',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(slNo, leaveType, opBal, allotted, availed, lapsed, encashed, adjusted, balance) {
    return { slNo, leaveType, opBal, allotted, availed, lapsed, encashed, adjusted, balance };
}

const rows = [
    createData(1, 'LOP', '', '', '', '', '', '', ''),
    createData(2, 'CL', 0, 5.0, 1.0, '', '', '', 4.0),
    createData(3, 'PL', 4.9, 1.0, '', '', '', '', 5.0),
    createData(4, 'ML', '', '', '', '', '', '', ''),
    createData(5, 'MLESI', '', '', '', '', '', '', '')
];



const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index} style={{ padding: '1rem 25px' }}>
            {value === index && (<Box>{children}</Box>)}
        </div>
    )
}


const Leave = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => { setValue(newValue) };


    const showHideHandler = () =>{
       let leaveDetails = document.getElementById("leaveDetails");
       

       if(leaveDetails.style.display === 'none'){
        leaveDetails.style.display="block";
       }else{
        leaveDetails.style.display="none";
       }

       leaveDetails.style.transition="all .3s linear"
    }

    return (
        <>
                {/* <Box >
                    <Typography variant='h4' sx={{}}>Leave</Typography>
                  </Box> */}
            <Grid container sx={{ mt: 5, width: '100%' }} spacing={2}>
                <Grid size={{ lg: 4, sm: 6 }} >
                    {/* <Box sx={{ py: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}> */}
                    <Box sx={{ p: 2, border: 1, borderRadius: '8px', borderColor: 'rgba(0,0,0, 0.1)', backgroundColor:'#fff' }}>

                        <Typography>Leave Requisition</Typography>
                        <Divider sx={{ mt: 1, mb: 2 }} />
                        <Box  >
                            {/* Leave Type */}
                            <Box>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="leave-type-select-label">Leave Type</InputLabel>
                                    <Select labelId="leave-type-select-label"
                                        id="leave-type-select"
                                        // value={age}
                                        label="Leave Type"
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value="Select leave type">Select leave type</MenuItem>
                                        <MenuItem value="LOP">LOP</MenuItem>
                                        <MenuItem value="CL">CL</MenuItem>
                                        <MenuItem value="PL">PL</MenuItem>
                                        <MenuItem value="ML">ML</MenuItem>
                                        <MenuItem value="MLESI">MLESI</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            {/* From Date */}
                            <Box sx={{ my: 2 }}>


                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="From Date"
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
                            </Box>


                            {/* To Date */}

                            <Box sx={{ mb: 2 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="To Date"
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
                            </Box>

                            {/* Leave For */}
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <InputLabel sx={{ fontWeight: 'normal', color: "#000", mr: 5 }}>Leave for: </InputLabel>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="First Half"
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Second Half"
                                />
                            </Box>

                            {/* Days */}
                            <Box sx={{ mb: 2 }}>
                                <TextField label="Days" type="number" disabled fullWidth size="small" value={1} />
                            </Box>

                            {/* Reason */}
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    label="Reason"
                                    multiline
                                    rows={2}
                                    fullWidth
                                    size='small'
                                    placeholder="Leave Reason"
                                />
                            </Box>

                            {/* Buttons */}

                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Button variant="contained" startIcon={<Save />} color="primary">
                                    Save
                                </Button>
                                <Button variant="outlined" startIcon={<Restore />}>
                                    Reset
                                </Button>
                                <Button variant="contained" startIcon={<Delete />} color="error">
                                    Delete
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ lg: 8, sm: 6 }}>
                    <Box sx={{ p: 2, border: 1, borderRadius: '8px', borderColor: 'rgba(0,0,0, 0.1)', height:'100%', backgroundColor:'#fff' }}>

                        <Typography>Leave Summary as on 01-12-2024</Typography>
                        <Divider sx={{ mt: 1, mb: 2 }} />
                        <Box>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table" size="small">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Sl.No.</StyledTableCell>
                                            <StyledTableCell>Leave Type</StyledTableCell>
                                            <StyledTableCell>Op.Bal</StyledTableCell>
                                            <StyledTableCell>Allotted</StyledTableCell>
                                            <StyledTableCell>Availed</StyledTableCell>
                                            <StyledTableCell>Lapsed</StyledTableCell>
                                            <StyledTableCell>Encashed</StyledTableCell>
                                            <StyledTableCell>Adjusted</StyledTableCell>
                                            <StyledTableCell>Balance</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            // slNo,	leaveType,	opBal,	allotted,	availed,	lapsed,	encashed,	adjusted,	balance
                                            <StyledTableRow key={row.slNo}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.slNo}
                                                </StyledTableCell>
                                                <StyledTableCell >{row.leaveType}</StyledTableCell>
                                                <StyledTableCell>{row.opBal}</StyledTableCell>
                                                <StyledTableCell>{row.allotted}</StyledTableCell>
                                                <StyledTableCell>{row.availed}</StyledTableCell>
                                                <StyledTableCell>{row.lapsed}</StyledTableCell>
                                                <StyledTableCell>{row.encashed}</StyledTableCell>
                                                <StyledTableCell>{row.adjusted}</StyledTableCell>
                                                <StyledTableCell>{row.balance}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Chart />
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 12, sm: 12, lg: 12, xl: 12 }}>
                    <Card sx={{ width: '100%', height: '100%' }}>
                        <Box>
                            <Box sx={{ border: 1, borderColor: 'divider' }}>
                                <Tabs value={value} textColor='primary' indicatorColor='primary' onChange={handleChange}>
                                    <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                    <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0} >
                                <Box>
                                <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table" size="small">
                                    <TableHead>
                                        <TableRow>                           	 		 
                                            <StyledTableCell>Batch Number</StyledTableCell>
                                            <StyledTableCell>Leave From</StyledTableCell>
                                            <StyledTableCell>Leave To</StyledTableCell>
                                            <StyledTableCell>Number Of Days</StyledTableCell>
                                            <StyledTableCell role='button'> <Button sx={{color:"white"}} onClick={showHideHandler}><ArrowDownwardIcon /></Button> </StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            <StyledTableRow>
                                                <StyledTableCell component="th" scope="row">
                                                1			                                     
                                                </StyledTableCell>
                                                <StyledTableCell >17/12/2024</StyledTableCell>
                                                <StyledTableCell>18/12/2024</StyledTableCell>
                                                <StyledTableCell>2</StyledTableCell>
                                                <StyledTableCell></StyledTableCell>
                                            </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Box sx={{mt:3, px:4}}>
                           
                            <TableContainer component={Paper} style={{display:"none"}} id='leaveDetails'>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table" size="small">
                                    <TableHead>
                                        <TableRow>                           	 		 
                                            <StyledTableCell>Batch Number</StyledTableCell>
                                            <StyledTableCell>Leave From</StyledTableCell>
                                            <StyledTableCell>Leave To</StyledTableCell>
                                            <StyledTableCell>Number Of Days</StyledTableCell>
                                            <StyledTableCell role='button'> <Button sx={{color:"white"}}><ArrowDownwardIcon /></Button> </StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            <StyledTableRow>
                                                <StyledTableCell component="th" scope="row">
                                                1			                                     
                                                </StyledTableCell>
                                                <StyledTableCell >17/12/2024</StyledTableCell>
                                                <StyledTableCell>18/12/2024</StyledTableCell>
                                                <StyledTableCell>2</StyledTableCell>
                                                <StyledTableCell></StyledTableCell>
                                            </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

      
 

                            </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Box>
                                    <h1>Registration</h1>
                                </Box>

                            </TabPanel>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Leave