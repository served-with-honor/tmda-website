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
	const { author, tags, title, content, featuredImage, date, modifed } = post;
	const publishDate = new Date(date).toLocaleDateString();
	const modifedDate = modifed ? new Date(modifed).toLocaleDateString() : null;

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
				<Container>
					<Typography variant='h1' color='secondary' gutterBottom>{title}</Typography>
					<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
						<Avatar alt={author.name} src={author.image} sx={{ width: 48, height: 48 }}></Avatar>
						<Box>
							<Typography variant={'body1'}>By {author.name} - {publishDate}</Typography>
							{modifedDate && modifedDate !== publishDate ? (
								<Typography sx={{ py: 1 }} variant={'body2'}>Last Modified on {modifedDate}</Typography>
							) : null}
						</Box>
					</Stack>
					{tags ? (
						<Stack direction="row" spacing={1} sx={{ mt: 5 }}>
							{tags.map(({ slug, name }) => {
								const color = settings.articleTagColors[slug];
								return (
									<Chip
										key={`post-tag-${slug}`}
										label={name}
										onClick={() => handleTagClick(slug)}
										sx={color ? { color: '#fff', backgroundColor: color } : {}}
									/>
								);
							})}
						</Stack>
					) : null}
				</Container>
			</Box>
			<Box sx={{ my: 10 }}>
				<Container>
					<Box sx={{ wordWrap: 'break-word' }} dangerouslySetInnerHTML={{__html: content}} />
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