import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import Link from '@mui/material/Link';
import Page from '../../components/Page'
import { getPosts, getTags } from '../../lib/api'
import ArticleCard from '../../components/ArticleCard'
import { slugify } from '../../src/utils';
import NewsletterDialog from '../../components/NewsletterDialog'

const LISTING_COUNT = 9;

export default function Blog({ initialPosts, tags, selection, initialNextPage }) {
	const loadMoreRef = useRef(null);
	const [a11yAlertText, setA11yAlertText] = useState(null);
	const [nextPage, setNextPage] = useState(initialNextPage);
	const [posts, setPosts] = useState(initialPosts);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const loadMoreInView = useInView(loadMoreRef);
	const [popupOpen, setPopupOpen] = useState(false);

	const loadMore = (after) => {
		setError(null);
		setIsLoading(true);
		setA11yAlertText('');
		setA11yAlertText('Loading additional articles…');

		const tags = selection ? [selection] : '';
		const params = new URLSearchParams({ first: LISTING_COUNT, tags, after });
		const url = '/api/posts?' + params;
		fetch(url, { method: 'GET' })
			.then(response => response.json())
			.then(({ data, error }) => {
				if (error) throw error;
				
				const newPosts = data.posts.nodes.map(remapPost);
				setPosts(prev => [...prev, ...newPosts]);

				const { hasNextPage, endCursor } = data.posts.pageInfo
				setNextPage(hasNextPage ? endCursor : null);
				
				setA11yAlertText('');
				setA11yAlertText(`Articles successfullly loaded. ${!hasNextPage ? ' There are no more articles to load.' : ''}`);
			})
			.catch((error) => {
				console.error('Problem loading next posts', error);
				setError('There was a problem loading the next articles');
				setA11yAlertText('Something went wrong loading the articles')
			})
			.finally(() => setIsLoading(false))
		;
	}

	useEffect(() => {
		if (loadMoreInView && !isLoading && nextPage) loadMore(nextPage);
	}, [loadMoreInView]);
	

	return (
		<Page title={'Telemedica Blog'}>
			
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
						
						{isLoading ? <>
							<Grid item sm={4}><ArticleCard isLoading={true} /></Grid>
							<Grid item sm={4}><ArticleCard isLoading={true} /></Grid>
							<Grid item sm={4}><ArticleCard isLoading={true} /></Grid>
						</> : null}
					</Grid>

					{a11yAlertText ? <Box sx={visuallyHidden} role="alert">{a11yAlertText}</Box> : null}
					

					{error ? (
						<Alert severity="error" sx={{ my: 5 }} action={
							<Button color="inherit" size="small" onClick={() => loadMore()}>
								Try Again
							</Button>
						}>{error}</Alert>
					): null}

					{nextPage ? <>
						<div ref={loadMoreRef} />
						<Link href={`blog?after=${nextPage}`} sx={visuallyHidden}>Next Page</Link>
					</> : (
						<Typography variant='subtitle2' align='center' sx={{ mt: 10 }}>There are no more articles.</Typography>
					)}
				</Container>
			</Box>
  	</Page>
  )
}

export async function getServerSideProps({ query }) {
	const queryTag = query.tag ? [query.tag] : null;
	const after = query.after || null;
	const response = await getPosts({ first: LISTING_COUNT, after, tags: queryTag });
	const initialPosts = response.posts.nodes.map(remapPost);
	const { hasNextPage, endCursor } = response.posts.pageInfo;
	const initialNextPage = hasNextPage ? endCursor : null;
	
	const tagsResponse = await getTags(999);
	
	const tags = tagsResponse.tags.nodes;
	const selection = query.tag || null;
  return { props: { initialPosts, tags, selection, initialNextPage }}
}

const remapPost = (post) => ({
	title: post.title,
	excerpt: post.excerpt,
	slug: post.slug,
	date: post.date,
	image: post.featuredImage?.node?.mediaItemUrl,
	categories: post.categories.edges?.map(a => a.node),
	tags: post.tags.edges?.map(a => a.node),
});