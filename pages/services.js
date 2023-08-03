import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Page from '../components/Page'
import siteSettings from '../src/siteSettings';
import { CardActions, CardContent } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ServicesPage({ prices }) {
	return (
		<Page title={'Services'}>
			
			{/* HERO */}
			<Box sx={{ paddingTop: 20, paddingBottom: 20 , position: 'relative', }}>
				<Container>
					<Grid container spacing={3}>
						<Grid item md={6}>
							<Typography variant='h1' color='primary'>Services</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
			{/* SECTION */}
			<Box sx={{ backgroundColor: 'secondary.100', padding: 10 }}>
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
						<Button variant='contained' color='secondary' size='large' href={siteSettings.externalLinks.booking} target='_blank'>Book Now</Button>
					</Stack>
				</Container>
			</Box>
			{/* SECTION */}
			<Box sx={{ pt: 8, pb: 4 }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10, maxWidth: 'sm', marginX: 'auto' }}>At-A-Glance Pricing</Typography>
					<TableContainer sx={{ p: 2, border: 1, borderRadius: 2 }}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Service</TableCell>
									<TableCell align="right">Booking/Review Fee</TableCell>
									<TableCell align="center">Price</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{prices.map( (row, index) => (
									<TableRow
										key={`${row.name}-${index}`}
										sx= {{ '&:last-child td, &:last-child th': {borderBottom: 0} }}
									>
										<TableCell component="th" scope="row" sx= {{ borderBottom: 0 }}>
											{row.name}
										</TableCell>
										<TableCell sx= {{ borderBottom: 0 }} align="right">{row.bookingFee}</TableCell>
										<TableCell sx= {{ borderBottom: 0 }} align="center">{row.price}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
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
  	</Page>
  )
}

export async function getStaticProps() {
	function createData(name, bookingFee, price) {
		return { name, bookingFee, price }
	}
	const prices = [
		createData('Psych Eval/IMO*', '$100', '$1,395'),
		createData('Telemedicine Evaluation*', '$100', '$895'),
		createData('Medical Nexus Letter*', '$199', '$1,345'),
		createData('Medical Nexus Letter Enhanced*', '$199', '$1,595'),
		createData('DBQ Document*', '$199', '$1,145'),
		createData('DBQ Document Enhanced*', '$199', '$1,400'),
		createData('P&T Request Letter*', '$199', '$1,345'),
		createData('Psych Rebuttal Letter', '$0', '$175'),
		createData('Med Team Rebuttal Letter**', '$50', '$250'),
		createData('Recurring Therapy', '$0', '$155-$250'),
	];

	return {
		props: {
			prices,
		}
	}
}