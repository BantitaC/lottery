import Image from 'next/image'
import { Button, Grid, Typography, Box, ThemeProvider, TextField } from '@mui/material'
import theme from '../theme.js'
import Datebutton from './datebutton'

export default function CheckLottery() {
    return (
        <Box component={'div'} sx={{ bgcolor: 'primary.secondary', paddingY: 3, m: 2 }}>
            <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '18px', marginY: 2 }}>ตรวจผลสลากกินแบ่งรัฐบาล</Typography>
            <Typography align='center' sx={{ fontSize: '14px', mb:1 }}>งวดวันที่</Typography>
            <Datebutton />
            <Box component={'div'} align='center'>
                <TextField id="outlined-basic" variant="outlined" sx={{ marginY: 1 }} />
                <TextField id="outlined-basic" variant="outlined" sx={{ marginBottom: 1 }} />
                <TextField id="outlined-basic" variant="outlined" sx={{ marginBottom: 1 }} />
            </Box>
            <Box component={'div'} align='center'>
                <Button variant="contained" sx={{ px:6.3, mb:1 }}>ตรวจสลากฯ ของคุณ</Button>
            </Box>
        </Box>
    );
}