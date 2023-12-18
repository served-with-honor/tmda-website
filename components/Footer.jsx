import { useState, useEffect } from 'react'
import useSWR from 'swr'
import Image from 'next/image';
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from '../theme';
import { visuallyHidden } from '@mui/utils';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import logo from '../public/images/logo.svg';
import settings from '../src/siteSettings';
import Link from '../src/Link';
import { getSocialIcon, formatPhoneNumber } from '../src/utils';

const fetcher = (...args) => fetch(...args).then((res) => {
	if (!res.ok) {
		console.error(res.status, res.statusText);
		throw new Error('There was a problem loading the lastest posts');
	}
  return res.json()
}).then(res => res.data.posts);;


export default function Footer() {
	const { data: posts, error, isLoading } = useSWR('/api/posts?first=4', fetcher);
	
	const firstYear = settings.copyrightYearInitial;
	const thisYear = new Date().getFullYear();
	const copyrightYear = thisYear > firstYear ? `${firstYear} - ${thisYear}` : firstYear;
	return (
		<ThemeProvider theme={darkTheme}>
			<footer>
				<Box sx={{
					backgroundColor: 'secondary.100',
					pt: 8,
					pb: 3,
					color: 'text.primary',
					'ul': { listStyleType: 'none', pl: 0 },
					'li': { mt: 0, mb: 1, },
					'li:last-of-type': { mb: 0 }
				}}>
					<Container>
						<Grid container spacing={5}>
							<Grid item md={3}>
								<Link href="/"><Image src={logo} alt="Telemedica Logo" width={225} height={49} /></Link>
							</Grid>
								
							<Grid container item sm={12} md={9} spacing={5}>
								<Grid item xs={12} sm={6} md={3}>
									<Typography variant={'h6'} component={'h3'} color={'secondary.700'}>Quick Links</Typography>
									<ul>
										<li><Link href={'/about'}>About</Link></li>
										<li><Link href={'/services'}>Services</Link></li>
										<li><Link href={'/blog'}>News & Updates</Link></li>
										<li><Link href={'/careers'}>Careers</Link></li>
										<li><Link href={'/faqs'}>FAQs</Link></li>
									</ul>
								</Grid>

								<Grid item xs={12} sm={6} md={3}>
									<Typography variant={'h6'} component={'h3'} color={'secondary.700'}>Get Help</Typography>
									<ul>
										<li><Link href={settings.externalLinks.helpDesk} target='_blank'>Submit a Ticket</Link></li>
										<li><Link href={'/contact-us'}>Contact Us</Link></li>
									</ul>
									<Typography variant={'h6'} component={'h3'} color={'secondary.700'}>Get In Touch</Typography>
									<ul>
										<li><Link href={`tel:${settings.contact.phone}`}>{formatPhoneNumber(settings.contact.phone)}</Link></li>
										<li><Link href={`mailto:${settings.contact.email}`}>Email Us</Link></li>
									</ul>
								</Grid>

								<Grid item xs={12} sm={6} md={6}>
									<Typography variant={'h6'} component={'h3'} color={'secondary.700'}>Recent Blogs</Typography>
									{error ? (
           					<Alert severity="error">{error.message}</Alert>
          				) : isLoading ? <Box>
										<Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} animation="wave" />
										<Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} animation="wave" />
										<Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} animation="wave" />
										<Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} animation="wave" />
									</Box> : posts?.length > 0 ? (
										<Box sx={{ 'li': { mb: 2 } }}>
											<ul>
												{posts.map(({ title, slug }) => {
													const limit = 64;
													const text = title.length > limit ? `${title.substring(0, limit).trim()}...` : title;
													return <li component='li' key={`footer-article-${slug}`}><Link href={`/blog/${slug}`}>{text}</Link></li>
												})}
											</ul>
										</Box>
										) : (
											<Typography variant={'body1'}>No recent blogs found.</Typography>
										)}
								</Grid>

							</Grid>
					</Grid>
					<Box sx={{ mt: 5 }}>
						<Grid container spacing={3} alignItems={'center'} justifyContent={'space-between'}>
							<Grid item>
								<Grid container spacing={2} alignItems={'center'}>
									<Grid item><Typography variant={'body2'}>Copyright @ {copyrightYear} | {settings.company}</Typography></Grid>
									<Grid item><Link  variant={'body2'} href={'/privacy-policy'}>Privacy Policy</Link></Grid>
									<Grid item><Link  variant={'body2'} href={'/terms-and-conditions'}>Terms & Conditions</Link></Grid>
								</Grid>
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
															<Typography component='span' sx={visuallyHidden}>{text}</Typography>
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
