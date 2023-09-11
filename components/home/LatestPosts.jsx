import useSWR from 'swr'
import {
	Alert,
	Grid,
} from '@mui/material';
import ArticleCard from '../ArticleCard'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const remapPost = (post) => ({
	title: post.title,
	excerpt: post.excerpt,
	slug: post.slug,
	date: post.date,
	image: post.featuredImage?.node?.mediaItemUrl,
	categories: post.categories.edges?.map(a => a.node),
});

export default function LatestPosts() {
	const { data, error, isLoading } = useSWR('/api/posts?first=3', fetcher);
	
  if (error) return (
    <Alert severity="error">There was a problem loading the lastest posts</Alert>
  )
  
  return (
    <Grid container spacing={{ xs: 3, lg: 10 }}>
      {isLoading ? <>
        <Grid item sm={6} md={4}><ArticleCard isLoading /></Grid>
        <Grid item sm={6} md={4}><ArticleCard isLoading /></Grid>
        <Grid item sm={6} md={4}><ArticleCard isLoading /></Grid>
      </> :
        data?.data?.posts?.nodes?.length > 0 ? data?.data?.posts?.nodes?.map(post =>
          <Grid item sm={6} md={4} key={`post-listing-${post.slug}`}>
            <ArticleCard {...remapPost(post)} />
          </Grid>
        ) : null
      }
    </Grid>
  );
}
