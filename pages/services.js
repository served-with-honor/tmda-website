import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Page from '../components/Page'
import PriceTable from '../components/PriceTable'
import siteSettings from '../src/siteSettings';
import { CardActions, CardContent } from '@mui/material';
import BookingWidget from '../components/BookingWidget'

export default function ServicesPage({ prices }) {
	const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

	return (
		<Page title={'Services'}>	
			{/* HERO */}
			<Box sx={{ pt: 15, background: 'linear-gradient(to right, #2e4074 30%, #1d2646 90%)',  }}>
				<Container>
					<Typography 
						variant='h3' 
						component='h1' 
						sx={{ color: 'primary.contrastText'}}
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
						sx={{ color: '#fff', py: 3 }}
					>
						Your partner in securing the benefits you deserve on your path to well-being!
					</Typography>
					</Container>
					<Container>
					<Box 
						sx={{
							backgroundColor: 'background.paper', 
							position: 'relative'
						}}
					>
						<Container>
						<iframe 
								width="100%" 
								height="315" 
								src="https://www.youtube.com/embed/KJFWkgrwxJQ" 
								title="YouTube video player" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen>
							</iframe>
						<Grid 
							container 
							sx={{ 
								justifyContent: 'center', 
								mb: '-75px'
							}
						}>
							<Grid item sx={ {mx: {xs:2, md: 4}, my: 2}}>
								<Button 
									variant='contained' 
									color='secondary' 
									size='large'
								>
									Book Now
								</Button>
							</Grid>
							<Grid item sx={ {mx: {xs:2, md: 0}, my:2}}>
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
						</Container>
					</Box>
					</Container>
				
			</Box>
			{/* SECTION */}
			<Box sx={{ backgroundColor: 'secondary.100', pt: {xs: 60, md:20}, pb: 20, px: 10 }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10, maxWidth: 'sm', marginX: 'auto' }}>Services from the Medical Evidence Experts</Typography>
					<Grid container spacing={5} mb={10}>
						{[
							{ title: 'Mental Health Evaluation', text: 'Quis laborum incididunt duis labore non cillum consectetur velit occaecat laboris.' },
							{ title: 'Nexus Letters & DBQs', text: 'Id et aliqua commodo cillum minim nostrud.' },
							{ title: 'Telemedicine Evaluations', text: 'Excepteur in laborum est cillum sunt cupidatat labore qui aliquip voluptate laboris.' },
							{ title: 'Recurring Therapy', text: 'Cupidatat sunt sunt irure id nostrud consectetur consequat nostrud pariatur fugiat consequat id.' },
						].map(({ title, text }, index) => (
							<Grid key={`services-features-${index}`} item md={6}>
								<Card sx={{ height: '100%' }}>
									<CardContent sx={{ textAlign: 'center', paddingY: 5, paddingX: 3 }}>
										<Typography variant={'h5'} component={'h3'} sx={{ mb: 5 }}>{title}</Typography>
										<Typography variant={'body1'} sx={{ mb: 5 }}>{text}</Typography>
										<Button variant="outlined">Book Now</Button>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
					<Stack justifyContent={'center'} direction={{ xs: 'column', sm: 'row' }} spacing={2} divider={<Divider orientation="vertical" flexItem />}>
						<Button variant='outlined' color='secondary' size='large' href={siteSettings.externalLinks.patientPortal}>Patient Portal</Button>
						<Button variant='contained' color='secondary' size='large' onClick={() => setIsBookingDialogOpen(true)}>Book Now</Button>
					</Stack>
				</Container>
			</Box>
			{/* SECTION */}
			<Box sx={{ pt: 8, pb: 4 }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10, maxWidth: 'sm', marginX: 'auto' }}>At-A-Glance Pricing</Typography>
					{prices ? (
						<Box sx={{
							border: 1,
							borderColor: 'primary.main',
							borderRadius: 2,
							maxWidth: 'md',
							mx: 'auto',
							p: 2,
						}}>
							<PriceTable columns={prices.columns} rows={prices.rows} />
						</Box>
					) : null}
					<Box sx={{ py: 6, px: 10}}>
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
			<Dialog open={isBookingDialogOpen} onClose={() => setIsBookingDialogOpen(false)} fullWidth={true}>
				<Box sx={{ p: 3 }}><BookingWidget /></Box>
			</Dialog>	
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