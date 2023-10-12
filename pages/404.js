import { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import Link from '../src/Link';
import texture01 from '../public/texture-01.jpg'
import { BookingContext } from '../context/BookingContext'
import eventImage from '../public/images/event.svg'
import monitorImage from '../public/images/monitor.svg'
import stethoscopeImage from '../public/images/stethoscope.svg'
import settings from '../src/siteSettings';
import CustomCard from '../components/CustomCard';

export default function ErrorPage({ actionItems }) {
	const { setIsOpen: setIsBookingDialogOpen } = useContext(BookingContext);
	actionItems[0].button.action = () => setIsBookingDialogOpen(true);

	return (
		<Page title={'404 Page'}>

			{/* HERO */}
			<Box sx={{
				paddingTop: 20,
				paddingBottom: 15,
				position: 'relative',
				background: `url(${texture01.src}) center / cover no-repeat`,
				overflowX: 'hidden',
			}}>
				<Container sx={{ position: 'relative' }}>
					<Box maxWidth={'sm'}>
						<Typography variant='h1' color='primary' sx={{ mb: 5 }}>whoops</Typography>
						<Typography variant='lead' sx={{ mb: 5 }}>We can't seem to find the page your looking for. Hopefully these links can help you find what you need.</Typography>
						<Typography variant='body1' sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}><Link href="/about">Learn more about Telemedica &raquo;</Link></Typography>
						<Typography variant='body1' sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}><Link href="/services">See what services we offer &raquo;</Link></Typography>
						<Typography variant='body1' sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}><Link href="/blog">Read our latest post &raquo;</Link></Typography>
					</Box>
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