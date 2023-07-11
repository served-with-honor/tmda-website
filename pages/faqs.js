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
	const [selectedCategory, setSelectedCategory] = useState('')
	
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
	
	const [filteredItems, setFilteredItems] = useState(items)
	
	const topics = ["Nexus Service FAQ", "Mental Health Eval FAQ", "Telemedicine Eval FAQ", "Therapy FAQ"]

	const selectFilter = (topic) => {
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
			{/* <Box sx={{ paddingTop: 20, paddingBottom: 20 , position: 'relative', }}>
				<Container>
					<Grid container spacing={3}>
						<Grid item md={6}>
							<Typography variant={'h1'}>FAQs</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box> */}

			<Box sx={{ backgroundColor: 'secondary.100', paddingTop: 20, paddingBottom: 20, }}>
				{selectedCategory === '' ?
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
						{items.map( (item, index) => 
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
					
						<div style={{ paddingTop: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
							{topics.map( (topic, index) => 
								<Button key={index} onClick={() => selectFilter(topic)} variant='text' size='small' color="inherit">
									{topic}
								</Button>	
							)}
						</div>
					</Container> :
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
					{filteredItems.map((item, index) =>
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
				
					<div style={{ paddingTop: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
						{topics.map( (topic, index) => 
							<Button key={index} onClick={() => selectFilter(topic)} variant='text' size='small' color="inherit">
								{topic}
							</Button>	
						)}
					</div>
				</Container>
				}
			</Box>
  		</Page>
  )
}
