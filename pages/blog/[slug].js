import parse from 'html-react-parser';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { getPost } from '../../lib/wordpress'
import Page from '../../components/Page'
import BlogHero from '../../components/BlogHero'
import WPBlocks from '../../src/wp-blocks';
import SimpleTOC from '../../src/wp-blocks/SimpleTOC';
import NewsletterDialog from '../../components/NewsletterDialog'

export default function Post({ post }) {
	const { author, categories, title, content, featuredImage, date, modifed } = post;
	
	const isSimpleTOC = (element) => element?.attribs?.class?.includes('simpletoc-list') || element?.attribs?.class?.includes('simpletoc-title');

	// Exclude SimpleTOC
	const contentComponents = parse(content, {
		replace: (element) => !isSimpleTOC(element) ? WPBlocks(element) : <></>
	});

	const sideContent = parse(content, {
		replace: (element) => isSimpleTOC(element) ? SimpleTOC(element) : <></>
	});
	
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
