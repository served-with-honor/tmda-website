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
	const { author, tags, title, content, featuredImage } = post;
	const publishDate = new Date(post.publishDate).toLocaleDateString();
	const modifedDate = post.modifedDate ? new Date(post.modifedDate).toLocaleDateString() : null;

	return (
		<Page title={title}>
			<Box sx={{
				pt: 15,
				pb: 10,
				position: 'relative',
				height: 750,
				width: '100%',
				backgroundImage: `url(${featuredImage})`,
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
								<Typography variant='h1' color='#FFF'>{title}</Typography>
								<Stack direction="row" spacing={4} sx={{pt: 10}}>
									<Avatar alt={author.name} src={author.image} sx={{width: 75, height: 75}}></Avatar>
									<Typography variant={'body1'} color='#FFF' sx={{py: 4}}>
										By {author.name} - {publishDate}
									</Typography>
								</Stack>
								
								{modifedDate && modifedDate !== publishDate ? (
									<Typography sx={{ py: 1 }} variant={'body2'} color='#FFF'>Last Modified on {modifedDate}</Typography>
								) : null }
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>

			<Box sx={{py: 10}}>
				<Container>
					<Box sx={{ wordWrap: 'break-word' }} >
						<div dangerouslySetInnerHTML={{__html: content}}></div>
					</Box>
					<Box sx={{pt: 10}}>
					{tags.map((tag, index) => {
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
	const { post } = await getPost(idSlug);
	return { props: { post } }
}