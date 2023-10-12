import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Page from '../components/Page'
import ContactForm from '../components/ContactForm'
import NewsletterDialog from '../components/NewsletterDialog'
import settings from '../src/siteSettings';
import CustomCard from '../components/CustomCard';
import texture01 from '../public/texture-01.jpg'
import eventImage from '../public/images/event.png'
import monitorImage from '../public/images/monitor.png'
import stethoscopeImage from '../public/images/stethoscope.png'
import { BookingContext } from '../context/BookingContext'
import { formatPhoneNumber } from '../src/utils';

export default function ContactUsPage({ actionItems }) {
  const { setIsOpen: setIsBookingDialogOpen } = useContext(BookingContext);

	actionItems[0].button.action = () => setIsBookingDialogOpen(true);
	
	return (
		<Page title={'Contact Us'} description={`CONTACT INFO: Call ${formatPhoneNumber(settings.contact.phone)} ${settings.contact.email} QUESTIONS? How Can We Help You?`}>
			<Box sx={{
				paddingTop: 20,
				paddingBottom: 10,
				background: `url(${texture01.src}) center / cover no-repeat`,
			}}>
				<Container>
					<Typography variant='h1' color='primary'>Get In Touch</Typography>
					<Typography variant='body1' sx={{ fontSize: 32, mb: 3 }}>Please let us know how we can assist you.</Typography>
					<Stack direction={'row'} gap={3}>
						<Button size='large' color='primary' variant={'contained'} href={`tel:${settings.contact.phone}`} target="_blank">Call Us</Button>
						<Button size='large' color='primary' variant={'contained'} href={settings.externalLinks.helpDesk} target="_blank">Help Desk</Button>
					</Stack>
				</Container>
			</Box>
			
			<Box sx={{ paddingY: 20 }}>
				<Container maxWidth='md'>
					<Typography variant='sectionHeading' color='secondary' align='center' gutterBottom>How Can We Help You?</Typography>
					<Typography variant='body1' align='center' gutterBottom sx={{ mb: 10 }}>Fill out the form below to send us a message and a member of our team will get back to you shortly!</Typography>
					<ContactForm />
				</Container>
			</Box>
			
			<Box sx={{ paddingY: 10, backgroundColor: 'grey.50' }}>
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

			<NewsletterDialog delay={3000} />
  	</Page>
  )
}

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
