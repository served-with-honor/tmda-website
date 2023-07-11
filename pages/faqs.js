import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Page from '../components/Page'

export default function FAQsPage({ items, topics }) {
	const [expanded, setExpanded] = useState(false);
	
	// state for selecting filter topic
	const [selectedCategory, setSelectedCategory] = useState('')
	
	// state for storing array of objects for filtered Q&As
	const [filteredItems, setFilteredItems] = useState(items)	

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
	};

	// callback function passing in selected topic to filter items
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
					<Typography variant='h1' color='primary' gutterBottom>FAQs</Typography>
					<Stack direction={'row'} spacing={2} sx={{ my: 3, justifyContent: 'center' }}>
						{topics.map( (topic, index) => 
							<Button key={`new-${topic}-item-${index}`} onClick={() => onSelectFilter(topic)} variant='text' size='small' color={ selectedCategory === topic ? "primary" : "inherit"} sx={{margin: 1, textTransform: "none",}}>
								{topic}
							</Button>	
						)}
							{selectedCategory === '' ? <div></div> :
							<Button onClick={() => onSelectFilter('')} variant='text' size='small' color="inherit" sx={{margin: 1, textTransform: "none",}}>
								All
							</Button>	
							}
					</Stack>
					{filteredItems.length > 0 ? (
						filteredItems.map((item, index) => (
							<Accordion
								key={index}
								expanded={expanded === `panel${index}`}
								onChange={handlePanelChange(`panel${index}`)}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls={`panel${index}-content`}
									id={`panel${index}-header`}
									sx={{ margin: 2}}
									>
									<Typography variant='subtitle1'>{item.question}</Typography>
								</AccordionSummary>
								<AccordionDetails sx={{ paddingLeft: 4}}>
									<Typography variant='body1'>{item.answer}</Typography>
								</AccordionDetails>
							</Accordion>
						))
					) : (
						<Typography variant='subtitle1' align='center'>Sorry, there are no items for this topic</Typography>	
					)}
				
					
				</Container> 
			</Box>
  		</Page>
  )
}

export const getServerSideProps = async () => {
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

	const topics = ["Nexus Service FAQ", "Mental Health Eval FAQ", "Telemedicine Eval FAQ", "Therapy FAQ"]
	return { props: {items, topics}}
}
