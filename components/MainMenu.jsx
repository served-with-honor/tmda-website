import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from '../src/Link';
import { styled } from '@mui/system';
import MUILink from '@mui/material/Link'
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

  const items = [
    {
      text: 'For Veterans',
      children: [
        { text: 'About', href: '/about' },
        { text: 'Services', href: '/services' },
        { text: 'Blog', href: '/blog' },
        { text: 'Patient Portal', href: settings.externalLinks.patientPortal, target: '_blank' },
        { text: 'Book Now', action: handleBookingClick },
      ],
    },
    {
      text: 'For Providers',
      children: [
        { text: 'Administrative Services', href: '/administrative-services' },
        { text: 'Provider Portal', href: settings.externalLinks.providerPortal, target: '_blank' },
        { text: 'Careers', href: '/careers' },
      ],
    },
    { text: 'Get In Touch', href: '/contact-us' }
  ];

  return <>
    <Button sx={{ display: { md: 'none' }}}>
      <MenuIcon />
      <Typography component='span' sx={visuallyHidden}>Open Menu</Typography>
    </Button>
    {items ? (
      <Box sx={{ display: { xs: 'none', md: 'initial' }}}>
        <nav>
          <Grid container spacing={2}>
            {items.map(({ text, href, children }) => (
              <Grid item key={`main-menu-root-item-${slugify(text)}`}>
                {children ? (
                  <MenuGroup label={text} items={children} selected={selected} />
                ) : (
                  <Button variant={'contained'} size={'small'} href={href}>{text}</Button>
                )}
              </Grid>
            ))}
          </Grid>
        </nav>
      </Box>
    ) : null}
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
  },
  
  '&.Mui-selected': {
    cursor: 'default',
    color: theme.palette.secondary.main,
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
      sx={{ fontWeight: 700 }}
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
      {items.map(({ href, text, target, action }) => {
        const isSelected = href === selected;
        const key = `main-menu-sub-item-${slugify(text)}`;

        return (
          <MyMenuItem key={key} selected={isSelected}>
            <Typography variant={'subtitle1'} component={'span'}>
              {isSelected ? (
                <><Box component={'span'} sx={visuallyHidden}>Current Page: </Box>{text}</>
              ) : action ? (
                <MUILink onClick={action}>{ text }</MUILink>
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
