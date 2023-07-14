import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import { getPost } from '../../lib/api'
import Page from '../../components/Page'

export default function Post({ post }) {
	debugger

	return (
		<Page title={'News & Updates'}>
			<Box sx={{py: 25}}>
				<Container>
					<Typography variant={'h1'}>{post.title}</Typography>
					<Box
						component="img"
						sx={{
							maxWidthidth: 100,
							py: 5,
						}}
						alt={post.featuredImage.node.altText}
						src={post.featuredImage.node.mediaItemUrl}
					>

					</Box>
					<div dangerouslySetInnerHTML={{__html: post.content}}>
					</div>

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