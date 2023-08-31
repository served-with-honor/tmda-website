import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import Page from '../components/Page'
import Image from 'next/image';
import doctorImage from '../public/images/admin-services-image.png'
import CustomCard from '../components/CustomCard';
import siteSettings from '../src/siteSettings';



export default function AdministrativeServicesPage({ services, benefits }) {
	return (
		<Page title={'Administrative Services'}>
			{/* HERO */}
			<Box sx={{ 
				pt: 20, 
				pb: 10,
				background: 'linear-gradient(to right, #c7cddb 30%, #d5eee9 90%)', 
				}}
			>
				<Container>
					<Typography variant={'h2'} component={'h1'}>
						Simplified Administration for Providers Serving the Veteran Community
					</Typography>
					<Typography variant={'h6'} component={'p'} sx={{ pt: 2, pb: 5}}>
						We Let You Do What You Do Best & We Handle The Rest!
					</Typography>
					<Button 
						variant="contained" 
						size='large'
						href={siteSettings.externalLinks.providerPortal}
						target='_blank'
					>
						Provider Portal
					</Button>
				</Container>
			</Box>
			{/* SECTION */}
			<Box sx={{ position: 'relative', pt: 12, pb: { md: 12 } }}>
				<Container>
					<Grid container spacing={2}>
						<Grid item md={7}>
							<Container >
								<Typography 
									variant={'sectionHeading'}
									component={'h2'}
									sx={{ textAlign: 'left', mb: 4, '&:after': { marginLeft: 0 } }}
								>
									Designed with You In Mind
								</Typography>
								<Typography variant={'body1'} gutterBottom>
									Telemedica LLC is an administrative company that connects the Veteran Community to an expansive network of medical care providers. We support veterans and providers alike through our easy and convenient HIPAA-compliant telehealth platform.
								</Typography>
								<Typography variant={'body1'}>
									Our administrative services enable the provider/practice to focus on providing quality clinical care without the burden of administrative and management functions.
								</Typography>
							</Container>
						</Grid>
						<Grid item md>
							<Box sx={{ textAlign: 'center', position: { md: 'absolute' }, bottom: 0, fontSize: 0 }}>
								<Image
									src={doctorImage}
									alt='image of a doctor'
									style={{
										width: 'auto',
										height: 'auto',
										maxWidth: '100%',
									}}
									sizes="(min-width: 1024px) 350px, (min-width: 768px) 30vw, 300px"
								/>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			{/* SECTION */}
			<Box
				sx={{
					py: 12,
					backgroundColor: 'secondary.100'
				}}
			>
				<Container>
					<Typography
						variant={'sectionHeading'}
						component={'h2'}
						mb={6}
					>
						Administrative Services
					</Typography>
					<Container sx={{pt: 3}}>
					<Grid container spacing={2} justifyContent={'center'}>
							{services.map(({heading, description}, index) => {
							return(
							<Grid key={`services-item-${index}`} item md={4}>
								<Paper sx={{ p: 5, borderRadius: 3, height: '100%' }} align='center'>
										<Typography variant='h5' component='h3' color='secondary.main' mb={3}>{heading}</Typography>	
										<Typography variant='body1'>{description}</Typography>	
								</Paper>
							</Grid>)
						})}
					</Grid>
					</Container>
				</Container>
			</Box>
			{/* SECTION */}
			<Box sx={{py: 12}}>
				<Container maxWidth="md">
					<Typography 
						variant={'sectionHeading'}
						component={'h2'}
						mb={5}
					>
						Admin Benefits
					</Typography>
					<List sx={{ 
						'.MuiListItemIcon-root': { 	
							alignSelf: 'flex-start' },
						}}
					>
						{benefits.map( (benefit, index) => {
							return(
								<ListItem key={`benefit-${index}`}>
									<ListItemIcon>
										<CheckIcon sx={{ color: 'primary.main' }} />
									</ListItemIcon>
									<ListItemText>
										{benefit}
									</ListItemText>
								</ListItem>
							)
						})}
					</List>
				</Container>
			</Box>
			{/* SECTION */}
			<Box sx={{
				backgroundColor: 'secondary.main',
				color: 'secondary.contrastText',
				p: 6,
				textAlign: 'center'
			}}>
				<Container>
					<Typography 
						variant={'h6'}
						component={'h3'}
						mb={3}
					>
						Ready to Start a Career with Us?
					</Typography>
					<Button 
						variant='contained' size='small'
						href='/careers' 
						sx={{px: 4}}
					>
						Careers
					</Button>
				</Container>
			</Box>
  	</Page>
  )
}

export async function getStaticProps() {
	const services = [
		{
			"heading": "Operations Management",
			"description": "Day-to-day tasks such as customer service support (email, phone, web), form gathering, retention, & records review, scheduling."
		},
		{
			"heading": "Liability Reduction",
			"description": "Staying up to date with all current compliance issues & keeping you informed of ongoing regulation requirements."
		},
		{
			"heading": "EHR Technology",
			"description": "Ensuring safeguarding of medical records and PHI. Access to our user-friendly telehealth platform."
		},
		{
			"heading": "Practice Marketing/Design",
			"description": "Marketing assistance with planning, scheduling, implementing & researching marketing strategies with the best ROI. Social media marketing support & creative design services for marketing materials."
		},
		{
			"heading": "Information Technology",
			"description": "Maintenance/management of technology systems, evaluating & buying new software, providing IT support services, document management, integration of new technology as needed, website management, SEO."
		},
		{
			"heading": "HR Administration",
			"description": "Support with onboarding new employees to technology systems, administrative processes, creating, updating, & maintaining non-clinical policies and procedures, managing HR paperwork (maintaining personnel files, active licensure, insurance, etc.),"
		},
		{
			"heading": "Financial Services",
			"description": "Handling & processing of accounts payable, payroll processing, bookkeeping, billing & collection, generating monthly & quarterly reports, year-end reports, tax preparation support, & financial forecasting."
		},
		{
			"heading": "Quality Assurance",
			"description": "Staying up to date with all current compliance issues & keeping you informed of ongoing regulation requirements."
		},
		{
			"heading": "Startup Support/Training",
			"description": "Facilitating details of startup, so you can begin seeing patients immediately. Innovative & flexible training options for you and your team."
		},
		{
			"heading": "Practice Expansion & New Service Development",
			"description": "Providing non-clinical support & guidance on business development opportunities. Access to new service/partnership opportunities."
		}
	]

	const benefits = [
		"Streamlined workflow & productivity.",
		"Standardized patient management & quality control.",
		"Improved cost control with increased efficiency.",
		"Improved organization by optimizing administrative processes.",
		"Increased practice performance & profitability.",
		"Reporting, analysis, & business development support to drive future revenue.",
		"Quality patient care with sound financial management.",
		"Enhanced patient care and satisfaction.",
		"Connection to an extensive network of veterans through our established Veteran Community.",
		"Our services are a great fit for a wide variety of practices and providers.",
		"Access to best in class customer care specialists.",
	]

	return { props: { services, benefits }}
}
