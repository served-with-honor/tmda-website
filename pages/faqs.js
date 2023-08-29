import React, {useState} from 'react';
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
			{/* Hero */}
			<Box
				sx={{
					py: 25,
				}}
			>
				<Container>
					<Typography variant={'h2'} component={'h1'} sx={{pb: 3}}>
						We’re Here to Support You 
					<Box sx={{color:'primary.main'}}>
						Every Step of the Way
					</Box>	
					</Typography>
					<Typography variant={'body1'}>
						Everything You Need to Know About Obtaining Medical Evidence for Your VA Disability Claim
					</Typography>
				</Container>
			</Box>
			{/* FAQ Section */}
			<Box sx={{ backgroundColor: 'secondary.100', py: 10, }}>
				<Container>
					<Typography 
						variant='sectionHeading' 
						component='h2' 
						gutterBottom
					>
						FAQs
					</Typography>
					
					<Grid container spacing={2} sx={{ my: 3, justifyContent: 'center' }}>
						{items.map( ({topic}, index) => 
							<Grid item> 
								<Button 
									key={`new-${topic}-item-${index}`} 
									onClick={() => handleTopicChange(topic)} 
									variant='text' 
									size='small' 
									color={ selectedCategory === topic ? "primary" : "inherit"} 
									sx={{margin: 1, textTransform: "none",}}
								>
									{topic}
								</Button>
							</Grid>
						)}
							<Grid item>
							{selectedCategory === '' ? 
								<div></div> 
								:
								<Button 
									onClick={() => handleTopicChange('')} 
									variant='text' 
									size='small' 
									color="inherit" 
									sx={{margin: 1, textTransform: "none",}}
								>
									All
								</Button>	
							}
							</Grid>
					</Grid>
					
					<Box>
						{filteredItems.length > 0 && (
							filteredItems.map((item, index) => (
								item.faqs.map( ({question, answer}, index) => (
								<Accordion
									key={`faq-panel-${index}`}
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
							))
						)}
					</Box>
				</Container> 
			</Box>
			{/* Contact Section */}
			<Box
				sx={{
					backgroundColor: 'primary.default',
					py: 20,
					px: 5,
					textAlign: 'center'
				}}
			>
				<Typography 
					variant={'sectionHeading'} 
					component={'h2'} 
					fontSize={30} 
					sx={{
						pb: 3
					}}
				>
					Talk To A Telemedica Team Member
				</Typography>
				<Typography variant={'body1'} s>
				Didn’t find your question in our list of FAQs? Click below to choose your preferred method of contact and speak with a member of our Customer Service Team today!
				</Typography>
				<Button
					variant='contained'
					size='small'
					href="/contact-us"
					sx={{
						mt: 5,
						px: 5,
					}}
				>
					Contact Us
				</Button>
			</Box>
  		</Page>
  )
}

export const getServerSideProps = async () => {
	const items = [
		{
			topic: 'General',
			faqs: [
				{
					question: 'Will the provider call me on the day of my appointment?',
					answer: 'The link to your evaluation will be sent via text and email shortly before your scheduled appointment time.',
				},
				{
					question: 'Do I need to download Zoom before my appointment?',
					answer: 'No, you are not required to download Zoom or any special application for the appointment.',
				},
				{
					question: 'Where do I need to go for my appointment?',
					answer: 'You will be matched with a provider who is licensed in the state you choose, so you need to be physically located in that state at the time of the appointment.',
				},
				{
					question: 'Where and how do I upload my documents?',
					answer: 'You may upload your documents in the secure Patient Portal.',
				},
				{
					question: 'Why are there no Mental Health Evaluation appointments in my state?',
					answer: 'Either there is no available provider licensed in your state or we are fully booked.',
				},
				{
					question: 'Can I get an earlier date for my appointment?',
					answer: 'You may reach out to customer service for assistance.',
				},
				{
					question: 'What is the third party rate?',
					answer: 'CS will confirm if veteran is a VACI client first, then will refer to VACI price list.',
				},
				{
					question: 'When will I receive my document?',
					answer: '14 business days for the Mental Health IMO. 10 business days or 2 business days (extra $100 per document for rush service) for the Nexus documents.',
				},
				{
					question: 'Do you accept insurance or offer payment plans?',
					answer: 'No, we do not accept insurances or offer payment plans.',
				},
				{
					question: 'I already created a portal before. Do I need/Why do I need to register again?',
					answer: 'Yes, if you are still in the old portal (Prognocis), you will need to register to the new Patient Portal.',
				},
				{
					question: 'Do I need to set up an appointment to request a Nexus Letter?',
					answer: 'No, you just need to sign up online, complete the Nexus intake package, and upload your records for the Nexus provider to review.',
				},
				{
					question: 'What is my next step after I complete the Nexus Intake Package form?',
					answer: 'A provider will be assigned to review your records and after 3 business days, you will receive a Comprehensive Chart Review that shows which documents can be provided based on your uploaded records.',
				},
				{
					question: 'What is the $199 fee for?',
					answer: 'This is a non-refundable Nexus records review request fee.',
				},
				{
					question: 'What is the difference between the regular and enhanced letter?',
					answer: 'A regular Nexus is one connection per letter, while an enhanced Nexus is multiple connections per letter.',
				},
				{
					question: 'How do I contact the Nexus provider? Can the Nexus provider call me?',
					answer: 'Nexus providers do not do phone calls, but you can reach them by sending a message in the portal.',
				},
				{
					question: "Where will I answer the Nexus provider's comments or questions in my chart review?",
					answer: 'You may answer them by sending a message in the portal.',
				},
				{
					question: "I do not see any invoice included in the chart review, how much is the total for my document/s?",
					answer: 'You will be able to view the price list under the Payment Terms in your intake form and when you fill out the order form.',
				},
				{
					question: "Is the $199 deducted from my total invoice?",
					answer: 'The $199 is a separate payment from the cost of the Nexus document.',
				},
				{
					question: "What are the qualifications of your providers?",
					answer: 'Our Nexus providers are comprised of PA-Cs, NPs, or FNP-Cs, while our Psych providers are licensed Psychologists.',
				},
				{
					question: "Can I pay in installments?",
					answer: 'No, we do not accept installment payments.',
				},
				{
					question: "Can I book over the phone?",
					answer: 'You may book through our booking link - https://telemedicallc.intakeq.com/booking, but if you encounter any issues, feel free to reach out to customer service for assistance.',
				},
				{
					question: "Will there be other charges after I pay for the document?",
					answer: "There won't be other charges after you pay for the document/s.",
				},
				{
					question: "Is TMDA the same as VACI?",
					answer: "No, they are separate companies.",
				},
				{
					question: "What documents do you need for the Mental Health Evaluation?",
					answer: `Providers require a copy of your DD214 and Rated Disabilities. Medical records are optional but highly recommended. You may also upload any personal statements, buddy letters, VA decision letters, and additional documents that you feel would be relevant to your claim.`,
				},
				{
					question: "When do I have to pay for the Mental Health Evaluation?",
					answer: "A $100 non-refundable initial fee is required to book the appointment. The remaining balance needs to be paid 48 hours prior to the scheduled appointment.",
				},
				{
					question: "Will my Mental Health Evaluation be in-person or online?",
					answer: "Your evaluation will be conducted online via video call. The link is sent a few minutes before the appointment.",
				},
			]
		},
		{
			topic: 'Psych',
			faqs: [
				{
					question: 'What is an Independent Medical Opinion (IMO) from Telemedica, and why should I get one?',
					answer: "An Independent Medical Opinion (IMO) is a document that is completed by someone who does not work with and/or is not contracted with the VA. This document provides evidence of mental health conditions and how they have affected your life. You can use an IMO to help you obtain a service connection for mental health. Many veterans' mental health was impacted by their time in service, and obtaining an IMO can help document these concerns clearly and concisely.",
				},
				{
					question: 'What is the purpose of a Telemedica Psych evaluation for mental health?',
					answer: "The psychologist you meet with will be attempting to determine if you have a mental illness that is caused by your time in the military. Our psychologists may sometimes determine that you have a mental illness but that it was not caused by the military. At other times, the psychologist may determine that you do not have a mental illness. Our psychologists offer their professional opinion, they do not guarantee a diagnosis or that the VA will agree with them. You are paying to see a licensed psychologist who will meet with you and discuss your life before the military, during the military, and after the military. You only pay for a one-time evaluation with the psychologist and not for any other services. After your appointment, you will not see the psychologist again.",
				},
				{
					question: 'Can the Telemedica psychologist guarantee a service connection?',
					answer: "Our psychologists are doctors who do not work for the VA, although many of them have worked there before or worked for additional companies contracted through the VA. Because of this, our psychologists can offer a non-biased opinion of your diagnoses and current symptoms. However, because the VA does not employ our psychologists, they can only recommend a service connection. The VA will ultimately determine if you receive a service connection, even if our psychologists believe that you should have one.",
				},
				{
					question: 'What does the psychologist look for during the evaluation?',
					answer: `The primary questions that your psychologist will be looking for are:

					Did your time in the military cause a mental illness? 
					Did your time in the military cause a decline in your ability to work, have relationships, and take care of yourself because of a mental illness that was caused by being in the military? 
					What happened in the military that may have caused this mental illness? 
					Can the psychologist provide enough concrete evidence to show that these symptoms and mental illness are due to your being in the military?`,
				},
				{
					question: 'I feel nervous or uncomfortable about my upcoming evaluation. What can I do to prepare?',
					answer: `It is normal to feel nervous about your evaluation. Many things you will discuss with our psychologists may be difficult or hard to talk about. Your story and what has happened to you are very important to our psychologists, and we want to hear what you say. However, to ease your mind, you should know that our psychologists do not expect you to go into great detail about distressing events. Instead, they are looking for one or two sentences that speak to what you went through, how it is affecting you, and evidence that shows that these things are occurring or did occur for you. They are also trained to provide the best and most important information in the shortest way possible. This is because the VA tends to believe that “less is more,” and VA raters are very busy. A short and to the point report is better than a long, meandering report. 

					Make sure that you do not schedule anything overly stressful on the day of your appointment. If you have a good friend or family member who supports you, make sure you talk with them about the appointment. If you see a therapist, you may want to book an appointment with them to discuss your feelings about the appointment. The day of your appointment should involve as much self-care as possible.`,
				},
				{
					question: 'Why do I need to provide records for my evaluation?',
					answer: "Although your story is important to us, the VA puts more weight on evidence (your medical records, service records, or any other paperwork that shows that what you are saying occurred) than they do on your report or the report of others in your life. Our psychologists will be more likely to recommend a service connection if you provide them with written, concrete evidence. In addition, without this evidence, the VA is more likely to reject your IMO and not provide you with a service connection.",
				},
				{
					question: 'What records should I provide prior to my appointment?',
					answer: "In order to book an appointment, the minimum records required are your DD214 and Blue Button Records. You can attend an appointment with only these two records, however, if you can provide concrete, written evidence then it is more likely that the psychologist can recommend a service connection and that the VA will agree. We recommend that you provide the psychologist with any evidence that shows 1) a mental health condition and 2) difficulty managing your life after the military. This includes items like formal write ups or Performance Improvement Plans (PIPs) at work, divorce decrees, police records, and any other information gathered from someone else who does not have a vested interest in you obtaining a service connection for mental health.",
				},
				{
					question: 'How long will it take to get my completed IMO after the evaluation?',
					answer: "Providers have 48 hours to complete the IMO and upload it to the secure portal.",
				},
				{
					question: 'I noticed a mistake on my IMO or I do not agree with my IMO. What should I do?',
					answer: "If you notice a mistake on your IMO, you should create a ticket in the Telemedica Help Desk. This way your psychologist can respond to you and ensure that any factual corrections are made in a timely manner and that your concerns are reviewed. It is up to the discretion of the independent provider to use their clinical judgement and provide a determination. The Help Desk can be found at: https://help.telemedicallc.com/.",
				},
				{
					question: 'Can I request corrections to an IMO from a year ago?',
					answer: "Mental health disorders and life circumstances can change quite rapidly. Because of this, we cannot edit or make changes to any IMO over six months old. It is recommended that if you would like changes made you make an appointment for a new evaluation.",
				},
				{
					question: 'I have a friend who has the exact same symptoms as I do, but my psychologist gave me a different diagnosis. Why did this happen?',
					answer: "Many mental health diagnoses have overlapping symptoms. Symptoms can show up in one person in different ways, and, although you and your friend may have similar symptoms, only someone with schooling and training can determine your true diagnosis.",
				},
				{
					question: 'I read the symptoms for the diagnosis I think I have online. Why didn’t my psychologist agree?',
					answer: `Although the internet is a valuable source of information, diagnosis of mental health conditions requires years of school and training. A review of symptoms cannot provide an accurate diagnosis. Psychologists also look for symptoms that they determine to be “clinically significant, " meaning that these symptoms impact your life enough to cause a decline in your quality of life. Someone can have symptoms of a mental health condition, but these symptoms may not meet the requirements to be clinically significant.`,
				},
				{
					question: 'I have hired another company to help me obtain my disability benefits. Someone at this company said that I have a certain diagnosis, but my psychologist disagreed. What happened?',
					answer: `Unless you are working with someone who is a licensed mental health professional, people from different agencies cannot provide you with a diagnosis. This is because they lack the schooling and training necessary to provide an accurate diagnosis.`,
				},
			]
		},
		{
			topic: 'Nexus',
			faqs: [
				{
					question: 'What is the benefit of getting a nexus letter and DBQ if I qualify for one?',
					answer: "The benefit is twofold. It highlights the severity of your condition according to the VA rating system. For example, specific conditions such as GERD and headache conditions have a question on the DBQ that is very pertinent to receiving at least a 30% rating. Secondly, if you submit sufficient evidence that fulfills the VA’s fully developed claim criteria, you may be able to bypass a C&P exam and get rated based on the information you submit.",
				},
				{
					question: 'Can you do all DBQs or only specific conditions?',
					answer: "We can only complete DBQs for conditions in which we do not need to perform an in-person physical examination. Some conditions require this for rating purposes. Examples include orthopedic conditions and most neurological conditions (except headache conditions).",
				},
				{
					question: 'Can I get a document for my social security claim?',
					answer: 'No, we only provide documents for VA disability claims.',
				},
				{
					question: 'Can I get a rebuttal document if I did not get the award percentage I wanted?',
					answer: 'No, we do not guarantee a specific award percentage. There are many factors that go into which award percentage is assigned by the VA, and even though our document may be written to support a higher level than you received, it may have been due to other factors in your claim filing or during the C&P exam. If you think that you qualify for a higher rating, we can evaluate a DBQ as a stand-alone document to ask for an increase in your service-connected condition. To do this, you would sign up for the nexus service for the provider to evaluate your evidence and claim.',
				},
				{
					question: 'My friend got a document from your company for the same connection I am looking for… can I qualify for a nexus? I saw a VA board of appeals case with this connection, can I sign up to get a letter?',
					answer: 'Each case is evaluated for supporting a service connection. Just because a connection can be made for one Veteran, it does not mean that everyone will qualify for the connection. This is why our trained providers complete a thorough review of the uploaded records before discussing what document(s) you may qualify for.',
				},
			]
		},
		{
			topic: 'Telemedicine Evaluation Team FAQ',
			faqs: [
				{
					question: 'How many conditions can I be diagnosed with in 1 visit?',
					answer: 'Each visit can render up to 2 diagnoses without the need to add additional time or schedule a second appointment.',
				},
				{
					question: 'Is the fee per visit or per diagnosis?',
					answer: 'The fee is per evaluation document. If you were seen for multiple conditions, our fees are per condition.',
				},
				{
					question: 'Can I be seen for a condition that is not listed on your approved condition list?',
					answer: 'Possibly. If you would like to be seen for a condition that is not listed on our approved list, please reach out to our customer service team for assistance, and they can confirm with the medical team.',
				},
				{
					question: 'Do you offer treatment or prescription services?',
					answer: 'No, not at this time.',
				},
				{
					question: 'Do you take my insurance?',
					answer: 'No, we do not accept any forms of insurance at this time.',
				},
				{
					question: 'Do you have a physical location that I can be seen in person?',
					answer: 'No, not at this time.',
				},
				{
					question: 'Do you write medical opinion letters?',
					answer: 'No, opinion letters are written by medical nexus or mental health teams.',
				},
			]
		},
		
	]

	return { props: { items } }
}
