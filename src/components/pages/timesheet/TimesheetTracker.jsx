import React, { useState } from 'react';
import { TextField, Box, Button, Typography, IconButton, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import DeleteIcon from '@mui/icons-material/Delete';
import StickyHeadTable from './StickyHeadTable.jsx';


export default function TimesheetTracker() {
    const [tasks, setTasks] = useState([{ index: 0, remark: '', startTime: '', endTime: '', totalHours: '' }]);
    const [rows, setRows] = useState([])

    const handleInputChange = (index, field, value) => {
        console.log("Heloow oerernljklj")
        const updatedTasks = [...tasks];
        updatedTasks[index][field] = value;
        setTasks(updatedTasks);
    };


    function createData(index, startTime, endTime, totalHours, remark) {
        return { index, startTime, endTime, totalHours, remark };
    }

    const calculateTimeDifference = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        let startTime = data.get('startTime');
        let endTime = data.get('endTime');
        let remark = data.get('remark');
        const inputElement = e.currentTarget.querySelector('input[name="totalHours"]');
        // Get the value of the custom 'index' attribute
        const index = inputElement.getAttribute('id');
        if (startTime && endTime) {
            let start = new Date(startTime);
            let end = new Date(endTime);
            // Calculate the difference in milliseconds
            const diffMilliseconds = end.getTime() - start.getTime();

            // Convert milliseconds to hours, minutes, and seconds
            const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
            const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

            const totalHours = `${diffHours}.${diffMinutes}`;
            // Select the input element

            const updatedTasks = [...tasks];
            updatedTasks[index]["totalHours"] = totalHours;
            updatedTasks[index]["index"] += 1;
            const ind = updatedTasks[index]["index"];

            setTasks(updatedTasks);
            const createdData = createData(ind, startTime, endTime, totalHours, remark)
            setRows([...rows, createdData]);
        } else {
            alert("All fields are required")
        }

    };

    // const calculateHours= () => {
    //     return tasks.reduce((total, task) => total + (parseFloat(task.totalHours) || 0), 0).toFixed(2);
    // }

    const calculateTotalHours = () => {
        return rows.reduce((total, task) => total + (parseFloat(task.totalHours) || 0), 0).toFixed(2);
    };

    return (
        <Box sx={{ p: 3, backgroundColor: '#fff', borderRadius: 2, mt: 3, pb:6 }}>
            {/* <Typography variant="h4" sx={{ mb: 3 }}>
                Employee Timesheet Tracker
            </Typography> */}
            <Divider variant='body2' sx={{my:2}}>Timesheet Tracker</Divider>

            {/* Task Table */}
            {tasks.map((task, index) => (
                <Box component='form' noValidate onSubmit={calculateTimeDifference} key={index} id="timesheet-form">
                    <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }} >
                        <Grid size={{ xs: 12, md: 3 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    name='startTime'
                                    label="Start Time"
                                    sx={{
                                        width: '100%', // Full width
                                        '& .MuiInputBase-root': { height: '40px' },
                                        '& .MuiInputLabel-root': {
                                            marginTop: '-7px'
                                        },
                                        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                                            marginTop: '0px',
                                        }
                                    }} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    name='endTime'
                                    label="End Time"
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
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
                            <TextField
                                name='totalHours'
                                label="Total Hours"
                                fullWidth
                                id={index.toString()}
                                disabled
                                size="small"
                                value={task.totalHours}
                                onChange={(e) => handleInputChange(index, 'totalHours', e.target.value)}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <TextField
                                multiline
                                name="remark"
                                label="Remark"
                                fullWidth
                                rows={2}
                                size="small"
                                value={task.task}
                                onChange={(e) => handleInputChange(index, 'remark', e.target.value)}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 12 }} >
                            <Button variant="contained" sx={{ mb: 3, alignSelf: 'center', my: 'auto' }} type="submit">Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
            ))}

            {/* Summary Section */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#fff', borderRadius: 2 }}>
                <Typography variant="h6">Summary</Typography>
                <Typography>Total Hours: {calculateTotalHours()} hrs</Typography>
            </Box>

            <Box>
                <StickyHeadTable rows={rows} />
            </Box>
        </Box>
    );
}
