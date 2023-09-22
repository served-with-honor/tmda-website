import { useRef, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import texture01 from '../public/texture-01.jpg'
import { BookingContext } from '../context/BookingContext'
import eventImage from '../public/images/event.png'
import monitorImage from '../public/images/monitor.png'
import stethoscopeImage from '../public/images/stethoscope.png'
import settings from '../src/siteSettings';
import CustomCard from '../components/CustomCard';

export default function ErrorPage({ actionItems }) {
	const { setIsOpen: setIsBookingDialogOpen } = useContext(BookingContext);
	const heroRef = useRef(null);
	actionItems[0].button.action = () => setIsBookingDialogOpen(true);

	return (
		<Page title={'404 Page'}>

			{/* HERO */}
			<Box sx={{
				paddingTop: 20,
				paddingBottom: 10,
				position: 'relative',
				background: `url(${texture01.src}) center / cover no-repeat`,
				overflowX: 'hidden',
			}} ref={heroRef}>
				<Box sx={{
					position: 'absolute',
					width: '50vw',
					height: '100%',
					right: '-5%',
					top: '0',
					display: { xs: 'none', md: 'flex' },
					alignItems: 'center',
				}}>
				</Box>
				<Container sx={{ position: 'relative' }}>
					<Grid container spacing={3}>
						<Grid item>
							<Typography variant='h1' color='primary' gutterBottom>404 Error</Typography>
							<Typography variant='body1' sx={{ fontSize: 32, marginBottom: 5 }}>The page you are looking for does not exist.</Typography>
							<Grid container spacing={2}>
								<Grid item><Button variant='outlined' color='secondary' size='large' href='/'>Go To  The Home Page</Button></Grid>
								<Grid item><Button variant='contained' color='secondary' size='large' href='/contact-us'>Contact Us</Button></Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ paddingY: 10 }}>
				<Container>
					<Grid container spacing={5}>
						{actionItems.map((item, index) => (
							<Grid key={`actions-card-${index}`} item md={4}>
								<CustomCard {...item} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			
		</Page>
	)
};

export async function getStaticProps() {
	const actionItems = [
		{
			image: { ...eventImage, width: 85, height: 85 },
			heading: 'Booking', 
			description: 'For new and returning clients. Book your medical evidence service now!',
			button: { label: 'Book Now' },
		},
		{
			image: { ...monitorImage, width: 85, height: 85 }, 
			heading: 'Patient Portal', 
			description: 'For returning clients. Log in to our secure, HIPAA-compliant platform to access your documents, connect with your provider, and check your appointment schedule.',
			button: { label: 'Log In', url: settings.externalLinks.patientPortal, target: '_blank' },
		},
		{
			image: { ...stethoscopeImage, width: 85, height: 85 },
			heading: 'Provider Portal', 
			description: 'For providers in the Telemedica network. Log in to your portal to connect with your clients.',
			button: { label: 'Log In', url: settings.externalLinks.providerPortal, target: '_blank' },
		},
	]

	return { props: { actionItems } };
}