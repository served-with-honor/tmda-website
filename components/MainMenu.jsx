import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from '../src/Link';
import { Avatar, Box, Button, Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import { visuallyHidden } from '@mui/utils';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from "framer-motion";
import { slugify } from '../src/utils';

export default function MainMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const selected = router.pathname;

  const items1 = [
    { href: '/about', text: 'About' },
    { href: '/how-it-works', text: 'How it works' },
    { href: '/services', text: 'Services' },
    { href: '/blog', text: 'Blog' },
    { href: '/resources', text: 'Resources' },
  ];
  const items2 = [
    { href: '/administrative-services', text: 'Administrative Services' },
    { href: '/careers', text: 'Careers' },
  ];

  return <>
    {isMobile ? (
      <Button><MenuIcon /></Button>
    ) : (
      <nav>
        <Grid container>
            <Grid item>
              <MenuGroup label={'For Veterans'} items={items1} selected={selected} />
          </Grid>
          <Grid item>
            <MenuGroup label={'For Providers'} items={items2} selected={selected} />
          </Grid>
          <Button variant={'outlined'} size={'small'} href="/contact-us">Get In Touch</Button>
        </Grid>
      </nav>
    )}
  </>
}

const MenuGroup = ({ label, items,  selected }) => {
  const [isHover, setIsHover] = useState(false);
  const toggleHoverMenu = () => { setIsHover(!isHover); };
  const router = useRouter();
  
  const subMenuAnimate = {
    initial: {
      display: 'none',
      left: 0,
      position: 'absolute',
      paddingTop: 15,
      width: '100%',
      zIndex: 100,
    },
    enter: {
      display: 'block',
      scale: 1,
      opacity: 1,
      top: '50px',
      transition: {
        duration: 0.25
      },
    },
    exit: {
      display: 'block',
      scale: 0.75,
      opacity: 0,
      top: '100px',
      transition: {
        duration: 0.15,
      },
      transitionEnd: {
        display: "none",
        top: 0,
      }
    }
  };

  return (
    <motion.div
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
    >
      <Button variant={'text'} size={'small'}>{label}</Button>
      <motion.div
        initial="initial"
        animate={isHover ? "enter" : "exit"}
        variants={subMenuAnimate}
        whileFocus={'enter'}
      >
        <Paper elevation={5} sx={{ overflow: 'hidden' }}>
          <Grid container columns={10}>
            {items.map(props => (
              <Grid item md={2} key={`main-menu-item${slugify(props.text)}`}>
                <SubItem {...props} selected={selected} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>
    </motion.div>
  )
}

const SubItem = ({ href, text, selected }) => {
  const [isFocus, setIsFocus] = useState(false);
  const cur = href === selected;
  return (
    <motion.div
      initial={{ height: '100%', }}
      whileHover={{
        backgroundColor: 'rgba(0,0,0,0.05)',
        // scale: 1.1,
        transition: { duration: 0.25 },
      }}>
      <Box
        sx={{ height: '100%', textAlign: 'center', cursor: cur ? 'normal' : 'pointer', paddingX: 3, paddingY: 5 }}
        onClick={() => cur ? null : router.push(href)}
        onMouseEnter={() => setIsFocus(true)}
        onMouseLeave={() => setIsFocus(false)}
      >
        <Avatar color={'primary.dark'} sx={{ marginX: 'auto', marginBottom: 3 }}>{text[0]}</Avatar>
        <Typography gutterBottom variant={'h5'} component={'p'} color={'primary.main'}>
          {cur ? (
            <><Box component={'span'} sx={visuallyHidden}>Current Page: </Box>{text}</>
          ) : (
            <Link href={href} color='inherit' sx={{ textDecoration: 'none' }}>{text}</Link>
          )}
        </Typography>
        <Typography variant={'body2'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque fugiat quasi veniam.
        </Typography>
        <Button aria-hidden="true" variant={isFocus ? 'contained' : 'outlined'} size={'small'} sx={{ marginTop: 3 }}>Learn More</Button>
      </Box>
    </motion.div>
  );
}