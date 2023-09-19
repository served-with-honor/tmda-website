import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from '../src/Link';
import { styled } from '@mui/system';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu'
import { visuallyHidden } from '@mui/utils';
import { slugify } from '../src/utils';
import settings from '../src/siteSettings';
import { BookingContext } from '../context/BookingContext'

export default function MainMenu() {
  const router = useRouter();
  const selected = router.pathname;

  const { setIsOpen, scrollTo } = useContext(BookingContext);
  const handleBookingClick = scrollTo ? scrollTo : setIsOpen ? () => setIsOpen(true) : null;
  
  const items1 = [
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/blog', text: 'Blog' },
    { href: settings.externalLinks.patientPortal, text: 'Patient Portal', target: '_blank' },
  ];
  const items2 = [
    { href: '/administrative-services', text: 'Administrative Services' },
    { href: settings.externalLinks.providerPortal, text: 'Provider Portal', target: '_blank' },
    { href: '/careers', text: 'Careers' },
  ];

  return <>
    <Button sx={{ display: { md: 'none' }}}>
      <MenuIcon />
      <Typography component='span' sx={visuallyHidden}>Open Menu</Typography>
    </Button>
    <Box sx={{ display: { xs: 'none', md: 'initial' }}}>
      <nav>
        <Grid container spacing={2}>
          <Grid item>
            <MenuGroup label={'For Veterans'} items={items1} selected={selected} />
          </Grid>
          <Grid item>
            <MenuGroup label={'For Providers'} items={items2} selected={selected} />
          </Grid>
          <Grid item>
            <Button variant={'contained'} size={'small'} href="/contact-us">Get In Touch</Button>
          </Grid>
          <Grid item>
            <Button variant={'contained'} size={'small'} onClick={handleBookingClick}>Book Now</Button>
          </Grid>
        </Grid>
      </nav>
    </Box>
  </>
}
const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  position: 'relative',
  color: theme.palette.primary.main,
  transition: 'all 0.125s ease-in-out',
  lineHeight: 1,
  
  'span': { lineHeight: 'inherit' },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  
  '&:before': {
    content: '""',
    height: '1em',
    display: 'block',
    position: 'absolute',
    left: 10,
    borderLeft: 'solid 2px',
    opacity: 0,
    transition: 'all 0.125s ease-in-out',
  },
  
  '&:hover, &:focus': {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,

    '&:before': { opacity: 1 },
  }
}));

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
      slotProps={{
        paper: { sx: { borderRadius: 3, p: 1 } }
      }}
      disableAutoFocusItem
    >
      {items.map(({ href, text, target }) => {
        const isSelected = href === selected;
        const key = `main-menu-item-${slugify(text)}`;

        return (
          <MyMenuItem key={key} selected={isSelected} disabled={isSelected}>
            <Typography variant={'subtitle1'} component={'span'}>
              {isSelected ? (
                <><Box component={'span'} sx={visuallyHidden}>Current Page: </Box>{text}</>
              ) : (
                <Link href={href} target={target || ''}>{text}</Link>
              )}
            </Typography>
          </MyMenuItem>
        );
      })}
    </Menu>
  </>
}
