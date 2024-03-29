import { useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { motion, useAnimate, useScroll, useMotionValueEvent } from 'framer-motion';
import MainMenu from '../MainMenu';
import Logo from '../../public/images/logo.svg';
import LogoWhite from '../../public/images/logo-white.svg';
import constants from '../../src/constants';

export default forwardRef(function Header({ isDark, hasHeroVideo }, ref) {
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
      backgroundColor: hasHeroVideo && !isDark ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0)',
      y: 0,
    },
    'sticky': {
      position: 'fixed',
      backgroundColor: 'rgba(255,255,255,1)',
      y: 0,
    },
  };
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const headerHeight = ref.current.offsetHeight;
    const isScrollingUp = scrollY.current < scrollY.prev;
    const isPastHeader = scrollY.current >= headerHeight;

    if (isScrollingUp && scrollY.current < 2) {
      setHeaderState(null);
      return;
    }

    if (isScrollingUp) {
      setHeaderState('sticky');
      return;
    }
    
    if (!isScrollingUp && isPastHeader) {
      setHeaderState('hidden');
      return;
    }
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
        zIndex: theme.zIndex.drawer + 1,
        '.MuiButton-text': isDark && headerState === null ? { color: 'primary.200' } : null,
        '.MuiButton-text': isDark && headerState === null ? { color: 'primary.200' } : null,
        '.MuiSvgIcon-root': isDark && headerState === null ? { color: 'primary.600' } : null,
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid item>
            <Link href="/">
              <Image
                src={isDark && headerState !== 'sticky' ? LogoWhite : Logo}
                alt={`${constants.site.name} logo`}
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