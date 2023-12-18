import { forwardRef } from 'react';
import useSWR from 'swr'
import ArticleCard from '../ArticleCard'
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const fetcher = (...args) => fetch(...args).then((res) => res.json()).then(res => res.data.posts);

export default forwardRef(function SectionArticles(props, ref) {
  const { data: posts, error, isLoading } = useSWR('/api/posts?first=3', fetcher);
  
  return (
    <Box sx={{ py: { xs: 7, md: 10, }, }} ref={ref}>
      <Container>
        
        <Typography variant={'sectionHeading'} component={'h2'} sx={{ mb: 8 }}>Free Resource for Veterans</Typography>

        <Box sx={{ mb: 8 }}>
          {error ? (
            <Alert severity="error">There was a problem loading the lastest posts</Alert>
          ) : (
            <Grid container spacing={{ xs: 3, lg: 10 }}>
              {isLoading ? <>
                <Grid item sm={6} md={4}><ArticleCard isLoading /></Grid>
                <Grid item sm={6} md={4}><ArticleCard isLoading /></Grid>
                <Grid item sm={6} md={4}><ArticleCard isLoading /></Grid>
              </> :
                posts?.length > 0 ? posts.map(post =>
                  <Grid item xs={12} sm={6} md={4} key={`post-listing-${post.slug}`}>
                    <ArticleCard {...post} />
                  </Grid>
                ) : null
              }
            </Grid>
          )}
        </Box>

        <Box align={'center'}>
          <Button variant='contained' href='/blog'>More Free Resources</Button>
        </Box>
        
      </Container>
    </Box>
  );
});
