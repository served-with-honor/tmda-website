import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import texture01 from '../public/images/texture-01.jpg';

export default function DiscoveryCallConfirmedPage() {
	return (
		<Page title={'Discovery Call Confirmation'}>

			{/* HERO */}
			<Box sx={{
				paddingTop: 20,
				paddingBottom: 10,
				position: 'relative',
				background: `url(${texture01.src}) center / cover no-repeat`,
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Container maxWidth='sm' sx={{ textAlign: 'center' }}>
					<Typography variant='h2' component={'h1'} color='primary'>Thank You!</Typography>
					<Typography variant='lead' gutterBottom>Your Discovery Call is Booked!</Typography>
					<Typography variant='body1'>You may now safely exit this page & we look forward to speaking with you on the day & time of your call.</Typography>
				</Container>
			</Box>
		</Page>
	)
}
