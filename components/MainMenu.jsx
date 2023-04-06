import { useRouter } from "next/router";
import Link from 'next/link';
import { Box, Button, Grid, Paper, visuallyHidden } from '@mui/material'

export default function MainMenu() {
  const items1 = [
    { href: "/about", text: 'About' },
    { href: "/how-it-works", text: 'How it works' },
    { href: "/services", text: 'Services' },
    { href: "/blog", text: 'Blog' },
    { href: "/resources", text: 'Resources' },
  ];
  const items2 = [
    { href: "/administrative-services", text: 'Administrative Services' },
    { href: "/careers", text: 'Careers' },
  ];

  return <>
      <nav>
        <Grid container>
          <Grid item>
            <Button variant={'text'} size={'sm'}>For Veterans</Button>
            <Paper sx={{
              padding: 3,
              position: 'absolute',
            }}>
            {items1.map(({ href, text }) => (
              <Item key={`main-menu-item-${text}`} href={href}>{text}</Item>
            ))}
            </Paper>
          </Grid>
          <Grid item>
            <Button variant={'text'} size={'sm'}>For Providers</Button>
            <Paper sx={{
              padding: 3,
              position: 'absolute',
            }}>
            {items2.map(({ href, text }) => (
              <Item key={`main-menu-item-${text}`} href={href}> {text}</Item>
            ))}
            </Paper>
          </Grid>
          <Button variant={'outlined'} size={'sm'} href="/contact-us">Get In Touch</Button>
        </Grid>
      {/* <button
        id="btnHamburger"
        className="nav__toggle hide-large"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button> */}
      </nav>
  </>
}


const Item = ({ href, children }) => {
  const router = useRouter();
  const isCurrent = router.pathname === href;

  return isCurrent ? (
    <span>
      <span sx={visuallyHidden}>Current Page: </span>
      {children}
    </span>
  ) : (
    <Box><Link href={href}>{children}</Link></Box>
  )
}