import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Page from '../components/Page'

export default function FAQsPage() {
	// state for selecting filter topic
	const [selectedCategory, setSelectedCategory] = useState('')
	
	// array of objects for Q&A - questions
	const items = [
		{
			question: 'Why is the sky blue?', 
			answer: 'blue light is scattered more than the other colors because it travels in shorter, smaller waves',
			topic: 'Nexus Service FAQ',
		},
		{
			question: 'Is the Earth round of flat?', 
			answer: 'round',
			topic: 'Mental Health Eval FAQ',
		},
		{
			question: 'Who is the apex predator of the sea?', 
			answer: 'orcas or killer whales',
			topic: '',
		},
	]
	
	// state for storing array of objects for filtered Q&As
	const [filteredItems, setFilteredItems] = useState(items)
	
	// array of categories of Q&A
	const topics = ["Nexus Service FAQ", "Mental Health Eval FAQ", "Telemedicine Eval FAQ", "Therapy FAQ"]

	// callback function passing in 
	const onSelectFilter = (topic) => {
		setSelectedCategory(topic)
		if(topic === '') {
			setFilteredItems(items)
		}
		else {
			const filtered = items.filter(item => item.topic === topic)
			setFilteredItems(filtered)
		}
	}

	
	return (
		<Page title={'FAQs'}>
			<Box sx={{ backgroundColor: 'secondary.100', paddingTop: 20, paddingBottom: 20, }}>
				<Container sx={{alignItems: "center" }}>
					<Typography 
						variant='sectionHeading' 
						component='h2' 
						sx={{ 
							marginBottom: 10, 
							marginX: 'auto', 
						}}
						>
						FAQ
					</Typography>
					{filteredItems.map( (item, index) => 
						(
							<Accordion key={index}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{ margin: 2}}
									>
									<Typography variant='subtitle1'>{item.question}</Typography>
								</AccordionSummary>
								<AccordionDetails sx={{ paddingLeft: 4}}>
									<Typography variant='body1'>{item.answer}</Typography>
								</AccordionDetails>
							</Accordion>
						))}
				
					<Box sx={{ pt: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
						{topics.map( (topic, index) => 
							<Button key={index} onClick={() => onSelectFilter(topic)} variant='text' size='small' color="inherit" sx={{margin: 1, textTransform: "none",}}>
								{topic}
							</Button>	
						)}
					</Box>
				</Container> 
			</Box>
  		</Page>
  )
}
