import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import texture01 from '../public/images/texture-01.jpg';
import DisabilityCalculator from '../components/DisabilityCalculator';

export default function DiscoveryCallConfirmedPage() {
	return (
		<Page title={'Disability Calculator'} noindex>

			{/* HERO */}
			<Box sx={{
				py: 20,
				position: 'relative',
				background: `url(${texture01.src}) center / cover no-repeat`,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Container maxWidth='md' sx={{ textAlign: 'center' }}>
					<Typography variant='h2' component='h1' color='primary'>Disability Calculator</Typography>
					<Typography variant='lead' component='p' sx={{ mb: 3 }}>Wondering How to Calculate Your Combined VA Rating?</Typography>
					<Typography variant='body1'>Find out for FREE using our 2024 VA Disability Calculator with the new 3.2% VA pay increase. Disabled veterans can use our VA Disability Rating Calculator to instantly calculate their combined VA disability rating in a few simple steps.</Typography>
				</Container>
			</Box>
			<Box sx={{ pb: 12, mt: -10, position: 'relative' }}>
				<Container>
					<DisabilityCalculator />
				</Container>
			</Box>
		</Page>
	)
}
