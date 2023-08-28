import useSWR from 'swr'
import {
	Alert,
	Grid,
} from '@mui/material';
import ArticleCard from '../ArticleCard'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function LatestPosts() {
	const { data, error, isLoading } = useSWR('/api/posts?count=3', fetcher);
	
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
        data.data && data.data.length > 0 ? data.data.map(post =>
          <Grid item sm={6} md={4} key={`post-listing-${post.slug}`}>
            <ArticleCard {...post} />
          </Grid>
        ) : null
      }
    </Grid>
  );
}
