import { Box, Container, Typography } from '@mui/material';
import Page from '../components/Page'

export default function AboutPage() {
	return (
		<Page title={'About'}>
			<Box marginTop={10}>
				<Container>
					<Typography variant={'h1'}>About</Typography>
				</Container>
			</Box>
  	</Page>
  )
}
