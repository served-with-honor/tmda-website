import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Page from '../components/Page'

export default function FAQsPage() {
	const items = [
		{
			question: 'Why is the sky blue?', 
			answer: 'blue light is scattered more than the other colors because it travels in shorter, smaller waves',
			topic: '',
		},
		{
			question: 'Is the Earth round of flat?', 
			answer: 'round',
			topic: '',
		},
		{
			question: 'Who is the apex predator of the sea?', 
			answer: 'orcas or killer whales',
			topic: '',
		},
	]

	const topics = ["Nexus Service", "Mental Health Eval", "Telemedicine Eval", "Therapy"]
	return (
		<Page title={'FAQs'}>
			<Box sx={{ paddingTop: 20, paddingBottom: 20 , position: 'relative', }}>
				<Container>
					<Grid container spacing={3}>
						<Grid item md={6}>
							<Typography variant={'h1'}>FAQs</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ backgroundColor: 'secondary.100', padding: 10 }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' sx={{ marginBottom: 10, marginX: 'auto' }}>Frequently Asked Questions</Typography>
					
					{items.map(item => 
						(
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									>
									<Typography variant='subtitle1'>{item.question}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant='body1'>{item.answer}</Typography>
								</AccordionDetails>
							</Accordion>
						))}
				
					<ButtonGroup variant='text' sx={{ padding: 5, alignContent: 'center'}}>
						{topics.map(topic => 
							<Button variant='link'>
								{topic}
							</Button>	
						)}
					</ButtonGroup>
				</Container>
			</Box>
  		</Page>
  )
}
