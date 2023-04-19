import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useTheme, Box, Container, Grid } from '@mui/material'
import { motion, useAnimate, usePresence, useScroll, useMotionValueEvent } from "framer-motion"
import MainMenu from './MainMenu'
import logo from '../public/images/logo.png'

export default forwardRef(function Header(props, ref) {
  const [scope, animate] = useAnimate();
  const [headerState, setHeaderState] = useState();
  const { scrollY } = useScroll();
  const theme = useTheme();

  const headerAnimations = {
    'hide': {
      backgroundColor: 'rgba(255,255,255,0)',
      y: -120,
    },
    'initial': {
      position: 'absolute',
      backgroundColor: 'rgba(255,255,255,0)',
      boxShadow: theme.shadows[0],
      y: 0,
    },
    'sticky': {
      position: 'fixed',
      backgroundColor: 'rgba(255,255,255,1)',
      boxShadow: theme.shadows[5],
      y: 0,
    },
  };
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY.current < 2) {
      setHeaderState(null);
      return;
    }
    if (scrollY.current < scrollY.prev) {
      setHeaderState('sticky');
      return;
    }
    
    setHeaderState('hidden');
  });
  
  useEffect(() => {
    if (headerState === 'sticky') {
      animate(ref.current, headerAnimations['sticky']);
      return;
    }
    
    if (headerState === 'hidden') {
      animate(ref.current, headerAnimations['hide'], { delay: 0.25 });
      return
    }
    animate(ref.current, headerAnimations['initial']);
  }, [headerState])
  
  return (
    <Box
      component={motion.header}
      ref={ref}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        paddingY: [1, 3],
        marginTop: 0,
        zIndex: 99,
      }}
    >
      <Container sx={{ position: 'relative' }}>
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