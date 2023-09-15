import { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import PriceTable from '../components/PriceTable'
import siteSettings from '../src/siteSettings';
import Link from '@mui/material/Link';
import BookingWidget from '../components/BookingWidget'
import CustomAccordion from '../components/CustomAccordion'
import services from '../components/services'
import Image from 'next/image';
import placeholderImage from '../public/images/AdobeStock_315180932-1024x1024.jpeg'
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
		<Page title={'Services'} darkHeader>	
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
					<Typography 
						variant='h6' 
						component='p' 
					>
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
					<Container sx={{textAlign: 'center'}}> 
						<Link variant='string' color='secondary' href='#' sx={{px: 1}}>How it Works</Link>
					</Container>
				</Container>
			</Box>
			{/* SECTION */}
			<Box sx={{ p: 10 }}>
				<Container maxWidth='md'>
					<Typography variant='sectionHeading' component='h2' sx={{ mb: 10 }}>At-A-Glance Pricing</Typography>
					{prices ? (
						<Box sx={{
							border: 1,
							borderColor: 'primary.main',
							borderRadius: 12,
							p: 2,
						}}>
							<PriceTable columns={prices.columns} rows={prices.rows} />
						</Box>
					) : null}
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
					backgroundColor: 'grey.50', 
					py: 10, 
					alignItems: 'center', 
					textAlign: 'center' 
				}}
			>
				<Container>
					<Typography variant='sectionHeading' component='h2'>Book Now!</Typography>
					<Typography variant='body1' sx={{ py: 3 }}>
						Ready to get started? Join the thousands of Veterans who have trusted Telemedica with their medical evidence needs.
					</Typography>
					<Grid container spacing={5}>
						<Grid item xs={12} md={6}>
							<Box sx={{
								maxWidth: {xs: '350px', sm: 'none'}, 
								}}
							>
								<Image 
									src={placeholderImage}
									alt='comming soon image'
									sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
									style={{
										maxWidth: '100%',
										height: 'auto', 
									}}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box
								ref={mobileBookingSectionRef}
								backgroundColor='background.default' 
								sx={{ 
									height:{ md:'625px' }, 
									overflow: { md:'auto' },
									p: 3
								}}
							>
								<BookingWidget />
							</Box>
						</Grid>
					</Grid>
				</Container>			
			</Box>
  	</Page>
  )
}

export async function getStaticProps() {
	const prices = {
		columns: [
			'Service',
			'Booking/Review Fee',
			'Price',
		],
		rows: [
			['Psych Eval/IMO*', '$100', '$1,395'],
			['Telemedicine Evaluation*', '$100', '$895'],
			['Medical Nexus Letter*', '$199', '$1,345'],
			['Medical Nexus Letter Enhanced*', '$199', '$1,595'],
			['DBQ Document*', '$199', '$1,145'],
			['DBQ Document Enhanced*', '$199', '$1,400'],
			['P&T Request Letter*', '$199', '$1,345'],
			['Psych Rebuttal Letter', '$0', '$175'],
			['Med Team Rebuttal Letter**', '$50', '$250'],
			['Recurring Therapy', '$0', '$155 - $250'],
		],
	};

	return {
		props: {
			prices,
		}
	}
}
