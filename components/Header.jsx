import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme, Box, Container, Grid } from '@mui/material'
import { motion, useAnimate, useScroll, useMotionValueEvent } from "framer-motion"
import MainMenu from './MainMenu'
import Logo from '../public/images/logo.svg'
import LogoWhite from '../public/images/logo-white.svg'
import siteSettings from '../src/siteSettings';

export default forwardRef(function Header({ isDark }, ref) {
  const [scope, animate] = useAnimate();
  const [headerState, setHeaderState] = useState(null);
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
      y: 0,
    },
    'sticky': {
      position: 'fixed',
      backgroundColor: 'rgba(255,255,255,1)',
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
      ref.current.style = `box-shadow: ${theme.shadows[5]}`;
      return;
    }
    
    if (headerState === 'hidden') {
      animate(ref.current, headerAnimations['hide'], { delay: 0.25 });
      return
    }
    animate(ref.current, headerAnimations['initial']);
    ref.current.style = 'box-shadow: none';
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
        zIndex: theme.zIndex.modal + 1,
        '.MuiButton-text': headerState === null ? { color: 'primary.200' } : null,
        '.MuiButton-contained': headerState === null ? { backgroundColor: 'primary.300' } : null,
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid item>
            <Link href="/">
              <Image
                src={isDark && headerState !== 'sticky' ? LogoWhite : Logo}
                alt={`${siteSettings.name} logo`}
                width={225}
                height={49}
              />
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