import { useRouter } from 'next/router';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { getPost } from '../../lib/api'
import Page from '../../components/Page'
import settings from '../../src/siteSettings';

export default function Post({ post }) {
	const { author, tags, title, content, featuredImage } = post;
	const publishDate = new Date(post.publishDate).toLocaleDateString();
	const modifedDate = post.modifedDate ? new Date(post.modifedDate).toLocaleDateString() : null;

	const router = useRouter();
  const handleTagClick = (slug) => router.push(`/blog?tag=${slug}`);

	return (
		<Page title={title}>
			<Box sx={{
				pt: 15,
				pb: 10,
				width: '100%',
				backgroundColor: 'primary.100',
				backgroundImage: `url(${featuredImage})`,
				backgroundSize: "cover", 
				backgroundPosition: 'center',
				backgroundBlendMode: 'overlay',
			}}
			>
				<Container sx={{pt: 10}}>
					<Typography variant='h1' color='secondary'>{title}</Typography>
					<Stack direction="row" spacing={4} sx={{pt: 10}}>
						<Avatar alt={author.name} src={author.image} sx={{width: 75, height: 75}}></Avatar>
						<Typography variant={'body1'} sx={{py: 4}}>
							By {author.name} - {publishDate}
						</Typography>
					</Stack>
					
					{modifedDate && modifedDate !== publishDate ? (
						<Typography sx={{ py: 1 }} variant={'body2'}>Last Modified on {modifedDate}</Typography>
					) : null }
					<Stack direction="row" spacing={1} sx={{ mt: 5 }}>
						{tags.map(({ slug, name }) => {
							const color = settings.articleTagColors[slug];
							return(
								<Chip
									key={`post-tag-${slug}`}
									label={name}
									onClick={() => handleTagClick(slug)}
									sx={color ? { color: '#fff', backgroundColor: color } : {}}
								/>
							)}
						)}
					</Stack>
				</Container>
			</Box>

			<Box sx={{py: 10}}>
				<Container>
					<Box sx={{ wordWrap: 'break-word' }} >
						<div dangerouslySetInnerHTML={{__html: content}}></div>
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