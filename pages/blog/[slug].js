import { Box, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import { getPost } from '../../lib/api'
import Page from '../../components/Page'

export default function Post({ post }) {

	const dateWritten = new Date(post.date).toLocaleDateString()

	const dateModified = new Date(post.modified).toLocaleDateString()

	const postTags = post.tags.nodes

	debugger

	return (
		<Page title={'News & Updates'}>
			<Box sx={{py: 20}}>
				<Container>
					<Typography variant={'h1'}>{post.title}</Typography>
					<Typography variant={'body1'} sx={{py: 4}}>By {post.author.node.name} - {dateWritten} </Typography>
					{dateModified !== dateWritten ?
						<Typography variant={'body2'}>Modified on {dateModified}</Typography> :
						<div></div>
					}
					<Box
						component="img"
						sx={{
							maxWidthidth: 100,
							py: 4,
						}}
						alt={post.featuredImage.node.altText}	
						src={post.featuredImage.node.mediaItemUrl}
					>
					</Box>
					<div dangerouslySetInnerHTML={{__html: post.content}}></div>
					<Box sx={{pt: 10}}>
					{postTags.map((tag, index) => {
						return(
							<Chip key={`${tag.name}-${index}`} label={tag.name}></Chip>
						)}
					)}
					</Box>
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