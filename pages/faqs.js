import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Page from '../components/Page'
import { slugify } from '../src/utils';
import faqItems from '../lib/content/faqs';

export default function FAQsPage({ title, description, items }) {
	const topics = [...new Set(items.map(({ topic }) => topic))];

	const [expanded, setExpanded] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('')
	const [filteredItems, setFilteredItems] = useState(items)	

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
	};

	const handleTopicChange = (topic) => {
		setSelectedCategory(topic);
		const hash = topic ? `#${slugify(topic)}` : location.href.split('#')[0];
		window.history.replaceState({}, '', hash);
		const hash = topic ? `#${slugify(topic)}` : location.href.split('#')[0];
		window.history.replaceState({}, '', hash);
	}
	
	useEffect(() => {
		const newItems = selectedCategory ? items.filter(item => slugify(item.topic) === selectedCategory) : items;
		setFilteredItems(newItems);
	}, [selectedCategory]);

	useEffect(() => {
		const initialCategory = window.location.hash.split('#')[1];
		setSelectedCategory(initialCategory);
	}, []);

	return (
		<Page title={title} description={description}>
			{/* Hero */}
			<Box
				sx={{
					py: 25,
					'br': { display: { xs: 'none', md: 'initial' } }
				}}
			>
				<Container>
					<Typography variant={'h2'} component={'h1'} sx={{ pb: 3 }}>
						We're Here to Support You {" "}<br />
						<Box component='span' color='primary.main'>
							Every Step of the Way
						</Box>	
					</Typography>
					<Typography variant='lead'>
						Everything You Need to Know About Obtaining Medical Evidence for Your VA Disability Claim
					</Typography>
				</Container>
			</Box>
			{/* FAQ Section */}
			<Box sx={{ backgroundColor: 'secondary.100', py: 10, }}>
				<Container>
					<Typography variant='sectionHeading' component='h2' gutterBottom>
						FAQs
					</Typography>
					
					{topics ? (
						<Grid container spacing={2} sx={{ my: 3, justifyContent: 'center' }}>
							{topics.map((topic) => {
								const topicSlug = slugify(topic);
								const isSelected = selectedCategory === topicSlug;
								return (
									<Grid item key={`faq-topic-${topicSlug}`}> 
										<Button
											onClick={() => handleTopicChange(topicSlug)} 
											variant='text' 
											size='small' 
											color={ isSelected ? "primary" : "inherit"} 
											sx={{margin: 1, textTransform: "none",}}
										>
											{topic}
										</Button>
									</Grid>
								)
							})}
							{selectedCategory !== '' ? (
								<Grid item>
									<Button
										onClick={() => handleTopicChange('')}
										variant='text'
										size='small'
										color="inherit"
										sx={{ margin: 1, textTransform: "none", }}
									>
										All
									</Button>
								</Grid>
							) : null}
						</Grid>
					): null}
					
					<Box>
						{filteredItems.length > 0 ? (
							filteredItems.map(({ question, answer }, index) => (
								<Accordion
									key={`faq-panel-${slugify(question)}`}
									expanded={expanded === `panel${index}`}
									onChange={handlePanelChange(`panel${index}`)}
									square
									sx={{
										p: 2,
										my: 2,
									}}
								>
									<AccordionSummary
										expandIcon={<ArrowForwardIosSharpIcon 
											sx={{
												fontSize: '1.5rem',
												color: 'primary.main'
											}}
										/>}
										aria-controls={`panel${index}-content`}
										id={`panel${index}-header`}
										sx={{
											flexDirection: 'row-reverse',
											'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
												transform: 'rotate(90deg)',
											},
										}}
									>
										<Typography variant='subtitle1' sx={{pl:1}}>{question}</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography variant='body1'>{answer}</Typography>
									</AccordionDetails>
								</Accordion>
							))
						) : null}
					</Box>
				</Container> 
			</Box>
			{/* Contact Section */}
			<Box
				sx={{
					backgroundColor: 'primary.default',
					py: 10,
					px: 5,
					textAlign: 'center'
				}}
			>
				<Container maxWidth='md'>
					<Typography 
						variant={'sectionHeading'} 
						component={'h2'} 
						fontSize={30} 
						sx={{ pb: 3 }}
					>
						Talk To A Telemedica Team Member
					</Typography>
					<Typography variant={'body1'}>
						Didn't find your question in our list of FAQs? Click below to choose your preferred method of contact and speak with a member of our Customer Service Team today!
					</Typography>
					<Button
						variant='contained'
						size='small'
						href="/contact-us"
						sx={{ mt: 5, px: 5, }}
					>
						Contact Us
					</Button>
				</Container>
			</Box>
		</Page>
  )
}

export const getStaticProps = async () => {
	const title = 'FAQs';
	const description = '(FAQ) Frequently asked questions about obtaining medical evidence for Your VA disability claim.';
	const items = faqItems;

	return { props: { title, description, items } }
}
