'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Button, Grid, Typography, Box, ThemeProvider } from '@mui/material'
import theme from './theme.js'
import Tableprize from './components/tableprize'
import Tableprize4 from './components/tableprize4'
import Tableprize5 from './components/tableprize5'
import Checklottery from './components/checklottery'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh' }}>
        <Grid container>
          <Grid size="grow" bgcolor='primary.bgGray'></Grid>
          <Grid size={8} bgcolor='primary.bgGray'>
            <Grid container>
              <Grid size={8} bgcolor='primary.background'>
                <Box component={'div'} sx={{ marginY: 4 }}>
                  <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'primary.main' }} variant='h4'>ผลสลากกินแบ่งรัฐบาล</Typography>
                  <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'primary.fontMain' }} variant='h4'>งวดวันที่ 16 พฤษภาคม 2568</Typography>
                </Box>
                <Tableprize />
                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', marginX: 6, marginY: 3 }}>
                  <Box component={'div'}>
                    <Typography sx={{ fontSize: '14px', color: 'primary.main' }}>รางวัลข้างเคียงรางวัลที่ 1</Typography>
                    <Typography sx={{ fontSize: '14px' }}>2 รางวัลๆละ 100,000 บาท</Typography>
                  </Box>
                  <Box component={'div'}>
                    <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>251308</Typography>
                  </Box>
                  <Box component={'div'}>
                    <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>251310</Typography>
                  </Box>
                </Box>
                <Typography component={'hr'} sx={{ margin: 3 }}></Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'primary.main' }}>ผลสลากกินแบ่งรัฐบาล รางวัลที่ 2 มี 5 รางวัลๆละ 200,000 บาท</Typography>
                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', marginX: 6, marginY: 3 }}>
                  <Box component={'div'}>
                    <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                  </Box>
                  <Box component={'div'}>
                    <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                  </Box>
                  <Box component={'div'}>
                    <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                  </Box>
                  <Box component={'div'}>
                    <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                  </Box>
                  <Box component={'div'}>
                    <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                  </Box>
                </Box>
                <Typography component={'hr'} sx={{ margin: 3 }}></Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'primary.main' }}>ผลสลากกินแบ่งรัฐบาล รางวัลที่ 3 มี 10 รางวัลๆละ 80,000 บาท</Typography>
                <Box component={'div'} sx={{ marginX: 6, marginY: 3 }}>
                  <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                  </Box>
                  <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                    <Box component={'div'}>
                      <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>251308</Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography component={'hr'} sx={{ margin: 3 }}></Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'primary.main' }}>ผลสลากกินแบ่งรัฐบาล รางวัลที่ 4 มี 50 รางวัลๆละ 40,000 บาท</Typography>
                <Tableprize4 />
                <Typography component={'hr'} sx={{ margin: 3 }}></Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'primary.main' }}>ผลสลากกินแบ่งรัฐบาล รางวัลที่ 5 มี 100 รางวัลๆละ 20,000 บาท</Typography>
                <Tableprize5 />
              </Grid>
              <Grid size={4} bgcolor='primary.background'>
                <Checklottery />
              </Grid>
            </Grid>
          </Grid>
          <Grid size="grow" bgcolor='primary.bgGray'></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
