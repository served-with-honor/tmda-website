import { Box, Container, Grid, Typography } from '@mui/material';
import Page from '../../components/Page'
import { getPosts, getFooterPosts } from '../../lib/api'
import ArticleCard from '../../components/ArticleCard'
import { slugify } from '../../src/utils';

export default function Blog({ posts, footerPosts }) {
	return (
		<Page title={'News & Updates'} posts={footerPosts}>
			<Box marginTop={10}>
				<Container>
					<Typography variant={'h1'}>News & Updates</Typography>
				</Container>
			</Box>
			<Box sx={{ marginY: 10 }}>
				<Container>
					<Grid container spacing={5}>
						{posts && posts.length > 0 ? posts.map(post => (
							<Grid item sm={4} key={slugify(`post-listing-item-${post.title}`)}>
								<ArticleCard {...post} />
							</Grid>
						)) : null}
					</Grid>
				</Container>
			</Box>
  	</Page>
  )
}


export async function getServerSideProps(context) {
	const response = await getPosts(false, { count: 9 });
	const posts = response.posts.edges.map(post => ({
		title: post?.node?.title,
		excerpt: post?.node?.excerpt,
		slug: post?.node?.slug,
		date: post?.node?.date,
		image: post?.node?.featuredImage?.node?.mediaItemUrl,
		categories: post?.node?.categories.edges?.map(a => a.node),
		tags: post?.node?.tags.edges?.map(a => a.node),
	}));
	
	const response2 = await getFooterPosts();
	const footerPosts = response2.posts.edges.map(post => ({
		title: post?.node?.title,
		slug: post?.node?.slug,
	}));
	
  return { props: { posts, footerPosts } }
}
