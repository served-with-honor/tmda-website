import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'
import { visuallyHidden } from '@mui/utils';
import Page from '../../components/Page'
import { getPosts, getFooterPosts, getTags } from '../../lib/api'
import ArticleCard from '../../components/ArticleCard'
import { slugify } from '../../src/utils';
import NewsletterDialog from '../../components/NewsletterDialog'

export default function Blog({ posts, footerPosts, tags, selection, hasMorePosts }) {
	const loadMoreRef = useRef(null);
	const [a11yAlertText, setA11yAlertText] = useState(null);
	const [popupOpen, setPopupOpen] = useState(false);
	const [hasMore, setHasMore] = useState(hasMorePosts);
	const [isLoading, setIsLoading] = useState(false);
	const loadMoreInView = useInView(loadMoreRef);

	function loadMore({ cursor, tags }) {
		return new Promise(async function (resolve, reject) {
			try {
				// #TODO - Fetch actual data
				setTimeout(() => resolve({ cursor: null }), 3000);
			} catch (error) {
				reject(error);
			}
		});
	}

	useEffect(() => {
		const fetchData = async () => {
			setA11yAlertText('');
			setA11yAlertText('Loading additional articles…');
			const { cursor } = await loadMore({ tags: selection ? [selection] : null });
			setA11yAlertText('');
			setA11yAlertText(`Articles successfullly loaded. ${!cursor ? ' There are no more articles to load.' : ''}`);
			setIsLoading(false);
			setHasMore(!!cursor);
		}

		if (loadMoreInView && hasMore) {
			setIsLoading(true);
			fetchData().catch(() => setA11yAlertText('Something went wrong loading the articles'));
		}
	}, [loadMoreInView]);
	

	return (
		<Page title={'Telemedica Blog'} posts={footerPosts}>
			
			{/* HERO */}
			<Box sx={{ backgroundColor: 'secondary.800', paddingTop: 20, paddingBottom: 10 , position: 'relative', }}>
				<Container>
					<Grid container spacing={3} alignItems='center' justifyContent={'space-between'} sx={{ color: 'primary.contrastText' }}>
						<Grid item md={6}>
							<Typography variant='h2' component={'h1'} sx={{ mb: 2 }}>Telemedica Blog</Typography>
							<Typography variant='body1' sx={{ fontSize: 24 }}>The most up-to-date and accurate resource for veterans and their families.</Typography>
						</Grid>
						<Grid item>
							<Button variant='contained' size='large' onClick={() => { setPopupOpen(true); }}>Subscribe</Button>
							<NewsletterDialog openCondition={popupOpen} />
						</Grid>
					</Grid>
				</Container>
			</Box>
			
			<Box sx={{ marginY: 10 }}>
				<Container>
					{tags ? (
						<Box>
							<Typography variant='h3' component='h2' align='center' gutterBottom>Sort by Category</Typography>
							<Stack direction='row' gap={2} justifyContent='center' sx={{ mb: 10 }} flexWrap="wrap">
								{tags.map(({ name, slug }) => (
									<Button
										key={`tag-${slug}`}
										variant='contained'
										href={`?tag=${slug}`}
										disabled={slug === selection}
									>
										{name}
									</Button>
								))}
								{selection ? <Button variant='contained' href={`?`}>All</Button> : null}
							</Stack>
						</Box>
					) : null}
					<Grid container spacing={5}>
						{posts && posts.length > 0 ? posts.map(post => (
							<Grid item sm={4} key={slugify(`post-listing-item-${post.title}`)}>
								<ArticleCard {...post} />
							</Grid>
						)) : null}
					</Grid>
					{a11yAlertText ? <Box sx={visuallyHidden} role="alert">{a11yAlertText}</Box> : null}
					{isLoading ? (
						<Box align='center' sx={{ my: 10 }}>
							<CircularProgress />
						</Box>
					) : hasMore ? (
						<div ref={loadMoreRef}>Load more</div>
					) : (
						<Typography variant='subtitle1' align='center' sx={{ mt: 10 }}>There are no more articles.</Typography>
					)}
				</Container>
			</Box>
  	</Page>
  )
}

export async function getServerSideProps({ query }) {
	const queryTag = query.tag ? [query.tag] : null;
	const selection = query.tag ? query.tag : null;
	const response = await getPosts({ count: 9, tags: queryTag });
	const posts = response.posts.nodes.map(post => ({
		title: post.title,
		excerpt: post.excerpt,
		slug: post.slug,
		date: post.date,
		image: post.featuredImage?.node?.mediaItemUrl,
		categories: post.categories.edges?.map(a => a.node),
		tags: post.tags.edges?.map(a => a.node),
	}));
	
	const response2 = await getFooterPosts();
	const footerPosts = response2.posts.edges.map(post => ({
		title: post?.node?.title,
		slug: post?.node?.slug,
	}));

	const tagsResponse = await getTags(999);
	
	const tags = tagsResponse.tags.nodes;
  return { props: { posts, footerPosts, tags, selection, hasMorePosts: true }}
}
