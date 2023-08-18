import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Page from '../components/Page'
import ContactForm from '../components/ContactForm'
import NewsletterDialog from '../components/NewsletterDialog'
import BookingWidget from '../components/BookingWidget'
import settings from '../src/siteSettings';
import CustomCard from '../components/CustomCard';

export default function ContactUsPage({ actionItems }) {
	const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

	actionItems[0].button.action = () => setIsBookingDialogOpen(true);

	return (
		<Page title={'Contact Us'}>
			<Box sx={{ paddingTop: 20, paddingBottom: 10, }}>
				<Container>
					<Grid container gap={5} alignItems={'center'}>
						<Grid item md>
							<Typography variant='h1' color='primary'>Get In Touch</Typography>
							<Typography variant='body1' sx={{ fontSize: 32 }}>Please let us know how we can assist you</Typography>
						</Grid>
						<Grid item md>
							<Stack direction={'row'} gap={3}>
								<Button size='large' color='primary' variant={'contained'} href={settings.contact.phone} target="_blank">Call Us</Button>
								<Button size='large' color='primary' variant={'contained'} href={settings.externalLinks.helpDesk} target="_blank">Help Desk</Button>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
			
			<Box sx={{ paddingY: 20, backgroundColor: 'secondary.100' }}>
				<Container>
					<Typography variant='h2' color='primary' align='center' gutterBottom>How Can We Help You?</Typography>
					<Typography variant='body1' align='center' gutterBottom sx={{ mb: 10 }}>Fill out the form below to send us a message and a member of our team will get back to you shortly!</Typography>
					<ContactForm />
				</Container>
			</Box>
			
			<Box sx={{ paddingY: 10 }}>
				<Container>
					<Grid container spacing={5}>
						{actionItems.map((item, index) => (
							<Grid key={`actions-card-${index}`} item md>
								<CustomCard {...item} entireClickable />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			
			<NewsletterDialog delay={0} />

			<Dialog open={isBookingDialogOpen} onClose={() => setIsBookingDialogOpen(false)} fullWidth={true}>
				<Box sx={{ p: 3 }}><BookingWidget /></Box>
			</Dialog>	
  	</Page>
  )
}

export async function getStaticProps() {
	const actionItems = [
		{
			image: { src: '/../public/images/event.png', height: 60, width: 60 },
			heading: 'Booking', 
			description: 'For new and returning clients. Book your medical evidence service now!',
			button: { label: 'Book Now' },
		},
		{
			image: { src: '/../public/images/monitor.png', height: 60, width: 60 },
			heading: 'Patient Portal', 
			description: 'For returning clients. Log in to our secure, HIPAA-compliant platform to access your documents, connect with your provider, and check your appointment schedule.',
			button: { label: 'Log In', url: settings.externalLinks.patientPortal, target: '_blank' },
		},
		{
			image: { src: '/../public/images/stethoscope.png', height: 60, width: 60 },
			heading: 'Provider Portal', 
			description: 'For providers in the Telemedica network. Log in to your portal to connect with your clients.',
			button: { label: 'Log In', url: settings.externalLinks.providerPortal, target: '_blank' },
		},
	]

	return { props: { actionItems } };
}
