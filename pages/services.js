import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import PriceTable from '../components/PriceTable'
import siteSettings from '../src/siteSettings';
import Link from '@mui/material/Link';
import BookingWidget from '../components/BookingWidget'
import CustomAccordion from '../components/CustomAccordion'

export default function ServicesPage({ prices, services }) {
	

	const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
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
			<Box sx={{ backgroundColor: 'secondary.100', py: 10, px:{xs: 3, md: 6} }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10, maxWidth: 'md', marginX: 'auto' }}>Services from the Medical Evidence Experts</Typography>
					{services ? (
					<Grid mb={10}>
						<CustomAccordion items={services} name=''/>
					</Grid>
					) : null}
					<Container sx={{textAlign: 'center'}}> 
						<Link variant='string' color='secondary' href='#' sx={{px: 1}}>How it Works</Link>
					</Container>
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

	const services = [
		{
			title: 'Mental Health Evaluation',
			previewText: 'Quis laborum incididunt duis labore non cillum consectetur velit occaecat laboris.',
			body: `Telemedica offers Independent Medical Opinions (Nexus Letters) based on previously diagnosed disability conditions related to:

			+ Direct Service Connections 
			+ Secondary Service Connections 
			+ Presumptive Service Connections 
			
			You will need to submit documents and/or medical records to your patient portal. Below is a list of the documents you will need to gather for this service.
			
			Required Documentation:
			DD214
			Benefits Summary
			Current treatment records (including your current diagnosis of your medical conditions).
			Recommended:
			Blue Button Report
			Personal Statements
			Buddy Letters
			Medical Records
			Lab tests/imaging studies
			`,
		}, 
		{
			title: 'Nexus Letters & DBQs',
			previewText: 'Id et aliqua commodo cillum minim nostrud.',
			body: `Our team of licensed and professional providers will perform a comprehensive chart review and one of the following:

			+ One time mental health assessment that can include a diagnosis (if applicable).
			+ Comprehensive, evidence-based mental health examination.
			
			Before your appointment, you will need to submit documents and/or medical records to your patient portal. Below is a list of the documents you will need to gather for this service.
			
			Required:
			DD214
			Benefits Summary
			Recommended:
			Personal Statements
			Buddy Letters
			Medical Records
			`,
		}, 
		{
			title: 'Telemedicine Evaluations',
			previewText: 'Excepteur in laborum est cillum sunt cupidatat labore qui aliquip voluptate laboris.',
			body: `Our medical team provides telemedicine examinations to determine first-time medical diagnosis or confirmation/updated evaluations of 20 applicable conditions.*

			*See below for the full list of conditions we evaluate for.
			
			No documentation is required for this service, but it is highly recommended that you upload documentation to your patient portal. Below is a list of the recommended documents for this service.
			
			Required:
			DD214
			Benefits Summary
			Recommended:
			Blue Button Report
			Personal Statements
			Buddy Letters
			Medical Records
			`,
		}, 
		{
			title: 'Rebuttal Letters',
			previewText: 'Excepteur in laborum est cillum sunt cupidatat labore qui aliquip voluptate laboris.',
			body: `Rebuttal letters are response documents that we write for veterans who have received medical evidence documents from Telemedica to submit with VA disability claims.  These letters are only for clients who receive a denial letter for a claim that we wrote a letter for.  The purpose of the letters are to respond to or refute incorrect or inaccurate statements in a denial letter.  Both our mental health and medical nexus services write these letters.  `,
		}, 
	]

	return {
		props: {
			prices,
			services
		}
	}
}
