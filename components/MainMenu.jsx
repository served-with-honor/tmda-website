import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from '../src/Link';
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu'
import { visuallyHidden } from '@mui/utils';
import { motion } from "framer-motion";
import { slugify } from '../src/utils';
import settings from '../src/siteSettings';

export default function MainMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const selected = router.pathname;

  const items1 = [
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/blog', text: 'Blog' },
    { href: '/resources', text: 'Resources' },
  ];
  const items2 = [
    { href: settings.externalLinks.providerPortal, text: 'Provider Portal' },
    { href: '/administrative-services', text: 'Administrative Services' },
    { href: '/careers', text: 'Careers' },
  ];

  return <>
    {isMobile ? (
      <Button><MenuIcon /></Button>
    ) : (
      <nav>
        <Grid container spacing={2}>
          <Grid item>
            <MenuGroup label={'For Veterans'} items={items1} selected={selected} />
          </Grid>
          <Grid item>
            <MenuGroup label={'For Providers'} items={items2} selected={selected} />
          </Grid>
          <Grid item>
            <Button variant={'outlined'} size={'small'} href="/contact-us">Get In Touch</Button>
          </Grid>
          <Grid item>
            <Button variant={'contained'} size={'small'} href={settings.externalLinks.patientPortal}>Patient Portal</Button>
          </Grid>
        </Grid>
      </nav>
    )}
  </>
}

const MenuGroup = ({ label, items,  selected }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  const menuName = `basic-${slugify(label)}`;
  const buttonId = `${menuName}-button`;
  const menuId = `${menuName}-menu`;

  return <>
    <Button variant={'text'} size={'small'}
      id={buttonId}
      aria-controls={open ? menuId : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onMouseEnter={handleOpen}
    >
      {label}
    </Button>  
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      open={open}
      onMouseLeave={handleClose}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': buttonId,
        onMouseLeave: handleClose,
      }}
    >
      {items.map(({ href, text }) => (
        <MenuItem key={`main-menu-item-${slugify(text)}`} selected={href === selected} disabled={href === selected}>
          <Typography variant={'subtitle1'} component={'span'} color={'primary.main'} sx={{ lineHeight: 1 }}>
            {href === selected ? (
              <><Box component={'span'} sx={visuallyHidden}>Current Page: </Box>{text}</>
            ) : (
              <Link href={href} color='inherit' sx={{ textDecoration: 'none' }}>{text}</Link>
            )}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  </>
}
