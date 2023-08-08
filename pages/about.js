import { useRef, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from '../components/Page'
import MapAnim from '../components/MapAnim'
import { getTeamMembers } from '../lib'
import siteSettings from '../src/siteSettings';
import Counter from '../components/Counter'
import Directory from '../components/Directory'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardContent } from '@mui/material';
import texture01 from '../public/texture-01.jpg'
import Stack from '@mui/material/Stack';
import Hidden from '@mui/material/Hidden';


function CustomTabPanel(props) {
	const { children, children2, value, index, ...other } = props;
	return (
	  <Grid
		container
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ p: 3 }}>
			<Stack direction={'row'}>
				<Grid item md={8}>
					<Typography variant='h6' sx={{px: 4, mt: 3,  }}>{children}</Typography>
					<Typography variant='body1' sx={{ mt: 3, mb: 1, px: 4,  }}>{children2}</Typography>
				</Grid>
				<Hidden mdDown>
				<Grid item md>
					<Image 
						width={300} 
						height={400} 
						src="/images/serve-tabs-image.png" 
						alt="doctor" 
						style={{position: 'absolute', marginTop: '-200px'}}
					/>
				</Grid>
				</Hidden>
			</Stack>
		  </Box>
		)}
	  </Grid>
	);
  }
  
  CustomTabPanel.propTypes = {
	children: PropTypes.node,
	children2: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
  }

export default function AboutPage({ teamMembers, providers }) {
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

	const [value, setValue] = useState(0);

  	const handleChange = (event, newValue) => {
    	setValue(newValue);
  	};

	return (
		<Page title={'About'}>

			{/* HERO */}
			<Box sx={{
				paddingTop: 20,
				paddingBottom: 10,
				position: 'relative',
				background: `url(${texture01.src}) center / cover no-repeat`,
			}} ref={heroRef}>
				<Box sx={{
					position: 'absolute',
					width: '50%',
					height: '100%',
					right: '-5%',
					top: '0',
					display: 'flex',
					alignItems: 'center',
				}}>
					<MapAnim ref={heroRef} />
				</Box>
				<Container>
					<Grid container spacing={3}>
						<Grid item md={6}>
							<Typography variant='h1' color='primary'>Stop Fighting. <br />Start Winning.</Typography>
							<Typography variant='body1' sx={{ fontSize: 32, marginBottom: 5 }} gutterBottom>High-quality medical evidence for veterans nationwide</Typography>
							<Grid container spacing={2}>
								<Grid item><Button variant='outlined' color='secondary' size='large' href={siteSettings.externalLinks.patientPortal}>Patient Portal</Button></Grid>
								<Grid item><Button variant='contained' color='secondary' size='large' href={siteSettings.externalLinks.booking} target='_blank'>Book Now</Button></Grid>
							</Grid>
							<Grid container spacing={5}>
								{[
									{ num: 15, suffix: 'k+', text: 'Veterans Served' },
									{ num: 90, suffix: '%', text: 'Success Rate' },
									{ num: 20, suffix: '+', text: 'Licensed Providers' },
								].map(({ num, suffix, text }, index) => (
									<Grid item key={`stuff-${index}`}>
										<Box sx={{ marginTop: 10 }}>
											<Typography color='secondary' sx={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>
												<Counter to={num} duration={1.5} digits={2} />{suffix}
											</Typography>
											<Typography variant='body1'>{text}</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
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
							{ heading: 'Mission', text: 'Our mission is to continually innovate quality care for the Veteran Community through support, compassion, and a tech-forward approach. We are committed to serving those who served.' },
							{ heading: 'Vision', text: 'To be the most trusted health resource that connects the Veteran Community to a network of care providers on their path to wellbeing.' },
							{ heading: 'Purpose', text: 'To provide ease and accessibility to world-class care providers for veterans seeking to improve their quality of life.' },
						].map(({ heading, text }, index) => (
							<Grid item sm key={`things-${index}`}>
								<Card sx={{ height: '100%' }}>
									<CardContent sx={{ textAlign: 'center', padding: 5 }}>
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
			<Container sx={{ mt: -4, }}>
				<Box sx={{ border: 3, borderColor: 'lightGray', borderRadius: 1, backgroundColor: '#fff', pt: 4 }}>
					<Tabs sx={{ px: 5, pb: 2 }} value={value} onChange={handleChange} variant="scrollable" scrollButtons={false} allowScrollButtonsMobile aria-label="basic tabs example">
						<Tab sx={{fontWeight: 'bold'}} label="Who We Serve" {...a11yProps(0)} />
						<Tab sx={{fontWeight: 'bold'}} label="How We Serve" {...a11yProps(1)} />
						<Tab sx={{fontWeight: 'bold'}} label="Why We Serve" {...a11yProps(2)} />
					</Tabs>
					<Box sx={{ backgroundColor: '#ebeef7', borderRadius: 1, pb: 15, mt: 5 }}>
						<CustomTabPanel 
							value={value} 
							index={0}
							children='Who'
							children2='We serve members of the veteran community who are seeking to apply for, or increase, the VA disability benefits they’ve earned for their honorable service.'
						>
						</CustomTabPanel>
						<CustomTabPanel 
							value={value} 
							index={1} 
							children='How'
							children2='High-quality medical evidence helps veterans win claims! From DBQs and Nexus Letters to Psych Evals and Telemedicine Evaluations, we make it easier than ever for veterans connect with a licensed provider through our HIPAA compliant telemedicine platform - anytime, anywhere. '
						>
						</CustomTabPanel>
						<CustomTabPanel 
							value={value} 
							index={2} 
							children='Why'
							children2='No veteran deserves to be denied or underrated for disability benefits. When veterans submit medical evidence with their VA disability claims, they are more likely to win that claim. We are here to help you on your path to wellbeing. '
						>
						</CustomTabPanel>
					</Box>
				</Box>
			</Container>

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
						<Grid item><Button variant='contained' color='secondary' size='large' href={siteSettings.externalLinks.booking} target='_blank'>Book Now</Button></Grid>
						<Grid item><Button variant='contained' color='secondary' size='large' href={siteSettings.externalLinks.patientPortal} target='_blank'>Patient Portal</Button></Grid>
					</Grid>
				</Container>
			</Box>
			
			{/* SECTION */}
			<Box sx={{ paddingY: 20 }}>
				<Container>
					<Grid container spacing={10}>
						<Grid item md>
							<Typography variant='sectionHeading' component='h2' marginBottom={5} sx={{ textAlign: 'left', '&:after': { marginLeft: 0 } }}>Medical Evidence By Veterans, For Veterans</Typography>
							<Typography variant='body1' marginBottom={5}>Our vast network of Telehealth providers work together to provide high-quality medical evidence to veterans seeking to increase their disability benefits. Delivering peace of mind and expertise from our high quality licensed providers in all 50 states.</Typography>
							<Button variant='contained' color='secondary' href=''>Get Connected Now</Button>
						</Grid>
						<Grid item md>
						</Grid>
					</Grid>
				</Container>
			</Box>
			
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
							<ListItemIcon><AddIcon /></ListItemIcon>
							<ListItemText>As an administrative company, Telemedica works to connect you with licensed professionals wherever you are.</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon><AddIcon /></ListItemIcon>
							<ListItemText>All Telemedica providers hold doctoral degrees in psychology from graduate programs accredited by the American Psychological Association (APA) or the Psychological Clinical Science Accredited System (PCSAS).</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon><AddIcon /></ListItemIcon>
							<ListItemText>Many of Telemedica&apos;s providers have experience working directly with the veterans community, have veteran family members, or are veterans themselves. Our providers understand what the VA is looking for and will work alongside you to make strong connections for your VA disability claim.</ListItemText>
						</ListItem>
					</List>
				</Container>
			</Box>
			
		</Page>
	)
}

export const getServerSideProps = async () => {
	const teamMembers = await getTeamMembers();
	const providers = [
		{ name: 'Titus Jones', position: 'Lorem Ipsum Dolor', },
		{ name: 'Amaya Bailey', position: 'Donec Dictum Justo', },
		{ name: 'Chase Harrison', position: 'Phasellus At Tellus', },
		{ name: 'Caleb Holmes', position: 'Sed In Mi', },
		{ name: 'Alicia Cooper', position: 'Vestibulum Ut Ex', },
		{ name: 'London Howard', position: 'Nulla Viverra Ipsum', },
		{ name: 'Gracelynn Barnes', position: 'Proin Consectetur Neque', },
		{ name: 'James Edwards', position: 'Ut Malesuada Dolor', },
		{ name: 'Finn Butler', position: 'Etiam Hendrerit Turpis', },
	]
	return { props: { teamMembers, providers } };
}