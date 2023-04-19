import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import Page from '../../components/Page'

export default function Post({ post }) {
	return (
		<Page title={'News & Updates'}>
			<Box marginTop={10}>
				<Container>
					<Typography variant={'h1'}>Heyo</Typography>
				</Container>
			</Box>
  	</Page>
  )
}