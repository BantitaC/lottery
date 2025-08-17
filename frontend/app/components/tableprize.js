import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(prize1, prize2, prize3, prize4) {
    return { prize1, prize2, prize3, prize4 };
}

const rows = [
    createData('251309', '109 231', '965 631', '87')
];

export default function AccessibleTable() {
    return (
        <TableContainer component={Paper} sx={{ display:'flex', justifyContent:'center' }}>
            <Table sx={{ minWidth: 'auto' }}>
                <TableHead sx={{ bgcolor:'primary.bgGray' }}>
                    <TableRow>
                        <TableCell>
                            <Typography sx={{ fontSize: '14px', color: 'primary.main', textAlign: 'center' }}>รางวัลที่ 1</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'primary.fontMain', textAlign: 'center' }}>รางวัลละ 6,000,000 บาท</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: '14px', color: 'primary.main', textAlign: 'center' }}>เลขหน้า 3 ตัว</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'primary.fontMain', textAlign: 'center' }}>2 รางวัลๆละ 4,000 บาท</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: '14px', color: 'primary.main', textAlign: 'center' }}>เลขท้าย 3 ตัว</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'primary.fontMain', textAlign: 'center' }}>2 รางวัลๆละ 4,000 บาท</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontSize: '14px', color: 'primary.main', textAlign: 'center' }}>เลขท้าย 2 ตัว</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'primary.fontMain', textAlign: 'center' }}>1 รางวัลๆละ 2,000 บาท</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.prize1}>
                            <TableCell align="center" sx={{ fontSize:'28px', color:'primary.main', fontWeight:'bold' }}>{row.prize1}</TableCell>
                            <TableCell align="center" sx={{ fontSize:'28px', fontWeight:'bold' }}>{row.prize2}</TableCell>
                            <TableCell align="center" sx={{ fontSize:'28px', fontWeight:'bold' }}>{row.prize3}</TableCell>
                            <TableCell align="center" sx={{ fontSize:'28px', fontWeight:'bold' }}>{row.prize4}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
