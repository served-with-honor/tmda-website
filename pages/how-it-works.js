import { Box, Container, Typography } from '@mui/material';
import Page from '../components/Page'

export default function HowItWorksPage() {
	return (
		<Page title={'How It Works'}>
			<Box marginTop={10}>
				<Container>
					<Typography variant={'h1'}>How It Works</Typography>
				</Container>
			</Box>
  	</Page>
  )
}
