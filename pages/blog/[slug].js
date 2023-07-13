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

export const getServerSideProps = async ({ params }) => {
	const idSlug = params.slug
	const response = await getPost(idSlug)
	const post = response.post

	return { props: { post } }
}