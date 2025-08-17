import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
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

function createData(prize1, prize2, prize3, prize4, prize5) {
    return { prize1, prize2, prize3, prize4, prize5 };
}

const rows = [
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749),
    createData(410749, 410749, 410749, 410749, 410749)
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 'auto', marginY: 3 }} aria-label="customized table">
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.prize1}>
                            <StyledTableCell align='center'>{row.prize1}</StyledTableCell>
                            <StyledTableCell align='center'>{row.prize2}</StyledTableCell>
                            <StyledTableCell align='center'>{row.prize3}</StyledTableCell>
                            <StyledTableCell align='center'>{row.prize4}</StyledTableCell>
                            <StyledTableCell align='center'>{row.prize5}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
