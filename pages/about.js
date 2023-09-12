import { useState, useRef } from 'react';
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
import MapAnim from '../components/MapAnim'
import { getTeamMembers, getProviders } from '../lib'
import siteSettings from '../src/siteSettings';
import Counter from '../components/Counter'
import CustomTabs from '../components/CustomTabs'
import Directory from '../components/Directory'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import BookingWidget from '../components/BookingWidget'
import Section1 from '../components/about/Section1'
import texture01 from '../public/texture-01.jpg'
import missionIcon from '../public/images/mission.png'
import purposeIcon from '../public/images/Purpose.png'
import visionIcon from '../public/images/shared-vision.png'
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from '../lib/sanityConfig'

const builder = imageUrlBuilder(sanityClient);

export default function AboutPage({ teamMembers, providers, serveTabs }) {
	const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
	const heroRef = useRef(null);
	const sliderSettings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		centerMode: true,
		centerPadding: '100px',
		initialSlide: 1,
	};

	return (
		<Page title={'About'}>

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
					<MapAnim ref={heroRef} />
				</Box>
				<Container sx={{ position: 'relative' }}>
					<Grid container spacing={3}>
						<Grid item md={7} lg={6}>
							<Typography variant='h1' color='primary' gutterBottom>Stop Fighting. <br />Start Winning.</Typography>
							<Typography variant='body1' sx={{ fontSize: 32, marginBottom: 5 }}>High-quality medical evidence for veterans nationwide</Typography>
							<Grid container spacing={2}>
								<Grid item><Button variant='outlined' color='secondary' size='large' href={siteSettings.externalLinks.patientPortal}>Patient Portal</Button></Grid>
								<Grid item><Button variant='contained' color='secondary' size='large' onClick={() => setIsBookingDialogOpen(true)}>Book Now</Button></Grid>
							</Grid>
							<Box sx={{ marginTop: 10 }}>
								<Grid container spacing={[3,5]}>
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
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* SECTION */}
			<Box sx={{ backgroundColor: 'secondary.100', paddingTop: 20, paddingBottom: 30  }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10, maxWidth: 'sm', marginX: 'auto' }}>We Are Committed To Serving Those Who Served</Typography>
					<Grid container spacing={3}>
						{[
							{ heading: 'Mission', text: 'Our mission is to continually innovate quality care for the Veteran Community through support, compassion, and a tech-forward approach. We are committed to serving those who served.', icon:`${missionIcon.src}` },
							{ heading: 'Vision', text: 'To be the most trusted health resource that connects the Veteran Community to a network of care providers on their path to wellbeing.', icon:`${visionIcon.src}` },
							{ heading: 'Purpose', text: 'To provide ease and accessibility to world-class care providers for veterans seeking to improve their quality of life.', icon: `${purposeIcon.src}` },
						].map(({ heading, text, icon }, index) => (
							<Grid item sm key={`things-${index}`}>
								<Card sx={{ height: '100%' }}>
									<CardContent sx={{ textAlign: 'center', padding: 5 }}>
										<Image src={icon} alt={`${heading} icon`} width={50} height={50}/>
										<Typography variant='h5' component='h3' sx={{ mb: 3 }}>{heading}</Typography>
										<Box><Typography variant='body1'>{text}</Typography></Box>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			
			{/* SECTION - SERVE TABS */}
			{serveTabs ? (
				<Container sx={{ mt: -4, }}>
					<CustomTabs items={serveTabs} name="Serve Tabs" />
				</Container>
			) : null}

			{/* SECTION */}
			<Box sx={{ paddingY: 20 }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10 }}>How It Works</Typography>
					
					<Slider {...sliderSettings}>
						{[
							{ title: 'Book Online', body: 'Choose a service and book online through our booking portal. Pay the $100 non-refundable booking fee (if applicable).' },
							{ title: 'Submit Documentation', body: 'Register in the Patient Portal, fill out intake forms, pay remaining balance, and upload required documents (DD214, benefits summary, etc).' },
							{ title: 'Connect', body: 'Connect with your provider via our convenient telehealth platform and receive your medical evidence. You will receive an email to join your appointment.*', subtext: '* If warranted - please note that the Nexus Letter service does not include a telehealth appointment with a provider.', },
							{ title: 'Obtain', body: 'Receive your medical evidence (or therapists notes) directly to your patient portal. ' },
							{ title: 'Submit & Receive', body: 'After you receive your medical evidence, your VA claim submission is in your hands! Use your documentation to bolster your claim, or back your resubmission.' },
						].map(({ title, body, subtext }, index) => (
							<Box key={`thingy-${index}`} sx={{ position: 'relative', padding: 8 }}>
								<Typography sx={{ color: 'secondary.light', position: 'absolute', fontSize: 300, fontWeight: 600, lineHeight: 1, opacity: 0.125, left: 0, top: 0, }}>{index + 1}</Typography>
								<Box sx={{ position: 'relative' }}>
									<Typography variant='h3' color='secondary'>{title}:</Typography>
									<Typography variant='body1' sx={{ fontSize: 24, lineHeight: 1.5, }}>{body}</Typography>
									{subtext ? <Typography variant='body2'>{subtext}</Typography> : null}
								</Box>
							</Box>
						))}
					</Slider>
				</Container>
			</Box>
			
			{/* SECTION */}
			<Box sx={{ backgroundColor: 'secondary.100', paddingY: 10 }}>
				<Container>
					<Grid container spacing={2} justifyContent='center'>
						<Grid item><Button variant='contained' color='secondary' size='large' onClick={() => setIsBookingDialogOpen(true)}>Book Now</Button></Grid>
						<Grid item><Button variant='contained' color='secondary' size='large' href={siteSettings.externalLinks.patientPortal} target='_blank'>Patient Portal</Button></Grid>
					</Grid>
				</Container>
			</Box>
			
			{/* SECTION */}
			<Section1
				heading='Medical Evidence By Veterans, For Veterans'
				text='Our vast network of Telehealth providers work together to provide high-quality medical evidence to veterans seeking to increase their disability benefits. Delivering peace of mind and expertise from our high quality licensed providers in all 50 states.'
				button={{ url: '#', label: 'Get Connected Now' }}
			/>
			
			{/* SECTION */}
			<Box sx={{ paddingY: 15, backgroundColor: 'secondary.100' }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' marginBottom={5}>Meet Our Team</Typography>
					<Typography variant='subtitle1' align='center' gutterBottom>Telemedica is an administrative company that serves the veteran community through our network of providers.</Typography>
					<Typography variant='body1' align='center' gutterBottom>We offer a suite of niche services through a HIPAA-Compliant telehealth platform. We help you receive medical evidence and mental health care in less time, so you can get back to living your best life.</Typography>
					<Directory items={[
						{ label: 'Team Members', people: teamMembers },
						{ label: 'Providers', people: providers },
					]} />
				</Container>
			</Box>
			
			{/* SECTION */}
			<Box sx={{ paddingY: 20 }}>
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
			
			<Dialog open={isBookingDialogOpen} onClose={() => setIsBookingDialogOpen(false)} fullWidth={true}>
				<Box sx={{ p: 3 }}><BookingWidget /></Box>
			</Dialog>			
		</Page>
	)
}

export const getServerSideProps = async () => {
	const teamMembersResponse = await getTeamMembers();
	const teamMembers = teamMembersResponse.map(person => {
		if (person.image) person.image = builder.image(person.image).size(300, 300).url();
		return person;
	})
	const providers = getProviders().map(person => {
		person.position = person.degree;
		delete person.degree;
		return person;
	});
	const serveTabs = [
		{
			title: 'Who We Serve',
			heading: 'Who',
			body: 'We serve members of the veteran community who are seeking to apply for, or increase, the VA disability benefits they’ve earned for their honorable service.',
		},
		{
			title: 'How We Serve',
			heading: 'How',
			body: 'High-quality medical evidence helps veterans win claims! From DBQs and Nexus Letters to Psych Evals and Telemedicine Evaluations, we make it easier than ever for veterans connect with a licensed provider through our HIPAA compliant telemedicine platform - anytime, anywhere.',
		},
		{
			title: 'Why We Serve',
			heading: 'Why',
			body: 'No veteran deserves to be denied or underrated for disability benefits. When veterans submit medical evidence with their VA disability claims, they are more likely to win that claim. We are here to help you on your path to wellbeing.',
		},
	]
	return { props: { teamMembers, providers, serveTabs } };
}