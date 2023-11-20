import { useRouter } from 'next/router'
 import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import texture01 from '../public/images/texture-01.jpg';

export default function ServiceBookedConfirmedPage() {
	const router = useRouter();
	const name = router.query.name;
	const service = router.query.service || 'Service';

	return (
		<Page title={`${service} Confirmation`} noindex>

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
					<Typography variant='h2' component={'h1'} color='primary' sx={{ textTransform: 'capitalize' }}>Thank You{name ? ` ${name}` : ''}!</Typography>
					<Typography variant='lead' gutterBottom sx={{ textTransform: 'capitalize' }}>Your {service} is Booked!</Typography>
					<Typography variant='body1'>You may now safely exit this page. We look forward to helping you on your journey to VA claim success!</Typography>
				</Container>
			</Box>
		</Page>
	)
}
