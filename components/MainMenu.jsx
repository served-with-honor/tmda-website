import { useCallback, useRef, useState, useContext } from 'react';
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
import { useTheme } from "@mui/material/styles";
import MobileMenu from './MobileMenu'

export default function MainMenu() {
  const router = useRouter();
  const selected = router.pathname;

  const [menuShowingDropdown, setMenuShowingDropdown] = useState("");
  const { setIsOpen, scrollTo } = useContext(BookingContext);
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

  const handleMenuShowingDropdownChange = useCallback((menuTitle) => {
    setMenuShowingDropdown(menuTitle);
  }, []);
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

  function handleExpandMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return <>
    <Button onClick={()=> handleExpandMenu()} sx={{ display: { md: 'none' }}}>
      <MenuIcon />
    </Button>
    <MobileMenu isMobileMenuOpen={isMobileMenuOpen} handleExpandMenu={handleExpandMenu} items={items} currentPage={selected}/>
    {items ? (
      <Box sx={{ display: { xs: 'none', md: 'initial' }}}>
        <nav>
          <Grid container spacing={2}>
            {items.map(({ text, href, children }) => (
              <Grid item key={`main-menu-root-item-${slugify(text)}`}>
                {children ? (
                  <MenuGroup
                    label={text}
                    items={children}
                    selected={selected}
                    menuShowingDropdown={menuShowingDropdown}
                    setMenuShowingDropdown={handleMenuShowingDropdownChange}
                  />
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

const MenuGroup = ({ label, items, selected, menuShowingDropdown, setMenuShowingDropdown }) => {

  const theme = useTheme();
  const buttonRef = useRef(null);
  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(label);
  }, [label, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown("");
  }, [setMenuShowingDropdown]);

  const menuName = `basic-${slugify(label)}`;
  const buttonId = `${menuName}-button`;
  const menuId = `${menuName}-menu`;

  return <>
    <Button
      ref={buttonRef}
      variant={'text'}
      size={'small'}
      id={buttonId}
      // aria-controls={open ? menuId : undefined}
      aria-haspopup="true"
      // aria-expanded={open ? 'true' : undefined}
      onMouseEnter={() => { showSubMenu(); return; }}
      onMouseLeave={() => { setMenuShowingDropdown(""); }}
      sx={{
        cursor: 'pointer',
        margin: 0,
        fontWeight: 700,
        position: 'relative',
        zIndex: theme.zIndex.modal + 1,
      }}
    >
      {label}
    </Button>  
    <Menu
      id={menuId}
      anchorEl={buttonRef.current}
      open={menuShowingDropdown === label}
      onClose={closeSubMenu}
      MenuListProps={{
        'aria-labelledby': buttonId,
      }}
      slotProps={{
        paper: {
          sx: { borderRadius: 3, p: 1 },
          onMouseEnter: () => { showSubMenu(); },
          onMouseLeave: () => { closeSubMenu(); },
        },
      }}
      keepMounted
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
