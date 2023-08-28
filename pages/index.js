import { useRef } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import {
	useTheme,
	Avatar,
	Button,
	Box,
	Container,
	Grid,
	Typography
} from '@mui/material';
import Link from '../src/Link';
import Page from '../components/Page'
import Hero from '../components/Hero'
import Counter from '../components/Counter'
import CircleFiller from '../components/CircleFiller'
import { SectionDivider } from '../components/layout'
import TextFlipper from '../components/TextFlipper'
import {
	SectionFeatures1,
	FAQs,
	Testimonials,
	Words,
	LatestPosts,
} from '../components/home'
import { slugify } from '../src/utils';

export default function Home({ faqs, testimonials }) {
	const theme = useTheme();
	const counterRef = useRef(null);
	
	return (
		<Page>
    
			<Hero
				// bgvideo="images/Website Headers/TMDA Hero Reel_01.mp4"
			>
				<Typography variant={'h1'} color={'secondary'} fontSize={30} sx={{ textTransform: 'uppercase' }}>
					Serving Those Who Served
				</Typography>
				<Typography variant={'body1'} fontSize={30} sx={{ fontStyle: 'italic', maxWidth: 600 }}>
					The #1 Health Resource For Veterans On Their Path To
					<Box component='span' sx={{ ml: 1 }}>
						<TextFlipper items={['Life Change.', 'Vitality.', 'Wellbeing.', 'Health.', 'Happiness.', 'Community.',]} lineColor={theme.palette.primary.main} />
					</Box>
				</Typography>
			</Hero>
		
			<SectionFeatures1 />
			
			<Box ref={counterRef} sx={{
				background: 'linear-gradient(180deg, #68A09E, #5D8C93)',
				color: theme.palette.primary.contrastText,
				paddingY: 10,
			}}>
				<Container>
					<Grid container={true} spacing={5} sx={{ alignItems: 'center' }}>
						<Grid item md={8}>
							<Typography variant={'h3'} component={'h2'} gutterBottom sx={{ marginBottom: 5 }}>
								Changing Lives&nbsp;
								<Box component={'span'} sx={{  fontWeight: 300 }}>
									One Veteran At A Time
								</Box>
							</Typography>
							<Typography varian={'body1'}>We've delivered life changing medical evidence to more than 15,000 Veterans, and we hope we can provide the same for YOU! But don't just take our word for it, <strong><Link href={'#'} color={'inherit'}>read what other Veterans are saying</Link></strong> about Telemedica LLC.</Typography>
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
									<CircleFiller parentRef={counterRef} color={theme.palette.primary.main} color2={theme.palette.secondary.main} radius={120} stroke={35} percent={65} />
								</Box>
								<Box sx={{
									fontSize: 30,
									textAlign: 'center',
									textTransform: 'uppercase',
									position: 'relative',
								}}>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 22, lineHeight: 1.2 }}>More Than</Typography>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 40, lineHeight: 1.2 }}>
										<Counter to={15000} parentRef={counterRef} />
									</Typography>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 22, lineHeight: 1.2 }}>Veterans</Typography>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 30, lineHeight: 1.2 }}>Served</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box paddingY={12}>
				<Container>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Who is Telemedica LLC?</Typography>
					<Grid container spacing={5}>
						<Grid item sm={6} sx={{ width: '100%' }}>
							<Box sx={{ borderRadius: 1, position: 'relative', minHeight: '200px', height: '100%', overflow: 'hidden' }}>
								<Image fill src="/images/Dr_Smiling_Resized (1).jpeg" alt="" style={{ objectFit: 'cover' }} />
							</Box>
						</Grid>
						<Grid item sm={6}>
							<Typography variant={'h6'} component={'h3'}>Mission:</Typography>
							<Typography variant={'body1'} gutterBottom>Our mission is to continually innovate quality care for the Veteran Community through support, compassion, and a tech-forward approach. We are committed to serving those who served.</Typography>
							<Typography variant={'h6'} component={'h3'}>Vision:</Typography>
							<Typography variant={'body1'} gutterBottom>To be the most trusted health resource that connects the Veteran Community to a network of care providers on their path to wellbeing.</Typography>
							<Typography variant={'h6'} component={'h3'}>Purpose:</Typography>
							<Typography variant={'body1'}>To provide ease and accessibility to world-class care providers for veterans seeking to improve their quality of life.</Typography>
							<Button variant={'contained'} href={'/about'} sx={{ mt: 5 }}>Learn More...</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<SectionDivider />

			<Box paddingY={12}>
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
								title: 'IMOs & DBQs',
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
									<Box align={'center'} sx={{ mb: 3 }}><Avatar sx={{ bgcolor: 'secondary.main', height: 50, width: 50 }}>{index + 1}</Avatar></Box>
									<Typography align={'center'} variant={'h4'} component={'h3'} sx={{ mb: 3 }}>{title}</Typography>
									<Typography align={'center'} variant={'body1'}>{text}</Typography>
								</motion.div>
							</Grid>

						))}
					</Grid>
					<Box align={'center'}>
						<Button variant={'contained'} href={'/services'}>Learn More...</Button>
					</Box>
				</Container>
			</Box>
			
			<Box sx={{
				background: 'linear-gradient(180deg, #68A09E, #4A6B82)',
				paddingY: 12,
			}}>
				<Container maxWidth={'md'}>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ color: 'primary.contrastText', mb: 8 }}>Frequently Asked Questions</Typography>
					<FAQs items={faqs} />
				</Container>
			</Box>

			<Box paddingY={12}>
				<Container size={'sm'}>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Testimonials</Typography>
					<Typography align={'center'} variant={'body1'} sx={{ fontSize: 30, maxWidth: 720, marginX: 'auto' }}>Five-Star Ratings from Our Veteran Clients &amp; Providers Working with Telemedica.</Typography>
					{testimonials ? (
						<Box sx={{ marginY: 5 }}><Testimonials items={testimonials} /></Box>
					) : null}
					<Box align={'center'} sx={{ mt: 5 }}>
							<Button variant={'contained'} href={'#'}>Write a Review</Button>
					</Box>
				</Container>
			</Box>

			<Box paddingY={12}>
				<Container>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Check Out These Free Resources!<br />Find out more about _____.</Typography>
					<LatestPosts />
					<Box align={'center'} sx={{ mt: 5 }}>
						<Button variant={'contained'} href={'/blog'}>Read More...</Button>
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
    'The only way you could improve is have Dr. Decruise do every single evaluation for VA claims insider PTSD. This is my 2nd eval with Telemedica so I was apprehensive about how the second exam would go. Dr. Decruuse is absolutely the most genuine and sincere mental health care provider possible. I know she sees thousands of patients but I honestly felt as though I was her one and only patient. She was kind, caring, compassionate and sincere. Her patience and concern for myself as a human (not just a number) are top notch. She is a world class human and physician. Dr. Decruise made me feel safe, secure, welcomed and as if she actually listened. I could not be more satisfied with how my exam went. And another short kudos for customer service team: Your customer service follow up and care is to be commended and appreciated',
    'I feel that the whole process from beginning (scheduling) to end (the actual appointment) was very easy and stress free! Ms. Mia was so helpful that she went above and beyond to help me reschedule and answer a few questions I had with ease. The doctor was very personable and professional but at the same time made me feel extremely comfortable with the evaluation process.',
    'Testimonial 3',
    'Testimonial 4',
	];
	return { props: { testimonials, faqs } }
}
