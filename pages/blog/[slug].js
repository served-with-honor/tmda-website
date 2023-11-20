import parse from 'html-react-parser';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { getPost } from '../../lib/wordpress'
import Page from '../../components/Page'
import BlogHero from '../../components/BlogHero'
import { replaceContent, replaceSideContent } from '../../src/wp-blocks';
import NewsletterDialog from '../../components/NewsletterDialog'

export default function Post({ post }) {
	const { author, categories, title, content, featuredImage, date, modifed } = post;
	const contentComponents = parse(content, { replace: replaceContent });
	const sideContent = parse(content, { replace: replaceSideContent });
	
	return (
		<Page title={title}>
			<BlogHero {...{ title, author, date, modifed, categories, featuredImage }} />
			
			<Box sx={{ my: 10 }}>
				<Container>
					<Grid container spacing={4}>
						<Grid item xs={12} md={4}>{sideContent}</Grid>
						<Grid item xs={12} md={8}>{contentComponents}</Grid>
					</Grid>
				</Container>
			</Box>

			<NewsletterDialog delay={10000} />
  	</Page>
  )
}

export const getServerSideProps = async ({ params, query }) => {
	const { slug } = params;
	const { preview } = query;
	const { post } = await getPost({ slug, preview });
	return { props: { post } }
}
