import parse from 'html-react-parser';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { getPost } from '../../lib/api'
import Page from '../../components/Page'
import BlogHero from '../../components/BlogHero'
import { replaceContent } from '../../src/WPBlocks';
import NewsletterDialog from '../../components/NewsletterDialog'

export default function Post({ post }) {
	const { author, categories, title, content, featuredImage, date, modifed } = post;
	const contentComponents = parse(content, { replace: replaceContent });
	
	return (
		<Page title={title}>
			<BlogHero {...{ title, author, date, modifed, categories, featuredImage }} />
			
			<Box sx={{ my: 10 }}>
				<Container>
					{contentComponents}
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
