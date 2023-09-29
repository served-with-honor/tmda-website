import { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import Page from '../components/Page'
import PriceTable from '../components/PriceTable'
import siteSettings from '../src/siteSettings';
import { BookingContext } from '../context/BookingContext'
import BookingWidget from '../components/BookingWidget'
import CustomAccordion from '../components/CustomAccordion'
import services from '../components/services'
import Counter from '../components/Counter'
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export default function ServicesPage({ prices }) {
	const mobileBookingSectionRef = useRef(null);
	const desktopBookingSectionRef = useRef(null);
	const handleBookNowClick = () => {
		const isMobileDevice = window.innerWidth < 900;
		const behavior = 'smooth'
		if(isMobileDevice) {
			mobileBookingSectionRef.current.scrollIntoView({ behavior})
		} else {
			desktopBookingSectionRef.current.scrollIntoView({behavior})
		}
	}
	return (
		<BookingContext.Provider value={{ scrollTo: handleBookNowClick }}>
			<Page title={'Services'} darkHeader bookingAction={() => handleBookNowClick()}>	
				{/* HERO */}
				<Box sx={{ 
					pt: 15, 
					background: 'linear-gradient(to right, #2e4074 30%, #1d2646 90%)', 
					color: 'secondary.contrastText',
					'br': { display: { xs: 'none', md: 'initial' } }
				}}>
					<Container sx={{ pb: 3 }}>
						<Box sx={{ my: { xs: 5, md: 10 } }}>
						<Typography 
							variant='h3' 
							component='h1' 
							sx={{ mb: 1}}
						>
							Empowering Veterans with Strong {" "}
						<br />
						<Box 
							component='span' 
							sx={{ 
								color: 'primary.main',
							}}
						>
							Medical Evidence {" "}
						</Box>
							for VA Disability Claims
						</Typography>
						<Typography variant='lead' sx={{ fontSize: 32 }}>
							Your partner in securing the benefits you deserve on your path to well-being!
							</Typography>
							</Box>
					</Container>
					<Container maxWidth='md'>
						<Box 
							sx={{
								backgroundColor: 'background.paper', 
								position: 'relative',
								mb: '-75px',
								p: [3, 5]
							}}
						>
							<LiteYouTubeEmbed
								id="AI7CW81RHzw"
								title="video_title"
								aspectWidth={16}
								aspectHeight={9}
							/>
								<Grid
									container 
									spacing={2}
									sx={{ 
										justifyContent: 'center',
										mt: 1 
									}}
								>
									<Grid item>
										<Button 
											variant='contained' 
											color='secondary' 
											size='large'
											onClick={handleBookNowClick}
										>
											Book Now
										</Button>
									</Grid>
									<Grid item>
										<Button 
											variant='contained' 
											color='secondary' 
											size='large' 
											href={siteSettings.externalLinks.patientPortal} 
										>
											Patient Portal
										</Button>
									</Grid>
								</Grid>
						</Box>
						</Container>
						</Box>
				{/* SECTION */}
				<Box sx={{ backgroundColor: 'secondary.100', pt: 20, pb: 10 }}>
					<Container>
						<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10, maxWidth: 'md', marginX: 'auto' }}>Services from the Medical Evidence Experts</Typography>
						{services ? (
						<Box mb={10}>
							<CustomAccordion items={services} />
						</Box>
						) : null}
						<Container sx={{ textAlign: 'center' }}>
							<Typography variant='h6' component='h3' gutterBottom sx={{ textTransform: 'capitalize'}}>The 5 easy steps to obtaining your medical evidence in less time!</Typography>
							<Typography variant='subtitle1' component='p'>
								<MuiLink href='/about#how-it-works'>How it Works</MuiLink>
							</Typography>
						</Container>
					</Container>
				</Box>
				{/* SECTION */}
				<Box sx={{ py: 10 }}>
					<Container maxWidth='md'>
						<Typography variant='sectionHeading' component='h2' sx={{ mb: 10 }}>At-A-Glance Pricing</Typography>
						{prices ? <PriceTable rows={prices} /> : null}
						<Box sx={{ mt: 6 }}>
							{/* Discount Section */}
							<Typography display='inline' variant='h6'>Discounts: </Typography>
							<Typography sx={{ fontStyle: 'italic'}} display='inline'>A volume discount of 15% applies when you purchase three (3) or more documents.</Typography>
							<Typography sx={{ fontStyle: 'italic', pt: 1.5, pb: 2}} >First-time discounts and 3rd-party discounts may apply. Inquire within.</Typography>
							{/* Disclaimer Section */}
							<Typography variant='h6'>Disclaimers:</Typography>
							<Typography sx={{ fontStyle: 'italic', pt: 1.5}}>*The non-refundable appointment/booking fee covers the cost of the Telemedica provider's time/effort to review the veteran's case and to ensure they can assist the veteran.</Typography>
							<Typography sx={{ fontStyle: 'italic', py: 1.5}} >**$50 fee not applicable in all cases. Fee charged on a case-by-case basis.</Typography>
						</Box>
					</Container>
				</Box>
				{/* Booking Section */}
				<Box
					ref={desktopBookingSectionRef} 
					sx={{
						py: 10, 
						alignItems: 'center', 
						background: 'linear-gradient(135deg, #e2f5f1 0%, #d5d9e4 100%)',
					}}
				>
					<Container>
						<Typography variant='sectionHeading' component='h2'>Book Now!</Typography>
						<Typography variant='lead' align='center' sx={{ mt: 5, mb: 10, maxWidth: '850px', mx: 'auto' }}>
							Ready to get started? Join the thousands of Veterans who have trusted Telemedica with their medical evidence needs.
						</Typography>
						<Grid container spacing={5} alignItems='center'>
							<Grid item xs={12} md={6}>
								<Box sx={{ maxWidth: 450, mx: 'auto' }}>
									<Typography sx={{
										fontSize: { xs: '6vw', sm: 32, },
										textAlign: 'center',
										textTransform: 'capitalize',
									}}>
										We've Helped more than
										<Typography component='span' color='primary.600' sx={{ display: 'block', fontSize: '1.25em', fontWeight: 700, }}>
											<Counter to={20000} /> veterans
										</Typography>
										win their claim through:
									</Typography>
									<List sx={{
										ml: { sm: 5, },
										'.MuiListItemIcon-root': { 	
											alignSelf: 'flex-start'
										},
									}} >
										{[
											'Licensed, trusted providers',
											'Services available nation-wide',
											'Fast turnaround times',
										].map((item, index) => (
											<ListItem key={`stuff-${index}`}>
												<ListItemIcon><AddIcon color='primary'/></ListItemIcon>
												<ListItemText>{item}</ListItemText>
											</ListItem>
										))}
									</List>
								</Box>
							</Grid>
							<Grid item xs={12} md={6}>
								<Box
									ref={mobileBookingSectionRef}
									backgroundColor='background.default'
									sx={{
										boxShadow: 5,
										borderRadius: 5,
										height:{ md: '625px' }, 
										overflow: { md: 'auto' },
										p: 3,
									}}
								>
									<BookingWidget />
								</Box>
							</Grid>
						</Grid>
					</Container>			
				</Box>
			</Page>
		</BookingContext.Provider>
  )
}

export async function getStaticProps() {
	const prices = [
		{ label: 'Telemedicine Evaluation*', fee: '$100', price: '$895', category: 'Telemedicine' },
		{ label: 'Medical Nexus Letter*', fee: '$199', price: '$1,345', category: 'Nexus' },
		{ label: 'Medical Nexus Letter Enhanced*', fee: '$199', price: '$1,595', category: 'Nexus' },
		{ label: 'P&T Request Letter*', fee: '$199', price: '$1,345', category: 'Nexus' },
		{ label: 'DBQ Document*', fee: '$199', price: '$1,145', category: 'Nexus' },
		{ label: 'DBQ Document Enhanced*', fee: '$199', price: '$1,400', category: 'Nexus' },
		{ label: 'Med Team Rebuttal Letter**', fee: '$50', price: '$250', category: 'Nexus' },
		{ label: 'Psych Eval/IMO*', fee: '$100', price: '$1,395', category: 'Psych' },
		{ label: 'Psych Rebuttal Letter', fee: '$0', price: '$175', category: 'Psych' },
	];

	return {
		props: {
			prices,
		}
	}
}
