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
import constants from '../src/constants';
import CustomCard from '../components/CustomCard';
import eventImage from '../public/images/event.svg'
import monitorImage from '../public/images/monitor.svg'
import phoneImage from '../public/images/call.svg'
import stethoscopeImage from '../public/images/stethoscope.svg'
import { BookingContext } from '../context/BookingContext'
import { formatPhoneNumber } from '../src/utils';
import texture01 from '../public/images/texture-01.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ContactUsPage({ title, description, actionItems }) {
  const { setIsOpen: setIsBookingDialogOpen } = useContext(BookingContext);
  const isMobile = useMediaQuery('(max-width:600px)');

	actionItems[0].button.action = () => setIsBookingDialogOpen(true);
	
	return (
		<Page title={title} description={description}>
			<Box sx={{
				paddingTop: 20,
				paddingBottom: 10,
				background: `url(${texture01.src}) center / cover no-repeat`,
			}}>
				<Container>
					<Typography variant='h1' color='primary'>Get In Touch</Typography>
					<Typography variant='body1' gutterBottom sx={{ fontSize: 32, }}>Please let us know how we can assist you.</Typography>
					<Stack direction={'row'} gap={3}>
						<Button size='large' color='primary' variant={'contained'} href={`tel:${constants.company.contact.phone}`} target="_blank">{isMobile ? 'Call Us' : `Call Us: ${formatPhoneNumber(constants.company.contact.phone)}`}</Button>
						<Button size='large' color='primary' variant={'contained'} href={constants.externalLinks.helpDesk} target="_blank">Help Desk</Button>
					</Stack>
				</Container>
			</Box>
			
			<Box sx={{ paddingY: 20 }}>
				<Container maxWidth='md'>
					<Typography variant='sectionHeading' color='secondary' align='center' gutterBottom>How Can We Help You?</Typography>
					<Typography variant='body1' align='center' sx={{ mb: 10 }}>Fill out the form below to send us a message and a member of our team will get back to you shortly!</Typography>
					<ContactForm />
				</Container>
			</Box>
			
			<Box sx={{ paddingY: 10, backgroundColor: 'grey.50' }}>
				<Container>
					<Grid container spacing={5}>
						{actionItems.map((item, index) => (
							<Grid key={`actions-card-${index}`} item md={6}>
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
	const title = 'Contact Us';
	const description = `CONTACT INFO: Call ${formatPhoneNumber(constants.company.contact.phone)} ${constants.company.contact.email} QUESTIONS? How Can We Help You?`;

	const actionItems = [
		{
			image: { ...eventImage, width: 85, height: 85 },
			heading: 'Book a Service', 
			description: 'For new and returning clients. Book your medical evidence service now!',
			button: { label: 'Book Now' },
		},
		{
			image: { ...phoneImage, width: 85, height: 85 },
			heading: 'Book a Consultation Call', 
			description: 'Not sure where to start? Book a FREE 20-minute Consultation Call with one of our Veteran Ambassadors.',
			button: { label: 'Schedule Now', url: "/consultation-call" },
		},
		{
			image: { ...monitorImage, width: 85, height: 85 }, 
			heading: 'Patient Portal', 
			description: 'For returning clients. Log in to our secure, HIPAA-compliant platform to access your documents, connect with your provider, and check your appointment schedule.',
			button: { label: 'Log In', url: constants.externalLinks.patientPortal, target: '_blank' },
		},
		{
			image: { ...stethoscopeImage, width: 85, height: 85 },
			heading: 'Provider Portal', 
			description: 'For providers in the Telemedica network. Log in to your portal to connect with your clients.',
			button: { label: 'Log In', url: constants.externalLinks.providerPortal, target: '_blank' },
		},
	]

	return { props: { title, description, actionItems } };
}
