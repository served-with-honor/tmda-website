import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Page from '../components/Page'
import ContactForm from '../components/ContactForm'
import CallIcon from '@mui/icons-material/Call';
import Link from '../src/Link';
import settings from '../src/siteSettings';

export default function ContactUsPage() {
	return (
		<Page title={'Contact Us'}>
			<Box sx={{ paddingY: 30 }}>
				<Container>
					<Grid container gap={5}>
						<Grid item md>
							<Typography variant='h1' color='primary'>Get In Touch</Typography>
							<Typography variant='body1' sx={{ fontSize: 32 }}>Please let us know how we can assist you</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={{ backgroundColor: '#EAECF1', paddingY: 10 }}>
				<Container maxWidth={'sm'}>
					<Typography variant={'sectionHeading'} component={'h2'} marginBottom={5}>Contact Us</Typography>
					<Typography variant={'body1'} align={'center'} gutterBottom marginBottom={5}>Fill out the form below. A member of our Customer Service Team will be in touch soon!</Typography>
					<ContactForm />
				</Container>
			</Box>
			<Box sx={{ padding: 10 }}>
				<Container>
					<Grid container gap={5}>
						<Grid item xs={12} sm align="center">
							<Typography variant="h4" component="h2" align="center" marginBottom={3}>Current Clients</Typography>
							<Grid container gap={1} sx={{ justifyContent: 'center' }}>
								<Grid item><Button size='small' color='secondary' variant={'outlined'} href={settings.externalLinks.patientPortal} target="_blank">Patient Portal</Button></Grid>
								<Grid item><Button size='small' color='secondary' variant={'outlined'} href={settings.externalLinks.helpDesk} target="_blank">Help Desk</Button></Grid>
								<Grid item><Button size='small' color='secondary' variant={'outlined'} href={settings.externalLinks.providerPortal} target="_blank">Provider Portal</Button></Grid>
							</Grid>
						</Grid>
  					<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'flex' } }} />
						<Grid item xs={12} sm align="center">
							<Typography variant="h4" component="h2" align="center" marginBottom={3}>New Clients</Typography>
							<Button size='small' color='secondary' variant={'outlined'} href={settings.externalLinks.booking} target="_blank">Book Now</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>
  	</Page>
  )
}
