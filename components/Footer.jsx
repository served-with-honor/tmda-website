import { useState, useEffect } from 'react'
import Image from 'next/image';
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from '../theme';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import logo from '../public/images/logo.png';
import settings from '../src/siteSettings';
import Link from '../src/Link';
import { getSocialIcon, formatPhoneNumber } from '../src/utils';

export default function Footer() {
	const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
 
  useEffect(() => {
		setIsLoading(true)
		fetch('/api/posts?first=4', { method: 'GET' }).then(response => response.json()).then(response => {
			const responsePosts = response.data.posts.nodes.map(post => ({
				title: post?.title,
				slug: post?.slug,
			}));
			setPosts(responsePosts);
			setIsLoading(false);
		}).catch((error) => {
			setIsLoading(false);
			console.error(error);
		});
	}, [])
	
	const firstYear = settings.copyrightYearInitial;
	const thisYear = new Date().getFullYear();
	const copyrightYear = thisYear > firstYear ? `${firstYear} - ${thisYear}` : firstYear;
	return (
		<ThemeProvider theme={darkTheme}>
			<footer>
				<Box sx={{
					// background: 'linear-gradient(180deg, #1F2C52, #000)',
					backgroundColor: 'secondary.100',
					pt: 8,
					pb: 3,
					color: 'text.primary',
				}}>
					<Container>
						<Grid container spacing={5}>
							<Grid item md={3}>
								<Link href="/"><Image src={logo} alt="Telemedica Logo" /></Link>
							</Grid>
								
							<Grid container item sm={12} md={9} spacing={5}>
								<Grid item xs={12} sm={6} md={3}>
									<Typography variant={'h6'} component={'h3'} color={'secondary.700'}>Quick Links</Typography>
									<List>
										<ListItemText><Link href={'/about'}>About</Link></ListItemText>
										<ListItemText><Link href={'/resources'}>Veteran Resources</Link></ListItemText>
										<ListItemText><Link href={'/blog'}>News & Updates</Link></ListItemText>
										<ListItemText><Link href={'/services'}>Services</Link></ListItemText>
										<ListItemText><Link href={'/careers'}>Careers</Link></ListItemText>
										<ListItemText><Link href={'/faqs'}>FAQs</Link></ListItemText>
									</List>
								</Grid>

								<Grid item xs={12} sm={6} md={3}>
									<Typography variant={'h6'} component={'h3'} color={'secondary.700'}>Get Help</Typography>
									<List>
										<ListItemText><Link href={settings.externalLinks.helpDesk} target='_blank'>Submit a Ticket</Link></ListItemText>
										<ListItemText><Link href={'/contact-us'}>Contact Us</Link></ListItemText>
									</List>
									
									<Typography variant={'h6'} component={'h3'} marginTop={3} color={'secondary.700'}>Legal Pages</Typography>
									<List>
										<ListItemText><Link href={'/privacy-policy'}>Privacy Policy</Link></ListItemText>
										<ListItemText><Link href={'/terms-and-conditions'}>Terms & Conditions</Link></ListItemText>
									</List>
								</Grid>

								<Grid item xs={12} sm={6} md={3}>
									<Typography variant={'h6'} component={'h3'} color={'secondary.700'}>Recent Updates</Typography>
									{isLoading ? <Box>
										<Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} animation="wave" />
										<Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} animation="wave" />
										<Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} animation="wave" />
										<Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} animation="wave" />
									</Box> : posts && posts.length > 0 ? (
										<List>
											{posts.map(({ title, slug }) => {
												const limit = 48;
												const text = title.length > limit ? `${title.substring(0, limit).trim()}...` : title;
												return <ListItemText key={`footer-article-${slug}`} sx={{ mb: 2 }}><Link href={`/blog/${slug}`}>{text}</Link></ListItemText>
											})}
										</List>
										): null}
								</Grid>

								<Grid item xs={12} sm={6} md={3}>
									<Typography variant={'h6'} component={'h3'} color={'secondary.700'}>Get In Touch</Typography>
									<List>
										<ListItemText><Link href={`tel:${settings.contact.phone}`}>{formatPhoneNumber(settings.contact.phone)}</Link></ListItemText>
										<ListItemText><Link href={`mailto:${settings.contact.email}`}>Email Us</Link></ListItemText>
									</List>
								</Grid>

							</Grid>
					</Grid>
					<Box sx={{ mt: 5 }}>
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
														<Avatar sx={{ backgroundColor: 'secondary.200' }} size={'small'}>
															<Icon sx={{ color: 'secondary.100' }} />
														</Avatar>
													</Link>
												);
											})}
										</Stack>
									</Grid>
							) : null}
						</Grid>
						</Box>
					</Container>
				</Box>
			</footer>
		</ThemeProvider>
  )
}
