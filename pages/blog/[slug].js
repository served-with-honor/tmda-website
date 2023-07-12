import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import { getPost } from '../../lib/api'
import Page from '../../components/Page'

export default function Post({ post }) {
	return (
		<Page title={'News & Updates'}>
			<Box marginTop={10}>
				<Container>
					<Typography variant={'h1'}>{post.title}</Typography>
				</Container>
			</Box>
  	</Page>
  )
}

export const getServerSideProps = async () => {
	const response = await getPost()
	const post = response.post

	return { props: { post } }
}