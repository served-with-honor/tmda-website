import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Page from '../components/Page'
import PriceTable from '../components/PriceTable'
import siteSettings from '../src/siteSettings';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from '@mui/material';

export default function ServicesPage({ prices }) {
	const [expanded, setExpanded] = useState(false);

	const handlePanelChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
		};

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
					<Grid mb={10}>
						{[
							{ title: 'Mental Health Evaluation', text: 'Quis laborum incididunt duis labore non cillum consectetur velit occaecat laboris.' },
							{ title: 'Nexus Letters & DBQs', text: 'Id et aliqua commodo cillum minim nostrud.' },
							{ title: 'Telemedicine Evaluations', text: 'Excepteur in laborum est cillum sunt cupidatat labore qui aliquip voluptate laboris.' },
							{ title: 'Recurring Therapy', text: 'Cupidatat sunt sunt irure id nostrud consectetur consequat nostrud pariatur fugiat consequat id.' },
						].map(({ title, text }, index) => (
							<Accordion
									key={`faq-panel-${index}`}
									expanded={expanded === `panel${index}`}
									onChange={handlePanelChange(`panel${index}`)}
									sx={{ my: 4, py: 2}}
									square
								>
									<AccordionSummary
										aria-controls={`panel${index}-content`}
										id={`panel${index}-header`}
										sx={{
											display: 'flex',
											alignItems: 'center',
											'& .MuiSvgIcon-root': {
												fontSize: 72,
												mr: 2,
											}
										}}
									>
										<CircleOutlinedIcon />
										<Stack direction='column'>
											<Typography variant='h6'>{title}</Typography>
											<Typography variant='text'>text</Typography>
										</Stack>
									</AccordionSummary>
									<AccordionDetails>
										<Typography variant='body1'>{text}</Typography>
									</AccordionDetails>
								</Accordion>
						))}
					</Grid>
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