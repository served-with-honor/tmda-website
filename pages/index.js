import Image from 'next/image';
import { motion } from 'framer-motion'
import { getAllPostsForHome } from '../lib/api'
import {
	useTheme,
	Avatar,
	Button,
	Box,
	Card,
	CardMedia,
	CardContent,
	Chip,
	Container,
	Grid,
	Stack,
	Typography
} from '@mui/material';
import Page from '../components/Page'
import Hero from '../components/Hero'
import Counter from '../components/Counter'
import CircleFiller from '../components/CircleFiller'
import { SectionDivider } from '../components/layout'
import { SectionFeatures1, FAQs, Testimonials, Words, ContactForm } from './home'
import { slugify } from '../src/utils';

export default function Home({ posts }) {
  const theme = useTheme();

	return (
		<Page>
    
			<Hero
			// bgvideo="images/Website Headers/TMDA Hero Reel_01.mp4"
			>
				<Typography variant={'h1'} color={'secondary'} fontSize={60} sx={{ textTransform: 'uppercase' }}>
					Serving Those Who Served
				</Typography>
				<Typography variant={'body1'} fontSize={30} sx={{ fontStyle: 'italic', maxWidth: 600 }}>
					The #1 Health Resource For Veterans On Their Path To
					<Words items={[ 'Life Change.', 'Vitality.', 'Wellbeing.', 'Health.', 'Happiness.', 'Community.', ]} />
				</Typography>
			</Hero>
		
			<SectionFeatures1 />
			
			<Box sx={{
				background: 'linear-gradient(180deg, #68A09E, #5D8C93)',
				color: theme.palette.primary.contrastText,
				paddingY: 12,
			}}>
				<Container>
					<Grid container={true} spacing={2} sx={{ alignItems: 'center', }}>
						<Grid item xs={8}>
							<Typography variant={'h3'} component={'h2'} gutterBottom>Changing Lives, One Veteran At A Time</Typography>
							<Typography varian={'body1'}>We've delivered life changing medical evidence to more than 15,000 Veterans, and we hope we can provide the same for YOU! But don't just take our word for it, <b><u>read what other Veterans are saying</u></b> about Telemedica LLC.</Typography>
						</Grid>
						<Grid item xs={4}>
							<Box sx={{ position: 'relative' }}>
								<Box sx={{
									position: 'absolute',
									height: '100%',
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
									<CircleFiller color={theme.palette.primary.main} color2={theme.palette.secondary.main} radius={120} stroke={35} percent={65} />
								</Box>
								<Box sx={{
									fontSize: 30,
									textAlign: 'center',
									textTransform: 'uppercase',
									position: 'relative',
								}}>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 22, lineHeight: 1.2 }}>More Than</Typography>
									<Typography component={'span'} sx={{ display: 'block', fontSize: 40, lineHeight: 1.2 }}>
										<Counter to={15000} />
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
						<Grid item sm={6}>
							<Image width="100" height="100" src="/images/Dr_Smiling_Resized (1).jpeg" alt="" />
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
					<FAQs />
				</Container>
			</Box>

			<Box paddingY={12}>
				<Container size={'sm'}>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Testimonials</Typography>
					<Typography align={'center'} variant={'body1'} sx={{ fontSize: 30, maxWidth: 720, marginX: 'auto' }}>Five-Star Ratings from Our Veteran Clients &amp; Providers Working with Telemedica.</Typography>
					<Box sx={{ marginY: 5 }}><Testimonials /></Box>
					<Box align={'center'} sx={{ mt: 5 }}>
							<Button variant={'contained'} href={'#'}>Write a Review</Button>
					</Box>
				</Container>
			</Box>

			<Box paddingY={12}>
				<Container>
					<Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Check Out These Free Resources!<br />Find out more about _____.</Typography>
					<Grid container spacing={{ xs: 3, lg: 10 }}>
						{posts && posts.length > 0 ? posts.map(({ slug, image, title, tags, excerpt }, index) =>
							<Grid item sm={6} md={4} key={`post-listing-${slug}`}>
								<Card sx={{ height: '100%' }}>
									{image ? <CardMedia sx={{ height: '15rem' }} image={image} title="" /> : null}
									<CardContent>
										{tags && tags.length > 0 ? <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
											{tags.map((tag) => {
												const key = `post-listing-${slug}-category-${tag.slug || slugify(tag.name)}`;
												return <Chip key={key} label={tag.name} />
											})}
										</Stack> : null }
										{title ? <h4>{title}</h4> : null}
										{excerpt ? <p>{excerpt}</p> : null}
									</CardContent>
								</Card>
							</Grid>
						) : null}
					</Grid>
						<Box align={'center'} sx={{ mt: 5 }}>
							<Button variant={'contained'} href={'/blog'}>Read More...</Button>
						</Box>
				</Container>
			</Box>

			<Box sx={{ backgroundColor: '#333', paddingY: 5 }}>
				<Container maxWidth={'sm'}>
					<Typography variant={'sectionHeading'} component={'h2'} marginBottom={5}>Contact Us</Typography>
					<Typography variant={'body1'} align={'center'} gutterBottom marginBottom={5}>Fill out the form below. A member of our Customer Service Team will be in touch soon!</Typography>
					<ContactForm />
				</Container>
			</Box>
		</Page>
  )
}

export async function getServerSideProps(context) {
	const posts = await getAllPostsForHome(false);
	return { props: { posts } }
}
