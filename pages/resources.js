import { Box, Container, Typography } from '@mui/material';
import Page from '../components/Page'

export default function ResourcesPage() {
	return (
		<Page title={'Resources'}>
			<Box marginTop={10}>
				<Container>
					<Typography variant={'h1'}>Resources</Typography>
				</Container>
			</Box>
  	</Page>
  )
}
