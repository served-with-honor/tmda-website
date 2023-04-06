import { forwardRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Box, Container, Grid } from '@mui/material'
import MainMenu from './MainMenu'
import logo from '../public/images/logo.png'

export default forwardRef(function Header(props, ref) {
  return (
    <Box component={'header'} ref={ref} sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      paddingY: [1, 3 ],
      marginTop: 0,
      backgroundColor: 'transparent',
      zIndex: 99,
    }}>
      <Container>
        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid item>
            <Link href="/">
              <Image src={logo} alt="Telemedica Logo" />
            </Link>
          </Grid>
          <Grid item>
            <MainMenu />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
})