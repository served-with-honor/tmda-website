import { Box, Container, Typography } from '@mui/material';
import Page from '../components/Page'

export default function CareersPage() {
	return (
		<Page title={'Careers'}>
			<Box marginTop={10}>
				<Container>
					<Typography variant={'h1'}>Careers</Typography>
				</Container>
			</Box>
  	</Page>
  )
}
