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
import constants from '../src/constants';
import { BookingContext } from '../context/BookingContext'
import BookingWidget from '../components/BookingWidget'
import CustomAccordion from '../components/CustomAccordion'
import services from '../components/services'
import Counter from '../components/Counter'
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export default function ServicesPage({ title, description, prices }) {
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
		window.history.replaceState({}, '', '#booking');
	}
	return (
		<BookingContext.Provider value={{ scrollTo: handleBookNowClick }}>
			<Page title={title} description={description} darkHeader bookingAction={() => handleBookNowClick()}>	
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
								variant='h2' 
								component='h1' 
								sx={{ mb: 1}}
							>
								Serving Those Who Served
							</Typography>
							<Typography variant='lead' sx={{ fontSize: 32 }}>
								The #1 Health Resource For Veterans
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
								id="SR1F23LUe-8"
								title="video_title"
								aspectWidth={16}
								aspectHeight={9}
								params={`rel=0&color=white`}
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
											href='#booking'
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
											href={constants.externalLinks.patientPortal}
											target='_blank'
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
						<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 5, maxWidth: 'md', marginX: 'auto' }}>Services from the Medical Evidence Experts</Typography>
						<Box sx={{ marginBottom: 10, maxWidth: 'md', marginX: 'auto', }}>
							<Typography variant='subtitle2' component='p' sx={{ marginBottom: 2 }}>If you’ve already been diagnosed with a condition and only need Nexus documents please go back and book the "Medical Nexus Service". </Typography>
							<Typography variant='subtitle2' component='p'>If you’re requesting an evaluation for a mental health condition, please go back and book the mental health evaluation.</Typography>
						</Box>
						{services ? (
						<Box mb={10}>
							<CustomAccordion items={services} />
							<Box sx={{textAlign: 'center'}}>
								<Button variant='contained' href='#booking' sx={{mt: 2}}>Book Now</Button>
							</Box>
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
				<Box id='pricing' sx={{ py: 10 }}>
					<Container maxWidth='md'>
						<Typography variant='sectionHeading' component='h2' sx={{ mb: 10 }}>At-A-Glance Pricing</Typography>
						{prices ? <PriceTable rows={prices.items} /> : null}
						<Box sx={{ mt: 6 }}>
							{/* Discount Section */}
							<Typography display='inline' variant='h6'>Discounts: </Typography>
							<Typography sx={{ fontStyle: 'italic'}} display='inline'>A volume discount of 10% applies when you purchase three (3) or more documents.</Typography>
							<Typography sx={{ fontStyle: 'italic', pt: 1.5, pb: 2}} >First-time discounts and 3rd-party discounts may apply. Inquire within.</Typography>
							{/* Disclaimer Section */}
							<Typography variant='h6'>Disclaimers:</Typography>
							{prices.disclaimers.map(({ indicator, text}) => (
								<Typography sx={{ fontStyle: 'italic', pt: 1.5 }} key={`pricing-table-disclaimer-${indicator}`}>
									<sup>{indicator}</sup> {text}
								</Typography>
							))}
						</Box>
					</Container>
				</Box>
				
				{/* Booking Section */}
				<Box
					id='booking'
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
											<ListItem key={`booking-feature-${index}`}>
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
										maxHeight:{ md: '625px' }, 
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
	const title = 'Services';
	const description = 'We offer Veterans a range of medical evaluation services including Nexus Letters, Mental Health Evaluations, Rebuttal Letters, and more.';

	const prices = {
		items: [
			{ label: 'Psych Eval & Independent Medical Opinion', disclaimer: '*', amount: 1495, category: 'Mental Health Evaluations', },
			{ label: 'Psych Re-Evaluation', amount: 150, category: 'Mental Health Evaluations', },
			{ label: 'Rebuttal Letter', amount: 200, category: 'Mental Health Evaluations', },
			{ label: 'Telemedicine Evaluation (DX)', disclaimer: '*', amount: 985, category: 'Medical/Nexus Services', },
			{ label: 'Medical Nexus Chart Review Fee', disclaimer: '*', subtext: 'up to 500 pages', amount: 299, category: 'Medical/Nexus Services', },
			{ label: 'P&T Request/Specialty Letter', disclaimer: '**', amount: 1595, category: 'Medical/Nexus Services', },
			{ label: 'Medical Nexus Letter', disclaimer: '**', subtext: '1 connection', amount: 1345, category: 'Medical/Nexus Services', },
			{ label: 'Medical Nexus Letter Enhanced', disclaimer: '**', subtext: '2+ connections', amount: 1595, category: 'Medical/Nexus Services', },
			{ label: 'DBQ', disclaimer: '**', subtext: '1-4 pages', amount: 1145, category: 'Medical/Nexus Services', },
			{ label: 'DBQ Enhanced', disclaimer: '**', subtext: '4+ pages', amount: 1400, category: 'Medical/Nexus Services', },
			{ label: 'Rebuttal Letter', amount: 275, category: 'Medical/Nexus Services', },
			{ label: 'Unlimited Pages & Reviews for 90 days', amount: '+$99', category: 'Medical/Nexus Services', },
		],
		disclaimers: [
			{ indicator: '*', text: 'The non-refundable appointment/booking fee covers the cost of the Telemedica provider\'s time/effort to review the veteran\'s case and to ensure they can assist the veteran.', },
			{ indicator: '**', text: '$50 fee not applicable in all cases.Fee charged on a case-by -case basis.', },
		],
	};

	return { props: { title, description, prices, } }
}
