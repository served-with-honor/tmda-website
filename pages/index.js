import { useRef } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '../src/Link';
import Page from '../components/Page'
import Hero from '../components/home/Hero'
import Counter from '../components/Counter'
import CircleFiller from '../components/CircleFiller'
import {
	SectionFeatures1,
	FAQs,
	Testimonials,
	LatestPosts,
} from '../components/home'
import { slugify } from '../src/utils';
import drSmilingImage from '../public/images/Dr_Smiling_Resized.jpeg'

export default function Home({ faqs, testimonials }) {
	const theme = useTheme();
	const counterRef = useRef(null);
	
	return (
		<Page>
    
			<Hero />
		
			<SectionFeatures1 />
			
			<Box ref={counterRef} sx={{
				background: 'linear-gradient(-135deg, #e2f5f1 0%, #d5d9e4 100%)',
				paddingY: 10,
			}}>
				<Container>
					<Grid container={true} spacing={5} sx={{ alignItems: 'center' }}>
						<Grid item md={8}>
							<Typography variant={'h3'} component={'h2'} color='secondary' gutterBottom sx={{ marginBottom: 5 }}>
								Changing Lives&nbsp;
								<Box component={'span'} color='secondary.800' sx={{  fontWeight: 300 }}>
									One Veteran At A Time
								</Box>
							</Typography>
							<Typography variant={'body1'}>We've delivered life changing medical evidence to more than 20,000 Veterans, and we hope we can provide the same for YOU! But don't just take our word for it, <strong><Link href={'#'} color={'inherit'}>read what other Veterans are saying</Link></strong> about Telemedica LLC.</Typography>
						</Grid>
						<Grid item md={4}>
							<Box sx={{ position: 'relative', height: 275, width: 275, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<Box sx={{
									position: 'absolute',
									height: '100%',
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
									<CircleFiller parentRef={counterRef} color={theme.palette.primary.main} color2={theme.palette.primary['100']} radius={120} stroke={35} percent={65} />
								</Box>
								<Box sx={{
									fontSize: 30,
									textAlign: 'center',
									textTransform: 'uppercase',
									position: 'relative',
								}}>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 22, lineHeight: 1.2 }}>More Than</Typography>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 40, lineHeight: 1.2 }}>
										<Counter to={20000} parentRef={counterRef} />
									</Typography>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 22, lineHeight: 1.2 }}>Veterans</Typography>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 30, lineHeight: 1.2 }}>Served</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box paddingY={12} align={'center'} backgroundColor='grey.50'>
				<Container>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>What We Do</Typography>
					</motion.div>
					<Grid container spacing={5}>
						{([
							{
								title: 'DBQs and Nexus Letters',
								text: 'Evidence to support your VA claim. Nexus Letters (IMOs) and DBQs do not require an appointment. Simply book, upload your documents, and one of our licensed professionals will be in touch to let you know if a medical document is warranted.',
							},
							{
								title: 'Mental & Medical Evaluations',
								text: 'Receive a mental health or medical evaluation from one of our trusted, licensed providers. We conduct evaluations of 21 physical conditions, and can help you identify mental health condition(s) you may be living with.',
							},
							{
								title: 'Recurring Therapy',
								text: 'Ongoing therapy tailored to the Veteran Client experience. Receive mental health care from the comfort of your own home through our convenient and secure HIPAA-Compliant telehealth platform.',
							},
						]).map(({ title, text }, index) => (
							<Grid item sm={4} key={`section-what-we-do-item-${slugify(title)}`} sx={{ mb: 3 }}>
								<motion.div
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: (index * 0.1) + 0.5 }}
								>
									<Avatar sx={{ bgcolor: 'secondary.main', height: 50, width: 50, mb: 3 }}>{index + 1}</Avatar>
									<Typography variant={'h4'} component={'h3'} sx={{ mb: 3 }}>{title}</Typography>
									<Typography variant={'body1'}>{text}</Typography>
								</motion.div>
							</Grid>

						))}
					</Grid>
					<Button variant={'contained'} href={'/services'} sx={{ mt: 8 }}>Our Services</Button>
				</Container>
			</Box>
			
			<Box sx={{
				background: 'linear-gradient(135deg, #e2f5f1 0%, #d5d9e4 100%)',
				paddingY: 12,
			}}>
				<Container maxWidth={'md'}>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Frequently Asked Questions</Typography>
					<FAQs items={faqs} />
					<Box sx={{
						mt: 8,
						textAlign: 'center',
					}}>
						<Button color='primary' variant='contained' href='/faqs'>View All FAQs</Button>
					</Box>
				</Container>
			</Box>

			<Box paddingY={12} backgroundColor='grey.50'>
				<Container size={'sm'}>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Testimonials</Typography>
					<Typography align={'center'} variant={'body1'} sx={{ fontSize: 30, maxWidth: 720, marginX: 'auto' }}>What our veteran clients are saying about Telemedica.</Typography>
					{testimonials ? (
						<Box sx={{ marginY: 5 }}><Testimonials items={testimonials} /></Box>
					) : null}
					<Box align={'center'} sx={{ mt: 10 }}>
							<Button variant={'contained'} href={'https://g.page/r/CXLI9fZbuI4iEB0/review'}>Leave a Review</Button>
					</Box>
				</Container>
			</Box>

			<Box paddingY={12}>
				<Container>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Free Resource for Veterans</Typography>
					<Box sx={{ mb: 8 }}>
						<LatestPosts />
					</Box>
					<Box align={'center'}>
						<Button variant={'contained'} href={'/blog'}>More free resources</Button>
					</Box>
				</Container>
			</Box>
			
		</Page>
  )
}

export async function getStaticProps() {
	const faqs = [
		{
			title: 'Does Telemedica do in-person appointments?',
			text: 'This is held for the dropdown as the answer to FAQ1.',
		},
		{
			title: 'What do I need in order to get an evaluation with Telemedica?',
			text: 'This is held for the dropdown as the answer to FAQ2.',
		},
		{
			title: 'What forms of Payment do you accept?',
			text: 'This is held for the dropdown as the answer to FAQ3.',
		},
		{
			title: 'Do you accept insurance?',
			text: 'This is held for the dropdown as the answer to FAQ4.',
		},
	];
	const testimonials = [
		{
			text: 'This is a great resource to use to help get your mental health issues out and be evaluated to put in for a VA disability claim.The doctor made me feel at ease.And I was able to dig into my emotions and not be afraid to hide things.I was more open then i thought and she listened and was helpful.',
			author: 'Anonymous ',
		},
		{
			text: 'This was the first time I used Telemedica LLC and my experience was amazing. My provider was patient, caring, respectfully and courteous. I recommend this company for all your medical needs. THANK YOU TELEMEDICA! I am grateful.',
			author: 'Mark N.',
		},
		{
			text: 'My husband used Telemedica for his IMO. They were extremely easy to work with throughout the process. The doctor was amazing. She was very professional, understanding, courteous and sensitive to his feelings and comments. I don\'t think you could go through this process without them.',
			author: 'Kathy E.',
		},
		{
			text: 'To all my brothers and sisters veterans, If you truly need so help in live from our ups and downs in the military stress, PLEASE contact Telemedical LLC, they are the real deal. Very knowledgeable and so professional. After 38 years I finally was able to vent to someone and get professional help. Please reach out to this team, get the help we as veterans deserve.',
			author: 'Cpl.Spears',
		},
		{
			text: 'I\'m only making this post in the hopes that someone can make a great decision. This for me was an amazing choice in the right direction. I have never done anything like this before and never thought I had to either. The truth is I don\'t like to be vulnerable but this is the place to be honest and open.I believe this was the right decision for myself and my family.This was my first time talking to a psychologist and I felt truly heard without prejudice. 10/10 recommend for anyone looking to make change for themselves.',
			author: 'Devon H.',
		},
	];
	return { props: { testimonials, faqs } }
}
