import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import {IconButton, Tooltip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const columns = [
    { id: 'startTime', 
        label: 'Start Time', 
        minWidth: 170 },
    {
        id: 'endTime',
        label: 'End Time',
        minWidth: 170
    },
    {
        id: 'totalHours',
        label: 'Total Hours',
        minWidth: 170
    },
    {
        id: 'remark',
        label: 'Remark',
        minWidth: 170
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 170
    },
];

export default function StickyHeadTable({ rows }) {
    console.log(rows)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.index}>
                                        <TableCell>
                                            {row.startTime}
                                        </TableCell>
                                        <TableCell>
                                            {row.endTime}
                                        </TableCell>
                                        <TableCell>
                                            {row.totalHours}
                                        </TableCell>
                                        <TableCell>
                                            {row.remark}
                                        </TableCell>
                                        <TableCell>
                                        <Tooltip title="Approve" placement="top">
                                            <IconButton color="success" sx={{p:"0px"}} >
                                            <CheckCircleOutlineIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete" placement="top">
                                            <IconButton color="secondary" aria-label="add to shopping cart" sx={{p:"0px", ml:3}}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
