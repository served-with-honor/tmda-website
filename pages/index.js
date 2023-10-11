import { useRef } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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
import googleRatingBadge from '../public/google-rating.svg'
import ImageDrSmiling from '../public/images/Dr_Smiling_Resized.jpeg'
import generateRssFeed from '../utils/generateRSSFeed';
import NewsletterDialog from '../components/NewsletterDialog'

export default function Home({ faqs, testimonials }) {
	const theme = useTheme();
	const counterRef = useRef(null);
	const newsletterPopupRef = useRef(null);
	
	return (
		<Page>
    
			<Hero />

			<Box sx={{ py: 12 }}>
				<Container maxWidth='md' align='center'>
					<Typography variant="sectionHeading">Medical Evidence Wins Claims!</Typography>
					<Typography variant="lead" sx={{ mb: 6 }}>Get your high-quality medical evidence from the medical evidence experts!</Typography>
					<Typography variant="body1" sx={{ my: 6 }}>Did you know that a lack of medical evidence is the #1 reason VA disability claims are denied? Medical evidence is a crucial piece of the puzzle that VA raters consider when reviewing a disability claim. Telemedica provides solutions for veterans looking to bolster their claims through high-quality medical evidence that wins claims! Schedule your FREE 20-minute consultation, get answers for your service-connected disability, and start on your path to well-being.</Typography>
					<Button variant='contained' color='secondary' href="https://telemedicallc.intakeq.com/booking?serviceId=158c606a-bcb8-4fc4-9103-4b435fb154ff" target='_blank'>Connect Now</Button>
				</Container>
			</Box>
		
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
			
			<Box paddingY={12} sx={{ position: 'relative'}} >
				<Box sx={{ position: 'absolute', width: { xs: '100%', md: '50%' }, left: 0, top: 0, height: '100%', overflow: 'hidden', opacity: { xs: 0.15, md: 1 } }}>
					<Image fill src={ImageDrSmiling} alt="" style={{ objectFit: 'cover' }} />
				</Box>
				<Container sx={{ position: 'relative' }}>
					<Box sx={{ ml: { md: '50%' }, pl: { md: 12 } }}>
						<Typography variant={'sectionHeading'} sx={{ mb: 5, textAlign: 'left', '&:after': { marginLeft: 0 }  }}>For Veterans.<br />By Veterans.</Typography>
						<Typography variant={'subtitle1'} component={'p'} gutterBottom>The Medical Evidence Experts!</Typography>
						<Typography variant={'body1'} gutterBottom>When you choose Telemedica, you choose providers who understand you, see you in your fight, and are experts in crafting high-quality medical evidence that wins VA claims. Our network of trusted providers understands the unique needs of the veteran community. Many of the providers in Telemedica's network have served veterans in the past, are military spouses, or are even veterans themselves. Don't leave the success of your claim to chance; get connected with a medical evidence expert today!</Typography>
					</Box>
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
								title: 'Rebuttal Letters',
								text: 'Rebuttal Letters help to address incorrect or inaccurate statements contained within VA denial letters. Available for mental health and medical denials. These letters are exclusively available to clients who have received a denial letter for a claim for which we have previously provided support.',
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
					<Box align={'center'} sx={{mt: 8,}}>
						<Button color='primary' variant='contained' href='/faqs'>View All FAQs</Button>
					</Box>
				</Container>
			</Box>

			<Box paddingY={12} backgroundColor='grey.50'>
				<Container maxWidth={'md'}>
					<Typography variant={'sectionHeading'} sx={{ mb: 8 }}>Testimonials</Typography>
					<Typography align={'center'} variant={'body1'} sx={{ fontSize: 30 }}>What satisfied veteran clients are saying about Telemedica.</Typography>
					{testimonials ? (
						<Box sx={{ marginY: 5 }}><Testimonials items={testimonials} /></Box>
					) : null}
					<Box sx={{ mt: 8,  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
						<Stack direction='row' spacing={1} alignItems='center'>
							<Image src={googleRatingBadge}/>
							<Typography variant={'h4'} component={'p'}>4.9</Typography>
						</Stack>
					</Box>
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
					<Box align={'center'} ref={newsletterPopupRef}>
						<Button variant={'contained'} href={'/blog'}>More free resources</Button>
					</Box>
				</Container>
			</Box>

			<NewsletterDialog scrollRef={newsletterPopupRef} />

		</Page>
  )
}

export async function getStaticProps() {
	await generateRssFeed();
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
