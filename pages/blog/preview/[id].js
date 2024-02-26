import parse from 'html-react-parser';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { getPost } from '../../../lib/wordpress'
import Page from '../../../components/Page'
import BlogHero from '../../../components/BlogHero'
import { renderElementContents } from '../../../src/wp-blocks/generics';

export default function Post({ post }) {
	const { author, categories, title, content, featuredImage, date, modifed } = post;
	const contentComponents = parse(content, { replace: renderElementContents });
	
	return (
		<Page title={`PREVIEW - ${title}`}>
			<BlogHero {...{ title, author, date, modifed, categories, featuredImage }} />
			
			<Box sx={{ my: 10 }}>
				<Container>
					{contentComponents}
				</Container>
			</Box>
  	</Page>
  )
}
export async function getServerSideProps({ params }) {
  const id = parseInt(params.id, 10);
  const { post } = await getPost({ id, asPreview: true });
  return { props: { post } };
}