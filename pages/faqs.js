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
	const [selectedCategory, setSelectedCategory] = useState('')
	const [filteredItems, setFilteredItems] = useState(items)	

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
	};

	const handleTopicChange = (topic) => {
		setSelectedCategory(topic);
		const newItems = topic ? items.filter(item => item.topic === topic) : items;
		setFilteredItems(newItems);
	}

	return (
		<Page title={'FAQs'}>
			<Box sx={{ backgroundColor: 'secondary.100', paddingTop: 20, paddingBottom: 20, }}>
				<Container sx={{alignItems: "center" }}>
					<Typography variant='h1' color='primary' gutterBottom>FAQs</Typography>
					<Stack direction={'row'} spacing={2} sx={{ my: 3, justifyContent: 'center' }}>
						{topics.map( (topic, index) => 
							<Button key={`new-${topic}-item-${index}`} onClick={() => handleTopicChange(topic)} variant='text' size='small' color={ selectedCategory === topic ? "primary" : "inherit"} sx={{margin: 1, textTransform: "none",}}>
								{topic}
							</Button>	
						)}
							{selectedCategory === '' ? <div></div> :
							<Button onClick={() => handleTopicChange('')} variant='text' size='small' color="inherit" sx={{margin: 1, textTransform: "none",}}>
								All
							</Button>	
							}
					</Stack>
					
					<Box>
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
									>
										<Typography variant='subtitle1'>{item.question}</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography variant='body1'>{item.answer}</Typography>
									</AccordionDetails>
								</Accordion>
							))
						) : (
							<Typography variant='subtitle1' align='center'>Sorry, there are no items for this topic</Typography>	
						)}
					</Box>
					
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
