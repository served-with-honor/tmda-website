import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { getPost } from '../../lib/api'
import Page from '../../components/Page'
import { filterProps } from 'framer-motion'

export default function Post({ post }) {

	const dateWritten = new Date(post.date).toLocaleDateString()

	const dateModified = new Date(post.modified).toLocaleDateString()

	const postTags = post.tags.nodes

	const postImage = post.featuredImage.node.mediaItemUrl

	const authorImage = post.author.node.avatar.url

	const authorName = post.author.node.name



	return (
		<Page title={post.title}>
			<Box sx={{
				pt: 15,
				pb: 10,
				position: 'relative',
				height: 750,
				width: '100%',
				backgroundImage: `url(${postImage})`,
				backgroundSize: "cover", 
				backgroundPosition: 'center',
				}}
			>
				<Box sx={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					left: 0,
					top: 0,
					backgroundColor: 'black',
					opacity: '0.65'
				}}>
				</Box>
				<Box sx={{
					position: 'relative',
					zIndex: 1,
				}}>
					<Container sx={{pt: 10}}>
						<Grid container spacing={3}>
							<Grid item md={10}>
								<Typography variant='h1' color='#FFF'>{post.title}</Typography>
								<Stack direction="row" spacing={4} sx={{pt: 10}}>
									<Avatar alt={authorName} src={authorImage} sx={{width: 75, height: 75}}></Avatar>
									<Typography variant={'body1'} color='#FFF' sx={{py: 4}}>
										By {authorName} - {dateWritten}
									</Typography>
								</Stack>
								
								{dateModified !== dateWritten ?
									<Typography variant={'body2'}>Last Modified on {dateModified}</Typography> :
									<div></div>
								}
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>

			<Box sx={{py: 10}}>
				<Container>
					<Box sx={{ wordWrap: 'break-word' }} >
						<div dangerouslySetInnerHTML={{__html: post.content}}></div>
					</Box>
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