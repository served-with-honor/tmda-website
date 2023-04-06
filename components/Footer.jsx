import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components'
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'
import Nav from '../components/Nav'
import logo from '../public/images/logo.png'
import settings from '../src/siteSettings';

// const Wrapper = styled.footer`
//   background: linear-gradient(180deg, #1F2C52, #000);
// 	color: #fff;
	
// 	a {
// 		color: var(--clr-primary-white);
		
// 		&:hover {
// 			color: var(--clr-primary-white);
// 		}
// 	}

// 	nav {
// 		a { display: block; }
// 	}
// `

export default function Footer() {
	const footerTheme = createTheme({
		palette: {
			text: {
				primary: '#fff',
			}
		},
    // components: {
    //   MuiInputLabel: {
    //     styleOverrides: {
    //       root: {
    //        color: 'white',
    //       }
    //     }
    //   }
    // }
	});
	
	const firstYear = settings.copyrightYearInitial;
	const thisYear = new Date().getFullYear();
	const copyrightYear = thisYear > firstYear ? `${firstYear} - ${thisYear}` : firstYear;
	return (
		<ThemeProvider theme={footerTheme}>
			<Box sx={{
				background: 'linear-gradient(180deg, #1F2C52, #000)',
				// color: '#ffffff',
				padding: 10,
			}}>
				<Container>
					<Grid container spacing={5}>
						<Grid item md={3}>
							<Link href="/"><Image src={logo} alt="Telemedica Logo" /></Link>
						</Grid>
							
						<Grid item md={9}>
							<Grid container spacing={5}>
								<Grid item>
									<Typography variant={'h5'} component={'h3'}>Quick Links</Typography>
									<Nav items={[
										{ text: 'About', path: '#' },
										{ text: 'Veteran Resources', path: '#' },
										{ text: 'News & Updates', path: '#' },
										{ text: 'How it Works', path: '#' },
										{ text: 'Services', path: '#' },
										{ text: 'Careers', path: '#' },
									]} />
								</Grid>

								<Grid item>
									<Typography variant={'h5'} component={'h3'}>Get Help</Typography>
									<Nav items={[
										{ text: 'Submit a Ticket', path: '#' },
										{ text: 'Contact Us', path: '#' },
									]} />
									
									<Typography variant={'h5'} component={'h3'}>Legal Pages</Typography>
									<Nav items={[
										{ text: 'Privacy Policy', path: '#' },
										{ text: 'Terms & Conditions', path: '#' },
									]} />
								</Grid>

								<Grid item>
									<Typography variant={'h5'} component={'h3'}>Recent Updates</Typography>
									<Nav items={[
										{ text: 'Blog Post', path: '#' },
										{ text: 'Blog Post', path: '#' },
										{ text: 'Blog Post', path: '#' },
										{ text: 'Blog Post', path: '#' },
									]} />
								</Grid>

								<Grid item>
									<Typography variant={'h5'} component={'h3'}>Get In Touch</Typography>
									<Nav items={[
										{ text: `${settings.contact.phone}`, url: `tel:${settings.contact.phone}` },
										{ text: 'Email Us', url: `mailto:${settings.contact.email}` },
									]} />
								</Grid>

							</Grid>
						</Grid>
				</Grid>
				<div>
					<Grid container spacing={3}>
						<Grid item>
							<Typography variant={'body2'}>Copyright @ {copyrightYear} | {settings.company}</Typography>
							</Grid>
							{settings.social ? (
								<Grid item>
									<Stack direction={'horizontal'}>
										{settings.social.map((item, index) => (
											<Link key={`social-link-${index}`} href={item} target="_blank" rel="noopener">
												<Avatar color={'primary'}>
													<img src="/images/Social/facebook (1).svg" />
												</Avatar>
											</Link>
										))}
									</Stack>
								</Grid>
						) : null}
					</Grid>
					</div>
				</Container>
			</Box>
		</ThemeProvider>
  )
}
