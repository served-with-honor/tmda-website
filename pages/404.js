import { useRef, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import Page from '../components/Page'
import Counter from '../components/Counter'
import { CardContent } from '@mui/material';
import Section1 from '../components/about/Section1'
import texture01 from '../public/texture-01.jpg'
import missionIcon from '../public/images/mission.png'
import purposeIcon from '../public/images/Purpose.png'
import visionIcon from '../public/images/shared-vision.png'
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from '../lib/sanityConfig'
import { BookingContext } from '../context/BookingContext'
import eventImage from '../public/images/event.png'
import monitorImage from '../public/images/monitor.png'
import stethoscopeImage from '../public/images/stethoscope.png'
import settings from '../src/siteSettings';
import CustomCard from '../components/CustomCard';

const builder = imageUrlBuilder(sanityClient);

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

            {/* SECTION */}
			<Box sx={{ py: 20, backgroundColor: 'secondary.100', }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10, maxWidth: 'sm', marginX: 'auto' }}>We Are Committed To Serving Those Who Served</Typography>
					<Box sx={{ marginBottom: 10 }}>
								<Grid container spacing={[3,5]} justifyContent={'center'}>
									{[
										{ num: 20, suffix: 'k+', text: 'Veterans Served' },
										{ num: 90, suffix: '%', text: 'Success Rate' },
										{ num: 20, suffix: '+', text: 'Licensed Providers' },
									].map(({ num, suffix, text }, index) => (
										<Grid item key={`stuff-${index}`}>
											<Typography color='secondary' sx={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>
												<Counter to={num} duration={1.5} digits={2} />{suffix}
											</Typography>
											<Typography variant='body1'>{text}</Typography>
										</Grid>
									))}
								</Grid>
							</Box>
					<Grid container spacing={3} justifyContent={'center'}>
						{[
							{ heading: 'Mission', text: 'Our mission is to continually innovate quality care for the Veteran Community through support, compassion, and a tech-forward approach. We are committed to serving those who served.', icon: missionIcon },
							{ heading: 'Vision', text: 'To be the most trusted health resource that connects the Veteran Community to a network of care providers on their path to wellbeing.', icon: visionIcon },
							{ heading: 'Purpose', text: 'To provide ease and accessibility to world-class care providers for veterans seeking to improve their quality of life.', icon: purposeIcon },
						].map(({ heading, text, icon }, index) => (
							<Grid item sm={6} md={4} key={`things-${index}`}>
								<Card sx={{ height: '100%' }}>
									<CardContent sx={{ textAlign: 'center', padding: 5 }}>
										<Image src={icon} alt='' width={50} height={50} />
										<Typography variant='h5' component='h3' sx={{ mb: 3 }}>{heading}</Typography>
										<Box><Typography variant='body1'>{text}</Typography></Box>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			
			{/* SECTION */}
			<Section1 sx={{backgroundColor: 'secondary.100' }}
				heading='Medical Evidence By Veterans, For Veterans'
				text='Our vast network of Telehealth providers work together to provide high-quality medical evidence to veterans seeking to increase their disability benefits. Delivering peace of mind and expertise from our high quality licensed providers in all 50 states.'
				button={{ url: '/contact-us', label: 'Get Connected Now' }}
			/>
            
			
			
			{/* SECTION */}
			<Box sx={{ backgroundColor: 'secondary.100', paddingY: 20 }}>
				<Container maxWidth="md">
					<Typography variant='sectionHeading' component='h2' gutterBottom>Our Promise to You</Typography>
					<List sx={{ '.MuiListItemIcon-root': { alignSelf: 'flex-start' }}}>
						<ListItem>
							<ListItemIcon><AddIcon color='primary' /></ListItemIcon>
							<ListItemText>As an administrative company, Telemedica works to connect you with licensed professionals wherever you are.</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon><AddIcon color='primary' /></ListItemIcon>
							<ListItemText>All Telemedica providers hold doctoral degrees in psychology from graduate programs accredited by the American Psychological Association (APA) or the Psychological Clinical Science Accredited System (PCSAS).</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon><AddIcon color='primary' /></ListItemIcon>
							<ListItemText>Many of Telemedica&apos;s providers have experience working directly with the veterans community, have veteran family members, or are veterans themselves. Our providers understand what the VA is looking for and will work alongside you to make strong connections for your VA disability claim.</ListItemText>
						</ListItem>
					</List>
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