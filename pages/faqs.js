import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
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
   		<Typography variant={'h1'}>FAQs</Typography>
				{items.map(item => 
				(
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							>
							<Typography>{item.question}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{item.answer}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
		<ButtonGroup>
			{topics.map(topic => 
				<Button variant='link'>
					{topic}
				</Button>	
			)}
		</ButtonGroup>
			

  	</Page>
  )
}
