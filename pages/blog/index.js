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
import { getPosts, getCategories, getCategory } from '../../lib/wordpress'
import ArticleCard from '../../components/ArticleCard'
import { slugify } from '../../src/utils';
import NewsletterDialog from '../../components/NewsletterDialog'

const LISTING_COUNT = 9;

export default function Blog({ initialPosts, categories, selection, initialNextPage }) {
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

		const categories = selection ? [selection.id] : '';
		const params = new URLSearchParams({ first: LISTING_COUNT, categories, after });
		const url = '/api/posts?' + params;
		fetch(url, { method: 'GET' })
			.then(response => response.json())
			.then(({ data, error }) => {
				if (error) throw error;
				
				const newPosts = data.posts.nodes;
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
		<Page title={'Telemedica Blog'} description={'Free VA disability resources for Veterans needing more medical evidence for their VA claims. Click to read Telemedica Blog articles.'} darkHeader>
			
			{/* HERO */}
			<Box sx={{ backgroundColor: 'secondary.800', paddingTop: 20, paddingBottom: 10 , position: 'relative', }}>
				<Container spacing={3} sx={{ color: 'secondary.contrastText' }}>
					<Typography variant='h2' component={'h1'} sx={{ mb: 2 }}>Telemedica Blog</Typography>
					<Typography variant='body1' sx={{ fontSize: 24 }}>The most up-to-date and accurate information on Veteran Nexus Letters, Telemedicine, VA medical claims, benefits, and ratings, for veterans worldwide.</Typography>
					<Button variant='contained' size='large' onClick={() => { setPopupOpen(true); }} sx={{my: 3}}>Subscribe</Button>
					<NewsletterDialog openCondition={popupOpen} onPopupOpen={setPopupOpen}/>
				</Container>
			</Box>
			
			<Box sx={{ marginY: 10 }}>
				<Container>
					{categories ? (
						<Box>
							<Typography variant='h3' component='h2' align='center' gutterBottom>Sort by Category</Typography>
							<Stack direction='row' gap={2} justifyContent='center' sx={{ mb: 10 }} flexWrap="wrap">
								{categories.map(({ name, slug }) => (
									<Button
										key={`category-${slug}`}
										variant='contained'
										href={`?category=${slug}`}
										disabled={selection && slug === selection.slug}
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
							<Grid item xs={12} sm={6} md={4} key={slugify(`post-listing-item-${post.title}`)}>
								<ArticleCard {...post} />
							</Grid>
						)) : null}
						
						{isLoading ? <>
							<Grid item xs={12} sm={6} md={4}><ArticleCard isLoading={true} /></Grid>
							<Grid item xs={12} sm={6} md={4}><ArticleCard isLoading={true} /></Grid>
							<Grid item xs={12} sm={6} md={4}><ArticleCard isLoading={true} /></Grid>
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
	const after = query.after || null;
	let selection = null;
	let queryCategory = null;
	let categories = [];

	if (query.category) {
		const currentCategory = await getCategory(query.category);
		selection = currentCategory;
		queryCategory = [currentCategory.id];
	}

	const response = await getPosts({ first: LISTING_COUNT, after, categories: queryCategory });
	const initialPosts = response.posts.nodes;
	const { hasNextPage, endCursor } = response.posts.pageInfo;
	const initialNextPage = hasNextPage ? endCursor : null;
	
	categories = await getCategories();
	categories = categories.filter(({ slug }) => slug !== 'uncategorized');
	
  return { props: { initialPosts, categories, selection, initialNextPage }}
}