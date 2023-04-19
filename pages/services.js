import { Box, Container, Typography } from '@mui/material';
import Page from '../components/Page'

export default function ServicesPage() {
	return (
		<Page title={'Services'}>
			<Box marginTop={10}>
				<Container>
					<Typography variant={'h1'}>Services</Typography>
				</Container>
			</Box>
  	</Page>
  )
}
