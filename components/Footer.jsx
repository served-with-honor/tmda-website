import Image from 'next/image'
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from '../theme'
import { Avatar, Box, Container, colors, Grid, List, ListItemText, Stack, Typography } from '@mui/material'
import logo from '../public/images/logo.png'
import settings from '../src/siteSettings';
import Link from '../src/Link';
import { getSocialIcon } from '../src/utils';
import { getPosts, slugify } from '../lib/api'

export default function Footer({ posts }) {
	const firstYear = settings.copyrightYearInitial;
	const thisYear = new Date().getFullYear();
	const copyrightYear = thisYear > firstYear ? `${firstYear} - ${thisYear}` : firstYear;
	return (
		<ThemeProvider theme={darkTheme}>
			<footer>
				<Box sx={{
					background: 'linear-gradient(180deg, #1F2C52, #000)',
					padding: 10,
				}}>
					<Container>
						<Grid container spacing={5}>
							<Grid item md={3}>
								<Link href="/"><Image src={logo} alt="Telemedica Logo" /></Link>
							</Grid>
								
							<Grid container item md={9} spacing={5}>
								<Grid item sm>
									<Typography variant={'h6'} component={'h3'}>Quick Links</Typography>
									<List>
										<ListItemText><Link href={'/about'}>About</Link></ListItemText>
										<ListItemText><Link href={'/resources'}>Veteran Resources</Link></ListItemText>
										<ListItemText><Link href={'/blog'}>News & Updates</Link></ListItemText>
										<ListItemText><Link href={'/how-it-works'}>How it Works</Link></ListItemText>
										<ListItemText><Link href={'/services'}>Services</Link></ListItemText>
										<ListItemText><Link href={'/careers'}>Careers</Link></ListItemText>
									</List>
								</Grid>

								<Grid item sm>
									<Typography variant={'h6'} component={'h3'}>Get Help</Typography>
									<List>
										<ListItemText><Link href={'#'}>Submit a Ticket</Link></ListItemText>
										<ListItemText><Link href={'/contact'}>Contact Us</Link></ListItemText>
									</List>
									
									<Typography variant={'h6'} component={'h3'} marginTop={3}>Legal Pages</Typography>
									<List>
										<ListItemText><Link href={'/privacy-policy'}>Privacy Policy</Link></ListItemText>
										<ListItemText><Link href={'/terms-and-conditions'}>Terms & Conditions</Link></ListItemText>
									</List>
								</Grid>

								<Grid item sm>
									<Typography variant={'h6'} component={'h3'}>Recent Updates</Typography>
									{posts && posts.length > 0 ? (
										<List>
											{posts.map(post => {
												const limit = 48;
												const text = post.title.length > limit ? `${post.title.substring(0, limit).trim()}...` : post.title;
												return <ListItemText sx={{ mb: 2 }}><Link href={`/blog/${post.slug}`}>{text}</Link></ListItemText>
											})}
										</List>
										): null}
								</Grid>

								<Grid item sm>
									<Typography variant={'h6'} component={'h3'}>Get In Touch</Typography>
									<List>
										<ListItemText><Link href={`tel:${settings.contact.phone}`}>{settings.contact.phone}</Link></ListItemText>
										<ListItemText><Link href={`mailto:${settings.contact.email}`}>Email Us</Link></ListItemText>
									</List>
								</Grid>

							</Grid>
					</Grid>
					<div>
							<Grid container spacing={3} alignItems={'center'} justifyContent={'space-between'}>
							<Grid item>
								<Typography variant={'body2'}>Copyright @ {copyrightYear} | {settings.company}</Typography>
								</Grid>
								{settings.social ? (
									<Grid item>
										<Stack direction={'row'} spacing={1}>
											{settings.social.map((item, index) => {
												const key = `social-link-${index}`;
												const { Icon, text, name } = getSocialIcon(item);
												return (
													<Link key={key} href={item} target="_blank" rel="noopener">
														<Avatar sx={{ backgroundColor: 'common.white' }} size={'small'}>
															<Icon sx={{ color: 'primary.dark' }} />
														</Avatar>
													</Link>
												);
											})}
										</Stack>
									</Grid>
							) : null}
						</Grid>
						</div>
					</Container>
				</Box>
			</footer>
		</ThemeProvider>
  )
}
